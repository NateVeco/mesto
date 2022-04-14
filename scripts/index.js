const initialImages = [{
        name: 'Норвегия',
        link: 'https://images.unsplash.com/photo-1544009520-e2ea9189f15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
    },
    {
        name: 'Горы Норвегии',
        link: 'https://images.unsplash.com/photo-1508592931388-95bc7b61033d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Аляска',
        link: 'https://images.unsplash.com/photo-1574788901656-6a9ee34a3fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        name: 'Дорога Аляски',
        link: 'https://images.unsplash.com/photo-1574866412308-32d9023633dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
    },
    {
        name: 'Финляндия',
        link: 'https://images.unsplash.com/photo-1585727384562-8c1685105af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Приключение в Финляндии',
        link: 'https://images.unsplash.com/photo-1584380029877-e8d0fe39d534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
];


const profileEditButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = document.querySelector('.popup__button-close');
const modalSaveBtn = document.querySelector('.popup__button-save');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_bio');
const nameChange = document.querySelector('.profile__name');
const bioChange = document.querySelector('.profile__bio');

const profileAddButton = document.querySelector('.profile__add-button');
const profilePopupAdd = document.querySelector('.popup_type-add-images');
const profileAddCloseBtn = profilePopupAdd.querySelector('.popup__button-close');

const nameElementInput = profilePopupAdd.querySelector('.popup__text_type_name-element');
const linkElementInput = profilePopupAdd.querySelector('.popup__text_type_link-element');

// Открытие попапов

function popupOpen(value) {
    modalWindow.classList.add('popup_opened');
    nameInput.value = nameChange.textContent;
    jobInput.value = bioChange.textContent;
}

function popupAddOpen() {
    profilePopupAdd.classList.add('popup_opened');
}

// Редактирования профиля

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameChange.textContent = nameInput.value;
    bioChange.textContent = jobInput.value;
    modalWindow.classList.remove('popup_opened');
}

// Добавление новой карточки - после просмотра вебинара - делать через template

// function formSubmitHandler(evt) {
//     evt.preventDefault();

//     nameChange.textContent = nameElementInput.value;
//     bioChange.textContent = linkElementInput.value;
//     profileAddButton.classList.remove('popup_opened');
// }

// Закрытие попапов 

function popupClose() {
    modalWindow.classList.remove('popup_opened')
};

function popupAddClose() {
    profilePopupAdd.classList.remove('popup_opened')
};

formElement.addEventListener('submit', formSubmitHandler);
profileEditButton.addEventListener('click', popupOpen);
profileAddButton.addEventListener('click', popupAddOpen);
modalCloseBtn.addEventListener('click', popupClose);
profileAddCloseBtn.addEventListener('click', popupAddClose);


// В пятницу доделать Добавление карточки и настроить лайки
// в сб - вс остальное доделать

// Лайк карточки

// Удаление карточки

// Открытие попапа с картинкой

// Плавное открытие и закрытие попапов