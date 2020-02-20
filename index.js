const express = require('express');

const recipe = require('./recipe/recipe-model');

const server = express();

server.use(express.json());

server.get('/api/recipe', (req,res) => {
    recipe.getRecipes()
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipe' });
      });
})

server.get('/api/recipe/:id/ingredients', (req,res) => {
    const id = req.params.id
    recipe.getShoppingList(id)
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipe' });
      });
})

server.get('/api/recipe/:id/instructions', (req,res) => {
    const id = req.params.id
    recipe.getInstructions(id)
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipe' });
      });
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));