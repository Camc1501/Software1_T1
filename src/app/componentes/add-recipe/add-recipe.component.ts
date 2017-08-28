import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    ingredients: string[] = [];

    constructor(private _mockup: MockupRecipeService) { }

    ngOnInit() {
    }

    agregarReceta(forma: NgForm) {
        console.log(forma);
        this.recipe = {
            name: forma.value.name,
            time: forma.value.time,
            toDo: forma.value.toDo,
            ingredients: ['Carne', 'Pan', 'Lechuga']
        }
        this._mockup.setRecipe(this.recipe);
    }

    agregarIngrediente(ingrediente: string) {
        this.ingredients.push(ingrediente);
    }

    eliminarIngrediente(index: number) {
        this.ingredients.splice(index, 1);
    }
}
