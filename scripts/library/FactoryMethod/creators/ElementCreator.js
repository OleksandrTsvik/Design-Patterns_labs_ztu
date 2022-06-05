export class ElementCreator {
    create(params) { }

    createAndAppendTo(domElement, params) {
        domElement.appendChild( this.getElement(params) );
    }

    getElement(params) {
        let element = this.create(params);
        element.build();
        return element.getDOMElement();
    }
}