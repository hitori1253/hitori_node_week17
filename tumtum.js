import express from 'express';
import dotenv from 'dotenv';
import config from './config/index.js';
// Load environment variables
dotenv.config();

const app = express();
const port = config.port;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (optional - uncomment if needed)
// import cors from 'cors';
// app.use(cors());

// Routes
app.get('/', (req, res) => {
    console.log("เดบีรุนห้ามเข้ามา");
    return res.json({ message: "เดบีรุนห้ามเข้ามา" });
});

app.get('/api/health', (req, res) => {
    return res.json({ status: 'OK', message: 'Server is running' });
});

// 404 Error Handler
app.use((req, res) => {
    return res.status(404).json({ error: 'Route not found' });
});

// Error Handler Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});