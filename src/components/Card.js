export class Card {
    constructor(data, template, handleOpenCardImage, userId, handleDeleteCard, toggleLike) {
        this._name = data.name;
        this._link = data.link;
        this._userId = userId;
        this._ownerId = data.owner._id;
        this._cardElement = data.cardElement;
        this._likes = data.likes;
        this._template = template;
        this.handleOpenCardImage = handleOpenCardImage;
        this._handleDeleteCard = handleDeleteCard;
        this._toggleLike = toggleLike;
    };


    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    };

    _toggleLike(data) {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
        this._likes = data.likes;
        this._number.textContent = this._likes.length;
    };

    _isLiked() {
        return this._likes.some((data) => {
            return data._cardElement.includes(this._ownerId)
        });

    };
    //  _isLiked = () => this._likes.some((item) => item._id === this._userId);

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
        this._element.querySelector('.trash-button').addEventListener('click', () => this._handleDeleteCard(this));
        this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick());
    };

    getCardElement() {
        this._element = this._getCardsList();
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__like-number').textContent = this._likes.length;

        // this._deleteOwnerCard();

        return this._element;
    }

}