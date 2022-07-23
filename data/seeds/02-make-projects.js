const projects = [
    {project_name: 'build a fence', project_description: 'install a wooded fence along the property line' },
    {project_name: 'install a pool', project_description: 'dig an inground swimming pool in backyard'},
    {project_name: 'build a garage', project_description: 'build a new garage in back driveway area' }
]

const resources = [
    { resource_name: 'treated lumber', resource_description: 'pressure treated lumber'},
    { resource_name: 'concrete', resource_description: 'ready mix concrete'},
    { resource_name: 'rebar', resource_description: 'steel reinforcement'},
    { resource_name: 'shingles', resource_description: 'pressure treated lumber'},
    { resource_name: 'powertools', resource_description: 'pressure treated lumber'},
]
const task = [
    { task_description: 'set up survey company to lay out', task_notes: 'use cml surveyors in Jackson', project_id: 1},
    { task_description: 'call local hardware store for material', task_notes: 'call casey at lowes for discount', project_id: 3},
    { task_description: 'call buddies to get helpers', task_notes: 'Bob, John, Jimmy, and Darrel', project_id: 2},
    { task_description: 'set up equipment delivery', task_notes: 'call todd', project_id: 2},
    { task_description: 'clean up jobsite', task_notes: 'get plenty of trashbags', project_id: 1}
]
const project_resources = [
    { project_id: 1, resource_id: 1},
    { project_id: 1, resource_id: 2},
    { project_id: 1, resource_id: 5},
    { project_id: 2, resource_id: 2},
    { project_id: 2, resource_id: 5},
    { project_id: 3, resource_id: 1},
    { project_id: 3, resource_id: 2},
    { project_id: 3, resource_id: 3},
    { project_id: 3, resource_id: 4},
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(task)
    await knex('project_resources').insert(project_resources)
}