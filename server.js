const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'job_tracker_db',
  password: ''
});

conn.connect((err) => {
  if(err) {
    console.err(`connection error: ${err.stack}`);
    return;
  }

  console.log(`db connection id: ${conn.threadId}`);
});


app.get('/', (req, res) => {
  res.send(`App is running`);
});

app.use('/', require('./routes/apiRoutes'));


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
