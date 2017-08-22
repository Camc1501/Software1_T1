import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../interfaces/recipe';
import { MockupRecipeService } from '../../services/mockup-recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    private recipe: Recipe;

    constructor(private _mockup: MockupRecipeService) {
        // this.recipe.nombre = 'Hamburgesa';
        // this.recipe.tiempo = 10;
        // this.recipe.preparacion = 'Apilar los ingredientes entre dos capas de pan';
        // this.recipe.ingredientes.push('Carne');
        // this.recipe.ingredientes.push('Pan');
        // this.recipe.ingredientes.push('Lechuga');
        // console.log(this.recipe);
        //this._mockup.setRecipe(this.recipe);
    }

    ngOnInit() {
        console.log('muestra de recipes:');
        //        console.log(this._mockup.getRecipes());
    }
}
