let popup = document.querySelector('.popup');
let popup__container = popup.querySelector('.popup__container');
let editButton = document.querySelector('.edit-button');

function edit() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', edit);
