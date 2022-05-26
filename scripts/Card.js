export class Card {
    constructor(data, template, handleOpenCardImage) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this.handleOpenCardImage = handleOpenCardImage;
    };


    _handleRemoveElement() {
        this._element.remove();
    };

    _toggleLike() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    };


    _getCardsList() {
        const cardElement = document
            .querySelector(this._template)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    };

    _handleCardClick = () => {
        this.handleOpenCardImage({
            name: this._name,
            link: this._link
        });
    };

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', () => this._toggleLike());
        this._element.querySelector('.trash-button').addEventListener('click', () => this._handleRemoveElement());
        this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick());
    };

    getCardElement() {
        this._element = this._getCardsList();
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__image').src = this._link;

        return this._element;
    }

}