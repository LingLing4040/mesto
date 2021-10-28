import Card from '../сomponents/Card.js';
import FormValidator from '../сomponents/FormValidator.js';
import PopupWithImage from '../сomponents/PopupWithImage.js';
import PopupWithForm from '../сomponents/PopupWithForm.js';
import ConfirmationPopup from '../сomponents/ConfirmationPopup.js';
import Section from '../сomponents/Section.js';
import UserInfo from '../сomponents/UserInfo.js';
import Api from '../сomponents/Api.js';
import './index.css';
import {
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
    avatarPopup,
    bigCardPopup,
    profileForm,
    cardsForm,
    settings,
    profileAvatar,
    avatarPicture,
    avatarForm,
    submitButtons,
} from '../utils/constants.js';

let myId = null;

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29',
    headers: {
        authorization: 'b750b178-891e-48da-ab55-d65f4ad6f900',
        'Content-Type': 'application/json',
    },
});

function handleCardClick(name, link) {
    popupTypeBigCard.open(name, link);
}

function handleLikeClick(card, data) {
    const promise = card.isLiked() ? api.dislikeCard(data._id) : api.likeCard(data._id);
    promise
        .then((data) => {
            card.setLike(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

function handleCardDelete(card) {
    popupTypeDelete.setConfirmationHandler(() => {
        api.deleteCard(card._id)
            .then(() => {
                card.delete();

                popupTypeDelete.close();
            })
            .catch((err) => {
                console.log(err);
            });
    });
    popupTypeDelete.open();
}

function createCard(data, myId) {
    const card = new Card(
        data,
        '.card-template',
        handleCardClick,
        { handleCardDelete: () => handleCardDelete(card), handleLikeClick: () => handleLikeClick(card, data) },
        myId
    );
    const cardElement = card.generate();
    card.setLike(data);
    return cardElement;
}

editButton.addEventListener('click', () => {
    const userData = user.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.about;

    popupTypeProfile.open();
    validateProfile.resetValidation();
});

addButton.addEventListener('click', () => {
    validateCards.resetValidation();
    popupTypeCards.open();
});

avatarPicture.addEventListener('click', () => {
    validateAvatar.resetValidation();
    popupTypeAvatar.open();
});

const validateProfile = new FormValidator(settings, profileForm);
validateProfile.enableValidation();

const validateCards = new FormValidator(settings, cardsForm);
validateCards.enableValidation();

const validateAvatar = new FormValidator(settings, avatarForm);
validateAvatar.enableValidation();

const cardsList = new Section(
    {
        renderer: (item) => {
            cardsList.addItems(createCard(item, myId));
        },
    },
    cardsContainer
);

const popupTypeProfile = new PopupWithForm({
    popupSelector: profilePopup,
    handleFormSubmit: (item) => {
        popupTypeProfile.renderLoading(true);
        api.editInfo(item)
            .then((data) => {
                user.setUserInfo(data);
                popupTypeProfile.close();
            })
            .catch((err) => {
                console.log(`${err}`);
            })
            .finally(() => {
                popupTypeProfile.renderLoading(false);
            });
    },
});

const popupTypeCards = new PopupWithForm({
    popupSelector: cardsPopup,
    handleFormSubmit: (item) => {
        popupTypeCards.renderCreating(true);
        api.addCard(item)
            .then((data) => {
                cardsList.addItems(createCard(data, myId));
                popupTypeCards.close();
            })
            .catch((err) => {
                console.log(`${err}`);
            })
            .finally(() => {
                popupTypeCards.renderCreating(false);
            });
    },
});

const popupTypeAvatar = new PopupWithForm({
    popupSelector: avatarPopup,
    handleFormSubmit: (item) => {
        popupTypeAvatar.renderLoading(true);
        api.updateAvatar(item)
            .then((data) => {
                avatarPicture.style.backgroundImage = `url(${data.avatar})`;
                popupTypeAvatar.close();
            })
            .catch((err) => {
                console.log(`${err}`);
            })
            .finally(() => {
                popupTypeAvatar.renderLoading(false);
            });
    },
});

const popupTypeDelete = new ConfirmationPopup(deletePopup);

const user = new UserInfo({ name: profileName, about: profileJob });

const popupTypeBigCard = new PopupWithImage(bigCardPopup);

popupTypeProfile.setEventListeners();
popupTypeCards.setEventListeners();
popupTypeBigCard.setEventListeners();
popupTypeDelete.setEventListeners();
popupTypeAvatar.setEventListeners();

Promise.all([api.getInitialCards(), api.getInfo()])
    .then(([cards, info]) => {
        user.setUserInfo(info);
        myId = info._id;
        profileAvatar.style.backgroundImage = `url(${info.avatar})`;

        cardsList.renderItems(cards);
    })
    .catch((err) => {
        console.log(err);
    });
