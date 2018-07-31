'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BTN_IMG = Ramu.Utils.getImage('res/btn.png');

var ButtonWText = function (_SimpleSpritesheetBut) {
	_inherits(ButtonWText, _SimpleSpritesheetBut);

	function ButtonWText(x, y, txt) {
		_classCallCheck(this, ButtonWText);

		var _this = _possibleConstructorReturn(this, (ButtonWText.__proto__ || Object.getPrototypeOf(ButtonWText)).call(this, x, y, 60, 60, BTN_IMG, new Rect(0, 0, 60, 60), new Rect(59, 0, 60, 60), new Rect(118, 0, 60, 60)));

		_this.marginX = 15;
		_this.marginY = 45;
		_this.txt = new Text(txt, x + _this.marginX, y + _this.marginY, 60);
		_this.txt.font = '60px sans-serif';

		_this.setOnClick(function () {
			game.move(this);
		});
		return _this;
	}

	_createClass(ButtonWText, [{
		key: 'text',
		set: function set(txt) {
			this.txt.text = txt;
		},
		get: function get() {
			return this.txt.text;
		}
	}]);

	return ButtonWText;
}(SimpleSpritesheetButton);

var Game = function (_GameObj) {
	_inherits(Game, _GameObj);

	function Game() {
		_classCallCheck(this, Game);

		return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
	}

	_createClass(Game, [{
		key: 'start',
		value: function start() {
			this.isXTurn = true;
			this.endGame = false;
			this.btns = [new ButtonWText(100, 100, ''), new ButtonWText(160, 100, ''), new ButtonWText(220, 100, ''), new ButtonWText(100, 160, ''), new ButtonWText(160, 160, ''), new ButtonWText(220, 160, ''), new ButtonWText(100, 220, ''), new ButtonWText(160, 220, ''), new ButtonWText(220, 220, '')];
			this.infoDump = new Text('x turn.', 100, 300, 200);
			this.infoDump.font = '25px sans-serif';
		}
	}, {
		key: 'move',
		value: function move(btn) {
			if (this.endGame || btn.text !== '') return;

			btn.text = this.player;

			if (this.checkVictory()) return;

			if (this.checkDraw()) return;

			this.isXTurn = !this.isXTurn;
			this.infoDump.text = this.player + ' turn.';
		}
	}, {
		key: 'checkVictory',
		value: function checkVictory() {
			var positions = [[0, 1, 2], [2, 3, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

			for (var i in positions) {
				var pos = positions[i];
				var pos1 = this.btns[pos[0]].text;
				var pos2 = this.btns[pos[1]].text;
				var pos3 = this.btns[pos[2]].text;

				if (pos1 === this.player && pos2 === this.player && pos3 === this.player) {
					this.infoDump.text = this.player + ' won!';
					this.endGame = true;
					return true;
				}
			}
			return false;
		}
	}, {
		key: 'checkDraw',
		value: function checkDraw() {
			for (var i in this.btns) {
				if (this.btns[i].text === '') return false;
			}
			this.infoDump.text = 'draw!';
			this.endGame = true;
			return true;
		}
	}, {
		key: 'player',
		get: function get() {
			return this.isXTurn ? 'x' : 'o';
		}
	}]);

	return Game;
}(GameObj);

Ramu.init();
var game = new Game();
