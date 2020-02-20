
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {

      const ingredient = [
        {name: 'Egg'},
        {name: 'Tea Spoon of Vanila'},
        {name: 'Cup of Milk'},
        {name: 'Table Spoon of Sugar'},
        {name: 'Table Spoon of Chocolate Powder'}
      ]
      
      // Inserts seed entries
      return knex('ingredient').insert(ingredient);
    })
};