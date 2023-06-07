import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeModel} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  myForm!: FormGroup;


  constructor(private recipeService: RecipeService,
              private location: Location) {
    this.myForm = new FormGroup({
      name: new FormControl('Recipe Name', Validators.required),
      imageUrl: new FormControl('', [Validators.required]),
      description: new FormControl('Description', [Validators.required]),
    });
  }

  onSubmit() {
    this.recipeService.addRecipe(this.myForm.value as RecipeModel);
    this.location;
  }
}
