// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResource() {
    db('resources')
}

module.exports = {
    getResource
}