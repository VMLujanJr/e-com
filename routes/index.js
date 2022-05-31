const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// get all
// http://localhost:3001/api/categories/
// http://localhost:3001/api/categories/1

// http://adrianashirts.com + "/api" + /categories

// www.google.com/shirts


// wild card
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;