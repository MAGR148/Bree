import { Controller } from 'stimulus'
import Rails from '@rails/ujs';

export default class extends Controller {
  static values = { weight: String, url: String };

  static targets = ['label'];
  
  async indicate(e){
    this.setLabel(e.detail)
    await this.updatePlan(e.detail);
  }

  indicateCalories(e){
    alert('epale')
    this.setLabel(e.detail)
  }

  setLabel(value){
    this.labelTarget.innerHTML = this.calculateCalories(value)
  }

  async updatePlan(calories){
    await fetch(this.urlValue, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.authenticityToken(),
      },
      body: JSON.stringify({
        plan: {
          calories: parseInt(this.removeComa(calories))
        }
      })
    });
  }

  calculateCalories(calories){
    let totalCalories = this.removeComa(calories)

    return (parseFloat(totalCalories) / parseFloat(this.weightValue)).toFixed(2)
  }

  removeComa(myString){
    return myString.replace(',','');
  }

  authenticityToken = () => document.querySelector("meta[name='csrf-token']").getAttribute('content');
}