import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['input', 'results', 'crudInput', 'selectedValues'];

    static values = {
      delete: String,
      check: String,
    }

    connect() {
      const selectedValues = JSON.parse(`[${this.crudInputTarget.value}]`);
      
      selectedValues.map((ingredient) => this.renderStudies(ingredient.value, ingredient.group, ingredient.unit, true));
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
      const group = selected.getAttribute('data-autocomplete-group-value')
      const unit = selected.getAttribute('data-autocomplete-unit-value')

      if (!this.crudInputTarget.value.includes(value)) {
        this.renderStudies(value, group, unit);
        this.saveArray(value, group, unit);
      }
    }

    renderStudies = (value, group = '', unit = '', saved = false) => {
      const customID = Date.now();
      const tr = document.createElement('tr');
      tr.setAttribute('id', customID);
      tr.classList.add('ml-1', 'mt-3', 'is-flex', 'is-align-items-center');
      tr.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          ${value}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${group}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${unit}
        </td>
        <td class="pl-4 pr-0 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a
            class="text-red-600 hover:text-red-900"
            data-action="${saved || 'click->autocomplete-crud#deleteSelectedElement'}" value="${value}">
              <svg data-custom-index="${customID}" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
          </a>
        </td>`;

      this.selectedValuesTarget.appendChild(tr);
    }
    
    saveArray = (value, group, unit) => {
      const studies = this.crudInputTarget.value || '';

      const studiesArray = studies.split(',').filter((e) => e !== '');
      studiesArray.push(JSON.stringify({value: value, group: group, unit: unit}));

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
