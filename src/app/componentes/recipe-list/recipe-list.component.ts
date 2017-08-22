import { Component, OnInit } from '@angular/core';

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

    constructor(private _mockup: MockupRecipeService) {
        this.recipe = {
            nombre: 'Hamburgesa',
            tiempo: 10,
            preparacion: 'Apilar los ingredientes entre dos capas de pan',
            ingredientes: ['Carne', 'Pan', 'Lechuga']
        }
        this._mockup.setRecipe(this.recipe);
        this.recipe = {
            nombre: 'Ensalada',
            tiempo: 7,
            preparacion: 'Mezclar los ingredientes, agrege sal al gusto',
            ingredientes: ['tomate', 'vinagreta', 'Lechuga', 'sal', 'mazorca']
        }
        this._mockup.setRecipe(this.recipe);
        this.recipe = {
            nombre: 'Esponjado de Mango',
            tiempo: 35,
            preparacion: 'Mezclar los ingredientes, con las claras de los huevos a punto de nieve',
            ingredientes: ['Mango', 'Leche Condensada', 'Gelatina sin Sabor', 'Huevos', 'limón']
        }
        this._mockup.setRecipe(this.recipe);
    }

    ngOnInit() {
        this.recipes = this._mockup.getRecipes();
    }
}
