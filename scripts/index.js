// Открытие попапа редактирования профиля

const profileEditButton = document.querySelector('.profile__edit-button');

const modalWindow = document.querySelector('.popup');

const modalCloseBtn = document.querySelector('.popup__button-close');

function popupOpen() {
    modalWindow.classList.add('popup_opened');
}

profileEditButton.addEventListener('click', popupOpen);


modalCloseBtn.addEventListener('click', function () {
    modalWindow.classList.remove('popup_opened');
})

// Форма редактирование профиля и закрытия попапа

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_bio');
let nameChange = document.querySelector('.profile__name');
let bioChange = document.querySelector('.profile__bio');
let modalSaveBtn = document.querySelector('.popup__button-save')


function formSubmitHandler(evt) {
    evt.preventDefault();

    nameChange.textContent = nameInput.value;
    bioChange.textContent = jobInput.value;
  
 }

formElement.addEventListener('submit', formSubmitHandler);
modalSaveBtn.addEventListener('click', formSubmitHandler);
modalSaveBtn.addEventListener('click', function () {
    modalWindow.classList.remove('popup_opened');
});

// Форма добавления карточки

// Добавление карточки

// Лайк карточки

// Удаление карточки

// Открытие попапа с картинкой

// Плавное открытие и закрытие попапов
