const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVEMENT_AMOUNT = 10;
let hue = 0;
const {width, height} = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = MOVEMENT_AMOUNT;

ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();


function draw({key}){
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x,y);
    
    switch (key) {
        case "ArrowUp":
            y -= 10;
            break;
        
        case "ArrowDown":
            y += 10;
            break;

        case "ArrowLeft":
                x -= 10;
                break;
        
        case "ArrowRight":
                x += 10;
                break;
        default:
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0,0,width,height);
    x = Math.floor(Math.random() * width);
    y = Math.floor(Math.random() * height);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y);
    ctx.stroke();
    canvas.addEventListener('animationend', () => {
        canvas.classList.remove('shake');
    })
}

function handleKeys(e) {
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({key: e.key})
    }
    
}

window.addEventListener('keydown', handleKeys);
shakeButton.addEventListener('click', clearCanvas)