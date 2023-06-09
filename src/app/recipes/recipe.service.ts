import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {RecipeModel} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  // init data
  private recipes: RecipeModel[] = [
    { id: 0, name: 'Portuguese Food', imageUrl: 'https://www.portugalist.com/wp-content/uploads/prego.jpg', description: 'Delicious beef sandwiches'},
    { id: 1, name: 'South African Food', imageUrl: 'https://kreatiewekosidees.files.wordpress.com/2013/08/shepards-pie.jpg', description: 'Delicious !!!'}
  ]


  constructor() { }

  getRecipes(): Observable<RecipeModel[]> {
    return this.recipes ? of(this.recipes) : of([]);
  }

  getById(id: number): Observable<RecipeModel> {
    if (this.recipes) {
      if (this.recipes.filter(r => r.id === id)[0]) return of(this.recipes.filter(r => r.id === id)[0]);
    }
    return of({name: 'Không tồn tại !'} as RecipeModel);
  }

  addRecipe(recipe: RecipeModel) {
    if (this.recipes && this.recipes.length) {
      // @ts-ignore
      recipe.id = this.recipes[this.recipes.length - 1].id + 1;
      this.recipes.push(recipe);
    }
    else {
      this.recipes = [];
      recipe.id = 0;
      this.recipes.push(recipe);
    }
  }

  updateRecipe(recipe: RecipeModel) {
    if (this.recipes && this.recipes.length) {
      let recipeOld: RecipeModel = this.recipes.filter(r => r.id === recipe.id)[0];
      recipeOld.name = recipe.name;
      recipeOld.description = recipe.description;
      recipeOld.imageUrl = recipe.imageUrl;
    }
    else {
      this.recipes = [];
    }
  }

  deleteRecipeById(id: number | undefined) {
    if (this.recipes && this.recipes.length) {
      this.recipes = this.recipes.filter(r => r.id !== id);
    }
    else this.recipes = [];
  }




}


