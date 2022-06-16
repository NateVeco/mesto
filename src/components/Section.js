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
            this._renderer(item);
        });
    }

    setItem(item) {
        this._container.append(item);
    }
};