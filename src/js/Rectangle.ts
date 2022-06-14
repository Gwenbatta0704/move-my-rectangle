import {settings} from "./settings";

export class Rectangle {
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private color: string;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private speedX = 3;
    private speedY = 4;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.width = Math.ceil(settings.minWidth+Math.random()*(settings.maxWidth-settings.minWidth));
        this.height = Math.trunc(this.width*settings.heightRatio);
        this.x = this.width/2+Math.random()*((canvas.width-this.width/2)-(this.width/2));
        this.y = this.height/2+Math.random()*((canvas.height-this.height/2)-(this.height/2));
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.color = `hsl(${settings.colors[Math.floor(Math.random()*settings.colors.length)]}, ${Math.ceil(Math.random()*100)}%, ${Math.ceil(Math.random()*100)}%)`;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
        this.ctx.restore();
    }

    update() {
        if (this.x <0 || this.x> this.canvas.width){
            this.speedX = -this.speedX
        }if (this.y <0 || this.y> this.canvas.height){
            this.speedY = -this.speedY
        }
        this.x += this.speedX;
        this.y += this.speedY;
        this.draw();
    }
}