import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = [ 
    'image', 'name', 'ingredients', 'accompaniment', 'preparation' 
  ]

  updateResume(e){
    this.nameTarget.innerHTML = e.detail.name
    this.imageTarget.src = e.detail.image
    this.ingredientsTarget.innerHTML = this.showIngredients(e.detail.ingredients)
    this.accompanimentTarget.innerHTML = this.showAccompaniment(e.detail.accompaniment)
    this.preparationTarget.innerHTML = this.showSteps(e.detail.preparation)
  }

  showIngredients(ingredients){
    let html = ''
    for (const ingredient of ingredients) { 
      html += `<div class="py-3 flex justify-between text-sm font-medium">
      <dt class="text-gray-500">

        <span>${ingredient.unit}</span>
      </dt>
      <dd class="text-gray-900">${ingredient.value}</dd>
    </div>`

     }

    return html
  }

  showAccompaniment(accompaniments){
    let html = ''
    for (const accompaniment of accompaniments) { 
      html += `<div class="py-3 flex justify-between text-sm font-medium">
      <dt class="text-gray-500">
        
        <span>${accompaniment.unit}</span>
      </dt>
      <dd class="text-gray-900">${accompaniment.value}</dd>
    </div>`

     }

    return html
  }

  showSteps(steps){
    console.log(steps)
    let html = ''
    for(let i = 0; i < steps.length; i++){
      html += `<div class="py-3 flex justify-between text-sm font-medium">
      <dt class="text-gray-500">
        ${i + 1}.
      </dt>
      <dd class="text-gray-900 ml-4">
        ${steps[i]}
      </dd>
    </div>`

    }

    return html
  }
}