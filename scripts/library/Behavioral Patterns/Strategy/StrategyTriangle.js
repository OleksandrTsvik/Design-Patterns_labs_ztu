import { Strategy } from "./Strategy.js";

export class StrategyTriangle extends Strategy {
    draw(context, x, y, brushSize = 15, widthBorder = 5, fillStyle = 'black', strokeStyle = 'black') {
        context.beginPath();

        context.lineWidth = widthBorder;
        context.fillStyle = fillStyle;
        context.strokeStyle = strokeStyle;

        context.moveTo(x - brushSize, y + brushSize);
        context.lineTo(x, y - brushSize);
        context.lineTo(x + brushSize, y + brushSize);

        context.closePath();

        if (fillStyle !== strokeStyle) {
            context.stroke();
        }
        context.fill();
    }
}