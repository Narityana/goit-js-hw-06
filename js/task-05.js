const inputEl = document.querySelector('#name-input');

const titleEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onInput);

function onInput(event) {
    titleEl.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {
        titleEl.textContent = 'Anonymous';
    }
};
