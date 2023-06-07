import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeModel} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements AfterContentChecked{
  myForm!: FormGroup;

  oldData: RecipeModel = {
    name: 'Recipe Name',
    imageUrl: '',
    description: 'Description'
  } as RecipeModel;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {

    this.myForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      imageUrl: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });

  }

  onSubmit() {
    if (this.myForm.get('id')?.value === null) {
      this.recipeService.addRecipe(this.myForm.value as RecipeModel);
      this.router.navigate(['/recipe']).then(r => {});
    }
    else {
      console.log("update")
      this.recipeService.updateRecipe(this.myForm.value as RecipeModel);
      this.location.back();
    }
  }

  getRecipe() {
    if(this.router.url.includes('edit')) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      if (id !== null) {
        this.recipeService.getById(id).subscribe((data) => {
          this.oldData = data;
          this.myForm.patchValue({
            id: data.id,
          });
        })
      }
    }
  }

  ngAfterContentChecked(): void {
    this.getRecipe();
  }

}
