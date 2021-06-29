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
  }

  paintValues() {
    this.paintPercentage();
    this.paintKcal();
    this.paintGrams();
    this.paintExtraInformation();
  }

  paintExtraInformation() {
    this.extraGramsTarget.innerHTML = this.calculateGrams();
    this.extraWeightTarget.innerHTML = this.weight
    this.extraResultTarget.innerHTML = this.calculateGrams() / this.weight
  }

  paintPercentage = _ => this.percentageTarget.value = this.percentage;
  paintGrams = _ => this.gramsTarget.value = this.calculateGrams();
  paintKcal = _ => this.kcalTarget.innerHTML = this.calculateCalories();

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