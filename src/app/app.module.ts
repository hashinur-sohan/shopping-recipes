import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { ResipeListComponent } from './recipes/resipe-list/resipe-list.component';
import { ResipeDetailsComponent } from './recipes/resipe-details/resipe-details.component';
import { RecipeItemComponent } from './recipes/resipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ResipeListComponent,
    ResipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
