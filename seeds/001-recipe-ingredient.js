exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').del()
    .then(function () {

      const recipe_ingredient = [
        {recipe_id:1,ingredient_id:1,qty:5},
        {recipe_id:1,ingredient_id:2,qty:1},
        {recipe_id:1,ingredient_id:3,qty:4},
        {recipe_id:1,ingredient_id:4,qty:10},
        {recipe_id:2,ingredient_id:1,qty:1},
        {recipe_id:2,ingredient_id:2,qty:1},
        {recipe_id:2,ingredient_id:3,qty:2},
        {recipe_id:2,ingredient_id:4,qty:5},
        {recipe_id:2,ingredient_id:5,qty:3},
        {recipe_id:3,ingredient_id:3,qty:1},
        {recipe_id:3,ingredient_id:4,qty:5},
        {recipe_id:3,ingredient_id:5,qty:10}
      ]
      
      // Inserts seed entries
      return knex('recipe_ingredient').insert(recipe_ingredient);
    })
};