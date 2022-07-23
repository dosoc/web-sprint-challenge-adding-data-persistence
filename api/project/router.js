const express = require('express')
const Project = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Project.insertProject(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.use((err,req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong in the projects router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router