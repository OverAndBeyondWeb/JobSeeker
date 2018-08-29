const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.send(`App is running`);
});

app.use('/', require('./routes/apiRoutes'));


app.listen(PORT, () => `App listening on port ${PORT}`);
