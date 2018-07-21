'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Train = function (_SimpleRectCollisor) {
	_inherits(Train, _SimpleRectCollisor);

	function Train(x, y) {
		_classCallCheck(this, Train);

		var _this = _possibleConstructorReturn(this, (Train.__proto__ || Object.getPrototypeOf(Train)).call(this, x, y, 32, 47));

		_this.sprite = new Sprite(Ramu.Utils.getImage('res/train.gif'), _this.x, _this.y, 32, 47);
		_this.sprite.drawPriority = 1;

		_this.drawPriority = _this.sprite.drawPriority + 1;
		_this.velocity = 50;
		_this.canGo = false;
		_this.tag = 'train';
		return _this;
	}

	_createClass(Train, [{
		key: 'update',
		value: function update() {
			_get(Train.prototype.__proto__ || Object.getPrototypeOf(Train.prototype), 'update', this).call(this);

			if (this.canGo) {
				this.y -= this.velocity * Ramu.time.delta;
				this.sprite.y -= this.velocity * Ramu.time.delta;
			}

			if (Ramu.Utils.isOutOfCanvas(this)) {
				game.lose();
				game.audio.pause();
				this.canGo = false;
			}
		}
	}, {
		key: 'teleport',
		value: function teleport() {
			this.x = game.exPortal.x - 1;
			this.y = game.exPortal.y;
			this.sprite.x = game.exPortal.x - 1;
			this.sprite.y = game.exPortal.y;
		}
	}]);

	return Train;
}(SimpleRectCollisor);

var EntranceTunnel = function (_SimpleRectCollisor2) {
	_inherits(EntranceTunnel, _SimpleRectCollisor2);

	function EntranceTunnel(x, y) {
		_classCallCheck(this, EntranceTunnel);

		var _this2 = _possibleConstructorReturn(this, (EntranceTunnel.__proto__ || Object.getPrototypeOf(EntranceTunnel)).call(this, x, y, 34, 17));

		_this2.sprite = new Sprite(Ramu.Utils.getImage('res/entrance_tunnel.png'), _this2.x, _this2.y, 34, 97);
		_this2.drawPriority = _this2.sprite.drawPriority + 1;
		return _this2;
	}

	_createClass(EntranceTunnel, [{
		key: 'onCollision',
		value: function onCollision() {
			for (var i = 0; i < this.collision.length; i++) {
				if (this.collision[i].tag === 'train') {
					game.train.canGo = false;
					game.audio.pause();
					game.win();
				}
			}
		}
	}]);

	return EntranceTunnel;
}(SimpleRectCollisor);

var EntrancePortal = function (_SimpleRectCollisor3) {
	_inherits(EntrancePortal, _SimpleRectCollisor3);

	function EntrancePortal(x, y) {
		_classCallCheck(this, EntrancePortal);

		var _this3 = _possibleConstructorReturn(this, (EntrancePortal.__proto__ || Object.getPrototypeOf(EntrancePortal)).call(this, x, y, 26, 6));

		_this3.sprite = new Sprite(Ramu.Utils.getImage('res/entrance_portal.gif'), _this3.x, _this3.y, 26, 18);
		return _this3;
	}

	_createClass(EntrancePortal, [{
		key: 'onCollision',
		value: function onCollision() {
			for (var i = 0; i < this.collision.length; i++) {
				if (this.collision[i].tag === 'train') game.train.teleport();
			}
		}
	}, {
		key: 'setPosition',
		value: function setPosition() {
			this.x = Ramu.clickedPosition.X;
			this.y = Ramu.clickedPosition.Y;

			this.sprite.x = Ramu.clickedPosition.X;
			this.sprite.y = Ramu.clickedPosition.Y;
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			_get(EntrancePortal.prototype.__proto__ || Object.getPrototypeOf(EntrancePortal.prototype), 'destroy', this).call(this);
			this.sprite.destroy();
		}
	}]);

	return EntrancePortal;
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
			new Sprite(Ramu.Utils.getImage('res/ground.gif'), 0, 0, Ramu.width, Ramu.height);

			this.audio = new Audio('res/steam-train-whistle-daniel_simon.wav');
			this.audio.loop = true;

			this.infoDump = new Text('Click to place the portal. Hermes Passer in 2018-06-29', 100, 490, 500);
			this.result = new Text('', 200, 250, 200);

			this.enTunnel = new EntranceTunnel(300, 1);
			this.exTunnel = new Sprite(Ramu.Utils.getImage('res/exit_tunnel.gif'), 30, Ramu.height - 97, 34, 97);
			this.enTunnel.drawPriority = 2;
			this.exTunnel.drawPriority = 2;

			this.exPortal = new Sprite(Ramu.Utils.getImage('res/exit_portal.gif'), 302, 300, 26, 18);
			this.enPortal = new EntrancePortal(355, 30);

			this.train = new Train(this.exTunnel.x + 1, this.exTunnel.y + 20);

			this.setRules();
		}
	}, {
		key: 'lose',
		value: function lose() {
			this.result.text = "YOU LOST";
		}
	}, {
		key: 'win',
		value: function win() {
			this.result.text = "YOU WON";
		}
	}, {
		key: 'setRules',
		value: function setRules() {
			this.btn = new SimpleSpriteButton(350, 475, 108, 20, Ramu.Utils.getImage('res/button.gif'));
			this.btn.setOnClick(function () {
				game.train.canGo = true;
				game.audio.play();
			});

			this.clickableCanvas = new Clickable(0, this.exTunnel.height, Ramu.width, Ramu.height - this.exTunnel.height * 2 - 50);
			this.clickableCanvas.onClick = function () {
				game.enPortal.setPosition();
			};
		}
	}]);

	return Game;
}(GameObj);

Ramu.init(500, 500);
// Ramu.debugMode = true;
var game = new Game();