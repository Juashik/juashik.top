console.log(PerlinNoise(0, 1, 0));

let size = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
console.log("w ", document.documentElement.clientWidth, "h ", document.documentElement.clientHeight);
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = size;
canvas.height = size;
let number = 500;
let radius = size / 4;
let x, y;

canvas.style.marginTop = (document.documentElement.clientHeight - size) / 2 + "px";
canvas.style.marginLeft = (document.documentElement.clientWidth - size) / 2 + "px";

document.body.appendChild(canvas);

function draw() {
    ctx.clearRect(0, 0, size, size);

    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.strokeStyle = "rgb(70%, 70%, 70%)";

    ctx.save();
    ctx.translate(size / 2, size / 2);

    for (var t = 0; t < 3; t++) {
        ctx.beginPath();
        for (var i = 0; i < number; i++) {
            let angle = i * 2 * Math.PI / number;

            x = (radius) * Math.sin(angle);
            x += 20 * PerlinNoise(x / 30, time / 150, t * 10000);

            y = (radius) * Math.cos(angle);
            y += 20 * PerlinNoise(y / 30, time / 150, t * 10000);
        
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }    
    ctx.restore();
}

let time = 0;
function render() {
    draw();
    time++;
    window.requestAnimationFrame(render);
}

render();