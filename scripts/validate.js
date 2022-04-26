function enableValidation(formSelector) {
    const profileForm = document.querySelector(formSelector);
    profileForm.addEventListener('submit', (evt) => handleProfileFormSubmit(evt));

}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const profileForm = evt.currentTarget;
    console.log(profileForm.checkValidity());


}

enableValidation('.popup__container');