const express = require('express');
const { setRoutes } = require('./routes'); // Corrected import path

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
setRoutes(app);


console.log("hello world")



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});