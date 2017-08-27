import { Injectable } from '@angular/core';

import { Recipe } from '../interfaces/recipe';

@Injectable()
export class MockupRecipeService {
    recipes: Recipe[] = [];

    constructor() { }

    setRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    getRecipes(): Recipe[] {
        return this.recipes;
    }

    getRecipe(match: number): Recipe {
        let recipe: Recipe;
        return recipe = this.recipes[match];
    }
}
