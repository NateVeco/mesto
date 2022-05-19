export const initialImages = [{
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

export class Card {
    constructor(name, link, template, handleCardClick) {
        this._name = name;
        this._link = link;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }

    _handleRemoveElement() {
        this._cardElement.remove();
    }

    _toggleLike() {
        this._cardElement.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }

    _handleCardClick = () => {
        openPopup(this._link, this._name);
    };

    _setEventListeners() {
        this._cardElement.querySelector('.element__like-button').addEventListener('click', () => this._toggleLike());
        this._cardElement.querySelector('.trash-button').addEventListener('click', () => this._handleRemoveElement());
        this._cardElement.querySelector('.element__image').addEventListener("click", this._handleCardClick());
    }

    getElement() {
        this._cardElement = this._template.content.cloneNode(true).querySelector('.element');
        this._cardElement.querySelector('.element__image').src = this._link;
        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._cardElement.querySelector('.element__image').alt = this._name;

        return this._cardElement;
    }
}



// Осталось сделать: для каждой карточки создайте экземпляр класса Card
// видимо надо как-то организовать связь класса с модулем index
// данный класс только показывает карточки на сайте из массива. НЕ создает новую.Это в index должно быть