export class Api {
    constructor(url, tokenCode) {
        this._url = url;
        this._tokenCode = tokenCode;
        this._headers = {
            'Content-type': 'application/json',
            'Authorization': 'd1a60a2e-b9fd-4b08-ae19-243adaf784bc'
        }
    }

    _getResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject('Произошла Ошибка')
        }
    };

    _getProfileInfo() {
        return fetch(`${this._url}/users/me`, {
                method: 'GET',
                headers: this._headers
            })
            .then(this._getResponse);
    };

    _getCardList() {
        return fetch(`${this._url}/cards`, {
                method: 'GET',
                headers: this._headers
            })
            .then(this._getResponse);
    };

    _validProfileInfo(item) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: item.name,
                    bio: item.bio
                })
            })
            .then(this._getResponse);
    };

    changeProfileAvatar(item) {
        return fetch(`${this._url}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: item.link
                })
            })
            .then(this._getResponse);
    };

    addCard(item) {
        return fetch(`${this._url}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: item.title,
                    link: item.link
                })
            })
            .then(this._getResponse);
    };

    deleteCard(cardElement) {
        return fetch(`${this._url}/cards/${cardElement}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this._getResponse);
    };

    getLike(cardElement) {
        return fetch(`${this._url}/cards/${cardElement}/likes`, {
                method: 'PUT',
                headers: this._headers
            })
            .then(this._getResponse);
    };

    deleteLike(cardElement) {
        return fetch(`${this._url}/cards/${cardElement}/likes`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this._getResponse);
    }
}