const router = require('express').Router();

const circuitRouter = require('./circuit');
const userRouter = require('./user');

router.use('/circuit', circuitRouter);
router.use('/user', userRouter);

module.exports = router;