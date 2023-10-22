const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;
    const userObject = { Login: login, Password: password };

    if (login === "" || password === "") {
        alert("Всі поля мають бути заповнені");
        return;
    }

    console.log(userObject);
    form.reset();
}