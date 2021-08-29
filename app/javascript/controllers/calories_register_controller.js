import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'input' ]

  static values = { calories: Number }

  initialize(){
    this.inputTarget.value = this.caloriesValue
  }

  writeCalories(){
    window.dispatchEvent(new CustomEvent('selectedCalories', {
      detail: this.inputTarget.value
    }));
  }
}