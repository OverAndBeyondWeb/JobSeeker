const router = require('express').Router();

router.get('/api/jobs', (req, res) => {
  res.json({message: 'all jobs here'});
});

module.exports = router;