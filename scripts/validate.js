function enableValidation(formConfig) {
    const profileForm = document.querySelector(formConfig.formSelector);
    const profileInputs = profileForm.querySelectorAll(formConfig.inputSelector);

    profileInputs.forEach((element) => {
        element.addEventListener('input', (evt) => handleProfileFormInput(evt, profileForm, formConfig));
    });
    profileForm.addEventListener('submit', (evt) => handleProfileFormSubmit(evt));

    disableBtn(profileForm, formConfig);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const profileForm = evt.currentTarget;
    console.log(profileForm.checkValidity());
    // if (profileForm.checkValidity()) {

    // } else {}
}

function handleProfileFormInput(evt, profileForm, formConfig) {
    const profileInput = evt.target;
    const error = document.querySelector(`#${profileInput.id}-error`);
    profileInput.classList.add(formConfig.errorClass);


    if (profileInput.validity.valid) {
        error.textContent = '';
        profileInput.classList.remove(formConfig.errorClass);
    } else {

        error.textContent = profileInput.validationMessage;
    }
    disableBtn(profileForm, formConfig);
}

function disableBtn(profileForm, formConfig) {
    const profileBtn = document.querySelector(formConfig.buttonSelector);
    profileBtn.classList.toggle('popup__button-submit_type_disabled', !profileForm.checkValidity());
    profileBtn.disabled = !profileForm.checkValidity();
}


enableValidation({
    formSelector: '.popup__form-edit',
    inputSelector: '.popup__input-edit',
    buttonSelector: '.popup__button-submit_save',
    errorClass: 'popup__input_type_error'
});

enableValidation({
    formSelector: '.popup__form-add',
    inputSelector: '.popup__input-add',
    buttonSelector: '.popup__button-submit_creat',
    // inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_type_error'
});