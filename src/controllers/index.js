const router = require('express').Router();

const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;