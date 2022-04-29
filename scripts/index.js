const profileEditBtn = document.querySelector('.profile__edit-button');
const profilePopupEdit = document.querySelector('.popup_edit-profile');
const profileCloseBtn = profilePopupEdit.querySelector('.popup__button-close');
const profileEditForm = profilePopupEdit.querySelector('.popup__container');
const nameProfileInput = profilePopupEdit.querySelector('.popup__input_name');
const bioProfileInput = profilePopupEdit.querySelector('.popup__input_bio');
const nameProfileChange = document.querySelector('.profile__name');
const bioProfileChange = document.querySelector('.profile__bio');
const profileAddBtn = document.querySelector('.profile__add-button');
const profilePopupAdd = document.querySelector('.popup_add-image');
const profileAddCloseBtn = profilePopupAdd.querySelector('.popup__button-close');
const nameElementInput = profilePopupAdd.querySelector('.popup__input_name-element');
const linkElementInput = profilePopupAdd.querySelector('.popup__input_link-element');
const profileAddForm = profilePopupAdd.querySelector('.popup__container');
const elementsTable = document.querySelector('.elements__table');
const template = document.querySelector('.template');
const elementPopupImageOpened = document.querySelector('.popup_opened-image');
const elementImage = elementPopupImageOpened.querySelector('.popup__image');
const elementTitleImage = elementPopupImageOpened.querySelector('.popup__title-image');
const elementImageCloseBtn = elementPopupImageOpened.querySelector('.popup__button-close');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    popup.addEventListener('click', closeOnOverlay);
};

function handleProfileEditFormSubmit(evt) {
    evt.preventDefault();

    nameProfileChange.textContent = nameProfileInput.value;
    bioProfileChange.textContent = bioProfileInput.value;
    closePopup(profilePopupEdit);
}

function render() {
    const html = initialImages.map(getElement);
    elementsTable.append(...html);
}

function getElement(item) {
    const newImage = template.content.cloneNode(true);
    const nameElement = newImage.querySelector('.element__title');
    const imageElement = newImage.querySelector('.element__image');
    const removeButton = newImage.querySelector('.trash-button');
    const likeButton = newImage.querySelector('.element__like-button');

    nameElement.textContent = item.name;
    imageElement.src = item.link;
    imageElement.alt = item.name;

    removeButton.addEventListener('click', handleRemoveElement);
    likeButton.addEventListener('click', toggleLike);
    imageElement.addEventListener('click', () => {
        elementTitleImage.textContent = item.name;
        elementImage.src = item.link;
        elementImage.alt = item.name;
        openPopup(elementPopupImageOpened);
    });

    return newImage;
}

function handleRemoveElement(evt) {
    const elementImage = evt.target.closest('.element');
    elementImage.remove();
}

function toggleLike(evt) {
    evt.target.classList.toggle('element__like-button_active');
}


function handleAddElementFormSubmit(evt) {
    evt.preventDefault();
    const addElement = getElement({
        name: nameElementInput.value,
        link: linkElementInput.value
    });

    profileAddForm.reset();
    elementsTable.prepend(addElement);

    closePopup(profilePopupAdd);
}

render();

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
    document.removeEventListener('click', closeOnOverlay);
};

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};

function closeOnOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }

};

profileEditBtn.addEventListener('click', () => {
    nameProfileInput.value = nameProfileChange.textContent;
    bioProfileInput.value = bioProfileChange.textContent;
    openPopup(profilePopupEdit);
});
profileAddBtn.addEventListener('click', () => openPopup(profilePopupAdd));
profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);
profileAddForm.addEventListener('submit', handleAddElementFormSubmit);
profileCloseBtn.addEventListener('click', () => closePopup(profilePopupEdit));
profileAddCloseBtn.addEventListener('click', () => closePopup(profilePopupAdd));
elementImageCloseBtn.addEventListener('click', () => closePopup(elementPopupImageOpened));