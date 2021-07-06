import { Controller } from 'stimulus';

export default class extends Controller {

  static targets = ['ger', 'eta'];

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
    this.etaTarget.innerHTML = this.resultPercentage();
  }

  result = _ => this.isMale ? this.man_calculation : this.woman_calculation
  resultPercentage = _ => (this.result() / 100 * 10).toFixed(2)
  total_calories = _ => 1  


  get isMale(){
    return this.genderValue === 'M' ? true : false;
  }

  get man_calculation(){
    return (66.473 + (13.752 * parseFloat(this.weightValue)) + (5.003 * parseFloat(this.heightValue)) - (6.775 * parseInt(this.ageValue))).toFixed(2)
  }

  get woman_calculation(){
    return (655.096 + (9.563 * parseFloat(this.weightValue)) + (1.850 * parseFloat(this.heightValue)) - (4.676 * parseInt(this.ageValue))).toFixed(2)
  }
}