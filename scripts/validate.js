const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__error_active');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button-submit');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);

            toggleButtonState(inputList, buttonElement);
        });
    });
};

//  nen
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__container'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

const hasInvalidInput = (inputList) => {

    return inputList.some((inputElement) => {

        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button-submit_type_disabled');
    } else {
        buttonElement.classList.remove('popup__button-submit_type_disabled');
    }
};

// enableValidation({
//     formSelector: '.popup__container',
//     inputSelector: '.popup__input',
//     buttonSelector: '.popup__button-submit',
//     inactiveButtonClass: 'popup__button-submit_type_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_active'
// });

enableValidation();


// 