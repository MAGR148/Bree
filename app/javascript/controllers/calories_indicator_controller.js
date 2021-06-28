import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['label']
  
  indicate(e){
    this.labelTarget.innerHTML = e.detail
  }
}