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
    ingredientes: string[] = [];
    ingrediente: string;
    alerta: boolean = false;

    constructor(private _mockup: MockupRecipeService,
        private router: Router) { }

    ngOnInit() {
    }

    agregarReceta(forma: NgForm) {
        if (forma.invalid == false) {
            this.recipe = {
                nombre: forma.value.nombre,
                tiempo: forma.value.tiempo,
                preparacion: forma.value.preparacion,
                ingredientes: this.ingredientes
            }
            this._mockup.setRecipe(this.recipe);
            this.router.navigate(['/home']);
        } else
            this.alerta = true;
    }

    agregarIngrediente() {
        this.ingredientes.push(this.ingrediente);
        this.ingrediente = '';
    }

    eliminarIngrediente(index: number) {
        this.ingredientes.splice(index, 1);
    }
}
