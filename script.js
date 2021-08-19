let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let editButton = document.querySelector('.edit-button');
let closeButton = popup.querySelector('.popup__close-button');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_occupation');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__occupation');

function opened() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function edit() {
    popup.classList.add('popup_opened');
    opened();
}

function close() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', edit);

closeButton.addEventListener('click', close);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    close();
}

formElement.addEventListener('submit', formSubmitHandler);

document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
        close();
    }
});
