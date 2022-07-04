import { DOM } from "../../library/DOM.js";
import { Core } from "../../library/Creational Patterns/Singleton/Core.js";
import { Canvas } from "../../library/Behavioral Patterns/Strategy/Canvas.js";
import { StrategyOutlineSquare } from "../../library/Behavioral Patterns/Strategy/StrategyOutlineSquare.js";
import { StrategyCircle } from "../../library/Behavioral Patterns/Strategy/StrategyCircle.js";
import { StrategySquare } from "../../library/Behavioral Patterns/Strategy/StrategySquare.js";
import { StrategyTriangle } from "../../library/Behavioral Patterns/Strategy/StrategyTriangle.js";
import { StrategyDiamond } from "../../library/Behavioral Patterns/Strategy/StrategyDiamond.js";
import { StrategyEraser } from "../../library/Behavioral Patterns/Strategy/StrategyEraser.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE } from "../../config/config.js";

export function runStrategy() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeJS(BOOTSTRAP_JS);

    Core.getInstance().addCaption('Strategy');

    let drawingStrategies = {
        'outline-square': new StrategyOutlineSquare(),
        'circle': new StrategyCircle(),
        'square': new StrategySquare(),
        'triangle': new StrategyTriangle(),
        'diamond': new StrategyDiamond(),
        'eraser': new StrategyEraser()
    };

    let btnClear = DOM.tag({
        name: 'button',
        class: 'btn btn-outline-dark',
        content: 'Clear',
        attributes: {
            style: 'box-shadow: none;'
        }
    });

    let inputColor = DOM.tag({
        name: 'input',
        class: 'color',
        attributes: {
            type: 'color',
            value: '#FF0000'
        }
    });

    let canvas = new Canvas('canvas', drawingStrategies['outline-square']);
    canvas.strokeStyle = inputColor.value;
    canvas.fillStyle = inputColor.value;

    let wrapper = DOM.tag({
        name: 'div',
        class: 'd-flex gap-3 mb-4'
    });

    let containerCanvas = DOM.tag({
        name: 'div',
        class: 'w-100',
        attributes: {
            style: 'max-height: 600px;'
        }
    });

    let containerButtons = DOM.tag({
        name: 'div',
        class: 'd-flex flex-column justify-content-start align-items-center gap-2 container-buttons',
        content: [
            DOM.tag({
                name: 'div',
                class: 'shape selected',
                content: DOM.tag({
                    name: 'div',
                    class: 'outline-square'
                })
            }),
            DOM.tag({
                name: 'div',
                class: 'shape',
                content: DOM.tag({
                    name: 'div',
                    class: 'circle'
                })
            }),
            DOM.tag({
                name: 'div',
                class: 'shape',
                content: DOM.tag({
                    name: 'div',
                    class: 'square'
                })
            }),
            DOM.tag({
                name: 'div',
                class: 'shape',
                content: DOM.tag({
                    name: 'div',
                    class: 'triangle'
                })
            }),
            DOM.tag({
                name: 'div',
                class: 'shape',
                content: DOM.tag({
                    name: 'div',
                    class: 'diamond'
                })
            }),
            DOM.tag({
                name: 'div',
                class: 'shape',
                content: DOM.tag({
                    name: 'div',
                    class: 'eraser',
                    content: DOM.tag({
                        name: 'i',
                        class: 'bi bi-eraser-fill eraser'
                    })
                })
            }),
            DOM.tag({
                name: 'div',
                content: inputColor
            }),
            btnClear
        ]
    });

    let divContainerShapes = containerButtons.querySelectorAll('.shape');
    let divShapes = containerButtons.querySelectorAll('.shape div');

    containerCanvas.append(canvas.canvas);
    wrapper.append(containerButtons, containerCanvas);
    Core.getInstance().getMain().append(wrapper);

    containerButtons.addEventListener('click', (event) => {
        let elem = event.target.closest('div.shape');

        if (elem) {
            divContainerShapes.forEach(shape => shape.classList.remove('selected'));
            elem.classList.add('selected');

            let nameDrawingStrategy = elem.firstElementChild.classList[0];
            canvas.drawingStrategy = drawingStrategies[nameDrawingStrategy];
        }

        let color = inputColor.value;
        if (canvas.drawingStrategy instanceof StrategyEraser) {
            color = getComputedStyle(canvas.canvas).backgroundColor;
        }

        canvas.strokeStyle = color;
        canvas.fillStyle = color;
    });

    btnClear.addEventListener('click', () => {
        canvas.clearCanvas();
    });

    inputColor.addEventListener('input', () => {
        let color = inputColor.value;

        canvas.strokeStyle = color;
        canvas.fillStyle = color;

        divShapes[0].style.borderColor = color;
        Array.from(divShapes).slice(1, -1).forEach(div => div.style.backgroundColor = color);
    });

    canvas.canvas.addEventListener('mousedown', () =>  {
        canvas.setIsMouseDown(true);
    });
    canvas.canvas.addEventListener('mousemove', (event) => {
        canvas.draw(event.offsetX, event.offsetY);
    });
    canvas.canvas.addEventListener('mouseup', () => {
        canvas.setIsMouseDown(false);
    });
    canvas.canvas.addEventListener('mouseout', () => {
        canvas.setIsMouseDown(false);
    });

    window.addEventListener('resize', () => {
        canvas.autoResizing(containerCanvas);
    });

    let interval = setInterval(() => { canvas.autoResizing(containerCanvas); }, 100);
    setTimeout(() => { clearInterval(interval); }, 500);
}