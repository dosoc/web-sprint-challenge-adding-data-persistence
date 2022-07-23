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

async function insertProject(project) {
 const newProject = await db('projects').insert(project)
  return {
    ...newProject,
    project_completed: newProject.project_completed? true:false
  }
}

module.exports = {
    getProjects,
    insertProject
}