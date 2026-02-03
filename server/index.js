// ====================================
// IMPORTS & DEPENDENCIES
// ====================================
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// ====================================
// MIDDLEWARE CONFIGURATION
// ====================================
// Enable CORS to allow frontend requests from different origins
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// ====================================
// DATABASE CONNECTION POOL
// ====================================
// Using connection pool for better performance and connection management
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'kyoshin_db',
    waitForConnections: true,  // Queue requests when all connections are busy
    connectionLimit: 10        // Maximum number of connections in pool
});

// ====================================
// ROUTE 1: ROOT ENDPOINT
// ====================================
// Simple health check to verify server is running
app.get('/', (req, res) => {
    res.send("Kyoshin Backend is Running!");
});

// ====================================
// ROUTE 2: DATABASE HEALTH CHECK
// ====================================
// Tests database connectivity and returns status
app.get('/api/check-db', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
        if (err) {
            console.error("❌ Database Error:", err.message);
            return res.status(500).json({ 
                status: "Error", 
                error: err.message 
            });
        }
        res.json({ 
            status: "Success", 
            message: "Database is connected!", 
            data: results 
        });
    });
});

// ====================================
// ROUTE 3: USER REGISTRATION
// ====================================
// Handles new user sign-up with password hashing
app.post('/api/register', async (req, res) => {
    const { full_name, email, password } = req.body;
    
    // Validate required fields
    if (!full_name || !email || !password) {
        return res.status(400).json({ 
            error: "All fields are required" 
        });
    }

    try {
        // Hash password with bcrypt (salt rounds = 10)
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Set default values for required fields
        const user_name = email;      // Use email as username
        const role_id = 2;            // Role 2 = Candidate (not admin)
        const created_by = 1;         // System/Admin user ID
        const updated_by = 1;         // System/Admin user ID

        // SQL query with placeholder values for security (prevents SQL injection)
        const sql = `
            INSERT INTO users 
            (full_name, email, password, user_name, role_id, created_by, updated_by, 
             temp_address, permanent_address, country_code, contact) 
            VALUES (?, ?, ?, ?, ?, ?, ?, 'N/A', 'N/A', 'NP', '0000000000')
        `;
        
        const values = [full_name, email, hashedPassword, user_name, role_id, created_by, updated_by];

        // Execute the query
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("❌ SQL Error:", err.sqlMessage);
                
                // Handle duplicate email error
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ 
                        error: "Email already registered" 
                    });
                }
                
                return res.status(500).json({ 
                    error: "Registration failed" 
                });
            }
            
            res.status(201).json({ 
                message: "User registered successfully!",
                userId: result.insertId
            });
        });
    } catch (error) {
        console.error("❌ Server Error:", error);
        res.status(500).json({ 
            error: "Server error during registration" 
        });
    }
});

// ====================================
// ROUTE 4: USER LOGIN
// ====================================
// Authenticates user and returns user data with role
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ 
            error: "Email and password are required" 
        });
    }

    try {
        // Query database for user by email
        const sql = "SELECT * FROM users WHERE email = ?";
        
        db.query(sql, [email], async (err, results) => {
            if (err) {
                console.error("❌ DB Error:", err);
                return res.status(500).json({ 
                    error: "Database error" 
                });
            }
            
            // Check if user exists
            if (results.length === 0) {
                return res.status(401).json({ 
                    error: "Invalid email or password" 
                });
            }

            const user = results[0];

            // Verify password using bcrypt
            // Compares plain text password with hashed password from DB
            const isMatch = await bcrypt.compare(password, user.password);
            
            if (!isMatch) {
                return res.status(401).json({ 
                    error: "Invalid email or password" 
                });
            }

            // Login successful - return user data
            // DO NOT send password back to frontend
            res.status(200).json({
                message: "Login successful",
                user: {
                    id: user.id,
                    name: user.full_name,
                    email: user.email,
                    role: user.role_id  // Used for role-based navigation (1=Admin, 2=Candidate)
                }
            });
        });
    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ 
            error: "Server error during login" 
        });
    }
});

// ====================================
// ROUTE 5: ADMIN DASHBOARD STATISTICS
// ====================================
// Returns aggregated counts for admin dashboard
app.get('/api/admin/stats', (req, res) => {
    // Single query with subqueries for better performance
    const sql = `
        SELECT 
            (SELECT COUNT(*) FROM users) as total_users,
            (SELECT COUNT(*) FROM careers WHERE status = '1') as active_jobs,
            (SELECT COUNT(*) FROM career_apply) as total_applications
    `;

    db.query(sql, (err, result) => {
        if (err) {
            console.error("❌ Stats Error:", err);
            return res.status(500).json({ 
                error: "Failed to fetch statistics" 
            });
        }
        
        // Return the aggregated data
        res.json(result[0]); 
    });
});

// ====================================
// SERVER INITIALIZATION
// ====================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
    console.log(`🔗 Access at: http://localhost:${PORT}`);
});

// ====================================
// OPTIONAL: GRACEFUL SHUTDOWN
// ====================================
// Handle server shutdown gracefully
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    db.end((err) => {
        if (err) {
            console.error('Error closing database pool:', err);
        } else {
            console.log('✅ Database pool closed');
        }
        process.exit(0);
    });
});