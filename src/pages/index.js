import Card from '../сomponents/Card.js';
import FormValidator from '../сomponents/FormValidator.js';
import PopupWithImage from '../сomponents/PopupWithImage.js';
import PopupWithForm from '../сomponents/PopupWithForm.js';
import Section from '../сomponents/Section.js';
import UserInfo from '../сomponents/UserInfo.js';
import './index.css';
import {
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
} from '../utils/constants.js';

function handleCardClick(name, link) {
    popupImage.src = link;
    popupImage.alt = name;
    popupImageCaption.textContent = name;
    popupTypeBigCard.open(name, link);
}

function createCard(data) {
    const card = new Card(data, '.card-template', handleCardClick);
    const cardElement = card.generate();

    return cardElement;
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
        renderer: (item) => {
            cardsList.addItems(createCard(item));
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
        cardsList.addItems(createCard(item));

        popupTypeCards.close();
    },
});

const user = new UserInfo({ name: profileName, job: profileJob });

const popupTypeBigCard = new PopupWithImage(bigCardPopup);

cardsList.renderItems();

popupTypeProfile.setEventListeners();
popupTypeCards.setEventListeners();
popupTypeBigCard.setEventListeners();
