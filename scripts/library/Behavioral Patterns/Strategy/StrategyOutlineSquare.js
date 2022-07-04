import { Strategy } from "./Strategy.js";

export class StrategyOutlineSquare extends Strategy {
    draw(context, x, y, brushSize = 10, widthBorder = 5, fillStyle = 'black', strokeStyle = 'black') {
        context.beginPath();

        context.lineWidth = widthBorder;
        context.strokeStyle = strokeStyle;

        context.strokeRect(x - (brushSize / 2), y - (brushSize / 2), brushSize, brushSize);
        context.closePath();
    }
}