export default class FormValidator {
    constructor(settings, currentFormElement) {
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._labelClass = settings.labelClass;

        this._currentFormElement = currentFormElement;
        this._inputList = Array.from(this._currentFormElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._currentFormElement.querySelector(this._submitButtonSelector);
    }

    enableValidation() {
        this._currentFormElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this._setEventListeners();
    }

    resetValidation() {
        this._toggleButtonState(this._inputList);
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }

    _setEventListeners() {
        this._toggleButtonState(this.inputList);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList, this._submitButton);
            });
        });
    }

    _toggleButtonState(inputList) {
        if (this._hasInvalidInput(inputList)) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.setAttribute('disabled', true);
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = inputElement.closest(this._labelClass).querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = inputElement.closest(this._labelClass).querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }
}
