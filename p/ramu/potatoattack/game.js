"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Potato Attack by Hermes Passer in 09-12-17 using Ramu 0.2 and adapted to Ramu 0.6
var POTATO_IMG = RamuUtils.getImage("img/potato.png");

var AnimatedCollisor = function (_SimpleRectCollisor) {
	_inherits(AnimatedCollisor, _SimpleRectCollisor);

	function AnimatedCollisor(x, y, w, h) {
		_classCallCheck(this, AnimatedCollisor);

		var _this = _possibleConstructorReturn(this, (AnimatedCollisor.__proto__ || Object.getPrototypeOf(AnimatedCollisor)).call(this, x, y, w, h));

		_this.forceX = 5;
		_this.forceY = -5;
		return _this;
	}

	_createClass(AnimatedCollisor, [{
		key: "onCollision",
		value: function onCollision() {
			this.forceX = -this.forceX;
			this.forceY = -this.forceY;
		}
	}]);

	return AnimatedCollisor;
}(SimpleRectCollisor);

var StaticRect = function (_GameObj) {
	_inherits(StaticRect, _GameObj);

	function StaticRect(x, y, w, h) {
		_classCallCheck(this, StaticRect);

		var _this2 = _possibleConstructorReturn(this, (StaticRect.__proto__ || Object.getPrototypeOf(StaticRect)).call(this, x, y));

		_this2.collider = new AnimatedCollisor(x, y, w, h);
		_this2.sprite = new Sprite(POTATO_IMG, x, y, w, h);
		_this2.sprite.canDraw = false;
		return _this2;
	}

	return StaticRect;
}(GameObj);

var AnimatedRect = function (_Drawable) {
	_inherits(AnimatedRect, _Drawable);

	function AnimatedRect(x, y, w, h) {
		_classCallCheck(this, AnimatedRect);

		var _this3 = _possibleConstructorReturn(this, (AnimatedRect.__proto__ || Object.getPrototypeOf(AnimatedRect)).call(this, x, y, w, h, false));

		_this3.collider = new AnimatedCollisor(x, y, w, h);
		_this3.sprite = new Sprite(POTATO_IMG, x, y, w, h);
		_this3.sprite.forceX = Math.floor(Math.random() * 10) - 5;
		_this3.sprite.forceY = Math.floor(Math.random() * 10) - 5;
		_this3.sprite.canDraw = false;
		return _this3;
	}

	_createClass(AnimatedRect, [{
		key: "update",
		value: function update() {
			if (this.x <= 0 || this.x >= Ramu.canvas.width - this.width) {
				this.collider.forceX = -this.collider.forceX;
			}

			if (this.y <= 0 || this.y >= Ramu.canvas.height - this.height) {
				this.collider.forceY = -this.collider.forceY;
			}

			this.x += this.collider.forceX;
			this.y += this.collider.forceY;
			this.sprite.x += this.collider.forceX;
			this.sprite.y += this.collider.forceY;
			this.collider.x += this.collider.forceX;
			this.collider.y += this.collider.forceY;
		}
	}]);

	return AnimatedRect;
}(Drawable);

var MovingChar = function (_SimpleRectCollisor2) {
	_inherits(MovingChar, _SimpleRectCollisor2);

	function MovingChar(x, y, width, height) {
		_classCallCheck(this, MovingChar);

		var _this4 = _possibleConstructorReturn(this, (MovingChar.__proto__ || Object.getPrototypeOf(MovingChar)).call(this, x, y, width, height));

		_this4.die = false;
		return _this4;
	}

	_createClass(MovingChar, [{
		key: "draw",
		value: function draw() {
			_get(MovingChar.prototype.__proto__ || Object.getPrototypeOf(MovingChar.prototype), "draw", this).call(this);
			if (this.die) Ramu.ctx.fillText("*died*", this.x, this.y);else Ramu.ctx.strokeRect(this.x, this.y, this.width, this.height);
		}
	}, {
		key: "update",
		value: function update() {
			if (this.die) return;

			_get(MovingChar.prototype.__proto__ || Object.getPrototypeOf(MovingChar.prototype), "update", this).call(this);

			this.canDraw = true;
			var value = 100 * Ramu.time.delta;

			if (keyCode.a in Ramu.lastKeysPressed) this.x -= value;
			if (keyCode.d in Ramu.lastKeysPressed) this.x += value;
			if (keyCode.s in Ramu.lastKeysPressed) this.y += value;
			if (keyCode.w in Ramu.lastKeysPressed) this.y -= value;

			if (this.x <= 0) this.x = Ramu.canvas.width - this.width;else if (this.x >= Ramu.canvas.width) this.x = this.width;

			if (this.y <= 0) {
				this.y = Ramu.canvas.height - this.height;
			} else if (this.y >= Ramu.canvas.height) {
				this.y = this.height;
			}
		}
	}, {
		key: "onCollision",
		value: function onCollision() {
			if (!this.die) {
				this.width--;
				this.height--;
			}

			if (this.width <= 0 && this.height <= 0) {
				this.die = true;
				this.canCollide = false;
			}
		}
	}]);

	return MovingChar;
}(SimpleRectCollisor);

var MyGame = function (_Drawable2) {
	_inherits(MyGame, _Drawable2);

	function MyGame() {
		_classCallCheck(this, MyGame);

		return _possibleConstructorReturn(this, (MyGame.__proto__ || Object.getPrototypeOf(MyGame)).apply(this, arguments));
	}

	_createClass(MyGame, [{
		key: "start",
		value: function start() {
			this.canDraw = true;

			Ramu.inLoop = false;

			this.block1 = new StaticRect(300, 50, 50, 50);
			this.block2 = new StaticRect(200, 300, 50, 50);

			this.option = [0, 1, 2];
			this.state = { menu: 0, game: 1, gameOver: 2 };
			this.reset();

			this.w = Ramu.canvas.width / 2 - 35;
			this.h = Ramu.canvas.height / 2 - 50;

			this.gradient = Ramu.ctx.createLinearGradient(0, 0, Ramu.canvas.width, 0);
			this.gradient.addColorStop("0", "red");
			this.gradient.addColorStop("0.5", "blue");
			this.gradient.addColorStop("0.8", "green");
		}
	}, {
		key: "readInput",
		value: function readInput() {
			if (keyCode.s in Ramu.lastKeysPressed) this.currOp = (this.currOp + 1) % this.option.length;else if (keyCode.w in Ramu.lastKeysPressed) this.currOp = this.currOp - 1 <= -1 ? this.option.length - 1 : this.currOp - 1;

			if (keyCode.enter in Ramu.lastKeysPressed) {
				if (this.currState == this.state.gameOver) {
					this.character.destroy();
					this.currState = this.state.menu;
					this.reset();
				} else {
					switch (this.currOp) {
						case 0:
							this.currState = this.state.game;
							break;
						case 1:
							Ramu.debugMode = !Ramu.debugMode;
							break;
						case 2:
							break;
					}
				}
			}
		}
	}, {
		key: "reset",
		value: function reset() {
			this.character = new MovingChar(Ramu.canvas.width / 2 - 25, Ramu.canvas.height / 2 - 25, 50, 50);
			this.enemy1 = new AnimatedRect(Math.floor(Math.random() * Ramu.canvas.width - 70), Math.floor(Math.random() * Ramu.canvas.height - 70), 70, 70);

			this.enemy2 = new AnimatedRect(Math.floor(Math.random() * Ramu.canvas.width - 70), Math.floor(Math.random() * Ramu.canvas.height - 70), 40, 70);

			this.enemy1.sprite.canDraw = false;
			this.enemy2.sprite.canDraw = false;
			this.block1.sprite.canDraw = false;
			this.block2.sprite.canDraw = false;

			this.currOp = 0;
			this.currState = this.state.menu;
		}
	}, {
		key: "update",
		value: function update() {
			if (this.character.die) {
				this.currState = this.state.gameOver;
				this.currOp = 0;
			}
		}
	}, {
		key: "draw",
		value: function draw() {
			Ramu.ctx.fillStyle = this.gradient;

			switch (this.currState) {
				case this.state.menu:
					this.readInput();
					Ramu.ctx.font = "30px Verdana";
					Ramu.ctx.fillText("Potato Attack", this.w - 65, this.h - 50);

					Ramu.ctx.font = "13px Arial";
					Ramu.ctx.strokeStyle = this.currOp == 0 ? "red" : "black";
					Ramu.ctx.strokeText("Start", this.w, this.h);

					Ramu.ctx.strokeStyle = this.currOp == 1 ? "red" : "black";
					Ramu.ctx.strokeText("Run in debug mode: " + Ramu.debugMode, this.w, this.h + 20);

					Ramu.ctx.strokeStyle = this.currOp == 2 ? "red" : "black";
					Ramu.ctx.strokeText("Empty option", this.w, this.h + 40);

					Ramu.ctx.strokeStyle = "black";
					Ramu.ctx.strokeText("up = w", 1, Ramu.canvas.height - 65);
					Ramu.ctx.strokeText("down = s", 1, Ramu.canvas.height - 45);
					Ramu.ctx.strokeText("left = s", 1, Ramu.canvas.height - 25);
					Ramu.ctx.strokeText("right = d", 1, Ramu.canvas.height - 5);
					Ramu.ctx.strokeText("Hermes Passer - 2017", this.w - 30, Ramu.canvas.height - 5);
					break;
				case this.state.game:
					this.character.canDraw = true;
					this.enemy1.sprite.canDraw = true;
					this.enemy2.sprite.canDraw = true;
					this.block1.sprite.canDraw = true;
					this.block2.sprite.canDraw = true;
					Ramu.inLoop = true;

					break;
				case this.state.gameOver:
					this.readInput();
					Ramu.inLoop = false;

					Ramu.ctx.font = "30px Verdana";
					Ramu.ctx.fillText("Game Over", this.w - 50, this.h - 50);

					Ramu.ctx.font = "13px Arial";
					Ramu.ctx.strokeStyle = "red";
					Ramu.ctx.strokeText("return to main menu", this.w, this.h);
					break;
			}
		}
	}]);

	return MyGame;
}(Drawable);

new MyGame(0, 0, 0, 0);
Ramu.init();