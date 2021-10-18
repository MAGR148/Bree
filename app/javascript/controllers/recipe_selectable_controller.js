import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'recipe' ]

  select(e){
    this.defineOrGetRecipe(e.currentTarget);
  }

  defineOrGetRecipe(recipe){
    if (localStorage.getItem('recipeId') === null || localStorage.getItem('recipeId') === 'undefined') {
      this.storeRecipe(recipe.id);
      this.paintSelected(recipe);
    } else {
      this.unpaintSelected();
      this.storeRecipe(recipe.id);
      this.paintSelected(recipe);
    }
  }

  storeRecipe(recipe){
    localStorage.setItem('recipeId', `${recipe}`);
  }

  paintSelected(recipe){
    recipe.classList.add('ring-2');
    recipe.classList.add('ring-offset-2');
    recipe.classList.add('ring-indigo-500');
  }

  unpaintSelected(){
    const recipeId = localStorage.getItem('recipeId');
    const recipe = document.getElementById(recipeId);
  
    recipe.classList.remove('ring-2');
    recipe.classList.remove('ring-offset-2');
    recipe.classList.remove('ring-indigo-500');    
  }
}