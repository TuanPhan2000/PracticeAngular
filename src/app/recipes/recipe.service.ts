import { Injectable } from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {Observable, of} from "rxjs";

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
      return of(this.recipes.filter(r => r.id === id)[0]);
    }
    return of({name: 'Không tồn tại !'} as RecipeModel);
  }

  addRecipe(recipe: RecipeModel) {
    if (this.recipes && this.recipes.length) {
      recipe.id = this.recipes[this.recipes.length - 1].id + 1;
      this.recipes.push(recipe);
    }
    else {
      this.recipes = [];
      recipe.id = 0;
      this.recipes.push(recipe);
    }

  }


}
