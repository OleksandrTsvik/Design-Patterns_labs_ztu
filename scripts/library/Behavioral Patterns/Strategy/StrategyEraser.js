import { Strategy } from "./Strategy.js";

export class StrategyEraser extends Strategy {
    draw(context, x, y, radius, widthBorder, fillStyle, strokeStyle) {
        context.globalAlpha = 1;
        context.lineWidth = 2 * radius;
        context.fillStyle = fillStyle;
        context.strokeStyle = strokeStyle;

        context.lineTo(x, y);
        context.stroke();

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.moveTo(x, y);
    }
}