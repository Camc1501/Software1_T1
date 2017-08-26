import { Injectable } from '@angular/core';

import { Recipe } from '../interfaces/recipe';

@Injectable()
export class MockupRecipeService {
    recipes: Recipe[] = [];

    constructor() { }

    setRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        console.log(this.recipes);
    }

    getRecipes(): Recipe[] {
        return this.recipes;
    }

    getRecipe(match: number): Recipe {
        let recipe: Recipe;
        return recipe = this.recipes[match];
        // match = match.toLocaleLowerCase();
        // for (let recipe of this.recipes) {
        //     if (match == recipe.nombre.toLocaleLowerCase()) {
        //         return recipe;
        //     }
        // }
    }
}
