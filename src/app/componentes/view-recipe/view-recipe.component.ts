import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { MockupRecipeService } from '../../services/mockup-recipe.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})

export class ViewRecipeComponent implements OnInit {
  recipe: Recipe;
  recipes: Recipe[] = [];
  filter: string;
  constructor(private activatedRoute: ActivatedRoute, private _mockup: MockupRecipeService) { }

  ngOnInit() {
    /*this.recipes.push(this._mockup.getRecipe());*/
    this.activatedRoute.params.subscribe(params => {
      this.recipe = this._mockup.getRecipe(params['id']);
      this.filter = params['id'];
      console.log(this.recipe);
    });
  }
}
