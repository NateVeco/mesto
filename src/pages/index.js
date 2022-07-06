import './index.css';

import {
    Card
} from '../components/Card.js';

import {
    FormValidator
} from '../components/FormValidator.js';

import {
    formConfig
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
    profileAvatar,
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
        userId = data._id;
        profileInfo.setUserInfo(data);
        cardList.renderItems(cards);
    })
    .catch(err => {
        console.log(err)
    });

let userId = null;

export const profileCardAddForm = new FormValidator(formConfig, profileAddForm);
export const profileEditInfoForm = new FormValidator(formConfig, profileEditForm);
export const profileChangeUserAvatarForm = new FormValidator(formConfig, profileChangeAvatarForm);

profileCardAddForm.enableValidation();
profileEditInfoForm.enableValidation();
profileChangeUserAvatarForm.enableValidation();


const createCard = (data) => {
    const card = new Card(data, '.template', openImagePopup, userId,
        (item) => {
            deleteImagePopup.open();
            deleteImagePopup.setSubmitButton(() => {
                api.deleteCard(item._id)
                    .then(() => {
                        card.deleteCardElement();
                        deleteImagePopup.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
        },
        (item) => {
            api.getLike(item._id)
                .then((res) => {
                    card.saveLikeCard(res);
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        (item) => {
            api.deleteLike(item._id)
                .then((res) => {
                    card.deleteLikeCard(res);
                })
                .catch((err) => {
                    console.log(err)
                })
        })

    const templateElement = card.getCardElement();
    return templateElement;
};


const cardList = new Section((cards) => {
    const card = createCard(cards);
    cardList.setItem(card);
}, '.elements__table');


const addImagePopup = new PopupWithForm('.popup_add-image', {
    handleFormSubmit: (data) => {
        addImagePopup.isLoading(true, 'Создать', 'Создание...')
        api.addCard({
                name: data.name,
                link: data.link
            })
            .then((data) => {
                const newElement = createCard(data);
                cardList.setItem(newElement);
                addImagePopup.close();
            })
            .catch((err) => {
                console.log(err)
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
        api.changeProfileAvatar({
                avatar: item.avatar
            })
            .then((res) => {
                profileInfo.setUserInfo(res);
                changeProfileAvatarPopup.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                changeProfileAvatarPopup.isLoading(false, 'Создать', 'Создание...')
            })
    }
});


changeProfileAvatarPopup.setEventListeners();

// const openedAvatarPopup = () => {
//     const item = profileInfo.getUserInfo();
//     profileAvatar.value = item.avatar;
// }


profileChangeAvatarButton.addEventListener('click', () => {
    changeProfileAvatarPopup.open();
    // openedAvatarPopup();
    profileChangeUserAvatarForm.resetValidation();
    profileChangeUserAvatarForm.disableSubmitButton();
});


const deleteImagePopup = new PopupWithConfirmation('.popup_delete-image');
deleteImagePopup.setEventListeners();


const openedImagePopup = new PopupWithImage('.popup_opened-image');

function openImagePopup({
    name,
    link
}) {
    openedImagePopup.open({
        name,
        link
    })
};

openedImagePopup.setEventListeners();

const profileInfo = new UserInfo(
    '.profile__name',
    '.profile__bio',
    '.profile__avatar'
);

const profileEditPopup = new PopupWithForm('.popup_edit-profile', {
    handleFormSubmit: (item) => {
        profileEditPopup.isLoading(true, 'Создать', 'Создание...')
        api.validProfileInfo(item)
            .then((res) => {
                profileInfo.setUserInfo(res);
                profileEditPopup.close();
            })
            .finally(() => {
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