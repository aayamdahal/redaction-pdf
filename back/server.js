const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));
app.use(express.static('redact'));
// Define the /redact route
app.get('/redact', (req, res) => {
  res.sendFile(__dirname + '/redact/redact.html');
});

// Start the server
app.listen(8181, () => {
  console.log('Server started on port 8181');
});
