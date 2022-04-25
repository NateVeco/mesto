const initialImages = [{
        name: 'Зима в Финляндии',
        link: 'https://images.unsplash.com/photo-1584380029877-e8d0fe39d534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Финляндия',
        link: 'https://images.unsplash.com/photo-1585727384562-8c1685105af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

    },
    {

        name: 'Аляска',
        link: 'https://images.unsplash.com/photo-1574788901656-6a9ee34a3fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

    },
    {
        name: 'Дорога Аляски',
        link: 'https://images.unsplash.com/photo-1574866412308-32d9023633dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
    },
    {
        name: 'Горы Норвегии',
        link: 'https://images.unsplash.com/photo-1508592931388-95bc7b61033d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

    },
    {
        name: 'Норвегия',
        link: 'https://images.unsplash.com/photo-1544009520-e2ea9189f15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'

    }
];


const profileEditBtn = document.querySelector('.profile__edit-button');
const profilePopupEdit = document.querySelector('.popup_edit-profile');
const profileCloseBtn = profilePopupEdit.querySelector('.popup__button-close');
// const profileEditForm = profilePopupEdit.querySelector('.popup__container');
// const nameProfileInput = profilePopupEdit.querySelector('.popup__text_type_name');
// const bioProfileInput = profilePopupEdit.querySelector('.popup__text_type_bio');
const nameProfileChange = document.querySelector('.profile__name');
const bioProfileChange = document.querySelector('.profile__bio');
const profileAddBtn = document.querySelector('.profile__add-button');
const profilePopupAdd = document.querySelector('.popup_add-image');
const profileAddCloseBtn = profilePopupAdd.querySelector('.popup__button-close');
const nameElementInput = profilePopupAdd.querySelector('.popup__text_type_name-element');
const linkElementInput = profilePopupAdd.querySelector('.popup__text_type_link-element');
const profileAddForm = profilePopupAdd.querySelector('.popup__container');
const elementsTable = document.querySelector('.elements__table');
const template = document.querySelector('.template');
const elementPopupImageOpened = document.querySelector('.popup_opened-image');
const elementImage = elementPopupImageOpened.querySelector('.popup__image');
const elementTitleImage = elementPopupImageOpened.querySelector('.popup__title-image');
const elementImageCloseBtn = elementPopupImageOpened.querySelector('.popup__button-close');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

// function handleProfileEditFormSubmit(evt) {
//     evt.preventDefault();

//     nameProfileChange.textContent = nameProfileInput.value;
//     bioProfileChange.textContent = bioProfileInput.value;
//     closePopup(profilePopupEdit);
// }

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
    popup.classList.remove('popup_opened')
};



profileEditBtn.addEventListener('click', () => {
    nameProfileInput.value = nameProfileChange.textContent;
    bioProfileInput.value = bioProfileChange.textContent;
    openPopup(profilePopupEdit);
});
profileAddBtn.addEventListener('click', () => openPopup(profilePopupAdd));
// profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);
profileAddForm.addEventListener('submit', handleAddElementFormSubmit);
profileCloseBtn.addEventListener('click', () => closePopup(profilePopupEdit));
profileAddCloseBtn.addEventListener('click', () => closePopup(profilePopupAdd));
elementImageCloseBtn.addEventListener('click', () => closePopup(elementPopupImageOpened));