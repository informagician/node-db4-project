
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      const recipe = [
        {name: 'Cream Caramel'},
        {name: 'Tiramisu'},
        {name: 'Tuxedo Cake'}
      ]      
      // Inserts seed entries
      return knex('recipe').insert(recipe);
    })
};