let counterValue = 0;

const value = document.querySelector("#value");

const btnPlus = document.querySelector('button[data-action="increment"]');

const btnMinus = document.querySelector('button[data-action="decrement"]');

btnPlus.addEventListener("click", () => {
	counterValue += 1;
	value.textContent = counterValue;
});

btnMinus.addEventListener("click", () => {
	counterValue -= 1;
	value.textContent = counterValue;
});
