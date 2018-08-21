const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;


app.get('/', (req, res) => {
  res.send(`App is running`);
});


app.listen(PORT, () => `App listening on port ${PORT}`);
