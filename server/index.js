// ====================================
// IMPORTS & DEPENDENCIES
// ====================================
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();

// ====================================
// MIDDLEWARE CONFIGURATION
// ====================================
app.use(cors());
app.use(express.json());

// ====================================
// DATABASE CONNECTION POOL
// ====================================
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'kyoshin_db',
    waitForConnections: true,
    connectionLimit: 10
});

// ====================================
// ROUTES
// ====================================

// ROOT & HEALTH CHECK
app.get('/', (req, res) => res.send("Kyoshin Backend is Running!"));

app.get('/api/check-db', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (err) => {
        if (err) return res.status(500).json({ status: "Error", error: err.message });
        res.json({ status: "Success", message: "Database is connected!" });
    });
});

// USER REGISTRATION
app.post('/api/register', async (req, res) => {
    const { full_name, email, password } = req.body;
    if (!full_name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = `
            INSERT INTO users 
            (full_name, email, password, user_name, role_id, created_by, updated_by, 
             temp_address, permanent_address, country_code, contact) 
            VALUES (?, ?, ?, ?, 2, 1, 1, 'N/A', 'N/A', 'NP', '0000000000')
        `;
        
        db.query(sql, [full_name, email, hashedPassword, email], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: "Email already registered" });
                return res.status(500).json({ error: "Registration failed" });
            }
            res.status(201).json({ message: "User registered successfully!", userId: result.insertId });
        });
    } catch (error) {
        res.status(500).json({ error: "Server error during registration" });
    }
});

// USER LOGIN
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password required" });

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: "Database error" });
        if (results.length === 0) return res.status(401).json({ error: "Invalid email or password" });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) return res.status(401).json({ error: "Invalid email or password" });

        res.status(200).json({
            message: "Login successful",
            user: { id: user.id, name: user.full_name, email: user.email, role: user.role_id }
        });
    });
});

// ADMIN STATS
app.get('/api/admin/stats', (req, res) => {
    const sql = `
        SELECT 
            (SELECT COUNT(*) FROM users) as total_users,
            (SELECT COUNT(*) FROM careers WHERE status = '1') as active_jobs,
            (SELECT COUNT(*) FROM career_apply) as total_applications
    `;
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: "Failed to fetch stats" });
        res.json(result[0]);
    });
});

// JOB POSTING (Admin)
app.post('/api/admin/jobs', (req, res) => {
    const { job_title, deadline, job_type, vacancy_count, description, status, user_id } = req.body;
    const slug = job_title.toLowerCase().replace(/ /g, '-') + '-' + Date.now();

    const sql = `
        INSERT INTO careers 
        (job_title, slug, due_date, type, vacancy_count, description, status, created_by, created_on, serial)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), 1)
    `;

    db.query(sql, [job_title, slug, deadline, job_type, vacancy_count, description, status, user_id], (err, result) => {
        if (err) return res.status(500).json({ error: "Failed to post job" });
        res.json({ message: "Job Posted Successfully!", jobId: result.insertId });
    });
});

// GET JOBS (Public)
app.get('/api/jobs', (req, res) => {
    const sql = "SELECT id, job_title, slug, job_type, due_date, vacancy_count, description FROM careers WHERE status = '1' ORDER BY created_on DESC";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "Failed to fetch jobs" });
        res.json(results);
    });
});

// ====================================
// SERVER INITIALIZATION
// ====================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

// GRACEFUL SHUTDOWN
process.on('SIGINT', () => {
    db.end(() => {
        console.log('✅ Database pool closed');
        process.exit(0);
    });
});