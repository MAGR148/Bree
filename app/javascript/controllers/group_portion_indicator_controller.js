import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = [ 
    'group', 
    'energy', 
    'carbohydrates', 
    'carbohydratesPercentage', 
    'protein', 
    'proteinPercentage', 
    'lipids',
    'lipidsPercentage'
  ]

  receiveGroupPortions(e) {
    let updatedGroups = []

    this.groupTargets.forEach((el, i) => {
      const carbohydrates = (el.querySelector('#carbohydrates').innerText).replace(' grs', '');
      const protein = (el.querySelector('#protein').innerText).replace(' grs', '');
      const lipids = (el.querySelector('#lipids').innerText).replace(' grs', '');
      const energy = (el.querySelector('#energy').innerText).replace(' kcal', ''); 

      updatedGroups.push({carbohydrates, protein, lipids, energy})
     })

     this.paintIncrementedGroups(updatedGroups)
  }

  paintIncrementedGroups(groups){
    const values = this.matrixAdd(groups)

    this.energyTarget.innerText = `${values.energy} kcal`
    this.carbohydratesTarget.innerText = `${values.carbohydrates} grs`
    this.proteinTarget.innerText = `${values.protein} grs`
    this.lipidsTarget.innerText = `${values.lipids} grs`

    this.carbohydratesPercentageTarget.innerText = `${this.calculatePercentage(values.carbohydrates, 4, values.energy)} %`
    this.proteinPercentageTarget.innerText = `${this.calculatePercentage(values.protein, 4, values.energy)} %`
    this.lipidsPercentageTarget.innerText = `${this.calculatePercentage(values.lipids, 9, values.energy)} %`
    
  }

  calculatePercentage(grams, divider, calories){
    const kCalories = grams * divider

    return (kCalories * 100 / calories).toFixed(2)
  }

  matrixAdd(groups){
    let values = { carbohydrates: 0, protein: 0, lipids: 0, energy: 0 }

    groups.forEach((el, i) => {
      values.carbohydrates += parseInt(el.carbohydrates)
      values.protein += parseInt(el.protein)
      values.lipids += parseInt(el.lipids)
      values.energy += parseInt(el.energy)     
    })

    return values
  }
}