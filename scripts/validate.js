function enableValidation(formSelector) {
    const profileForm = document.querySelector(formSelector);
    profileForm.addEventListener('submit', (evt) => handleProfileFormSubmit(evt));
    profileForm.addEventListener('input', (evt) => handleProfileFormInput(evt));

}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const profileForm = evt.currentTarget;
    console.log(profileForm.checkValidity());
    if (profileForm.checkValidity()) {
        handleProfileEditFormSubmit(evt);
    } else {
        alert('фейл');
    }
}

function handleProfileFormInput(evt) {
    const profileInput = evt.target;
    const error = document.querySelector('#${profileInput.id}-error');

    console.log(error);

}




enableValidation('.popup__container');