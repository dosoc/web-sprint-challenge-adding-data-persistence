// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResource() {
    const resources = await db('resources')
    return resources
}

module.exports = {
    getResource
}