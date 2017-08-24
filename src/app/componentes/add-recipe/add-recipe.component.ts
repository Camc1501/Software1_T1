import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../interfaces/recipe';
import { MockupRecipeService } from '../../services/mockup-recipe.service';

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
    recipe: Recipe;
    recipes: Recipe[] = [];
    ingredientes: string[] = [];

    constructor(private _mockup: MockupRecipeService) { }

    ngOnInit() {
    }

    agregarReceta() {
        this.recipe = {
            nombre: 'Hamburgesa',
            tiempo: 10,
            preparacion: 'Apilar los ingredientes entre dos capas de pan',
            ingredientes: ['Carne', 'Pan', 'Lechuga']
        }
        this._mockup.setRecipe(this.recipe);
    }

    agregarIngrediente(ingrediente: string) {
        this.ingredientes.push(ingrediente);
    }

    eliminarIngrediente(index: number) {
        this.ingredientes.splice(index, 1);
    }
}
