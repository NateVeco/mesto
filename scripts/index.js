import {
    initialImages,
    Card
} from './Card.js';

// import {
//     formConfig
// } from './FormValidator.js';



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

const elementPopupImageOpened = document.querySelector('.popup_opened-image');
const elementImage = elementPopupImageOpened.querySelector('.element__image');
const imageTitle = elementPopupImageOpened.querySelector('.popup__title-image');
const elementImageCloseBtn = elementPopupImageOpened.querySelector('.popup__button-close');

const cardTemplate = document.querySelector('.template').content;
const cardContainer = document.querySelector('.element');



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


// function render() {
//     const html = initialImages.map(getElement);
//     // elementsTable.append(...html);

// }


function getTemplateCards(name, link) {
    const cards = new Card(name, link, template);
    const cardElement = cards.getElement();
    elementsTable.append(...cardElement);

    initialImages.forEach(template => {
        cards.Card(template);
    })


    elementImage.addEventListener('click', () => {
        imageTitle.textContent = name;
        elementImage.src = link;
        elementImage.alt = name;
        openPopup(elementPopupImageOpened);
    });

    return cardElement;
};


function handleAddElementFormSubmit(evt) {
    evt.preventDefault();
    const addElement = getTemplateCards({
        name: nameElementInput.value,
        link: linkElementInput.value
    });

    profileAddForm.reset();
    elementsTable.prepend(addElement);

    closePopup(profilePopupAdd);

};

// render();


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
    const profileBtn = profileAddForm.querySelector(formConfig.buttonSelector);
    const inputList = Array.from(profileAddForm.querySelectorAll(formConfig.inputSelector));

    openPopup(profilePopupAdd);
    toggleButtonState(inputList, formConfig.inactiveButtonClass, profileBtn);
});

profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);
profileAddForm.addEventListener('submit', handleAddElementFormSubmit);
profileCloseBtn.addEventListener('click', () => closePopup(profilePopupEdit));
profileAddCloseBtn.addEventListener('click', () => closePopup(profilePopupAdd));
elementImageCloseBtn.addEventListener('click', () => closePopup(elementPopupImageOpened));