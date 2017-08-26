import { Injectable } from '@angular/core';

import { Recipe } from '../interfaces/recipe';

@Injectable()
export class MockupRecipeService {
    recipes: Recipe[] = [];

    constructor() {
        console.log('recipes service');
        //        this.doRecipe();
    }

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

    // doRecipe() {
    //     //        let recipe: Recipe;
    //     this.recipe.nombre = 'Pasta';
    //     this.recipe.tiempo = 20;
    //     this.recipe.preparacion = 'Vertir las pastas en Agua hasta ablandar, posteriormente servir y verter la salsa';
    //     this.recipe.ingredientes.push('Pasta');
    //     this.recipe.ingredientes.push('Agua');
    //     this.recipe.ingredientes.push('Salsa Bolognesa');
    //     console.log(this.recipe);
    //     //        this.setRecipe(recipe);
    // }
}
