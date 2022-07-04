import { Strategy } from "./Strategy.js";

export class StrategySquare extends Strategy {
    draw(context, x, y, brushSize = 15, widthBorder = 5, fillStyle = 'black', strokeStyle = 'black') {
        context.beginPath();

        context.lineWidth = widthBorder;
        context.fillStyle = fillStyle;
        context.strokeStyle = strokeStyle;

        context.rect(x - (brushSize / 2), y - (brushSize / 2), brushSize, brushSize);
        if (fillStyle !== strokeStyle) {
            context.stroke();
        }
        context.fill();
        context.closePath();
    }
}