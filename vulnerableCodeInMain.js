const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

connection.connect();

app.get('/user', (req, res) => {
  const userId = req.query.id;

  // SQL query with SQL injection vulnerability
  const query = `SELECT * FROM users WHERE id = ${userId}`;

  connection.query(query, (error, results, fields) => {
    if (error) {
      res.status(500).send('Error occurred');
      return;
    }
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
