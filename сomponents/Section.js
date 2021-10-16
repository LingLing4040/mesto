export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._initialArray = items.reverse();
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems() {
        this._initialArray.forEach((item) => {
            this._renderer(item);
        });
    }

    addItems(element) {
        this._container.prepend(element);
    }
}
