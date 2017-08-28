import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../interfaces/recipe';
import { MockupRecipeService } from '../../services/mockup-recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipe: Recipe;
    recipes: Recipe[] = [];

    constructor(private _mockup: MockupRecipeService, private router: Router) {
        this.recipes = this._mockup.getRecipes();
        if (this.recipes.length < 1) {
            this.recipe = {
                name: 'Hamburgesa',
                time: 10,
                toDo: 'Apilar los ingredientes entre dos capas de pan',
                ingredients: ['Carne', 'Pan', 'Lechuga']
            }
            this._mockup.setRecipe(this.recipe);
            this.recipe = {
                name: 'Ensalada',
                time: 7,
                toDo: 'Mezclar los ingredientes, agrege sal al gusto',
                ingredients: ['tomate', 'vinagreta', 'Lechuga', 'sal', 'mazorca']
            }
            this._mockup.setRecipe(this.recipe);
            this.recipe = {
                name: 'Esponjado de Mango',
                time: 35,
                toDo: 'Mezclar los ingredientes, con las claras de los huevos a punto de nieve',
                ingredients: ['Mango', 'Leche Condensada', 'Gelatina sin Sabor', 'Huevos', 'limon']
            }
            this._mockup.setRecipe(this.recipe);
        }
    }

    ngOnInit() {

    }

    viewRecipe(i: number) {
        this.router.navigate(['/view', i]);
    }
}
