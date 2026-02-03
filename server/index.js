const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'kyoshin_db',
    waitForConnections: true,
    connectionLimit: 10
});

// 1. Root Test Route
app.get('/', (req, res) => {
    res.send("Kyoshin Backend is Running!");
});

// 2. Database Health Check Route (The one you were missing!)
app.get('/api/check-db', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
        if (err) {
            console.error("❌ Database Error:", err.message);
            return res.status(500).json({ status: "Error", error: err.message });
        }
        res.json({ status: "Success", message: "Database is connected!", data: results });
    });
});

// 3. Updated Sign-Up Route (Matches your Pro Schema)
app.post('/api/register', async (req, res) => {
    const { full_name, email, password } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // These fields are REQUIRED by your new table structure
        const user_name = email; // Using email as username
        const role_id = 2;       // 2 = Candidate
        const created_by = 1;    // Assuming Admin ID 1 exists
        const updated_by = 1;

        const sql = `
            INSERT INTO users 
            (full_name, email, password, user_name, role_id, created_by, updated_by, temp_address, permanent_address, country_code, contact) 
            VALUES (?, ?, ?, ?, ?, ?, ?, 'N/A', 'N/A', 'NP', '0000000000')
        `;
        
        const values = [full_name, email, hashedPassword, user_name, role_id, created_by, updated_by];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("SQL Error:", err.sqlMessage);
                return res.status(500).json({ error: err.sqlMessage });
            }
            res.status(201).json({ message: "User registered successfully!" });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});