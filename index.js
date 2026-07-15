const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to automatically serve linked CSS, JS, and images
app.use(express.static(path.join(__dirname, 'public')));

// Route to send your main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
