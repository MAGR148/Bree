import { Controller } from 'stimulus'

let step = 0;

export default class extends Controller {
  
  static targets = [ 'previous', 'step' ]

  connect(){
    step = 1;
    this.validateButtonsVisibility();
  }

  goTo(e){
    const stepId = e.currentTarget.dataset.stepId;
    const stepUrl = e.currentTarget.dataset.stepUrl;
    
    this.refreshTurboFrame(stepId, stepUrl);
    this.paintActiveStep(e.currentTarget)
  }

  next(e){
    this.setStep(step+= 1)
    this.findStep()
  }

  previous(e){
    this.setStep(step-= 1)
    this.findStep()
  }

  findStep(){
    if(step > 3){
      this.setStep(3)
    }
    if(step > 0 && step <= 3){
      const target = document.getElementById(`step-link-${step}`)
      const stepId = target.dataset.stepId;
      const stepUrl = target.dataset.stepUrl;
      this.refreshTurboFrame(stepId, stepUrl);
      this.paintActiveStep(target);
    }
  }

  paintActiveStep(target){
    this.validateButtonsVisibility();
    this.stepTargets.forEach((el, i) => {
      el.classList.replace('bg-indigo-500','bg-white')
      el.classList.replace('hover:bg-indigo-600', 'hover:bg-indigo-50')
      const span = el.querySelector('#step-number');
      span.classList.replace('text-white','text-indigo-500')

      if(target === el){
        el.classList.replace('bg-white', 'bg-indigo-500')
        el.classList.replace('hover:bg-indigo-50', 'hover:bg-indigo-600')
        span.classList.replace('text-indigo-500', 'text-white')
        
        this.setStep(parseInt(span.innerHTML))
      }
    })
  }

  validateButtonsVisibility(){
    if(step === 1){
      this.previousTarget.style.display = 'none'
    } else {
      this.previousTarget.style.display = 'block'
    }
  }

  refreshTurboFrame(id, url){
    window.dispatchEvent(new CustomEvent('refreshTurboFrame', {
      detail: {
        url,
        id
      },
    }));   
  }

  setStep(step){
    step = step
  }
}