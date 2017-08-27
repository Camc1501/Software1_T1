import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './componentes/recipe-list/recipe-list.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

import { APP_ROUTING } from './app.routes';
import { SearchComponent } from './componentes/search/search.component';
import { MockupRecipeService } from './services/mockup-recipe.service';
import { AddRecipeComponent } from './componentes/add-recipe/add-recipe.component';
import { LimitPipe } from './pipes/limit.pipe';
import { ViewRecipeComponent } from './componentes/view-recipe/view-recipe.component';

@NgModule({
    declarations: [
        AppComponent,
        RecipeListComponent,
        NavbarComponent,
        SearchComponent,
        AddRecipeComponent,
        LimitPipe,
        ViewRecipeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        APP_ROUTING
    ],
    providers: [
        MockupRecipeService
    ],
    bootstrap: [AppComponent],
    exports: [LimitPipe]
})
export class AppModule { }
