import { Controller } from 'stimulus'

export default class extends Controller {
  static values = { weight: String };

  static targets = ['label'];
  
  indicate(e){
    this.labelTarget.innerHTML = this.calculateCalories(e.detail)
  }

  calculateCalories(calories){
    let totalCalories = this.removeComa(calories)

    return (parseFloat(totalCalories) / parseFloat(this.weightValue)).toFixed(2)
  }

  removeComa(myString){
    return myString.replace(',','');
  }
}