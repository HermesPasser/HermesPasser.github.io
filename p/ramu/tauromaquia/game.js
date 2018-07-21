'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DIRECTION = { TOP: 0, LEFT: 1, RIGHT: 2, BOTTOM: 3 };

var Entity = function (_Drawable) {
	_inherits(Entity, _Drawable);

	function Entity(x, y, width, height) {
		var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'black';

		_classCallCheck(this, Entity);

		var _this = _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this, x, y, width, height, true));

		_this.color = color;
		_this.collisor = new SimpleRectCollisor(x, y, width, height);
		_this.velocity = 70;
		return _this;
	}

	_createClass(Entity, [{
		key: 'update',
		value: function update() {
			this.collisor.x = this.x;
			this.collisor.y = this.y;
		}
	}, {
		key: 'draw',
		value: function draw() {
			Ramu.ctx.fillStyle = this.color;
			Ramu.ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}, {
		key: 'fixMove',
		value: function fixMove() {
			if (this.x < -50) this.x = Ramu.width;else if (this.x > Ramu.width) this.x = -51;

			if (this.y < -50) this.y = Ramu.height;else if (this.y > Ramu.height) this.y = -51;
		}
	}, {
		key: 'force',
		value: function force() {
			return this.velocity * Ramu.time.delta;
		}
	}, {
		key: 'walkUp',
		value: function walkUp() {
			this.y -= this.force();this.fixMove();
		}
	}, {
		key: 'walkLeft',
		value: function walkLeft() {
			this.x -= this.force();this.fixMove();
		}
	}, {
		key: 'walkRight',
		value: function walkRight() {
			this.x += this.force();this.fixMove();
		}
	}, {
		key: 'walkDown',
		value: function walkDown() {
			this.y += this.force();this.fixMove();
		}
	}]);

	return Entity;
}(Drawable);

var Player = function (_Entity) {
	_inherits(Player, _Entity);

	function Player(x, y) {
		_classCallCheck(this, Player);

		return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, 50, 50));
	}

	_createClass(Player, [{
		key: 'start',
		value: function start() {
			this.tag = 'player';
			this.normalColor = 'yellow';
			this.inciteColor = 'red';
			this.collisor.tag = 'player collisor';
			this.color = this.normalColor;
		}
	}, {
		key: 'incite',
		value: function incite() {
			this.color = this.inciteColor;
		}
	}, {
		key: 'dissuade',
		value: function dissuade() {
			this.color = this.normalColor;
		}
	}]);

	return Player;
}(Entity);

var Enemy = function (_Entity2) {
	_inherits(Enemy, _Entity2);

	function Enemy(x, y) {
		_classCallCheck(this, Enemy);

		var _this3 = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, x, y, 50, 50, 'brown'));

		_this3.enemyBack = new Entity();
		_this3.collisorBack = new SimpleRectCollisor(x, y + 25, 50, 25);
		return _this3;
	}

	_createClass(Enemy, [{
		key: 'start',
		value: function start() {
			this.angry = false;
			this.angryMultiplayer = 2.5;
			this.currentDirection = DIRECTION.TOP;
			this.timeToChangeDirection = 3;
			this.currentTimeDirection = 0;

			this.inDash = false;
			this.timeToEndDash = 1.5;
			this.currentTimeDash = this.timeToEndDash;

			this.collisor.height /= 2;
			this.collisor.tag = 'enemy head';
			this.collisorBack.tag = 'enemy back';
			this.velocity = 70;
		}
	}, {
		key: 'update',
		value: function update() {
			_get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), 'update', this).call(this);
			this.collisorBack.x = this.x;
			this.collisorBack.y = this.y + 25;
			this.ai();
		}
	}, {
		key: 'drawBack',
		value: function drawBack() {
			Ramu.ctx.fillStyle = '#992828';
			Ramu.ctx.fillRect(this.x, this.y + 25, this.width, this.height / 2);
		}
	}, {
		key: 'draw',
		value: function draw() {
			_get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), 'draw', this).call(this);
			this.drawBack();
		}
	}, {
		key: 'force',
		value: function force() {
			return this.angry ? _get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), 'force', this).call(this) * this.angryMultiplayer : _get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), 'force', this).call(this);
		}
	}, {
		key: 'ai',
		value: function ai() {
			if (this.angry) this.dash();else this.LookAtRandomDirection();

			this.move();
		}
	}, {
		key: 'dash',
		value: function dash() {
			// Start Dash
			if (!this.inDash) {
				this.LookAtPlayerDirection();
				this.inDash = true;
			}

			this.currentTimeDash += Ramu.time.delta;
			if (this.currentTimeDash >= this.timeToEndDash) {
				// End Dash
				this.inDash = false;
				this.angry = false;
				this.currentTimeDash = 0;
			}
		}
	}, {
		key: 'LookAtRandomDirection',
		value: function LookAtRandomDirection() {
			// 'cause is not a good idea to change the direction each frame
			if (this.currentTimeDirection <= this.timeToChangeDirection) {
				this.currentTimeDirection += Ramu.time.delta;
				return;
			}

			this.currentTimeDirection = 0;

			var dirs = ['TOP', 'LEFT', 'RIGHT', 'BOTTOM', 'FOLLOW'];
			var dir = dirs[parseInt(Math.random() * dirs.length)];

			if (dir === 'FOLLOW') {
				this.LookAtPlayerDirection();
				return;
			}

			this.currentDirection = DIRECTION[dir];
		}
	}, {
		key: 'LookAtPlayerDirection',
		value: function LookAtPlayerDirection() {
			var x = Math.pow(game.player.x - this.x, 2),
			    y = Math.pow(game.player.y - this.y, 2);

			if (x < y) {
				if (this.y >= game.player.y) this.currentDirection = DIRECTION.TOP;else this.currentDirection = DIRECTION.BOTTOM;
			} else if (this.x >= game.player.x) this.currentDirection = DIRECTION.LEFT;else this.currentDirection = DIRECTION.RIGHT;
		}
	}, {
		key: 'move',
		value: function move() {
			switch (this.currentDirection) {
				case DIRECTION.TOP:
					this.walkUp();
					break;
				case DIRECTION.LEFT:
					this.walkLeft();
					break;
				case DIRECTION.RIGHT:
					this.walkRight();
					break;
				case DIRECTION.BOTTOM:
					this.walkDown();
			}
		}
	}]);

	return Enemy;
}(Entity);

var Game = function (_GameObj) {
	_inherits(Game, _GameObj);

	function Game() {
		_classCallCheck(this, Game);

		return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
	}

	_createClass(Game, [{
		key: 'start',
		value: function start() {
			this.scorePlayer = 0;
			this.scoreEnemy = 0;
			this.score = new Text('', Ramu.width / 2 - 25, 10, 300);
			this.rules = new Text("Hit the darkest part to kill the bull. 'a/w/s/d' to move and 'space' to incite. The bull will make attacks while you \nincite him. \nHermes Passer, in 2018-06-21", 1, 20, 500);

			// if starts in same rect then the setRules will say that enemy has won
			this.player = new Player(0, 0);
			this.enemy = new Enemy(-100, -100);

			this.reset();
			this.setRules();
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.player.x = 200;
			this.player.y = 100;
			this.player.collisor.collision = [];

			this.enemy.x = 200;
			this.enemy.y = 450;
			this.enemy.angry = false;
			this.enemy.inDash = false;

			// maybe create a func to empty this?
			Ramu.pressedKeys = {};
		}
	}, {
		key: 'setRules',
		value: function setRules() {
			this.player.collisor.onCollision = function () {
				for (var i = 0; i < this.collision.length; i++) {
					var tag = this.collision[i].tag;

					if (tag === 'enemy head') {
						game.scoreEnemy++;
						game.reset();
						break;
					}

					if (tag === 'enemy back') {
						game.scorePlayer++;
						game.reset();
						break;
					}
				}
			};
		}
	}, {
		key: 'update',
		value: function update() {
			this.input();
			this.score.text = 'PLAYER ' + this.scorePlayer + ' | ENEMY ' + this.scoreEnemy;
		}
	}, {
		key: 'input',
		value: function input() {
			if (keyCode.w in Ramu.pressedKeys) this.player.walkUp();else if (keyCode.s in Ramu.pressedKeys) this.player.walkDown();

			if (keyCode.a in Ramu.pressedKeys) this.player.walkLeft();else if (keyCode.d in Ramu.pressedKeys) this.player.walkRight();

			if (keyCode.space in Ramu.pressedKeys) {
				this.player.incite();
				this.enemy.angry = true;
			} else {
				this.player.dissuade();
			}
		}
	}]);

	return Game;
}(GameObj);

Ramu.init(500, 500);
// Ramu.debugMode = true;

var game = new Game();