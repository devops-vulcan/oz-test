const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

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

app.get('/', (req, res) => {
  const name = req.query.name || 'Guest';
  
  // XSS vulnerability: user input is directly embedded into HTML without sanitization
  const responseHtml = `
    <html>
      <head><title>Welcome</title></head>
      <body>
        <h1>Hello, ${name}!</h1>
        <form method="GET" action="/">
          <label for="name">Enter your name:</label>
          <input type="text" id="name" name="name">
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `;
  
  res.send(responseHtml);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
