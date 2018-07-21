'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Add the music here
var MUSIC = 'res/2AiresChoqueros.ogg';
var DIRECTION = { TOP: 38, LEFT: 37, RIGHT: 39, BOTTOM: 40 }; // arrows key code

var Slot = function (_SimpleRectCollisor) {
	_inherits(Slot, _SimpleRectCollisor);

	function Slot(x, y, direction) {
		_classCallCheck(this, Slot);

		var _this = _possibleConstructorReturn(this, (Slot.__proto__ || Object.getPrototypeOf(Slot)).call(this, x + 25, y + 25, 25, 25));

		_this.sprite = new Sprite(Ramu.Utils.getImage('res/slot.png'), x, y, 50, 50);
		_this.sprite.drawPriority = 1;
		_this.tag = 'slot';
		return _this;
	}

	return Slot;
}(SimpleRectCollisor);

var Arrow = function (_Sprite) {
	_inherits(Arrow, _Sprite);

	function Arrow(img, y, direction) {
		_classCallCheck(this, Arrow);

		var _this2 = _possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).call(this, img, Ramu.width / 2 - 25, y, 50, 50));

		_this2.direction = direction;
		_this2.tag = 'arrow sprite';
		_this2.canDestroy = false;
		_this2.drawPriority = 2;
		return _this2;
	}

	_createClass(Arrow, [{
		key: 'start',
		value: function start() {
			this.collisor = new SimpleRectCollisor(this.x + 25, this.y - 25, 25, 25);
			this.collisor.direction = this.direction;
			this.collisor.parent = this;
			this.collisor.tag = 'arrow';
		}
	}, {
		key: 'update',
		value: function update() {
			this.y += 50 * Ramu.time.delta;

			if (this.y > 0) this.canDestroy = true;

			this.collisor.y = this.y + 25;

			if (this.canDestroy && Ramu.Utils.isOutOfCanvas(this)) {
				game.missPoints++;
				this.destroy();
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			_get(Arrow.prototype.__proto__ || Object.getPrototypeOf(Arrow.prototype), 'destroy', this).call(this);
			this.collisor.destroy();
		}
	}], [{
		key: 'instantiate',
		value: function instantiate() {
			var img = void 0,
			    isRight = false,
			    isBottom = false;
			var keyCode = [38, 37, 39, 40];
			var direction = keyCode[parseInt(Math.random() * keyCode.length)];

			switch (direction) {
				case DIRECTION.TOP:
					img = Ramu.Utils.getImage('res/arrow_up.png');
					break;
				case DIRECTION.LEFT:
					img = Ramu.Utils.getImage('res/arrow_left.png');
					break;
				case DIRECTION.RIGHT:
					img = Ramu.Utils.getImage('res/arrow_left.png');
					isRight = true;
					break;
				case DIRECTION.BOTTOM:
					img = Ramu.Utils.getImage('res/arrow_up.png');
					isBottom = true;
			}

			var arrow = new Arrow(img, -51, direction);
			arrow.flipHorizontally = isRight;
			arrow.flipVertically = isBottom;

			return arrow;
		}
	}]);

	return Arrow;
}(Sprite);

var Game = function (_GameObj) {
	_inherits(Game, _GameObj);

	function Game() {
		_classCallCheck(this, Game);

		return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
	}

	_createClass(Game, [{
		key: 'start',
		value: function start() {
			this.slot = new Slot(Ramu.width / 2 - 25, Ramu.height - 100);
			this.hitParticle = new SimpleParticle(Ramu.Utils.getImage("res/particleblue.png"), new Rect(Ramu.width / 2, Ramu.height - 75, 1, 1), 1, 500);
			// this.hitParticle.setDrawPriority(2);

			this.missParticle = new SimpleParticle(Ramu.Utils.getImage("res/particlered.png"), new Rect(Ramu.width / 2, Ramu.height - 75, 1, 1), 1, 500);
			this.started = false;
			this.gameEnd = false;

			this.startText = new Text("Press 'space' to start", Ramu.width / 2 - 50, Ramu.height / 2, 300);
			this.startText.fillStyle = 'white';
			this.infodump = new Text("Play using the 'arrows'. Hermes Passer, in 2018-06-22", 1, 20, 300);
			this.infodump.fillStyle = 'white';
			this.score = new Text('', 1, 40, 300);
			this.score.fillStyle = 'white';

			this.timeToInstantiate = 2;
			this.currentTimeToInstantiate = 0;
			this.timeToReload = 14;
			this.currentTimeToReload = 0;

			this.audio = new Ramu.Audio(MUSIC);
			this.setRules();

			this.hitPoints = 0;
			this.missPoints = 0;
		}
	}, {
		key: 'setRules',
		value: function setRules() {
			// Game end
			this.audio.onAudioEnd = function () {
				game.started = false;
				game.gameEnd = true;
				game.startText.text = 'game end, press \'space\' to reload';
				game.startText.canDraw = true;
			};

			// Add point when pressed the correct key while the arrow is in the slot
			this.slot.onCollision = function () {
				var obj = this.collision[this.collision.length - 1];
				var objKey = obj.direction;

				if (objKey in Ramu.lastKeysPressed) {
					// pressed the correct key
					game.hitPoints++;
					obj.parent.destroy();
					game.hitParticle.init();
				} else if (!Ramu.Utils.isEmpty(Ramu.lastKeysPressed)) {
					// pressed the wrong key (do nothing if none key is pressed)
					game.missPoints++;
					game.missParticle.init();
				}

				Ramu.lastKeysPressed = {}; // mais uma vez, criar uma func pra isso.
			};
		}
	}, {
		key: 'update',
		value: function update() {
			this.score.text = 'HIT: ' + this.hitPoints + " | MISSED: " + this.missPoints;

			if (!this.started && !this.gameEnd && keyCode.space in Ramu.pressedKeys) {
				this.started = true;
				this.startText.canDraw = false;
				this.audio.play();
			}

			// To not show the reload text before the last arrow move until the end of screen
			if (this.gameEnd) {
				if (this.currentTimeToReload >= this.timeToReload && keyCode.space in Ramu.pressedKeys) location.reload();
				this.currentTimeToReload += Ramu.time.delta;
			}

			if (!this.started) return;

			if (this.currentTimeToInstantiate >= this.timeToInstantiate) {
				this.currentTimeToInstantiate = 0;
				Arrow.instantiate();
			}

			this.currentTimeToInstantiate += Ramu.time.delta;
		}
	}]);

	return Game;
}(GameObj);

Ramu.init(500, 500);
var game = new Game();