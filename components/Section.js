export class Section {
    constructor({
        items,
        renderer
    }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    setItem(element) {
        this._container.append(element);
    }

    addItem() {}
}