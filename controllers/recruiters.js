module.exports.getAllRecruiters = (req, res, connection) => {
  const query = 'SELECT * FROM point_of_contact';
  connection.query(query, (err, results, fields) => {
    if(err) throw err;
    res.json(results);
  });
};

module.exports.insertRecruiter = (req, res, connection) => {
  const rb = req.body;
  const query = `
    INSERT INTO point_of_contact (fname, lname, title, company_name, email, phone)
    VALUES (?, ?, ?, ?, ?, ?)
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
        connection.query(query, [rb.fname, rb.lname, rb.title, rb['company_name'], rb.email, rb.phone], (err, results, fields) => {
          if(err) throw err;
          console.log(results);
          res.send('ok');
        });
        console.log(query);
      });
    }else {
      connection.query(query, [rb.fname, rb.lname, rb.title, rb['company_name'], rb.email, rb.phone], (err, results, fields) => {
        if(err) throw err;
        console.log(results);
        console.log('already inserted');
        res.send('ok');
      });
      console.log(query);
    }
  });
};

module.exports.deleteJob = (req, res, connection) => {
  const query = `
    DELETE FROM job
    WHERE id = ?
  `;
  const id = +req.body.id;
  // console.log(typeof id);
  // console.log('typeof id');
  // connection.query(query, [id], (err, results, fields) => {
  //   if(err) throw err;
  //   console.log(results);
  // });
};
