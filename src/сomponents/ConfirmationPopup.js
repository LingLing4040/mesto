import Popup from './Popup.js';

export default class ConfirmationPopup extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }

    setConfirmationHandler(handler) {
        this.ConfirmationHandler = handler;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.ConfirmationHandler();
        });
    }
}
