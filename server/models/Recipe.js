const { Schema, model, Types } = require('mongoose');

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        }
    ],
    steps: [
        String
    ],
    author: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;