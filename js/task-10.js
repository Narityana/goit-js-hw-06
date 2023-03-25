function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const formEl = document.querySelector("#controls");
const divEl = document.querySelector("#boxes");

// divEl.style.display = "flex";
// divEl.style.alignItems = "center";
// divEl.style.gridColumnGap = "50px";
// divEl.style.flexWrap = "wrap";

const btnCreate = formEl.querySelector("button[data-create]");
const btnDestroy = formEl.querySelector("button[data-destroy]");
const inputEl = formEl.querySelector("input");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
	amount = inputEl.value;
	let size = 30;
	const step = 10;
	for (let i = 0; i < amount; i += 1) {
		const box = document.createElement("div");
		box.classList.add("box");
		box.style.width = size + "px";
		box.style.height = size + "px";
		box.style.backgroundColor = getRandomHexColor();
		divEl.appendChild(box);
		size += step;
	}
}

function destroyBoxes() {
	let el = divEl;
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
}
