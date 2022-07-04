import { Strategy } from "./Strategy.js";

export class StrategyCircle extends Strategy {
    draw(context, x, y, radius = 10, widthBorder = 5, fillStyle = 'black', strokeStyle = 'black') {
        context.beginPath();

        context.lineWidth = widthBorder;
        context.fillStyle = fillStyle;
        context.strokeStyle = strokeStyle;

        context.arc(x, y, radius, 0, 2 * Math.PI);

        if (fillStyle !== strokeStyle) {
            context.stroke();
        }
        context.fill();

        context.closePath();
    }
}