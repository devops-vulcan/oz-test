const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const userData = req.body.userData;

  try {
    // Insecure deserialization vulnerability
    const user = JSON.parse(userData);

    res.send(`Hello, ${user.name}!`);
  } catch (error) {
    res.status(400).send('Invalid user data');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
