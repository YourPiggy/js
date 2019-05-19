let form = document.forms.someForm;
let formValidator = new FormValidator(form);

formValidator.addRules({
    rules: {
        login: /^[a-zA-Z0-9]+$/,
        pwd: /^[a-zA-Z0-9]+$/
    },
    messages: {
        login: "Логин должен содержать ТОЛЬКО латинские буквы или цифры!",
        pwd: "Пароль должен состоять ТОЛЬКО из латинских букв и цифр!"
    }
});

form.addEventListener("submit", noErorrs);

function noErorrs() {
    if (formValidator.isValid()) {
        console.info("Validation has no errors!");

    }
}
