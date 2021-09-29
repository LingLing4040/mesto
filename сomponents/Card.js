export default class Card {
    constructor(data, cardSelector, popup) {
        this._link = data.link;
        this._alt = data.name;
        this._name = data.name;
        this._selector = cardSelector;
        this._popup = popup;
    }

    _getPopup() {
        const bigCardPopup = document.querySelector('.popup_type_card-big');
    }

    _getElement() {
        const cardElement = document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);

        return cardElement;
    }

    generate() {
        this._element = this._getElement();
        this._element.querySelector('.card__photo').src = this._link;
        this._element.querySelector('.card__photo').alt = this._alt;
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
        const cardLike = this._element.querySelector('.card__like');
        cardLike.addEventListener('click', () => this._like());
    }

    _like() {
        this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }

    _addDeleteListener() {
        const deleteButton = this._element.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', () => {
            deleteButton.closest('.card').remove();
        });
    }

    _addOpenCardListener() {
        const cardImage = this._element.querySelector('.card__photo');
        cardImage.addEventListener('click', () => this._openBigCardPopup());
    }

    _openBigCardPopup() {
        const cardPhoto = this._element.querySelector('.card__photo');
        this._popup.querySelector('.popup__image').src = cardPhoto.src;
        this._popup.querySelector('.popup__image').alt = cardPhoto.alt;
        this._popup.querySelector('.popup__image-caption').textContent =
            this._element.querySelector('.card__title').textContent;
        this._openPopup();
    }

    _openPopup() {
        const listen = (evt) => {
            if (evt.key === 'Escape') {
                this._closePopup();
            }
            document.removeEventListener('keydown', listen);
        };
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', listen);
    }

    _closePopup() {
        this._popup.classList.remove('popup_opened');
    }
}
