import { Controller } from 'stimulus';

export default class extends Controller {
  static values = {
    carbohydrates: Number,
    protein: Number,
    lipids: Number,
    energy: Number,
    key: String
  }

  static targets = [
    'carbohydrates',
    'protein',
    'lipids',
    'energy',
    'quantity',
  ]

  connect() {
    this.setGroupValues();
    this.quantityTarget.addEventListener("change", (e) => this.multiply_groups(parseFloat(e.target.value)))
  }

  setGroupValues(values = {carbohydrates: 0, protein: 0, lipids: 0, energy: 0}) {
    this.carbohydratesTarget.innerHTML = `${values.carbohydrates} grs`
    this.proteinTarget.innerHTML = `${values.protein} grs`
    this.lipidsTarget.innerHTML = `${values.lipids} grs`
    this.energyTarget.innerHTML = `${values.energy} kcal`
  }

  multiply_groups(multiple) {
    const groupValues = {
      key: this.keyValue,
      carbohydrates: parseFloat(this.carbohydratesValue) * multiple,
      protein: parseFloat(this.proteinValue) * multiple,
      lipids: parseFloat(this.lipidsValue) * multiple,
      energy: parseFloat(this.energyValue) * multiple,
    }

    this.setGroupValues(groupValues)
    this.launchGroupValuesEvent()
  }

  launchGroupValuesEvent(){
    window.dispatchEvent(new CustomEvent('groupPortions'));
  }
}