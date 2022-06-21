import Popup from '../components/Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._elementImage = this._popupSelector.querySelector('.popup__image');
        this._elementTitle = this._popupSelector.querySelector('.popup__title-image');
    };

    open(data) {
        super.open();
        this._elementImage.src = data.link;
        this._elementImage.alt = data.name;
        this._elementTitle.textContent = data.name;
    }
}