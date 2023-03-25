const formEl = document.querySelector('#validation-input');

formEl.addEventListener('blur', onBlur);

function onBlur (event) {
    const inputLenght = event.currentTarget.value.length;
    const givenLenght = Number(event.currentTarget.dataset.length);
    formEl.classList.toggle('valid', inputLenght===givenLenght);
    formEl.classList.toggle('invalid', inputLenght!==givenLenght);
};
