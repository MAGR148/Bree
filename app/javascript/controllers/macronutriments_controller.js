import { Controller } from 'stimulus'

export default class extends Controller {
  
  static values = {
    calories: Number,
    percentage: Number,
    divider: Number,
    weight: Number
  }

  static targets = [
    'percentage',
    'grams', 
    'kcal', 
    'extraGrams',
    'extraWeight',
    'extraResult'
  ]

  connect() {
    this.paintValues();
    this.percentageTarget.addEventListener("change", (e) => this.change_percentage(parseFloat(e.target.value)))
  }

  change_percentage(percentage) {
    // this.percentageTargetValue = percentage;
    this.percentageValue = percentage;
    this.paintValues();
  }

  paintValues() {
    this.paintPercentage();
    this.paintKcal();
    this.paintGrams();
    this.paintExtraInformation();
  }

  paintExtraInformation() {
    this.extraGramsTarget.innerHTML = this.calculateGrams().toFixed(2);
    this.extraWeightTarget.innerHTML = this.weight
    this.extraResultTarget.innerHTML = (this.calculateGrams() / this.weight).toFixed(2)
  }

  paintPercentage = _ => this.percentageTarget.value = this.percentage.toFixed(2);
  paintGrams = _ => this.gramsTarget.value = this.calculateGrams().toFixed(2);
  paintKcal = _ => this.kcalTarget.innerHTML = this.calculateCalories().toFixed(2);

  calculateGrams = _ => parseFloat(this.calculateCalories() / this.divider)
  calculateCalories = _ => parseFloat((this.calories / 100) * this.percentage)

  get percentage(){
    return this.percentageValue
  }

  get calories(){
    return this.caloriesValue
  }

  get divider(){
    return this.dividerValue
  }

  get weight(){
    return this.weightValue
  }
}