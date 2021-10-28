export default class Card {
    constructor(data, cardSelector, handleCardClick, { handleCardDelete, handleLikeClick }, myId) {
        this._link = data.link;
        this._alt = data.name;
        this._name = data.name;
        this._myId = myId;
        this._ownerId = data.owner._id;
        this._id = data._id;
        this._likes = data.likes;
        this._selector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleLikeClick = handleLikeClick;
    }

    _getElement() {
        const cardElement = document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);

        return cardElement;
    }

    _showDeleteButton() {
        if (this._ownerId === this._myId) {
            this._deleteButton.classList.add('card__delete-button_shown');
        }
    }

    generate() {
        this._element = this._getElement();

        this._likeButton = this._element.querySelector('.card__like');
        this._deleteButton = this._element.querySelector('.card__delete-button');
        this._cardImage = this._element.querySelector('.card__photo');
        this._likeCounter = this._element.querySelector('.card__like-counter');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._alt;
        this._element.querySelector('.card__title').textContent = this._name;

        this._setEventListeners();

        this._showDeleteButton();

        return this._element;
    }

    _setEventListeners() {
        this._addLikeListener();
        this._addDeleteListener();
        this._addOpenCardListener();
    }

    _addLikeListener() {
        this._likeButton.addEventListener('click', () => this._handleLikeClick());
    }

    isLiked() {
        return this._isLiked;
    }

    setLike(data) {
        this._isLiked =
            data.likes.filter((item) => {
                return item._id == this._myId;
            }).length > 0;
        this._likeCounter.textContent = data.likes.length;
        if (this._isLiked) {
            this._likeButton.classList.add('card__like_active');
        } else {
            this._likeButton.classList.remove('card__like_active');
        }
    }

    _addDeleteListener() {
        this._deleteButton.addEventListener('click', () => this._handleCardDelete());
    }

    delete() {
        this._element.remove();
        this._element = null;
    }

    _addOpenCardListener() {
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }
}
