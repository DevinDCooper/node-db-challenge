exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments('id')
        tbl.string('project_name', 128).notNullable().unique();
        tbl.string('project_description', 128);
        tbl.boolean('completed').notNullable().defaultTo('false');
  
    })
    .createTable('resource', tbl => {
        tbl.increments('id')
        tbl.string('resource_name', 128).notNullable().unique()
        tbl.string('description', 128);
  
    })
  
  
    .createTable('task', tbl => {
      tbl.increments('id')
      tbl.string('description', 128);
      tbl.string('notes', 128);
      tbl.boolean('completed').notNullable().defaultTo('false')
      tbl.integer('project_id')
      .notNullable()
      .unsigned()
      .references('project.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
   
    })
  
    .createTable('project_task', tbl => {
        tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('project.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.integer('task_id')
        .notNullable()
        .unsigned()
        .references('task.id')  
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
     
        tbl.primary(['project_id', 'task_id'])
    })
  
  
  
  
  
  
  
  };
  
  exports.down = function(knex) {
    return knex.schema
             .dropTableIfExists('project_task')
             .dropTableIfExists('task')
             .dropTableIfExists('project')
             .dropTableIfExists('resource')
  };
  