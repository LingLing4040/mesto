export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._link = data.link;
        this._alt = data.name;
        this._name = data.name;
        this._selector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getElement() {
        const cardElement = document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);

        return cardElement;
    }

    generate() {
        this._element = this._getElement();

        this._likeButton = this._element.querySelector('.card__like');
        this._deleteButton = this._element.querySelector('.card__delete-button');
        this._cardImage = this._element.querySelector('.card__photo');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._alt;
        this._element.querySelector('.card__title').textContent = this._name;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._addLikeListener();
        this._addDeleteListener();
        this._addOpenCardListener();
    }

    _addLikeListener() {
        this._likeButton.addEventListener('click', () => this._like());
    }

    _like() {
        this._likeButton.classList.toggle('card__like_active');
    }

    _addDeleteListener() {
        this._deleteButton.addEventListener('click', () => {
            this._deleteButton.closest('.card').remove();
        });
    }

    _addOpenCardListener() {
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }
}
