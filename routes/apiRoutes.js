const router = require('express').Router();
const jobsController = require('../controllers/Jobs');

module.exports = (connection) => {

  router.get('/api/jobs', (req, res) => {
    jobsController.getAllJobs(req, res, connection);
  });

  // router.post('/api/jobs', (req, res) => {
  //   const rb = req.body;
  //   const query = `
  //     INSERT INTO job (job_title, job_number, job_link)
  //     VALUES (?,?,?)
  //   `;
  //   const query1 = `
  //     SELECT name FROM company
  //   `;

  //   const query2 = `
  //     INSERT INTO company (name)
  //     VALUES (?)
  //   `;
   

  //   connection.query(query1, (err, results, fields) => {
  //     if(err) throw err;
  //     console.log(rb['company_name']);
  //     console.log(results.map(result => result.name));
  //     if (results.map(result => result.name).indexOf(rb['company_name']) === -1) {
  //       connection.query(query2, [rb['company_name']], (err, results, fields) => {
  //         if(err) throw err;
  //         connection.query(query, [rb['title'], rb['job_number'], rb['job_link']], (err, results, fields) => {
  //           if(err) throw err;
  //           console.log(results);
  //           res.send('ok');
  //         });
  //         console.log(query);
  //       });
  //     }else {
  //       connection.query(query, [rb['title'], rb['job_number'], rb['job_link']], (err, results, fields) => {
  //         if(err) throw err;
  //         console.log(results);
  //         console.log('already inserted');
  //         res.send('ok');
  //       });
  //       console.log(query);
  //     }
  //   });
  // });

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
