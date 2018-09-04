const router = require('express').Router();
const jobsController = require('../controllers/jobs');

module.exports = (connection) => {

  router.get('/api/jobs', (req, res) => {
    jobsController.getAllJobs(req, res, connection);
  });

  router.post('/api/jobs', (req, res) => {
    jobsController.insertJob(req, res, connection);
  });

  router.post('/api/recruiters', (req, res) => {
    console.log(req.body);
    res.send('ok');
  });

  router.post('/api/companies', (req, res) => {
    const rb = req.body;
    let query = `
      INSERT INTO company (name, web_link, location)
      VALUES (?, ?, ?)
    `;
    connection.query(query, [rb.name, rb['web_link'], rb.location], (err, results, fields) => {
      if(err) throw err;
      console.log(results);
      res.send('ok');
    });
  });

  return router;
}
