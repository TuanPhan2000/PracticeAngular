import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeModel} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipe!: RecipeModel;


  constructor(private recipeService: RecipeService) {
  }


}