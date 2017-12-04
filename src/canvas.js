import Time from './time';
import Vector2 from './vectors';

// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = new Vector2(canvas.width / 2, canvas.height / 2);

let time;

const colors = [
    '#2a2a2a',
    '#6b7783',
    '#511c16',
    '#0c3c60',
    '#ff703f'
];

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    start()
});

// Utility 
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(v1, v2) {
    const xDist = v2.x - v1.x;
    const yDist = v2.y - v1.y;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Basic Physics Object
class Rigidbody2D{
    constructor(x = canvas.width / 2, y = canvas.height / 2,
    radius = 30, color = randomColor(colors)) {

        this.pos = new Vector2(
            randomIntFromRange(100, 800),
            randomIntFromRange(100,400));

        this.vel = new Vector2(
            randomIntFromRange(-600,600),
            randomIntFromRange(-600,600));

        this.accel = new Vector2(0,980);

        this.frictionCoefficient = .96;
        this.radius = radius;
        this.color = color;
        this._colliding = false;
    }
    checkCollision(){
        //Collision against screen boundaries
        this._colliding = false;
        if(this.pos.x < this.radius){
            this.pos.x = this.radius;
            this._colliding = true;
            this.vel.x = -this.vel.x * this.frictionCoefficient;
        }
        else if(this.pos.x > canvas.width - this.radius){
            this.pos.x = canvas.width - this.radius;
            this._colliding = true;
            this.vel.x = -this.vel.x * this.frictionCoefficient;
        }
        if(this.pos.y <= this.radius){
            this.y = this.radius
            this._colliding = true;
            this.vel.y = -this.vel.y * this.frictionCoefficient;
        }
        else if( this.pos.y >= canvas.height - this.radius){
            this.y = canvas.height - this.radius
            this._colliding = true;
            this.vel.y = -this.vel.y * this.frictionCoefficient;
        }
    }
    update() {
        this.checkCollision();
        //Update velocity only if the rigidbody isn't colliding with anything
        if(!this._colliding)
        this.vel = this.vel.add(this.accel.multiply(time.deltaTime));
        //Update position
        this.pos = this.pos.add(this.vel.multiply(time.deltaTime));
        
        this.draw()
    }
    draw (){
        c.beginPath()
        c.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }
}

// Implementation
let balls
function start() {
    balls = []
    for (let i = 0; i < 20; i++) {
        balls.push(new Rigidbody2D());
    }
}

// Animation Loop
function update(currentTime) {
    //Initialize time object and update with current timestamp
    if(!time) time = new Time(currentTime);
    time.update(currentTime);
    requestAnimationFrame(update);

    c.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
     ball.update();
    });
}

start();
update(0);