import {settings} from "./settings";
import {Rectangle} from "./Rectangle";

const rectangles: Rectangle[] = [];

const canvas: HTMLCanvasElement = document.getElementById("my-canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', (event) => {
    updateCanvasSize();
})
updateCanvasSize();


canvas.addEventListener('click', (event) => {
    rectangles.push(new Rectangle(ctx, canvas));
    // @ts-ignore
    console.log(rectangles);
})

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const rectangle of rectangles) {
        rectangle.update();
    }
    requestAnimationFrame(animate);
}
animate();