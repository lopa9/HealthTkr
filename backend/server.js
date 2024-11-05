const express = require('express');
const connectDB = require('./config/db');
const healthRoutes = require('./routes/healthRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("hey there");
});

// Use room routes with prefix '/api'
app.use('/api', healthRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});