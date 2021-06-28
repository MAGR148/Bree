import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'input' ]

  writeCalories(){
    window.dispatchEvent(new CustomEvent('selectedCalories', {
      detail: this.inputTarget.value
    }));
  }
}