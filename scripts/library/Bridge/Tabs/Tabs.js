export class Tabs {
    button;
    params; // [ { text: 'text-tab', title: 'title', id: 'id-tab' } ]

    constructor(params, button) {
        this.params = params;
        this.button = button;
    }

    createElement() { }
}