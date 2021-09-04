const popup = document.querySelector('.popup');
const popups = document.querySelectorAll('.popup');
const profileFormElement = document.querySelector('.popup__form_type_profile');
const cardsFormElement = document.querySelector('.popup__form_type_cards');
const editButton = document.querySelector('.profile__button_type_edit');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector(
    '.popup__input_type_occupation'
);
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');
const cardsContainer = document.querySelector('.cards');
const addButton = document.querySelector('.profile__button_type_add');
const cardNameInput = cardsFormElement.querySelector(
    '.popup__input_type_card-name'
);
const cardLinkInput = cardsFormElement.querySelector(
    '.popup__input_type_card-link'
);

const profilePopup = document.querySelector('.popup_type_profile');
const cardsPopup = document.querySelector('.popup_type_cards');

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

function addCard(cardLink, cardName) {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__photo').src = cardLink;
    cardElement.querySelector('.card__photo').alt = cardName;
    cardElement.querySelector('.card__title').textContent = cardName;

    return cardElement;
}

function renderCard(cardLink, cardName) {
    cardsContainer.prepend(addCard(cardLink, cardName));
}

function addInitialCards() {
    for (i = initialCards.length - 1; i >= 0; i--) {
        cardLink = initialCards[i].link;
        cardName = initialCards[i].name;
        renderCard(cardLink, cardName);
    }
}

function fillProfileForm() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function openProfilePopup() {
    openPopup(profilePopup);
    fillProfileForm();
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(profilePopup);
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    cardLink = cardLinkInput.value;
    cardName = cardNameInput.value;
    renderCard(cardLink, cardName);
    closePopup(cardsPopup);
}

editButton.addEventListener('click', () => openProfilePopup());
addButton.addEventListener('click', () => openPopup(cardsPopup));
popups.forEach((item) => {
    item.querySelector('.popup__close-button').addEventListener('click', () =>
        closePopup(item)
    );
});
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
cardsFormElement.addEventListener('submit', handleAddCardFormSubmit);

addInitialCards();
