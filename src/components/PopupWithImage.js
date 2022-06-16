import {
    Popup
} from './Popup.js'
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._elementImage = this._popupSelector('.popup__image');
        this._elementTitle = this._popupSelector('.popup__title-image');
    };

    open(data) {
        super.open();
        this._elementImage.src = data.link;
        this._elementImage.alt = data.name;
        this._elementTitle.textContent = data.name;
    }
}