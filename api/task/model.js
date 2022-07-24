// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
  const tasks = await db('projects as p')
    .leftJoin('tasks as t', 't.project_id', 'p.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
    .orderBy('task_id')
  return tasks.map(task => {
    return {
        ...task,
        task_completed: task.task_completed? true: false
    }
   })
}

function add(task) {
  return db('tasks').insert(task)
  .then(([task_id])=> {
    const newTask = db('tasks').where('task_id', task_id).first()
    return {
      ...newTask,
      task_completed: newTask.task_completed? true: false
    }
  })
}

module.exports = {
    getTasks,
    add
}