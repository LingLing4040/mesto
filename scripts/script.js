let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__form');
let editButton = document.querySelector('.profile__button_type_edit');
let closeButton = popup.querySelector('.popup__close-button');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_occupation');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__occupation');

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
