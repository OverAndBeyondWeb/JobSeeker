const router = require('express').Router();
const jobsController = require('../controllers/jobs');
const companiesController = require('../controllers/companies');
const recruitersController = require('../controllers/recruiters');

module.exports = (connection) => {

  router.get('/api/jobs', (req, res) => {
    jobsController.getAllJobs(req, res, connection);
  });

  router.post('/api/jobs', (req, res) => {
    jobsController.insertJob(req, res, connection);
  });

  router.delete('/api/jobs', (req, res) => {
    jobsController.deleteJob(req, res, connection)
  })

  
  router.get('/api/companies', (req, res) => {
    companiesController.getAllCompanies(req, res, connection);
  });

  router.post('/api/companies', (req, res) => {
    companiesController.insertCompany(req, res, connection);
  });
  
  router.get('/api/recruiters', (req, res) => {
    recruitersController.getAllRecruiters(req, res, connection);
  });

  router.post('/api/recruiters', (req, res) => {
    recruitersController.insertRecruiter(req, res, connection);
  });

  return router;
}
