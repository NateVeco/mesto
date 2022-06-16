import Popup from '../components/Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, {
        handleFormSubmit
    }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupSelector.querySelector('.popup__container');
    };

    _getInputValues() {
        this._formInputs = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
        this._formValues = {};
        this._formInputs.forEach((input) => {
            this._formValues[input.name] = input.value
        })

        return this._formValues;
    };

    close() {
        super.close();
        this._formElement.reset();
    };

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }
}