import {
    Card
} from './Card.js';

import {
    FormValidator
} from './FormValidator.js';

import {
    formConfig,
    initialImages
} from '../utils/constants.js';



const profileEditBtn = document.querySelector('.profile__edit-button');
const profilePopupEdit = document.querySelector('.popup_edit-profile');
const profileEditForm = profilePopupEdit.querySelector('.popup__form-edit');
const nameProfileInput = profilePopupEdit.querySelector('.popup__input_name');
const bioProfileInput = profilePopupEdit.querySelector('.popup__input_bio');
const nameProfileChange = document.querySelector('.profile__name');
const bioProfileChange = document.querySelector('.profile__bio');
const profileAddBtn = document.querySelector('.profile__add-button');
const profilePopupAdd = document.querySelector('.popup_add-image');
const nameElementInput = profilePopupAdd.querySelector('.popup__input_name-element');
const linkElementInput = profilePopupAdd.querySelector('.popup__input_link-element');
const profileAddForm = profilePopupAdd.querySelector('.popup__form-add');
const elementsTable = document.querySelector('.elements__table');
const cardsList = document.querySelector('.elements__table');
const elementPopupImageOpened = document.querySelector('.popup_opened-image');
const elementImage = elementPopupImageOpened.querySelector('.popup__image');
const elementTitleImage = elementPopupImageOpened.querySelector('.popup__title-image');
const popups = document.querySelectorAll('.popup');

const profileCardAddForm = new FormValidator(formConfig, profileAddForm);
const profileEditInfoForm = new FormValidator(formConfig, profileEditForm);

profileCardAddForm.enableValidation();
profileEditInfoForm.enableValidation();


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
    popup.removeEventListener('keydown', closePopupEsc);
    popup.removeEventListener('click', closeOnOverlay);
};

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup__button-close')) {
            closePopup(popup)
        }
    })
});

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
    openPopup(profilePopupAdd);
    profileCardAddForm.resetValidation();
    profileCardAddForm.toggleButtonState();
});


profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);
profileAddForm.addEventListener('submit', handleAddElementFormSubmit);