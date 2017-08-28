import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../interfaces/recipe';
import { MockupRecipeService } from '../../services/mockup-recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  recipe: Recipe;
  recipes: Recipe[] = [];
  recipesSearched: Recipe[] = [];
  ingredientes: String[] = [];
  
  showRecipe: boolean;
  constructor(private _mockup: MockupRecipeService) {
    this.recipes = this._mockup.getRecipes();
    this.showRecipe = false;
   }

   showRecipes(){
    this.showRecipe = !this.showRecipe;
   }
   searchRecipeName(searchName){
      this.recipesSearched=[];
      for (var i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].name === searchName.value) {
        this.recipesSearched.push(this.recipes[i]);
        }      
      }
    this.showRecipe = true;        
   }

   searchRecipeTime(searchTime){
     console.log(searchTime.value);
    this.recipesSearched=[];
    for (var i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].time === parseInt(searchTime.value)) {
      this.recipesSearched.push(this.recipes[i]);
      }      
    }
  this.showRecipe = true;     
   }



  ngOnInit() {
  }

}

