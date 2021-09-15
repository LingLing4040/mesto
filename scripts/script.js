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

function createCard(cardLink, cardName) {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__photo').src = cardLink;
    cardElement.querySelector('.card__photo').alt = cardName;
    cardElement.querySelector('.card__title').textContent = cardName;

    addLikeListener(cardElement);
    addDeleteListener(cardElement);
    addOpenCardListener(cardElement);

    return cardElement;
}

function addInitialCards() {
    initialCards.forEach(({ link, name }) => {
        const card = createCard(link, name);
        cardsContainer.appendChild(card);
    });
}

function fillProfileForm() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', function listen(evt) {
        if (evt.key === 'Escape') {
            closePopup(popup);
        }
        document.removeEventListener('keydown', listen);
    });
}

function openProfilePopup() {
    openPopup(profilePopup);
    fillProfileForm();
}

function openBigCardPopup(card) {
    popupImage.src = card.querySelector('.card__photo').src;
    popupImage.alt = card.querySelector('.card__photo').alt;
    popupImageCaption.textContent = card.querySelector('.card__title').textContent;
    openPopup(bigCardPopup);
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

    const cardLink = cardLinkInput.value;
    const cardName = cardNameInput.value;
    const card = createCard(cardLink, cardName);

    cardsContainer.prepend(card);
    cardsFormElement.reset();
    closePopup(cardsPopup);
}

function like(card) {
    card.classList.toggle('card__like_active');
}

function addLikeListener(card) {
    const cardLike = card.querySelector('.card__like');
    cardLike.addEventListener('click', () => like(cardLike));
}

function addDeleteListener(card) {
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => {
        deleteButton.closest('.card').remove();
    });
}

function addOpenCardListener(card) {
    const cardImage = card.querySelector('.card__photo');
    cardImage.addEventListener('click', () => openBigCardPopup(card));
}

const handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    }
};

editButton.addEventListener('click', () => openProfilePopup());
addButton.addEventListener('click', () => openPopup(cardsPopup));
popups.forEach((item) => {
    item.querySelector('.popup__close-button').addEventListener('click', () => closePopup(item));
    item.addEventListener('mousedown', (evt) => handleOverlayClose(evt));
});
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
cardsFormElement.addEventListener('submit', handleAddCardFormSubmit);

addInitialCards();
