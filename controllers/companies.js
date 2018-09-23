let { buildQueryFieldsToSet } = require('../utility/util');


module.exports.getAllCompanies = (req, res, connection) => {
  const query = `
    SELECT * FROM company
  `;
  connection.query(query, (err, results, fields) => {
    if(err) throw err;
    res.json(results);
  })
}

module.exports.insertCompany = (req, res, connection) => {
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
};

module.exports.editCompany = (req, res, connection) => {
  
  let { id } = req.body;
  let fieldsArray = Object.entries(req.body).filter(([field, value]) => field !== 'id');
  
  
  let query = buildQueryFieldsToSet(fieldsArray, 'company');
  console.log(query);
  let queryValuesArray = fieldsArray.map(([field, value]) => value);
  queryValuesArray = [...queryValuesArray, id.toString()];
  connection.query(query, queryValuesArray, (err, results, fields) => {
    if(err) throw err;
    console.log(results);
    
    res.send('ok');
  });

};

module.exports.deleteCompany = (req, res, connection) => {
  const query = `
    DELETE FROM company
    WHERE name = ?
  `;
  
  connection.query(query, [req.body.name], (err, results, fields) => {
    if(err) throw err;
    res.send('ok');
  });
};