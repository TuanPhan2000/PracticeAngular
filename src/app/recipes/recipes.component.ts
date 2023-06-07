import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnDestroy} from '@angular/core';
import {RecipeService} from "./recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements AfterContentChecked{

  displayMessage: boolean = false;

  constructor(private router: Router) {
  }

  ngAfterContentChecked(): void {
    if (this.router.url ==='/recipe') this.displayMessage = true;
    else this.displayMessage = false;
  }



}
