export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    renderLoading(isLoading) {
        this._submitButton = this._popup.querySelector('.popup__button');
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = 'Сохранить';
        }
    }

    renderCreating(isCreating) {
        this._submitButton = this._popup.querySelector('.popup__button');
        if (isCreating) {
            this._submitButton.textContent = 'Создание...';
        } else {
            this._submitButton.textContent = 'Создать';
        }
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-button').addEventListener('click', (evt) => this.close(evt));
        this._popup.addEventListener('mousedown', (evt) => this._handleOverlayClose(evt));
    }
}
