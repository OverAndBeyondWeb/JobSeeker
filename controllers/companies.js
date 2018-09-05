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