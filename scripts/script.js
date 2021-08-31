const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__form');
const editButton = document.querySelector('.profile__button_type_edit');
const closeButton = popup.querySelector('.popup__close-button');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_occupation');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');
const cardsContainer = document.querySelector('.cards');

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

    cardsContainer.prepend(cardElement);
}

function addInitialCards() {
    for (i = initialCards.length - 1; i >= 0; i--) {
        cardLink = initialCards[i].link;
        cardName = initialCards[i].name;
        addCard(cardLink, cardName);
    }
}

function fillProfileForm() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function openPopup() {
    popup.classList.add('popup_opened');
    fillProfileForm();
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleProfileFormSubmit);

addInitialCards();
