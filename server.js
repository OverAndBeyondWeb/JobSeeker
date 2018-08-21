const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.send(`App is running`);
});

app.post('/', (req, res) => {
  console.log(req.body.name);
  res.send(req.body.name);
});


app.listen(PORT, () => `App listening on port ${PORT}`);
