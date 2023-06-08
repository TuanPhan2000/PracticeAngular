import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {RecipesRoutingModule} from "./recipes/recipes-routing.module";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/recipe', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RecipesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
