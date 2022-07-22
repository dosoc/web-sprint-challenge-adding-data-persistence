exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl=> {
            tbl.increments('project_id');
            tbl.text('project_name', 128).notNullable();
            tbl.text('project_description', 128);
            tbl.boolean('project_completed').defaultTo(0)
        })
        .createTable('resources', tbl=> {
            tbl.increments('resource_id');
            tbl.text('project_name', 128).unique().notNullable();
            tbl.text('project_description', 128)
        }) 
        .createTable('tasks', tbl => {
            tbl.increments('task_id');
            tbl.text('task_description', 128).notNullable();
            tbl.text('task_notes', 128);
            tbl.boolean('task_completed').defaultTo(0)
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects');
        })
        .createTable('project_resources', tbl=> {
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
            tbl.primary(['resource_id', 'project_id'])
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
