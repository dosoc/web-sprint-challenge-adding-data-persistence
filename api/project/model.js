// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
  const projects = await db('projects')
  return projects.map(project => {
    return {
        ...project,
        project_completed: project.project_completed? true: false
    }
   })
}

function insertProject(project) {
 return db('projects').insert(project)
  .then(([project_id]) => {
    return db('projects').where('project_id', project_id).first()
  })
}

module.exports = {
    getProjects,
    insertProject
}