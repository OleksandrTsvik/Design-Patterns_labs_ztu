export class PageElement {
    domElement;
    params;

    constructor(params) {
        this.params = params;
    }

    getDOMElement() {
        return this.domElement;
    }
}