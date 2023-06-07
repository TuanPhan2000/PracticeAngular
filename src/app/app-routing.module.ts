import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeFormComponent} from "./recipes/recipe-form/recipe-form.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path:'recipe', component: RecipesComponent,
    children: [
      {path: 'detail/:id', component: RecipeDetailComponent},
      {path: 'edit/:id', component: RecipeFormComponent},
      {path: 'new', component: RecipeFormComponent}
    ]},
  { path: '', redirectTo: '/recipe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
