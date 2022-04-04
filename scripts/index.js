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



let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__bio');
let nameChange = document.querySelector('.Profile__name');
let bioChange = document.querySelector('.Profile__bio');
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



