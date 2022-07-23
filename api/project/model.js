// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    const projects = db('projects')
    return Promise.resolve(projects)
}

module.exports = {
    getProjects
}