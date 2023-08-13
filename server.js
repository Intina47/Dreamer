const express = require('express');
const app = express();
const port = 4000;
// Set up the server to serve static files from public directory.
app.use(express.static('src'));
app.use(express.static('public'));
// index.html
app.get('/', (req, res) => res.sendFile('index.html'));
// serve files in public
app.get('/public', (req, res) => res.sendFile('public'));
// server css files that are under src/css/
app.get('/src/css', (req, res) => res.sendFile('src/css'));
// Start the server.
app.listen(port, () => console.log(`Server listening on  http://localhost:${port}/`));
