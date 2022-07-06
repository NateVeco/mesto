export class Card {
    constructor(data, template, handleOpenCardImage, userId, handleDeleteCard, handleLikeCard, handleDeleteLike) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._userId = userId;
        this._ownerId = data.owner._id;
        this._cardId = data._id;
        this._likes = data.likes;
        this._template = template;
        this._handleOpenCardImage = handleOpenCardImage;
        this._handleDeleteCard = handleDeleteCard;
        this._handleLikeCard = handleLikeCard;
        this._handleDeleteLike = handleDeleteLike;
    };


    deleteCardElement() {
        this._element.remove();
        this._element = null;
    };

    _deleteOwnerCard() {
        if (this._ownerId !== this._userId) {
            this._elementTrashButton.remove()
        }
    };

    saveLikeCard(data) {
        this._elementLikeButton.classList.add('element__like-button_active');
        this._likes = data.likes;
        this._number.textContent = this._likes.length;
    };

    deleteLikeCard(data) {
        this._elementLikeButton.classList.remove('element__like-button_active');
        this._likes = data.likes;
        this._number.textContent = this._likes.length;
    }

    _isLiked() {
        return this._likes.some((data) => {
            return data._id.includes(this._userId)
        });
    };

    _getLikeCard = () => {
        if (this._isLiked()) {
            this._handleDeleteLike(this._data);
        } else {
            this._handleLikeCard(this._data);
        }
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
        this._handleOpenCardImage({
            name: this._name,
            link: this._link
        });
    };

    getCardElement() {
        this._element = this._getCardsList();
        this._setEventListeners();

        this._elementImage.src = this._link;
        this._elementTitleImage.textContent = this._name;
        this._elementImage.alt = this._name;
        this._number.textContent = this._likes.length;
        this._deleteOwnerCard();

        return this._element;
    };

    _setEventListeners() {
        this._elementImage = this._element.querySelector('.element__image');
        this._elementTitleImage = this._element.querySelector('.element__title');
        this._elementTrashButton = this._element.querySelector('.trash-button');
        this._elementLikeButton = this._element.querySelector('.element__like-button');
        this._number = this._element.querySelector('.element__like-number');

        this._elementImage.addEventListener('click', () => this._handleCardClick(this._data));
        this._elementLikeButton.addEventListener('click', () => {
            this._getLikeCard(this)
        });
        this._elementTrashButton.addEventListener('click', () => {
            this._handleDeleteCard(this._data)
        });
    }
}