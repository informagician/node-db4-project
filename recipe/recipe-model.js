const db = require('../db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipe')
}

function getShoppingList(id) {
    return db('recipe_ingredient')
    .join('recipe', 'recipe.id', 'recipe_ingredient.recipe_id')
    .join('ingredient', 'ingredient.id', 'recipe_ingredient.ingredient_id')
    .where({recipe_id:id})
}

function getInstructions(id) {
    return db('recipe')
    .join('instruction', 'recipe.id', 'instruction.recipe_id')
    .where({recipe_id:id})
}