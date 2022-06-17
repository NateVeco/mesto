import './index.css';

import {
    profileEditBtn,
    profilePopupEdit,
    profileEditForm,
    nameProfileInput,
    bioProfileInput,
    nameProfileChange,
    bioProfileChange,
    profileAddBtn,
    profilePopupAdd,
    nameElementInput,
    linkElementInput,
    profileAddForm,
    elementsTable,
    cardsList,
    elementPopupImageOpened,
    elementImage,
    elementTitleImage,
    popups
} from '../utils/constants.js';

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



export const profileCardAddForm = new FormValidator(formConfig, profileAddForm);
export const profileEditInfoForm = new FormValidator(formConfig, profileEditForm);

// const cardsList = new Section({
//         data: messageList,
//         renderer: (cardItem) => {
//             const card = cardItem.isOwner ?
//                 new UserCard(cardItem, '.card-template_type_user') :
//                 new DefaultCard(cardItem, '.card-template_type_default');

//             const cardElement = card.generateCard();

//             cardsList.setItem(cardElement);
//         },
//     },
//     cardListSection
// );

// cardsList.renderItems();

profileCardAddForm.enableValidation();
profileEditInfoForm.enableValidation();


// function handleProfileEditFormSubmit() {
//     nameProfileChange.textContent = nameProfileInput.value;
//     bioProfileChange.textContent = bioProfileInput.value;
//     closePopup(profilePopupEdit);
// }


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


// function openImagePopup(item) {
//     elementImage.src = item.link;
//     elementImage.alt = item.name;
//     elementTitleImage.textContent = item.name;
//     openPopup(elementPopupImageOpened);
// };


// function handleAddElementFormSubmit(evt) {
//     evt.preventDefault();
//     const addElement = createCard({
//         name: nameElementInput.value,
//         link: linkElementInput.value
//     });

//     profileAddForm.reset();
//     elementsTable.prepend(addElement);

//     closePopup(profilePopupAdd);

// };


// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closePopupEsc);
//     popup.removeEventListener('click', closeOnOverlay);
// };

// popups.forEach((popup) => {
//     popup.addEventListener('click', (evt) => {
//         if (evt.target.classList.contains('popup__button-close')) {
//             closePopup(popup)
//         }
//     })
// });

// function closePopupEsc(evt) {
//     if (evt.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened');
//         closePopup(openedPopup);
//     }
// };

// function closeOnOverlay(evt) {
//     if (evt.target === evt.currentTarget) {
//         closePopup(evt.target);
//     }

// };


// profileEditBtn.addEventListener('click', () => {
//     nameProfileInput.value = nameProfileChange.textContent;
//     bioProfileInput.value = bioProfileChange.textContent;
//     openPopup(profilePopupEdit);
// });

// profileAddBtn.addEventListener('click', () => {
//     openPopup(profilePopupAdd);
//     profileCardAddForm.resetValidation();
//     profileCardAddForm.toggleButtonState();
// });


// profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);
// profileAddForm.addEventListener('submit', handleAddElementFormSubmit);