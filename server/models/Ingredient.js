const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: String,
});

const Ingredient = model('Ingredient', ingredientSchema);

module.exports = Ingredient;