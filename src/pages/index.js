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
    profileEditButton,
    profileAddButton,
    profileEditForm,
    profileAddForm,
    bioProfileChange,
    nameProfileChange,
    profileChangeAvatarForm,
    profileChangeAvatarButton
} from "../utils/constants.js";

import {
    PopupWithConfirmation
} from '../components/PopupWithConfirmation.js';

import {
    Api
} from '../components/Api.js';

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-44');

Promise.all([api.getProfileInfo(), api.getCardList()])
    .then(([data, cards]) => {
        ownerId = data.owner._id;
        profileInfo.setUserInfo(data);
        cardList.renderItems(cards);
    })
    .catch(err => {
        console.log(err)
    });


export const profileCardAddForm = new FormValidator(formConfig, profileAddForm);
export const profileEditInfoForm = new FormValidator(formConfig, profileEditForm);
const profileChangeUserAvatarForm = new FormValidator(formConfig, profileChangeAvatarForm);

profileCardAddForm.enableValidation();
profileEditInfoForm.enableValidation();
profileChangeUserAvatarForm.enableValidation();


function createCard(item) {
    const card = new Card(item, '.template', openImagePopup, userId, {
        handleLikeCard(cardElement) {
            if (cardElement.isLiked()) {
                api.deleteCard(cardElement)
                    .then((res) => {
                        cardElement.toggleLike(res.likes);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                api.getLike(cardElement)
                    .then((res) => {
                        cardElement.toggleLike(res.likes)
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
    }, {
        handleDeleteCard: (cardElement) => {
            deleteImagePopup.open();
            deleteImagePopup.setSubmitButton(() => {
                api.deleteCard(cardElement)
                    .then(() => {
                        cardElement.deleteCardElement();
                        deleteImagePopup.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
        }
    });

    const templateElement = card.getCardElement();
    return templateElement;
};


const cardList = new Section((item) => {
    const card = createCard(item);
    cardList.setItem(card);
}, '.elements__table');
cardList.renderItems(initialImages);

const addImagePopup = new PopupWithForm('.popup_add-image', {
    handleFormSubmit: (item) => {
        addImagePopup.isLoading(true, 'Создать', 'Создание...')
        api.addCard(item)
            .then((res) => {
                const elementInput = createCard(res);
                cardList.setItem(elementInput);
                addImagePopup.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                addImagePopup.isLoading(false, 'Создать', 'Создание...')
            })
    }
});

addImagePopup.setEventListeners();

profileAddButton.addEventListener('click', () => {
    addImagePopup.open();
    profileCardAddForm.resetValidation();
    profileCardAddForm.disableSubmitButton();
});


const changeProfileAvatarPopup = new PopupWithForm('.popup_change_avatar', {
    handleFormSubmit: (item) => {
        changeProfileAvatarPopup.isLoading(true, 'Создать', 'Создание...')
        api.changeProfileAvatar(item)
            .then((res) => {
                profileInfo.setUserInfo(res)
                changeProfileAvatarPopup.close();
            })
            .finally(() => {
                changeProfileAvatarPopup.isLoading(false, 'Создать', 'Создание...')
            })
    }
})

changeProfileAvatarPopup.setEventListeners();

profileChangeAvatarButton.addEventListener('click', () => {
    changeProfileAvatarPopup.open();
    profileChangeUserAvatarForm.resetValidation();
    profileChangeUserAvatarForm.disableSubmitButton();
});


const deleteImagePopup = new PopupWithConfirmation('.popup_delete-image');
deleteImagePopup.setEventListeners();


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
        profileEditPopup.isLoading(true, 'Создать', 'Создание...')
        api.validProfileInfo(item)
            .then((res) => {
                profileInfo.setUserInfo(res);
                profileEditPopup.close();
            })
            .finally((res) => {
                profileEditPopup.isLoading(false, 'Создать', 'Создание...')
            })
    }
});

profileEditPopup.setEventListeners();

const openedEditPopup = () => {
    const item = profileInfo.getUserInfo();
    nameProfileChange.value = item.name;
    bioProfileChange.value = item.bio;
};

profileEditButton.addEventListener('click', () => {
    profileEditPopup.open();
    openedEditPopup();
    profileEditInfoForm.resetValidation();
    profileEditInfoForm.disableSubmitButton();
});