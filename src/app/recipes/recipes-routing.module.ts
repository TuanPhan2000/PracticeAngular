import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";


const routes: Routes = [
  { path:'recipe', component: RecipesComponent,
    children: [
      {path: 'detail/:id', component: RecipeDetailComponent},
      {path: 'edit/:id', component: RecipeFormComponent},
      {path: 'new', component: RecipeFormComponent}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
