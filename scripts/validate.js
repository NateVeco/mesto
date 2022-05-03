function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, config);
    });
};

function showInputError(config, formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
};

function hideInputError(config, formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
};

function isValid(config, formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(config, formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(config, formElement, inputElement);
    }
};

function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.buttonSelector);

    toggleButtonState(config, inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(config, formElement, inputElement);

            toggleButtonState(config, inputList, buttonElement);
        });
    });
};

function hasInvalidInput(inputList) {

    return inputList.some((inputElement) => {

        return !inputElement.validity.valid;
    });
};

function toggleButtonState(config, inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
    }
};

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
});