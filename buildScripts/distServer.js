import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

/* Now is hosted on HEROKU
app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Ricardo", "lastName": "Proença", "email": "rp@gmail.com"},
    {"id": 2, "firstName": "João", "lastName": "Proença", "email": "jp@gmail.com"},
    {"id": 3, "firstName": "Pedro", "lastName": "Proença", "email": "pp@gmail.com"},
  ]);
});
*/

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
