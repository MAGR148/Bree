import { Controller } from 'stimulus';

export default class extends Controller {
  static values = {
    url: String,
    id: String,
  }

   //Function used for support calculation tabs
   changeTab(e) {
    e.preventDefault();

    window.dispatchEvent(new CustomEvent('refreshOperationTurboFrame', {
      detail: {
        url: this.urlValue,
        id: this.idValue,
      },
    }));
  }

  //Función usada para las tabs de expediente
  tabChange(e) {
    e.preventDefault();

    window.dispatchEvent(new CustomEvent('operationTurboFrameRefresh', {
      detail: {
        url: this.urlValue,
        id: this.idValue,
      },
    }));
  }
}
