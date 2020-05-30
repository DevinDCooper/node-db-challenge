
exports.seed = function(knex, Promise ) {
 
  return knex('project_task').insert([
    {project_id: 1, task_id: 1},
    
  
  ]);

};
