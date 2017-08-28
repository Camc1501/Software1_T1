import { Injectable } from '@angular/core';

import { Recipe } from '../interfaces/recipe';

@Injectable()
export class MockupRecipeService {
    recipes: Recipe[] = [];

    constructor() {
        this.getLocalRecipes();
    }

    setRecipe(recipe: Recipe) {
        console.log(recipe);
        this.recipes.push(recipe);
        this.updateLocalRecipes();
    }

    getRecipes(): Recipe[] {
        return this.recipes;
    }

    getRecipe(match: number): Recipe {
        let recipe: Recipe;
        return recipe = this.recipes[match];
    }

    updateLocalRecipes() {
        localStorage.setItem('Recipes', JSON.stringify(this.recipes));
    }

    getLocalRecipes() {
        console.log(localStorage.getItem('Recipes'));
        if (localStorage.getItem('Recipes'))
            this.recipes = JSON.parse(localStorage.getItem('Recipes'));
        console.log(this.recipes);
    }
}
