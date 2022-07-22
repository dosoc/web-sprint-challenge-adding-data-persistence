exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl=> {
        tbl.increments('resource_id');
        tbl.text('project_name', 128).unique().notNullable();
        tbl.text('project_description', 128)
      }) 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources')
};
