// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
  const tasks = await db('tasks')
  return tasks.map(task => {
    return {
        ...task,
        task_completed: task.task_completed? true: false
    }
   })
}

module.exports = {
    getTasks
}