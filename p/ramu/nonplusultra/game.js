'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ROCK_IMG = Ramu.Utils.getImage('res/rock.gif');

var Rock = function (_SimpleRectCollisor) {
	_inherits(Rock, _SimpleRectCollisor);

	function Rock(x, y) {
		_classCallCheck(this, Rock);

		var _this = _possibleConstructorReturn(this, (Rock.__proto__ || Object.getPrototypeOf(Rock)).call(this, x, y, 39, 36));

		_this.velocity = 100;
		_this.sprite = new Sprite(ROCK_IMG, x, y, 39, 36);
		return _this;
	}

	_createClass(Rock, [{
		key: 'update',
		value: function update() {
			if (game.isDead) return;

			this.x -= this.velocity * Ramu.time.delta;
			this.sprite.x -= this.velocity * Ramu.time.delta;

			if (this.x + this.width < 0) this.destroy();
		}
	}, {
		key: 'onCollision',
		value: function onCollision() {
			for (var i = 0; i < this.collision.length; i++) {
				if (this.collision[i].tag === 'player') {
					game.player.destroy();
					game.isDead = true;
					break;
				}
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			_get(Rock.prototype.__proto__ || Object.getPrototypeOf(Rock.prototype), 'destroy', this).call(this);
			this.sprite.destroy();
		}
	}], [{
		key: 'instantiate',
		value: function instantiate() {
			new Rock(500, Math.trunc(Math.random() * Ramu.width));
		}
	}]);

	return Rock;
}(SimpleRectCollisor);

var Player = function (_SimpleRectCollisor2) {
	_inherits(Player, _SimpleRectCollisor2);

	function Player(x, y) {
		_classCallCheck(this, Player);

		var _this2 = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, 100, 50));

		_this2.velocity = 5;
		_this2.tag = 'player';
		_this2.sprite = new Sprite(Ramu.Utils.getImage('res/ship.gif'), x, y, 100, 50);
		return _this2;
	}

	_createClass(Player, [{
		key: 'up',
		value: function up() {
			if (this.y <= 0) return;

			this.y -= this.velocity;
			this.sprite.y -= this.velocity;
		}
	}, {
		key: 'left',
		value: function left() {
			if (this.x <= 0) return;

			this.x -= this.velocity;
			this.sprite.x -= this.velocity;
		}
	}, {
		key: 'right',
		value: function right() {
			if (this.x + this.width >= Ramu.width) return;

			this.x += this.velocity;
			this.sprite.x += this.velocity;
		}
	}, {
		key: 'down',
		value: function down() {
			if (this.y + this.height >= Ramu.height) return;

			this.y += this.velocity;
			this.sprite.y += this.velocity;
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			_get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'destroy', this).call(this);
			this.sprite.destroy();
		}
	}]);

	return Player;
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
			this.sea = new SpriteAnimation(0, 0, 500, 500);
			this.sea.addFrame([Ramu.Utils.getImage('res/sea1.gif'), Ramu.Utils.getImage('res/sea2.gif')]);

			this.player = new Player(200, 200);
			this.rules = new Text("'a/w/s/d' to move. Hermes Passer, in 2018-07-03", 1, 20, 300);
			this.timeToInstantiate = 2;
			this.currentTimeToInstantiate = 2;
			this.isDead = false;
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.isDead) return;

			this.input();

			this.currentTimeToInstantiate += Ramu.time.delta;
			if (this.currentTimeToInstantiate >= this.timeToInstantiate) {
				this.currentTimeToInstantiate = 0;
				Rock.instantiate();
			}
		}
	}, {
		key: 'input',
		value: function input() {
			if (keyCode.w in Ramu.pressedKeys) this.player.up();
			if (keyCode.s in Ramu.pressedKeys) this.player.down();
			if (keyCode.a in Ramu.pressedKeys) this.player.left();
			if (keyCode.d in Ramu.pressedKeys) this.player.right();
		}
	}]);

	return Game;
}(GameObj);

Ramu.init(500, 500);

var game = new Game();