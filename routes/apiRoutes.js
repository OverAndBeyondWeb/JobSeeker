const router = require('express').Router();

module.exports = (connection) => {
  router.get('/api/jobs', (req, res) => {
    const query = 'SELECT * FROM job';
    connection.query(query, (err, results, fields) => {
      if(err) throw err;
      res.json(results);
    });
  });

  return router;
}