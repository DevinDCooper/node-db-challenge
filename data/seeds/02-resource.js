
exports.seed = function(knex, Promise) {
  return knex('resource').insert([
    { resource_name: 'Dog ', description:'mans best friend'},
    {resource_name: 'treat', description:'anything your dog would like to eat'}
  
  ]);
;
};
