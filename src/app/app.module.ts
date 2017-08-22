import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './componentes/recipe-list/recipe-list.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

import { APP_ROUTING } from './app.routes';
import { SearchComponent } from './componentes/search/search.component';
import { MockupRecipeService } from './services/mockup-recipe.service';

@NgModule({
    declarations: [
        AppComponent,
        RecipeListComponent,
        NavbarComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING
    ],
    providers: [
        MockupRecipeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
