// новая версия 2.0

function enableValidation(formConfig) {
    const formList = Array.from(document.querySelectorAll(formConfig.formSelector));
    const inputList = Array.from(document.querySelectorAll(formConfig.inputSelector));

    inputList.forEach((element) => {
        element.addEventListener('input', (evt) => handleProfileFormInput(evt, formList, formConfig));
    });

    formList.forEach((element) => {
        element.addEventListener('submit', (evt) => handleProfileFormSubmit(evt));
    });

    disableBtn(formList, formConfig);
};


function handleProfileFormSubmit(evt) {

    const formList = evt.currentTarget;
    (formList.checkValidity());
}

function handleProfileFormInput(evt, formConfig, formList) {
    const inputList = evt.target;
    const error = document.querySelector(`#${inputList.id}-error`);
    inputList.classList.add(formConfig.errorClass);


    if (inputList.validity.valid) {
        error.textContent = '';
        inputList.classList.remove(formConfig.errorClass);
    } else {
        error.textContent = inputList.validationMessage;
    }

}

// function disableBtn(formConfig) {
//     const profileBtn = Array.from(document.querySelectorAll(formConfig.buttonSelector));

//     // profileBtn.forEach((button) => {
//     //     button.classList.add(formConfig.inactiveButtonClass);
//     // });
// };


// function disableBtn(formList, formConfig) {
//     const profileBtn = document.querySelector(formConfig.buttonSelector);
//     profileBtn.classList.toggle(formConfig.inactiveButtonClass, !profileForm.checkValidity());
//     profileBtn.disabled = !profileForm.checkValidity();
// }



enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_type_disabled',
    errorClass: 'popup__input_type_error'
});