import { DOM } from "../../DOM.js";

export class Canvas {
    #canvas;

    _canvasId;
    _context;
    _isMouseDown;
    _strokeStyle;
    _fillStyle;

    #drawingStrategy;

    constructor(canvasId, drawingStrategy) {
        this._canvasId = canvasId;
        this.drawingStrategy = drawingStrategy;

        this.#create();
        this._context = this.#canvas.getContext('2d');
        this._isMouseDown = false;
    }

    draw(x, y, brushSize = 10, widthBorder = 5) {
        if (this._isMouseDown) {
            this.#drawingStrategy.draw(this._context, x, y, brushSize, widthBorder, this._fillStyle, this._strokeStyle);
        }
    }

    setIsMouseDown(bool) {
        this._isMouseDown = bool;
        this._context.beginPath();
    }

    clearCanvas() {
        this._context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    autoResizing(relativeElement) {
        let oldImg = this._context.getImageData(0, 0, this.#canvas.width, this.#canvas.height);

        this.#canvas.width = relativeElement.offsetWidth;
        this.#canvas.height = relativeElement.offsetHeight;

        this._context.putImageData(oldImg, 0, 0, 0, 0, this.#canvas.width, this.#canvas.height);
    }

    get canvas() {
        return this.#canvas;
    }

    get canvasId() {
        return this._canvasId;
    }

    set strokeStyle(value) {
        this._strokeStyle = value;
    }

    set fillStyle(value) {
        this._fillStyle = value;
    }

    set drawingStrategy(value) {
        this.#drawingStrategy = value;
    }

    get drawingStrategy() {
        return this.#drawingStrategy;
    }

    #create() {
        this.#canvas = DOM.tag({
            name: 'canvas',
            content: 'Your browser does not support Canvas!',
            attributes: {
                id: this.canvasId
            }
        });
    }
}