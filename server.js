const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'job_tracker_db',
  password: ''
});

connection.connect((err) => {
  if(err) {
    console.err(`connection error: ${err.stack}`);
    return;
  }

  console.log(`db connection id: ${connection.threadId}`);
});


app.get('/', (req, res) => {
  res.send(`App is running`);
});

app.use('/', require('./routes/apiRoutes')(connection));


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
