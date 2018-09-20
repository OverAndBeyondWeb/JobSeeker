module.exports.getAllJobs = (req, res, connection) => {
  const query = 'SELECT * FROM job';
  connection.query(query, (err, results, fields) => {
    if(err) throw err;
    res.json(results);
  });
}

module.exports.insertJob = (req, res, connection) => {
  const rb = req.body;
  const query = `
    INSERT INTO job (job_title, job_number, job_link, company_name)
    VALUES (?, ?, ?, ?)
  `;
  const query1 = `
    SELECT name FROM company
  `;

  const query2 = `
    INSERT INTO company (name)
    VALUES (?)
  `;
  

  connection.query(query1, (err, results, fields) => {
    if(err) throw err;
    console.log(rb['company_name']);
    console.log(results.map(result => result.name));
    if (results.map(result => result.name).indexOf(rb['company_name']) === -1) {
      connection.query(query2, [rb['company_name']], (err, results, fields) => {
        if(err) throw err;
        connection.query(query, [rb['job_title'], rb['job_number'], rb['job_link'], rb['company_name']], (err, results, fields) => {
          if(err) throw err;
          console.log(results);
          res.send('ok');
        });
        console.log(query);
      });
    }else {
      connection.query(query, [rb['job_title'], rb['job_number'], rb['job_link'], rb['company_name']], (err, results, fields) => {
        if(err) throw err;
        console.log(results);
        console.log('already inserted');
        res.send('ok');
      });
      console.log(query);
    }
  });
}

module.exports.editJob = (req, res, connection) => {

  // determine fields to be updated
  let fieldsArray = Object.entries(req.body).filter(([field, value]) => field !== 'id');
  let { id, ['company_name']: companyName } = req.body;
 
  // build a query for those particular fields 
  const buildQueryFieldsToSet = (fieldsArray) => {
    let builtQuery = `UPDATE job SET`;

    fieldsArray.forEach(([field, value], index, array) => {      
        builtQuery += ` ${field} = ?,`;
    });

    builtQuery = builtQuery.slice(0, -1);
    builtQuery += ` WHERE id = ?`;

    return builtQuery;
  }
  
  const query = buildQueryFieldsToSet(fieldsArray);

  

  // execute the query
  let queryValuesArray = fieldsArray.map(([field, value]) => value);
  queryValuesArray = [...queryValuesArray, id.toString()];

  
  if(companyName) {
    connection.query(`INSERT IGNORE INTO company (name) VALUES ("${companyName}")`, (err, results, fields) => {
      if(err) throw err;
      connection.query(query, queryValuesArray, (err, results, fields) => {
        if(err) throw err;
        console.log(results);
       
        res.send('ok');
      });
    });
    console.log(companyName);
  } else {
    connection.query(query, queryValuesArray, (err, results, fields) => {
      if(err) throw err;
      console.log(results);
      
      res.send('ok');
    });
  }
  
  
  // res.send('ok');
  
};


module.exports.deleteJob = (req, res, connection) => {
  const query = `
    DELETE FROM job
    WHERE id = ?
  `;

  const id = +req.body.id;
  
  connection.query(query, [id], (err, results, fields) => {
    if(err) throw err;
    res.send('ok');
  });
};