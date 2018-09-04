const router = require('express').Router();
const jobsController = require('../controllers/jobs');
const companiesController = require('../controllers/companies');

module.exports = (connection) => {

  router.get('/api/jobs', (req, res) => {
    jobsController.getAllJobs(req, res, connection);
  });

  router.post('/api/jobs', (req, res) => {
    jobsController.insertJob(req, res, connection);
  });

  
  router.get('/api/companies', (req, res) => {
    companiesController.getAllCompanies(req, res, connection);
  });

  router.post('/api/companies', (req, res) => {
    companiesController.insertCompany(req, res, connection);
  });
  
  router.post('/api/recruiters', (req, res) => {
    console.log(req.body);
    res.send('ok');
  });
  
  return router;
}
