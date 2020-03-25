const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));