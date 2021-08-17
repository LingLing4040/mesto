let popup = document.querySelector('.popup');
let popup__container = popup.querySelector('.popup__container');
let editButton = document.querySelector('.edit-button');
let closeButton = popup.querySelector('.popup__close-button');

function edit() {
    popup.classList.add('popup_opened');
}

function close() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', edit);

closeButton.addEventListener('click', close);
