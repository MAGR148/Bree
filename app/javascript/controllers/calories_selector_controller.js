import { lavenderblush } from 'color-name';
import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'option' ];

  setCalories(e){
    e.preventDefault();

    this.optionTargets.forEach((el, i) => {
      let caloriesLabel = el.querySelector('#calories-label');
      caloriesLabel.classList.replace('border-indigo-500', 'border-transparent')
      
      if(el === e.currentTarget){
        caloriesLabel.classList.replace('border-transparent', 'border-indigo-500')
        this.launchEvent(e.currentTarget.querySelector('#server-size-0-label'))          
      }
    })
  }

  launchEvent(element){
    if(element){
      window.dispatchEvent(new CustomEvent('selectedCalories', {
        detail: element.innerHTML,
      }));
    }
  }
}