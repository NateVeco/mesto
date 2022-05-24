export const formConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
};

export class FormValidator {
    constructor(formConfig, formElement) {
        this._formElement = formElement;
        this._formConfig = formConfig;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._formConfig.inputSelector));
        this._profileBtn = this._formElement.querySelector(this._formConfig.buttonSelector);
    }


    _showInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput() {

        return this._inputList.some((inputElement) => {

            return !inputElement.validity.valid;
        });
    };

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._profileBtn.classList.add(this._formConfig.inactiveButtonClass);
            this._profileBtn.setAttribute('disabled', true);
        } else {
            this._profileBtn.classList.remove(this._formConfig.inactiveButtonClass);
            this._profileBtn.removeAttribute('disabled', true);
        }

    };

    _setEventListeners() {

        this.toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);

                this.toggleButtonState();
            });
        });
    };

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
        });

        this._setEventListeners();
    };

};