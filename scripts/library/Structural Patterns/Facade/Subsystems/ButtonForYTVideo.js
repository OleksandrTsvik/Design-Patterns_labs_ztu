import { DOM } from "../../../DOM.js";

export class ButtonForYTVideo {
    create(inputUrl, videoElem) {
        let btnSearch = DOM.tag({
            name: 'span',
            content: 'Знайти'
        });

        let btnDelete = DOM.tag({
            name: 'button',
            class: 'btn btn-dark',
            content: DOM.tag({
                name: 'i',
                class: 'bi bi-trash-fill'
            })
        });

        btnSearch.addEventListener('click', () => {
            videoElem.classList.remove('d-none');
            videoElem.src = inputUrl.value.replace('watch?v=', 'embed/');
        });

        btnDelete.addEventListener('click', () => {
            videoElem.classList.add('d-none');
            inputUrl.value = '';
            videoElem.src = '';
        });

        return DOM.tag({
            name: 'div',
            class: 'btn-group',
            attributes: {
                role: 'group'
            },
            content: [
                DOM.tag({
                    name: 'button',
                    class: 'btn btn-danger d-flex justify-content-center align-items-center gap-1',
                    content: [
                        DOM.tag({
                            name: 'i',
                            class: 'bi bi-youtube'
                        }),
                        btnSearch
                    ]
                }),
                btnDelete
            ]
        });
    }
}