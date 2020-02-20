
exports.up = function(knex) {
  return knex.schema
  .createTable('recipe', tbl => {
      tbl.increments()
      tbl.text('name',64).unique().notNullable()
  })
  .createTable('ingredient', tbl => {
      tbl.increments()
      tbl.text('name',64).unique().notNullable()
  })
  .createTable('recipe_ingredient', table => {
      tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipe')
      tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredient')
      tbl.float('qty').notNullable().unsigned()
  })
};

exports.down = function(knex) {
  
};
