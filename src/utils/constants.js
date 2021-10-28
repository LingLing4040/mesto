export {
    editButton,
    addButton,
    deletePopup,
    nameInput,
    jobInput,
    profileName,
    profileJob,
    cardsContainer,
    profilePopup,
    cardsPopup,
    bigCardPopup,
    profileForm,
    cardsForm,
    settings,
    profileAvatar,
    avatarPopup,
    avatarPicture,
    avatarForm,
    submitButtons,
};

const profileFormElement = document.querySelector('.popup__form_type_profile');
const profileAvatar = document.querySelector('.profile__avatar');
const editButton = document.querySelector('.profile__button_type_edit');
const addButton = document.querySelector('.profile__button_type_add');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_occupation');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');
const cardsContainer = document.querySelector('.cards');
const profilePopup = document.querySelector('.popup_type_profile');
const cardsPopup = document.querySelector('.popup_type_cards');
const bigCardPopup = document.querySelector('.popup_type_card-big');
const deletePopup = document.querySelector('.popup_type_delete');
const profileForm = profilePopup.querySelector('.popup__form_type_profile');
const cardsForm = cardsPopup.querySelector('.popup__form_type_cards');
const avatarPopup = document.querySelector('.popup_type_avatar');
const avatarPicture = document.querySelector('.profile__avatar');
const avatarForm = document.querySelector('.popup__form_type_avatar');
const submitButtons = document.querySelectorAll('.popup__button');

const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    labelClass: '.popup__label',
};
