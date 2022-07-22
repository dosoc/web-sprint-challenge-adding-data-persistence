exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl=> {
    tbl.increments('project_id');
    tbl.text('project_name', 128).notNullable();
    tbl.text('project_description', 128);
    tbl.boolean('project_completed').defaultTo(0)
  }) 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
