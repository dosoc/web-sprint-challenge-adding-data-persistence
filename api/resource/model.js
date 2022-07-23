// build your `Resource` model here
const db = require('../../data/dbConfig')

function getProjects() {
    db('projects')
}

module.exports = {
    getProjects
}