export class Section {
    constructor({
        items,
        renderer
    }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._initialArray.forEach(item => {
            this._renderer(item); // вызываем renderer, передав item
        });
    }

    //     setItem(element) {
    //         this._container.append(element);
    //     }

    //     addItem() {}
}