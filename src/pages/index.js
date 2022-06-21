import './index.css';

import {
    Card
} from '../components/Card.js';

import {
    FormValidator
} from '../components/FormValidator.js';

import {
    formConfig,
    initialImages
} from '../utils/constants.js';

import {
    Section
}
from '../components/Section.js';

import {
    PopupWithForm
}
from '../components/PopupWithForm.js';

import {
    PopupWithImage
}
from '../components/PopupWithImage.js';

import {
    UserInfo
}
from '../components/UserInfo.js';

import {
    profileEditBtn,
    profileAddBtn,
    profileEditForm,
    profileAddForm,
    cardsList,
    bioProfileChange,
    nameProfileChange
} from "../utils/constants.js";


export const profileCardAddForm = new FormValidator(formConfig, profileAddForm);
export const profileEditInfoForm = new FormValidator(formConfig, profileEditForm);

profileCardAddForm.enableValidation();
profileEditInfoForm.enableValidation();

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

const cards = new Section((item) => {
    const card = createCard(item);
    cards.setItem(card);
}, '.elements__table');
cards.renderItems(initialImages);

const addImagePopup = new PopupWithForm('.popup_add-image', {
    handleFormSubmit: (data) => {
        const elementInput = createCard({
            name: data.name,
            link: data.link
        });
        cards.setItem(elementInput);
        addImagePopup.close();
    }
});

addImagePopup.setEventListeners();

profileAddBtn.addEventListener('click', () => {
    addImagePopup.open();
    profileCardAddForm.resetValidation();
    profileCardAddForm.toggleButtonState()
});


const openedImagePopup = new PopupWithImage('.popup_opened-image');
openedImagePopup.setEventListeners();

function openImagePopup({
    name,
    link
}) {
    openedImagePopup.open({
        name,
        link
    })
};

const profileInfo = new UserInfo(
    '.profile__name',
    '.profile__bio'
);

const profileEditPopup = new PopupWithForm('.popup_edit-profile', {
    handleFormSubmit: (item) => {
        profileInfo.setUserInfo(item);
        profileEditPopup.close();
    }
});

profileEditPopup.setEventListeners();

const openedEditPopup = () => {
    const item = profileInfo.getUserInfo();
    nameProfileChange.value = item.name;
    bioProfileChange.value = item.bio;
};

profileEditBtn.addEventListener('click', () => {
    profileEditPopup.open();
    openedEditPopup();
    profileEditInfoForm.resetValidation();
    profileEditInfoForm.toggleButtonState()
});