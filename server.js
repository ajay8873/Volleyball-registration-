const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000; // You can change this port if needed

// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// In-memory storage for registrations (replace with a database later)
let registrations = [];

// API Endpoint: Get all registrations
app.get('/api/registrations', (req, res) => {
    res.json(registrations); // Send all registrations as JSON
});

// API Endpoint: Add a new registration
app.post('/api/registrations', (req, res) => {
    const newRegistration = {
        id: Date.now(), // Unique ID based on timestamp
        ...req.body, // Spread all form data
        timestamp: new Date().toLocaleString() // Add registration time
    };

    registrations.push(newRegistration); // Store in memory
    res.status(201).json(newRegistration); // Send back the saved data
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});