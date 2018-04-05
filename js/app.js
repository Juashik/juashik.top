console.log(PerlinNoise(0, 1, 0));

let size = Math.min(document.getElementById("content").clientWidth, document.getElementById("content").clientHeight);
console.log("w ", document.documentElement.clientWidth, "h ", document.documentElement.clientHeight);
console.log("size", size);

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
//size *= 2;
canvas.width = size;
canvas.height = size;
let number = 500;
let radius = size / 4;
let x, y;


if (window.devicePixelRatio > 1) {
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    canvas.width = canvasWidth * window.devicePixelRatio;
    canvas.height = canvasHeight * window.devicePixelRatio;
    canvas.style.width = canvasWidth;
    canvas.style.height = canvasHeight;

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

document.getElementById("content").appendChild(canvas);

function draw() {
    ctx.clearRect(0, 0, size, size);

    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.strokeStyle = "rgb(70%, 70%, 70%)";

    //ctx.fillRect(0, 0, size, size);
    //ctx.fillRect(size / 2, 0, 1, size);
    //ctx.fillRect(0, size / 2, size, 1);
    ctx.lineWidth = 1;

    ctx.save();
    ctx.translate(size / 2, size / 2);

    for (var t = 0; t < 5; t++) {
        ctx.beginPath();
        rnd = Math.random;
        for (var i = 0; i < number; i++) {
            let angle = i * 2 * Math.PI / number;

            x = (radius + 40 * PerlinNoise(Math.sin(angle)*20, time / 150, t)) * Math.sin(angle);
            //x += 2*PerlinNoise(x / 3, time / 150, t * 10000);

            y = (radius + 40 * PerlinNoise(Math.cos(angle)*15, time / 150, t)) * Math.cos(angle);
            //y += 2*PerlinNoise(y / 4, time / 155, t * 10000);
        
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