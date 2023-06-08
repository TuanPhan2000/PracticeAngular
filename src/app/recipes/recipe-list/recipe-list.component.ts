import {AfterContentChecked, Component} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements AfterContentChecked{


  recipes: RecipeModel[] = [];

  selectedRecipe: RecipeModel|null = null;


  constructor(private recipeService: RecipeService) {
  }


  onSelect(recipe: RecipeModel): void {
    this.selectedRecipe = recipe;
  }

  ngAfterContentChecked(): void {
    this.recipeService.getRecipes().subscribe((data) => this.recipes = data);
  }
}
