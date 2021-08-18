import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['input', 'results', 'crudInput', 'selectedValues'];

    static values = {
      delete: String,
      check: String,
    }

    connect() {
      const selectedValues = this.crudInputTarget.value.split(',').filter((e) => e !== '');
      selectedValues.map((study) => this.renderStudies(study, true));
      this.resultsTarget.addEventListener('click', this.onResultsClick);
      this.inputTarget.addEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = (event) => {
      if (event.key === 'Enter') {
        const selected = this.resultsTarget.querySelector(
          '[aria-selected="true"]',
        );
        this.addValue(selected);
      }
    }

    onResultsClick = (event) => {
      const selected = event.target.closest('[role="option"]');
      this.addValue(selected);
    }

    addValue = (selected) => {
      setTimeout(() => { this.inputTarget.value = ''; }, 100);

      const value = this.extractTextValue(selected);

      if (!this.crudInputTarget.value.includes(value)) {
        this.renderStudies(value);
        this.saveArray(value);
      }
    }

    renderStudies = (value, saved = false) => {
      console.log(value)
      const div = document.createElement('div');
      div.setAttribute('id', value);
      div.classList.add('ml-1', 'mt-3', 'is-flex', 'is-align-items-center');
      div.innerHTML = `
            <button type="button" class="delete-button" 
                data-action="${saved || 'click->autocomplete-crud#deleteSelectedElement'}" value="${value}">
                ${saved ? this.checkValue : this.deleteValue}
            </button>
            <span class="ml-2 has-text-weight-bold has-text-primary">${value}</span>`;

      this.selectedValuesTarget.appendChild(div);
    }

    saveArray = (value) => {
      const studies = this.crudInputTarget.value || '';

      const studiesArray = studies.split(',').filter((e) => e !== '');
      studiesArray.push(value);

      this.crudInputTarget.value = studiesArray.join();
    }

    deleteSelectedElement = ({ currentTarget: { value } }) => {
      const studies = this.crudInputTarget.value || '';

      const studiesArray = studies.split(',').filter((e) => e !== '' && e !== value);

      document.getElementById(value).remove();

      this.crudInputTarget.value = studiesArray.join();

    }

    extractTextValue = (el) => (el.hasAttribute('data-autocomplete-label')
      ? el.getAttribute('data-autocomplete-label')
      : el.textContent.trim())
}
