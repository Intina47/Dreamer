const express = require('express');
const app = express();
const port = 3000;
// Set up the server to serve static files from public directory.
app.use(express.static('src'));
app.use(express.static('public'));
// index.html
app.get('/', (req, res) => res.sendFile('index.html'));
// serve files in public
app.get('/public', (req, res) => res.sendFile('public'));

// Start the server.
app.listen(port, () => console.log(`Server listening on  http://localhost:${port}/`));
