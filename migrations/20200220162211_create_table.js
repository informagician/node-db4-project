
exports.up = function(knex) {
  return knex.schema
  .createTable('recipe', tbl => {
      tbl.increments()
      tbl.string('name',64).unique().notNullable()
  })
  .createTable('ingredient', tbl => {
      tbl.increments()
      tbl.string('name',64).unique().notNullable()
  })
  .createTable('recipe_ingredient', table => {
      tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipe').onUpdate('CASCADE').onDelete('RESTRICT')
      tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredient').onUpdate('CASCADE').onDelete('RESTRICT')
      tbl.float('qty').notNullable().unsigned()
  })
  .createTable('instructions', tbl => {
      tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipe').onUpdate('CASCADE').onDelete('RESTRICT')
      tbl.string('step',256).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('instructions')
  .dropTableIfExists('recipe_ingredient')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('recipe')
};
