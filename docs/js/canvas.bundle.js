/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Time = function () {
    function Time(start) {
        _classCallCheck(this, Time);

        this.currentTime = start;
        this._deltaTime = 0;
    }

    _createClass(Time, [{
        key: "update",
        value: function update(newTime) {
            this._deltaTime = newTime - this.currentTime;
            this.currentTime = newTime;
            //Framerate is the inverse of the time between
            this.frameRate = 1000 / this._deltaTime;
        }
    }, {
        key: "deltaTime",
        get: function get() {
            //Return the delta in seconds
            return this._deltaTime / 1000;
        }
    }]);

    return Time;
}();

exports.default = Time;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2 = function () {
    function Vector2(x, y) {
        _classCallCheck(this, Vector2);

        this.x = x;
        this.y = y;
    }

    _createClass(Vector2, [{
        key: "add",
        value: function add(v) {
            return new Vector2(this.x + v.x, this.y + v.y);
        }
    }, {
        key: "subtract",
        value: function subtract(v) {
            return new Vector2(this.x - v.x, this.y - v.y);
        }
    }, {
        key: "normalize",
        value: function normalize() {
            var hyp = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
            return new Vector2(this.x / hyp, this.y / hyp);
        }
    }, {
        key: "multiply",
        value: function multiply(scalar) {
            return new Vector2(this.x * scalar, this.y * scalar);
        }
    }]);

    return Vector2;
}();

exports.default = Vector2;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _time = __webpack_require__(0);

var _time2 = _interopRequireDefault(_time);

var _vectors = __webpack_require__(1);

var _vectors2 = _interopRequireDefault(_vectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var Mouse = function () {
    function Mouse() {
        _classCallCheck(this, Mouse);

        this.pos = new _vectors2.default(canvas.width / 2, canvas.height / 2);
        this.animationPos = new _vectors2.default(canvas.width / 2, canvas.height / 2);
    }

    _createClass(Mouse, [{
        key: 'update',
        value: function update() {
            this.vel = this.pos.subtract(this.animationPos).multiply(time.frameRate);
            this.animationPos.x = this.pos.x;
            this.animationPos.y = this.pos.y;
        }
    }]);

    return Mouse;
}();

var mouse = new Mouse();

var time = void 0,
    mouseDown = false;

var colors = ['#2a2a2a', '#6b7783', '#511c16', '#0c3c60', '#ff703f'];

// Event Listeners
addEventListener('mousemove', function (event) {
    mouse.pos.x = event.clientX;
    mouse.pos.y = event.clientY;
});

addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    start();
});
canvas.addEventListener('mousedown', function (e) {
    if (e.button === 0) {
        mouseDown = true;
    }
});
canvas.addEventListener('mouseup', function (e) {
    if (e.button === 0) {
        mouseDown = false;
    }
});

// Utility 
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(v1, v2) {
    var xDist = v2.x - v1.x;
    var yDist = v2.y - v1.y;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Basic Physics Object

var Rigidbody2D = function () {
    function Rigidbody2D() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : canvas.width / 2;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : canvas.height / 2;
        var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
        var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : randomColor(colors);

        _classCallCheck(this, Rigidbody2D);

        this.pos = new _vectors2.default(randomIntFromRange(100, 800), randomIntFromRange(100, 400));

        this.vel = new _vectors2.default(randomIntFromRange(-600, 600), randomIntFromRange(-600, 600));

        this.accel = new _vectors2.default(0, 980);

        this.frictionCoefficient = .96;
        this.radius = radius;
        this.initialRadius = radius;
        this.maxRadius = 60;
        this.grabbed = false;
        this.grabbedOffset = new _vectors2.default(0, 0);
        this.growSpeed = 20;
        this.color = color;
        this._colliding = false;
    }

    _createClass(Rigidbody2D, [{
        key: 'checkCollision',
        value: function checkCollision() {
            //Collision against screen boundaries
            this._colliding = false;
            if (this.pos.x <= this.radius) {
                this.vel.x = -this.vel.x * this.frictionCoefficient;
            } else if (this.pos.x >= canvas.width - this.radius) {
                this.vel.x = -this.vel.x * this.frictionCoefficient;
            }
            if (this.pos.y <= this.radius) {
                //this._colliding = true;
                this.vel.y = -this.vel.y * this.frictionCoefficient;
            } else if (this.pos.y >= canvas.height - this.radius) {
                this.vel.y = -this.vel.y * this.frictionCoefficient;
                this.pos.y -= 5;
                this.accel.x = 0;
                this.accel.y = 0;
            } else {
                this.accel.x = 0;
                this.accel.y = 980;
            }
        }
    }, {
        key: 'checkMouse',
        value: function checkMouse() {
            if (distance(this.pos, mouse.pos) <= this.radius && mouseDown) {
                if (this.radius < this.maxRadius) {
                    this.radius += this.maxRadius / this.growSpeed;
                }
                this.grabbed = true;
            } else if (this.radius > this.initialRadius) {
                this.radius -= this.initialRadius / this.growSpeed;
            }
        }
    }, {
        key: 'update',
        value: function update() {
            this.checkCollision();
            this.checkMouse();

            if (!this.grabbed) {
                this.grabbedOffset = 'OFF';
                //Update velocity only if the rigidbody isn't colliding with anything
                if (!this._colliding) this.vel = this.vel.add(this.accel.multiply(time.deltaTime));
                //Update position
                this.pos = this.pos.add(this.vel.multiply(time.deltaTime));
            } else {
                if (this.grabbedOffset === 'OFF') {
                    this.grabbedOffset = this.pos.subtract(mouse.pos);
                }
                this.grabbed = false;
                this.pos = mouse.pos.add(this.grabbedOffset);
                this.vel = mouse.vel;
            }

            this.draw();
        }
    }, {
        key: 'draw',
        value: function draw() {
            c.beginPath();
            c.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
        }
    }]);

    return Rigidbody2D;
}();

// Implementation


var balls = void 0;
function start() {
    balls = [];
    for (var i = 0; i < 20; i++) {
        balls.push(new Rigidbody2D());
    }
}

// Animation Loop
function update(currentTime) {
    //Initialize time object and update with current timestamp
    if (!time) time = new _time2.default(currentTime);
    time.update(currentTime);
    mouse.update();
    requestAnimationFrame(update);

    //Clear and draw
    c.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(function (ball) {
        ball.update();
    });
}

start();
update(0);

/***/ })
/******/ ]);
//# sourceMappingURL=canvas.bundle.js.map