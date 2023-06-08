import {AfterContentChecked, Component} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements AfterContentChecked{

  recipe!: RecipeModel;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
  }

  private getRecipe() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getById(id).subscribe( data => this.recipe = data );
  }

  deleteRecipeById(id: number) {
    this.recipeService.deleteRecipeById(id);
    this.router.navigate(['/recipe']);
  }

  ngAfterContentChecked(): void {
    this.getRecipe();
  }

}
