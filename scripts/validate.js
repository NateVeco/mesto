const formConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
};


function enableValidation(formConfig) {
    const formList = Array.from(document.querySelectorAll(formConfig.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formConfig, formElement);
    });
};

function showInputError(inputErrorClass, errorClass, formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
};

function hideInputError(inputErrorClass, errorClass, formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

function isValid(formConfig, formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formConfig.inputErrorClass, formConfig.errorClass, formElement, inputElement);
    } else {
        hideInputError(formConfig.inputErrorClass, formConfig.errorClass, formElement, inputElement);
    }
};

function setEventListeners(formConfig, formElement) {
    const inputList = Array.from(formElement.querySelectorAll(formConfig.inputSelector));
    const buttonElement = formElement.querySelector(formConfig.buttonSelector);

    toggleButtonState(inputList, formConfig.inactiveButtonClass, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formConfig, formElement, inputElement);

            toggleButtonState(inputList, formConfig.inactiveButtonClass, buttonElement);
        });
    });
};

function hasInvalidInput(inputList) {

    return inputList.some((inputElement) => {

        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, inactiveButtonClass, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled', true);
    }

};

enableValidation(formConfig);