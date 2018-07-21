'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOMATO_IMG = Ramu.Utils.getImage('res/tomato.gif');
var CITIZEN_IMG = Ramu.Utils.getImage('res/citizen.gif');

var Tomato = function (_SimpleRectCollisor) {
	_inherits(Tomato, _SimpleRectCollisor);

	function Tomato(x) {
		_classCallCheck(this, Tomato);

		var _this = _possibleConstructorReturn(this, (Tomato.__proto__ || Object.getPrototypeOf(Tomato)).call(this, x, 541, 41, 39));

		_this.sprite = new Sprite(TOMATO_IMG, x, 541, 41, 39);
		_this.sprite.drawPriority = 3;
		_this.tag = 'tomato';
		_this.velocity = 300;
		return _this;
	}

	_createClass(Tomato, [{
		key: 'update',
		value: function update() {
			_get(Tomato.prototype.__proto__ || Object.getPrototypeOf(Tomato.prototype), 'update', this).call(this);
			this.y -= this.velocity * Ramu.time.delta;
			this.sprite.y -= this.velocity * Ramu.time.delta;

			if (this.y + this.width < 0) {
				this.destroy();
				this.sprite.destroy();
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			_get(Tomato.prototype.__proto__ || Object.getPrototypeOf(Tomato.prototype), 'destroy', this).call(this);
			this.sprite.destroy();
		}
	}]);

	return Tomato;
}(SimpleRectCollisor);

var Citizen = function (_SimpleRectCollisor2) {
	_inherits(Citizen, _SimpleRectCollisor2);

	function Citizen(x) {
		_classCallCheck(this, Citizen);

		var _this2 = _possibleConstructorReturn(this, (Citizen.__proto__ || Object.getPrototypeOf(Citizen)).call(this, x, 259, 58, 69));

		_this2.sprite = new Sprite(CITIZEN_IMG, x, 259, 58, 69);
		_this2.sprite.drawPriority = 1;
		_this2.canCollide = false;
		_this2.tag = 'citizen';

		_this2.state = ['goingUp', 'waiting', 'goingDown', 'destroy'];
		_this2.currentState = 0;
		_this2.timeToChangeState = 40;
		_this2.currentTimeToChange = 0;
		return _this2;
	}

	_createClass(Citizen, [{
		key: 'goUp',
		value: function goUp() {
			this.canCollide = false;
			this.y -= 100 * Ramu.time.delta;
			this.sprite.y -= 100 * Ramu.time.delta;
		}
	}, {
		key: 'goDown',
		value: function goDown() {
			this.canCollide = false;
			this.y += 100 * Ramu.time.delta;
			this.sprite.y += 100 * Ramu.time.delta;
		}
	}, {
		key: 'update',
		value: function update() {
			_get(Citizen.prototype.__proto__ || Object.getPrototypeOf(Citizen.prototype), 'update', this).call(this);

			this.currentTimeToChange += 1;
			if (this.currentTimeToChange >= this.timeToChangeState) {
				this.currentTimeToChange = 0;
				this.currentState++;
			}

			switch (this.state[this.currentState]) {
				case 'goingUp':
					this.goUp();
					break;
				case 'waiting':
					this.canCollide = true;
					break;
				case 'goingDown':
					this.goDown();
					break;
				case 'destroy':
					game.missScore++;
					this.destroy();
			}
		}
	}, {
		key: 'onCollision',
		value: function onCollision() {
			var obj = this;
			this.collision.forEach(function (item) {
				if (item.tag === 'tomato') {
					game.hitScore++;
					item.destroy();
					obj.destroy();
				}
			});
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			_get(Citizen.prototype.__proto__ || Object.getPrototypeOf(Citizen.prototype), 'destroy', this).call(this);
			this.sprite.destroy();
		}
	}]);

	return Citizen;
}(SimpleRectCollisor);

var Game = function (_GameObj) {
	_inherits(Game, _GameObj);

	function Game() {
		_classCallCheck(this, Game);

		return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
	}

	_createClass(Game, [{
		key: 'start',
		value: function start() {
			this.bg = new Parallax(Ramu.Utils.getImage('res/crowd.gif'), 0, 0, 500, 259, 50);
			this.truck = new Sprite(Ramu.Utils.getImage('res/bucket.gif'), 0, 259, 500, 241);
			this.truck.drawPriority = 2;

			this.score = new Text('', Ramu.width / 2 - 40, 460, 300);
			this.infoDump = new Text('Click to throw a tomato. Hermes Passer in 2018-06-26', 40, 480, 300);

			this.timeToThrow = 1;
			this.currentTimeThrow = this.timeToThrow;
			this.canThrow = false;

			this.timeToInstantiate = 1;
			this.currentTimeInstantiate = 0;

			this.hitScore = 0;
			this.missScore = 0;

			this.clickableCanvas = new Clickable(0, 0, Ramu.width, Ramu.height);
			this.clickableCanvas.onClick = function () {
				game.throwTomato(Ramu.clickedPosition.X);
			};
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.currentTimeThrow >= this.timeToThrow) this.canThrow = true;

			if (this.currentTimeInstantiate >= this.timeToInstantiate) this.instantiateCitizen();

			this.currentTimeThrow += Ramu.time.delta;
			this.currentTimeInstantiate += Ramu.time.delta;
			this.score.text = "HITS: " + this.hitScore + " | MISS: " + this.missScore;
		}
	}, {
		key: 'throwTomato',
		value: function throwTomato(x) {
			if (!this.canThrow) return;
			new Tomato(x);
			this.currentTimeThrow = 0;
			this.canThrow = false;
		}
	}, {
		key: 'instantiateCitizen',
		value: function instantiateCitizen() {
			this.currentTimeInstantiate = 0;
			var x = Math.trunc(Math.random() * Ramu.width);
			new Citizen(x);
		}
	}]);

	return Game;
}(GameObj);

Ramu.init(500, 500);
// Ramu.debugMode = true;
var game = new Game();