import {
    initialImages,
    Card
} from './Card.js';

import {
    formConfig,
    FormValidator
} from './FormValidator.js';



const profileEditBtn = document.querySelector('.profile__edit-button');
const profilePopupEdit = document.querySelector('.popup_edit-profile');
const profileCloseBtn = profilePopupEdit.querySelector('.popup__button-close');
const profileEditForm = profilePopupEdit.querySelector('.popup__form-edit');
const nameProfileInput = profilePopupEdit.querySelector('.popup__input_name');
const bioProfileInput = profilePopupEdit.querySelector('.popup__input_bio');
const nameProfileChange = document.querySelector('.profile__name');
const bioProfileChange = document.querySelector('.profile__bio');
const profileAddBtn = document.querySelector('.profile__add-button');
const profilePopupAdd = document.querySelector('.popup_add-image');
const profileAddCloseBtn = profilePopupAdd.querySelector('.popup__button-close');
const nameElementInput = profilePopupAdd.querySelector('.popup__input_name-element');
const linkElementInput = profilePopupAdd.querySelector('.popup__input_link-element');
const profileAddForm = profilePopupAdd.querySelector('.popup__form-add');
const elementsTable = document.querySelector('.elements__table');
const cardsList = document.querySelector('.elements__table');
const elementPopupImageOpened = document.querySelector('.popup_opened-image');
const elementImage = elementPopupImageOpened.querySelector('.popup__image');
const elementTitleImage = elementPopupImageOpened.querySelector('.popup__title-image');
const elementImageCloseBtn = elementPopupImageOpened.querySelector('.popup__button-close');


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    popup.addEventListener('click', closeOnOverlay);
};

function handleProfileEditFormSubmit() {
    nameProfileChange.textContent = nameProfileInput.value;
    bioProfileChange.textContent = bioProfileInput.value;
    closePopup(profilePopupEdit);
}


function createCard(item) {
    const card = new Card(item, '.template', openImagePopup);
    const templateElement = card.getCardElement();
    return templateElement;
};

function render({
    name,
    link
}) {
    cardsList.prepend(createCard({
        name,
        link
    }))
};

function handleInitialImages() {
    initialImages.forEach(render);
};


handleInitialImages();


function openImagePopup(item) {
    elementImage.src = item.link;
    elementImage.alt = item.name;
    elementTitleImage.textContent = item.name;
    openPopup(elementPopupImageOpened);
};


function handleAddElementFormSubmit(evt) {
    evt.preventDefault();
    const addElement = createCard({
        name: nameElementInput.value,
        link: linkElementInput.value
    });

    profileAddForm.reset();
    elementsTable.prepend(addElement);

    closePopup(profilePopupAdd);

};


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

profileAddBtn.addEventListener('click', () => {
    const profileCardAddForm = new FormValidator(formConfig, profileAddForm);

    openPopup(profilePopupAdd);
    profileCardAddForm.toggleButtonState();
});


profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);
profileAddForm.addEventListener('submit', handleAddElementFormSubmit);
profileCloseBtn.addEventListener('click', () => closePopup(profilePopupEdit));
profileAddCloseBtn.addEventListener('click', () => closePopup(profilePopupAdd));
elementImageCloseBtn.addEventListener('click', () => closePopup(elementPopupImageOpened));