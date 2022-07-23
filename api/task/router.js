const express = require('express')
const Task = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Task.getTask()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next)
});

router.use((err,req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong in the tasks router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router