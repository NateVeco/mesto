const profileEditButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = document.querySelector('.popup__button-close');
const modalSaveBtn = document.querySelector('.popup__button-save');

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_bio');
let nameChange = document.querySelector('.profile__name');
let bioChange = document.querySelector('.profile__bio');

// Открытие попапа редактирования профиля

function popupOpen(value) {
    modalWindow.classList.add('popup_opened');
}

// Форма редактирования профиля

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameChange.textContent = nameInput.value;
    bioChange.textContent = jobInput.value;
    modalWindow.classList.remove('popup_opened');
}

// Закрытие попапа редактирования профиля

function popupClose() {
    modalWindow.classList.remove('popup_opened')
};

formElement.addEventListener('submit', formSubmitHandler);
modalSaveBtn.addEventListener('submit', formSubmitHandler);
profileEditButton.addEventListener('click', popupOpen);
modalCloseBtn.addEventListener('click', popupClose);

// Форма добавления карточки

// Добавление карточки

// Лайк карточки

// Удаление карточки

// Открытие попапа с картинкой

// Плавное открытие и закрытие попапов