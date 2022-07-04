import { Strategy } from "./Strategy.js";

export class StrategyDiamond extends Strategy {
    draw(context, x, y, brushSize = 15, widthBorder = 5, fillStyle = 'black', strokeStyle = 'black') {
        context.beginPath();

        context.lineWidth = widthBorder;
        context.fillStyle = fillStyle;
        context.strokeStyle = strokeStyle;

        context.moveTo(x - brushSize, y);
        context.lineTo(x, y - (brushSize * 1.4));
        context.lineTo(x + brushSize, y);
        context.lineTo(x, y + (brushSize * 1.4));
        context.lineTo(x - brushSize, y);

        context.closePath();

        if (fillStyle !== strokeStyle) {
            context.stroke();
        }
        context.fill();
    }
}