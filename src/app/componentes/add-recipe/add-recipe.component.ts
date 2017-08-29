import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
    ingredient: string;
    alert: boolean = false;

    constructor(private _mockup: MockupRecipeService,
        private router: Router) { }

    ngOnInit() {
    }

    addRecipe(formR: NgForm) {
        if (formR.invalid == false) {
            console.log('formR', formR.value);
            this.recipe = {
                name: formR.value.nameR,
                time: formR.value.timeR,
                toDo: formR.value.toDo,
                ingredients: this.ingredients
            }
            console.log('recipe', this.recipe);
            this._mockup.setRecipe(this.recipe);
            this.router.navigate(['/home']);
        } else
            this.alert = true;
    }

    addIngredient() {
        this.ingredients.push(this.ingredient);
        this.ingredient = '';
    }

    deleteIngrediet(index: number) {
        this.ingredients.splice(index, 1);
    }
}
