const express = require('express');
const inquirer = require('inquirer');
// import and require mysql2
const mysql = require('mysql2');


// Express Middleware
const PORT = 3001;
const app = express();

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // mysql username,
    user: 'root',
    // mysql password
    password: 'rootroot',
    database: 'db',
}
);

app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  