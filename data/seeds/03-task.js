
exports.seed = function(knex, Promise) {

  return knex('task').insert([
   {description: 'say the command, once the dog executes the command reward him/her with the treat ', notes: 'once dog understand the command try again but this time reward the dog with love', completed: 'false', project_id: 1 ,}
  ]);

};
