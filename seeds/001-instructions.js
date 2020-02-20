exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {

      const instructions = [
        {recipe_id:1,step:'boil milk'},
        {recipe_id:1,step:'mix eggs'},
        {recipe_id:1,step:'add sugar'},
        {recipe_id:2,step:'description for step one'},
        {recipe_id:2,step:'description for step two'},
        {recipe_id:2,step:'description for step three'},
        {recipe_id:3,step:'description for step one'},
        {recipe_id:3,step:'description for step two'},
        {recipe_id:3,step:'description for step three'}
      ]
      
      // Inserts seed entries
      return knex('instructions').insert(instructions);
    })
};