export {
    editButton,
    addButton,
    nameInput,
    jobInput,
    profileName,
    profileJob,
    cardsContainer,
    cardNameInput,
    cardLinkInput,
    profilePopup,
    cardsPopup,
    bigCardPopup,
    popupImage,
    popupImageCaption,
    profileForm,
    cardsForm,
    settings,
    initialCards,
};

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
