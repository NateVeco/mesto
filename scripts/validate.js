function enableValidation(formConfig) {
    const profileForm = document.querySelector(formConfig.formSelector);
    const profileInputs = profileForm.querySelectorAll(formConfig.inputSelector);

    profileInputs.forEach((element) => {
        element.addEventListener('input', (evt) => handleProfileFormInput(evt, profileForm, formConfig));
    });
    profileForm.addEventListener('submit', (evt) => handleProfileFormSubmit(evt));

    disableBtn(profileForm, formConfig);
};


function handleProfileFormSubmit(evt) {

    const profileForm = evt.currentTarget;
    (profileForm.checkValidity());
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
    profileBtn.classList.toggle(formConfig.inactiveButtonClass, !profileForm.checkValidity());
    profileBtn.disabled = !profileForm.checkValidity();
}


enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_type_disabled',
    errorClass: 'popup__input_type_error'
});