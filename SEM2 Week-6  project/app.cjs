const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const connection = require('./src/config/DBconnection.cjs');
const admin = require('./src/routes/adminRoutes.cjs');

// Enable CORS for all routes
app.use(cors()); 



connection();  // Database Connection

app.use(express.json());

app.get('/', (req, res) => {
    console.log("HOME");
    res.send("Hello world !");  // Home route
});

app.use('/auth', admin);  // Admin login

console.log(process.env.DBCONNECT);

app.listen(5000, () => {
    console.log("Server is running...");
});
