

exports.seed = function(knex, Promise) {
  return knex('project').insert([
    { project_name: 'Dog trick', description: 'Teaching my dog how to sit', completed: 'false'}
  ])
 };
 