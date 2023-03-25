const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const mail = formElements.email.value;
	const pass = formElements.password.value;

	if (mail === "" || pass === "") {
		alert("Увага, всі поля повинні бути заповнені!");
	} else {
		const formData = {
			mail,
			pass,
		};
		console.log(formData);
		event.target.reset();
	}
}
