import Card from '../сomponents/Card.js';
import FormValidator from '../сomponents/FormValidator.js';
import PopupWithImage from '../сomponents/PopupWithImage.js';
import PopupWithForm from '../сomponents/PopupWithForm.js';
import Section from '../сomponents/Section.js';
import UserInfo from '../сomponents/UserInfo.js';
import './index.css';

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

function handleCardClick(name, link) {
    popupImage.src = link;
    popupImage.alt = name;
    popupImageCaption.textContent = name;
    popupTypeBigCard.open(name, link);
}

editButton.addEventListener('click', () => {
    const userData = user.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.job;

    popupTypeProfile.open();
    validateProfile.resetValidation();
});

addButton.addEventListener('click', () => {
    validateCards.resetValidation();
    popupTypeCards.open();
});

const validateProfile = new FormValidator(settings, profileForm);
validateProfile.enableValidation();

const validateCards = new FormValidator(settings, cardsForm);
validateCards.enableValidation();

const cardsList = new Section(
    {
        items: initialCards,
        renderer: (cardItem) => {
            const card = new Card(cardItem, '.card-template', handleCardClick);
            const cardElement = card.generate();

            console.log(cardItem);

            cardsList.addItems(cardElement);
        },
    },
    cardsContainer
);

const popupTypeProfile = new PopupWithForm({
    popupSelector: profilePopup,
    handleFormSubmit: (item) => {
        user.setUserInfo(item);

        popupTypeProfile.close();
    },
});

const popupTypeCards = new PopupWithForm({
    popupSelector: cardsPopup,
    handleFormSubmit: (item) => {
        const card = new Card(item, '.card-template', handleCardClick);
        const cardElement = card.generate();

        console.log(item);

        cardsList.addItems(cardElement);

        cardLinkInput.value = '';
        cardNameInput.value = '';
        popupTypeCards.close();
    },
});

const user = new UserInfo({ nameSelector: profileName, jobSelector: profileJob });

const popupTypeBigCard = new PopupWithImage(bigCardPopup);

cardsList.renderItems();

popupTypeProfile.setEventListeners();
popupTypeCards.setEventListeners();
popupTypeBigCard.setEventListeners();
