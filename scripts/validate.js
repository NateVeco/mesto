function enableValidation(formSelector) {
    const profileForm = document.querySelector(formSelector.formSelector);
    const profileInputs = profileForm.querySelectorAll(formSelector.inputSelector);

    profileInputs.forEach((element) => {
        element.addEventListener('input', handleProfileFormInput);
    });
    profileForm.addEventListener('submit', (evt) => handleProfileFormSubmit(evt));
    // profileForm.addEventListener('input', (evt) => handleProfileFormInput(evt));

}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const profileForm = evt.currentTarget;
    console.log(profileForm.checkValidity());
    if (profileForm.checkValidity()) {
        alert('yes!')
    } else {
        alert('фейл');
    }
}

function handleProfileFormInput(evt) {
    const profileInput = evt.target;
    const error = document.querySelector(`#${profileInput.id}-error`);

    if (profileInput.validity.valid) {
        error.textContent = '';
    } else {
        error.textContent = profileInput.validationMessage;
    }
}

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input'
    // submitButtonSelector: '.popup__button',
    // inactiveButtonClass: 'popup__button_disabled',
    // inputErrorClass: 'popup__input_type_error',
    // errorClass: 'popup__error_visible'
});




// еще:
// неактивность кнопки
// Закрытие попапа кликом на оверлей
// Закрытие попапа нажатием на Esc

// валидация второй формы
// в поле« Ссылка на картинку» должен быть URL.