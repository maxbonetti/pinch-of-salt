const { Schema, model, Types } = require('mongoose');

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: [
        {
            name: String,
            measurement: String,
        }
    ],
    directions: [
        String
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;