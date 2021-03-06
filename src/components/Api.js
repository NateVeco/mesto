export class Api {
    constructor(url, cardId) {
        this._url = url;
        this._cardId = cardId;
        this._headers = {
            'Content-type': 'application/json',
            'Authorization': 'd1a60a2e-b9fd-4b08-ae19-243adaf784bc'
        }
    };

    _getResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject('Произошла Ошибка')
        }
    };

    getProfileInfo() {
        return fetch(`${this._url}/users/me`, {
                method: 'GET',
                headers: this._headers
            })
            .then(this._getResponse);
    };

    getCardList() {
        return fetch(`${this._url}/cards`, {
                method: 'GET',
                headers: this._headers
            })
            .then(this._getResponse);
    };

    validProfileInfo(item) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: item.name,
                    about: item.bio
                })
            })
            .then(this._getResponse);
    };

    changeProfileAvatar(item) {
        return fetch(`${this._url}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: item.avatar
                })
            })
            .then(this._getResponse);
    };

    addCard(data) {
        return fetch(`${this._url}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    link: data.link
                })
            })
            .then(this._getResponse);
    };

    deleteCard(ownerCard) {
        return fetch(`${this._url}/cards/${ownerCard}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this._getResponse);
    };

    getLike(ownerCard) {
        return fetch(`${this._url}/cards/${ownerCard}/likes`, {
                method: 'PUT',
                headers: this._headers
            })
            .then(this._getResponse);
    };

    deleteLike(ownerCard) {
        return fetch(`${this._url}/cards/${ownerCard}/likes`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this._getResponse);
    }
}