import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>()
    
    private recipes: Recipe[] = [
        new Recipe(
          'Burrito', 
          'Delicious and healthy burrito', 
          'https://media.istockphoto.com/id/1313361282/photo/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=7BgOT-kuluQIlZ50l-p-DNvajA66EeB_HIUvW6O_GPM=',
          [
            new Ingredient('Minced meat', 1),
            new Ingredient('Tortilla', 2),
            new Ingredient('Tomatoes', 2)
          ]),
        new Recipe(
          'Mushroom Risotto', 
          'Delicious mushroom risotto', 
          'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d9e73830340c4d2fb0ec5075d8d7d26c/BFV38271_CC2017_11.1.2_FINAL.jpg?resize=1200:*',
          [
            new Ingredient('Rice', 1),
            new Ingredient('Mushrooms', 10),
            new Ingredient('Oil', 1)
          ])
      ];

      constructor(private slService: ShoppingListService ) {}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToSL(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}