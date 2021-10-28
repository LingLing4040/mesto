export default class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
        }).then(this._returnData);
    }

    getInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
        }).then(this._returnData);
    }

    editInfo(newInfo) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(newInfo),
        }).then(this._returnData);
    }

    addCard(newCard) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(newCard),
        }).then(this._returnData);
    }

    deleteCard(id) {
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        }).then(this._returnData);
    }

    likeCard(id) {
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this.headers,
        }).then(this._returnData);
    }

    dislikeCard(id) {
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        }).then(this._returnData);
    }

    updateAvatar(newAvatar) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(newAvatar),
        }).then(this._returnData);
    }

    _returnData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}
