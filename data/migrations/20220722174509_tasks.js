exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments('task_id');
    tbl.text('task_description', 128).notNullable();
    tbl.text('task_notes', 128);
    tbl.boolean('task_completed').defaultTo(0)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
};
