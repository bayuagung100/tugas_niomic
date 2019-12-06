let express = require('express');
let DataSiswa = require('./data-siswa');

let app = express();

var port = process.env.port || 8080;

app.get('/', (req, res) => res.send('Selamat Datang Di Data Center Siswa Indonesia'));

app.use('/DataSiswa', DataSiswa);

app.listen(port);