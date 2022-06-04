export class DOM {
    static tag(params) {
        const element = document.createElement(params.name);

        DOM.setProperties(element);

        element.addClass(params.class);
        element.attr(params.attributes);

        if (typeof params.content === 'string') {
            element.innerHTML = params.content;
        } else if (params.content instanceof Array) {
            params.content.forEach((elem) => element.appendChild(elem));
        } else if (params.content instanceof HTMLElement) {
            element.appendChild(params.content);
        }

        return element;
    }

    static query(selector) {
        let elem = document.querySelector(selector);

        if (elem) {
            DOM.setProperties(elem);
        }

        return elem;
    }

    static includeCSS(href) {
        let elemInclude = DOM.query('head');

        if (href instanceof Array) {
            href.forEach((link) => {
                let attr = {};

                if (link !== null && typeof link === 'object') {
                    attr = link;
                } else {
                    attr.href = link;
                }

                attr.rel = 'stylesheet';

                elemInclude.append(DOM.tag({
                    name: 'link',
                    attributes: { ...attr }
                }));
            });
        } else {
            elemInclude.append(DOM.tag({
                name: 'link',
                attributes: {
                    rel: 'stylesheet',
                    href: href
                }
            }));
        }
    }

    static includeJS(src) {
        let elemInclude = DOM.query('head');

        if (src instanceof Array) {
            src.forEach((link) => {
                let attr = {};

                if (link !== null && typeof link === 'object') {
                    attr = link;
                } else {
                    attr.src = src;
                    attr.defer = '';
                }

                elemInclude.append(DOM.tag({
                    name: 'script',
                    attributes: { ...attr }
                }));
            });
        } else {
            elemInclude.append(DOM.tag({
                name: 'script',
                attributes: {
                    src: src,
                    defer: ''
                }
            }));
        }
    }

    static setProperties(elem) {
        elem.html = (text) => {
            if (text) {
                elem.innerHTML = text;
            }
            return elem.innerHTML;
        };

        elem.txt = (text) => {
            if (text) {
                elem.textContent = text;
            }
            return elem.textContent;
        }

        elem.on = (event, func, options) => elem.addEventListener(event, func, options);

        elem.css = (style) => {
            for(let attrName in style) {
                elem.style[attrName] = style[attrName];
            }
        };

        elem.addClass = (classes) => {
            if (typeof classes === 'string') {
                elem.classList.add(...classes.split(' '));
            } else if (classes instanceof Array) {
                elem.classList.add(...classes);
            }
        };

        elem.removeClass = (classes) => {
            if (typeof classes === 'string') {
                elem.classList.remove(...classes.split(' '));
            } else if (classes instanceof Array) {
                elem.classList.remove(...classes);
            }
        };

        elem.attr = (attribute, value) => {
            if (typeof attribute === 'string') {
                if (value) {
                    elem.setAttribute(attribute, value);
                } else {
                    return elem.getAttribute(attribute);
                }
            } else {
                for(let attrName in attribute) {
                    elem.setAttribute(attrName, attribute[attrName]);
                }
            }
        };
    }
}