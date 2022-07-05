// export const initialImages = [{
//         name: 'Зима в Финляндии',
//         link: 'https://images.unsplash.com/photo-1584380029877-e8d0fe39d534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
//     },
//     {
//         name: 'Финляндия',
//         link: 'https://images.unsplash.com/photo-1585727384562-8c1685105af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

//     },
//     {
//         name: 'Аляска',
//         link: 'https://images.unsplash.com/photo-1574788901656-6a9ee34a3fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

//     },
//     {
//         name: 'Дорога Аляски',
//         link: 'https://images.unsplash.com/photo-1574866412308-32d9023633dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
//     },
//     {
//         name: 'Горы Норвегии',
//         link: 'https://images.unsplash.com/photo-1508592931388-95bc7b61033d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

//     },
//     {
//         name: 'Норвегия',
//         link: 'https://images.unsplash.com/photo-1544009520-e2ea9189f15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'

//     }
// ];

export const formConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
};

export const profileEditButton = document.querySelector('.profile__edit-button');
export const profilePopupEdit = document.querySelector('.popup_edit-profile');
export const profileEditForm = profilePopupEdit.querySelector('.popup__form-edit');
export const nameProfileInput = profilePopupEdit.querySelector('.popup__input_name');
export const bioProfileInput = profilePopupEdit.querySelector('.popup__input_bio');
export const nameProfileChange = document.querySelector('.profile__name');
export const bioProfileChange = document.querySelector('.profile__bio');
export const profileAddButton = document.querySelector('.profile__add-button');
export const profilePopupAdd = document.querySelector('.popup_add-image');
export const nameElementInput = profilePopupAdd.querySelector('.popup__input_name-element');
export const linkElementInput = profilePopupAdd.querySelector('.popup__input_link-element');
export const profileAddForm = profilePopupAdd.querySelector('.popup__form-add');
export const elementPopupImageOpened = document.querySelector('.popup_opened-image');
export const elementImage = elementPopupImageOpened.querySelector('.popup__image');
export const elementTitleImage = elementPopupImageOpened.querySelector('.popup__title-image');
export const popups = document.querySelectorAll('.popup');
export const profileChangeAvatarForm = document.querySelector('.popup__form-change-avatar');
export const profileChangeAvatarButton = document.querySelector('.profile__avatar-container');