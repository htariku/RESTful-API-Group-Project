const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);
router.use('/', Routes);


module.exports = router;