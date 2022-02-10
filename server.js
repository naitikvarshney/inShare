const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static(__dirname));
app.use(express.json());

const connectDB = require('./config/db');
connectDB();

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
