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
    const newProject = db('projects').where('project_id', project_id).first()
    return {
      ...newProject,
      project_completed: newProject.project_completed? true:false
    }
  })
}

module.exports = {
    getProjects,
    insertProject
}