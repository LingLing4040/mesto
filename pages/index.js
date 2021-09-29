import Card from '../сomponents/Card.js';
import FormValidator from '../сomponents/FormValidator.js';

const popups = document.querySelectorAll('.popup');
const profileFormElement = document.querySelector('.popup__form_type_profile');
const cardsFormElement = document.querySelector('.popup__form_type_cards');
const editButton = document.querySelector('.profile__button_type_edit');
const addButton = document.querySelector('.profile__button_type_add');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_occupation');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');
const cardsContainer = document.querySelector('.cards');
const cardNameInput = cardsFormElement.querySelector('.popup__input_type_card-name');
const cardLinkInput = cardsFormElement.querySelector('.popup__input_type_card-link');
const profilePopup = document.querySelector('.popup_type_profile');
const cardsPopup = document.querySelector('.popup_type_cards');
const bigCardPopup = document.querySelector('.popup_type_card-big');
const popupImage = bigCardPopup.querySelector('.popup__image');
const popupImageCaption = bigCardPopup.querySelector('.popup__image-caption');
const profileForm = profilePopup.querySelector('.popup__form_type_profile');
const cardsForm = cardsPopup.querySelector('.popup__form_type_cards');

const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    labelClass: '.popup__label',
};

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    },
];

function fillProfileForm() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function openProfilePopup() {
    openPopup(profilePopup);
    fillProfileForm();
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(profilePopup);
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();

    const data = {};
    data.link = cardLinkInput.value;
    data.name = cardNameInput.value;
    cardsContainer.prepend(createCard(data));
    closePopup(cardsPopup);
}

const handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    }
};

function handleCardClick(name, link) {
    popupImage.src = link;
    popupImage.alt = name;
    popupImageCaption.textContent = name;
    openPopup(bigCardPopup);
}

editButton.addEventListener('click', () => {
    openProfilePopup();
    validateProfile.resetValidation();
});
addButton.addEventListener('click', () => {
    validateCards.resetValidation();
    openPopup(cardsPopup);
});

popups.forEach((item) => {
    item.querySelector('.popup__close-button').addEventListener('click', () => closePopup(item));
    item.addEventListener('mousedown', handleOverlayClose);
});

profileFormElement.addEventListener('submit', handleProfileFormSubmit);
cardsFormElement.addEventListener('submit', handleAddCardFormSubmit);

function createCard(data) {
    const card = new Card(data, '.card-template', handleCardClick);
    const cardElement = card.generate();
    return cardElement;
}

initialCards.forEach((data) => {
    cardsContainer.appendChild(createCard(data));
});

const validateProfile = new FormValidator(settings, profileForm);
validateProfile.enableValidation();

const validateCards = new FormValidator(settings, cardsForm);
validateCards.enableValidation();
