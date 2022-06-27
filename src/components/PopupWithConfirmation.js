import Popup from '../components/Popup.js';

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._formElement = this._popupElement.querySelector('.popup__container');
    }

    setSubmitButton(action) {
        this._clickSubmit = action;
    };

    setEventListeners() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._clickSubmit();
        });

        super.setEventListeners();
    }
}