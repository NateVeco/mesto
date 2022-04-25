// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

const profileEditForm = profilePopupEdit.querySelector('.popup__container');
// const profileAddForm = profilePopupAdd.querySelector('.popup__container');
const nameProfileInput = profilePopupEdit.querySelector('.popup__text_type_name');
const bioProfileInput = profilePopupEdit.querySelector('.popup__text_type_bio');



profileEditForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    nameProfileChange.textContent = nameProfileInput.value;
    bioProfileChange.textContent = bioProfileInput.value;

    closePopup(profilePopupEdit);
});


nameProfileInput.addEventListener('input', function (evt) {
    console.log(evt.target.validity.valid);
});


// // Функция, которая добавляет класс с ошибкой
// function showInputError() {
//     nameProfileInput.classList.add('.popup_type_error');
// };

// // Функция, которая удаляет класс с ошибкой
// function hideInputError() {
//     nameProfileInput.classList.remove('.popup_type_error');
// };

// // Функция, которая проверяет валидность поля
// const isValid = () => {
//     if (!nameProfileInput.validity.valid) {
//         // Если поле не проходит валидацию, покажем ошибку
//         showInputError(nameProfileInput);
//     } else {
//         // Если проходит, скроем
//         hideInputError(nameProfileInput);
//     }
// };


// // Вызовем функцию isValid на каждый ввод символа
// nameProfileInput.addEventListener('input', isValid);