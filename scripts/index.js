const profileEditButton = document.querySelector('.Profile__Edit-Button');

const modalWindow = document.querySelector('.popup');

const modalCloseBtn = document.querySelector('.popup__button-close');

function popupOpen() {
    modalWindow.classList.add('popup_opened');
}

profileEditButton.addEventListener('click', popupOpen);


modalCloseBtn.addEventListener('click', function () {
    modalWindow.classList.remove('popup_opened');
})
