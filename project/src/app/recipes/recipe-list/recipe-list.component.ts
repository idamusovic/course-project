import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Burrito', 'Delicious and healthy burrito', 'https://media.istockphoto.com/id/1313361282/photo/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=7BgOT-kuluQIlZ50l-p-DNvajA66EeB_HIUvW6O_GPM='),
    new Recipe('Mushroom Risotto', 'Delicious mushroom risotto', 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d9e73830340c4d2fb0ec5075d8d7d26c/BFV38271_CC2017_11.1.2_FINAL.jpg?resize=1200:*')
  ];

  constructor() {

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
