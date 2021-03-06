export class FormValidator {
    constructor(formConfig, formElement) {
        this._formElement = formElement;
        this._formConfig = formConfig;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._formConfig.inputSelector));
        this._submitButton = this._formElement.querySelector(this._formConfig.buttonSelector);
    };


    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._formConfig.inputErrorClass);
        errorElement.classList.add(this._formConfig.errorClass);
        errorElement.textContent = inputElement.validationMessage;
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._formConfig.inputErrorClass);
        errorElement.classList.remove(this._formConfig.errorClass);
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
            this.disableSubmitButton();
        } else {
            this.enableSubmitButton();
        }
    };

    disableSubmitButton() {
        this._submitButton.classList.add(this._formConfig.inactiveButtonClass);
        this._submitButton.setAttribute('disabled', true);
    };

    enableSubmitButton() {
        this._submitButton.classList.remove(this._formConfig.inactiveButtonClass);
        this._submitButton.removeAttribute('disabled', true);
    }

    resetValidation() {

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        })
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
            evt.preventDefault();
        });

        this._setEventListeners();
    };

};