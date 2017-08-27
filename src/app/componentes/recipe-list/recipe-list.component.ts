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
    }

    ngOnInit() {

    }

    viewRecipe(i: number) {
        this.router.navigate(['/view', i]);
    }
}
