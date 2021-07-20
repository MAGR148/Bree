import { Controller } from 'stimulus';

export default class extends Controller {

  static targets = ['ger'];

  static values = { 
    gender: String, 
    weight: Number,
    height: Number,
    age: Number,
  };

  connect(){
    this.showResults()
  }

  showResults(){
    this.gerTarget.innerHTML = this.result();
  }

  result = _ => this.isMale ? this.man_calculation : this.woman_calculation

  get isMale(){
    return this.genderValue === 'M' ? true : false;
  }

  get man_calculation(){
    return ((9.99 * parseFloat(this.weightValue)) + (6.25 * parseFloat(this.weightValue)) - (4.92 * this.ageValue) + 5).toFixed(2)
  }

  get woman_calculation(){
    return ((9.99 * parseFloat(this.weightValue)) + (6.25 * parseFloat(this.weightValue)) - (4.92 * this.ageValue) - 161).toFixed(2)
  }
}