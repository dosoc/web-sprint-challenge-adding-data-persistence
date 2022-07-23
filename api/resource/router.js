const express = require('express')
const Resource = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.getResource()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next)
});

router.use((err,req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong in the resource router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router