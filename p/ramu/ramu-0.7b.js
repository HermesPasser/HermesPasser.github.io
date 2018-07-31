'use strict';

// ---------------------------------- //
// Ramu 0.7 - Hermes Passer           //
//      hermespasser.github.io        //
// blog: gladiocitrico.blogspot.com   //
// ---------------------------------- //

// para caso alguma func seja chamada no mesmo frame que o start
// criar um callnextframe para ela ser chamada apos o start 
// para não quebrar tudo

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keyCode = {
	a: 65, b: 66, c: 67, d: 68, e: 69, f: 70, g: 71, h: 72, i: 73, j: 74,
	k: 75, l: 76, m: 77, n: 78, o: 79, p: 80, q: 81, r: 82, s: 83, t: 84,
	u: 85, v: 86, w: 87, x: 88, y: 89, z: 90,
	num0: 48, num1: 49, num2: 50, num3: 51, num4: 52, num5: 53, num6: 54, num7: 55, num8: 56, num9: 57,

	numpad0: 96, numpad1: 97, numpad2: 98, numpad3: 99, numpad4: 100, numpad5: 101, numpad6: 102, numpad7: 103,
	numpad8: 104, numpad9: 105,

	space: 32,

	f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123,

	left_arrow: 37, up_arrow: 38, right_arrow: 39, down_arrow: 40, backspace: 8, tab: 9, enter: 13, shift: 16,

	capslock: 20, numlock: 144, scrolllock: 145, left_window_key: 91, right_window_key: 92,

	open_bracket: 219, close_braket: 221, ctrl: 17, alt: 18, end: 35, home: 36, insert: 45, delete: 46, select: 93, pause_break: 19,

	escape: 27, page_up: 33, page_down: 34, multiply: 106, add: 107, subtract: 109, decimal_point: 110, divide: 111, semi_colon: 186,

	equal_sign: 187, comma: 188, dash: 189, period: 190, forward_slash: 191, back_slash: 220, grave_accent: 192, single_quote: 222
};
//Ramu.Rect = 

var Rect = function () {
	function Rect(x, y, w, h) {
		_classCallCheck(this, Rect);

		if (arguments.length != 4) throw new Error('ArgumentError: Wrong number of arguments');
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
	}

	_createClass(Rect, null, [{
		key: 'hasNegativeValue',
		value: function hasNegativeValue(rect) {
			return Rect.hasNegativeValueInXY(rect) || Rect.hasNegativeValueInWH(rect);
		}
	}, {
		key: 'hasNegativeValueInXY',
		value: function hasNegativeValueInXY(rect) {
			return rect.x < 0 || rect.y < 0;
		}
	}, {
		key: 'hasNegativeValueInWH',
		value: function hasNegativeValueInWH(rect) {
			return rect.width < 0 || rect.height < 0;
		}
	}]);

	return Rect;
}();

// ============ RAMU DECLARATION 1.7 - 2018-07-29 ============ //

var Ramu = function () {
	/// Prevents creating an instance of this class.
	function Ramu() {
		_classCallCheck(this, Ramu);

		throw new Error('This is a static class');
	}

	_createClass(Ramu, null, [{
		key: 'width',
		get: function get() {
			if (Ramu.canvas) return Ramu.canvas.width;
			return 0;
		}
	}, {
		key: 'height',
		get: function get() {
			if (Ramu.canvas) return Ramu.canvas.height;
			return 0;
		}
	}, {
		key: 'VERSION',
		get: function get() {
			return '0.7b 07-29-18';
		}
	}]);

	return Ramu;
}();

Ramu.callDestroy = false; //TODO
Ramu.callSortUpdate = false;
Ramu.callSortDraw = false;
Ramu.callSortCollision = false;

Ramu.debugMode = false;
Ramu.inLoop = true;

Ramu.canvas = document.createElement('canvas');
Ramu.ctx = Ramu.canvas.getContext('2d');

Ramu.time = { last: 0, delta: 1 / 60, frameTime: 0 };

/// Init the Ramu and the main loop.
Ramu.init = function () {
	var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
	var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

	if (!document.body) throw new Error('No body tag found.');

	// Ramu.canvas = document.createElement('canvas');
	Ramu.canvas.width = width;
	Ramu.canvas.height = height;
	// Ramu.ctx = Ramu.canvas.getContext('2d');
	document.body.appendChild(Ramu.canvas);

	Ramu.callSortUpdate = false;
	Ramu.callSortDraw = false;
	Ramu.callSortCollision = false;

	Ramu.debugMode = false;
	Ramu.inLoop = true;

	// Deltatime is actually a timestep and frametime is originally the delta time,
	// change of terms exists for timestep be used instead of delta (frametimne)
	Ramu.time = { last: Date.now(), delta: 1 / 60, frameTime: 0 };

	Ramu.input();
	Ramu.start();
	window.requestAnimationFrame(Ramu.loop);
};

// ============ RAMU INPUT 1.7 - 2018-06-30 ============ //

Ramu.pressedKeys = {};
Ramu.lastKeysPressed = {};
Ramu.clickedPosition = {};
Ramu.mousePosition = { X: 0, Y: 0 };

Ramu._key = function () {
	Ramu.pressedKeys = {}; // The key continues on this list until the key up.
	Ramu.lastKeysPressed = {}; // The key continues on this list until the end of frame.

	document.body.addEventListener("keydown", function (e) {
		Ramu.pressedKeys[e.keyCode] = e.keyCode;
		Ramu.lastKeysPressed[e.keyCode] = e.keyCode;
	}, false);

	document.body.addEventListener("keyup", function (e) {
		delete Ramu.pressedKeys[e.keyCode];
	}, false);
};

Ramu._getMousePosition = function (event) {
	var bound = Ramu.canvas.getBoundingClientRect();
	return {
		// previously used bound.left/bound.top but it not work well when the canvas is distorced.
		X: event.clientX - bound.x - Ramu.canvas.clientLeft,
		Y: event.clientY - bound.y - Ramu.canvas.clientTop
	};
};

Ramu._click = function () {
	Ramu.clickedPosition = {};
	Ramu.canvas.addEventListener('click', function (event) {
		// esse metodo não é tão bom, clicar apos deixar a aba ativa gerara isso a ser chamado varias vezes num mesmo clique
		Ramu.clickedPosition = Ramu._getMousePosition(event);
	});
};

Ramu._mouseMove = function () {
	Ramu.canvas.addEventListener('mousemove', function (event) {
		Ramu.mousePosition = Ramu._getMousePosition(event);
	});
};

/// Start all input events listeners
Ramu.input = function () {
	Ramu._key();
	Ramu._click();
	Ramu._mouseMove();

	// Ramu.canvas.addEventListener('mousemove'   function(e){},  false);
	// Ramu.canvas.addEventListener('touchstart', function(e){},  false);
	// Ramu.canvas.addEventListener('touchmove',  function(e){},  false);
};

// ============ RAMU LOOP 1.7 - 2018-06-30 ============ //

Ramu.gameObjs = [];
Ramu.objsToDraw = [];
Ramu.objsToCollide = [];

Ramu.updateLastPriority = 0;
Ramu.drawLastPriority = 0;
Ramu.collisionLastPriority = 0;

/* TODO
Ramu._sortDestroy = function(){
	if (Ramu.callDestroy){
		Ramu.destroyObjs();
		Ramu.callDestroy = false;
	}
}
*/

Ramu._sortCollision = function () {
	if (Ramu.callSortCollision) {
		Collisor.sortPriority();
		Ramu.callSortCollision = false;
	}
};

Ramu._sortUpdate = function () {
	if (Ramu.callSortUpdate) {
		GameObj.sortPriority();
		Ramu.callSortUpdate = false;
	}
};

Ramu._sortDraw = function () {
	if (Ramu.callSortDraw) {
		Drawable.sortPriority();
		Ramu.callSortDraw = false;
	}
};

Ramu._updateSteps = function () {
	// Panic | from isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
	var numUpdateSteps = 0;
	if (++numUpdateSteps >= 240) {
		Ramu.time.frameTime = 0;
		console.warn("Panic.");
		return true;
	}
	return false;
};

Ramu._clearInput = function () {
	Ramu.lastKeysPressed = {};
	Ramu.clickedPosition = {};
};

/// Game loop of Ramu.
Ramu.loop = function () {
	var now = 0;
	if (Ramu.inLoop) {
		now = Date.now();
		Ramu.time.frameTime = Ramu.time.frameTime + Math.min(1, (now - Ramu.time.last) / 1000);

		while (Ramu.time.frameTime > Ramu.time.delta) {
			Ramu.start();

			// Ramu._sortDestroy();

			Ramu._sortCollision();
			Ramu.checkCollision();

			Ramu._sortUpdate();
			Ramu.update();

			Ramu.time.frameTime = Ramu.time.frameTime - Ramu.time.delta;

			if (Ramu._updateSteps()) ; // if it return true so is panic then stop the loop
			break;
		}
	}

	Ramu._sortDraw();
	Ramu.draw();
	Ramu._clearInput();

	if (Ramu.inLoop) Ramu.time.last = now;
	window.requestAnimationFrame(Ramu.loop);
};

// ============ RAMU MAIN ENGINE (WITH NO LOOP) 1.7 - 2018-07-18 ============ //

/// Executes all start methods of all Ramu.gameObjs in the game.
Ramu.start = function () {
	for (var i = 0; i < Ramu.gameObjs.length; i++) {

		// If this was defined then start already was called, so skip it
		if (Ramu.gameObjs[i]._start_was_called) continue;

		// Even if this attribute receives false, the start is not called again
		// because of this attribute is alreay defined
		Ramu.gameObjs[i]._start_was_called = true;
		Ramu.gameObjs[i].start();
	}
};

/// Update all Ramu.gameObjs in the game.
Ramu.update = function () {
	for (var i = 0; i < Ramu.gameObjs.length; i++) {
		var obj = Ramu.gameObjs[i];

		if (obj._start_was_called && obj.canUpdate) {
			obj.update();
		}
	}
};

/// Check all collisions in the game.
Ramu.checkCollision = function () {
	for (var i = 0; i < Ramu.objsToCollide.length; i++) {
		var obj = Ramu.objsToCollide[i];

		if (obj._start_was_called && obj.canUpdate) {
			obj.checkCollision();
		}
	}
};

/// Executes all draw methods of all Ramu.gameObjs in the game.
Ramu.draw = function () {
	Ramu.ctx.imageSmoothingEnabled = true; // reset the defaut value
	Ramu.ctx.clearRect(0, 0, Ramu.width, Ramu.height);

	for (var i = 0; i < Ramu.objsToDraw.length; i++) {
		var obj = Ramu.objsToDraw[i];

		if (obj._start_was_called && obj.canUpdate) {
			if (obj.drawOutOfCanvas || Ramu.Utils.isInsidesOfCanvas(obj)) {
				obj.drawInCanvas();
			}
		}
	}
};

// ============ RAMU MATH 1.7 - 2018-06-30 ============ //

Ramu.Math = function () {
	/// Prevents creating an instance of this class.
	function Math() {
		_classCallCheck(this, Math);

		throw new Error('This is a static class');
	}

	_createClass(Math, null, [{
		key: 'distance',
		value: function distance(gameObjectA, gameObjectB) {
			var x = Math.pow(gameObjectA.x - gameObjectB.x, 2),
			    y = Math.pow(gameObjectA.y - gameObjectB.y, 2);
			return Math.sqrt(x + y, 2);
		}
	}, {
		key: 'overlap',
		value: function overlap(rect1, rect2) {
			return rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y;
		}
	}]);

	return Math;
}();

// ============ RAMU UTILS 1.7 - 2018-07-10 ============ //

Ramu.Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);

		throw new Error('This is a static class');
	}

	/// Get a image with source


	_createClass(Utils, null, [{
		key: 'getImage',
		value: function getImage(src) {
			var img = new Image();
			img.src = src;
			return img;
		}

		// Move to RamuAudio soon

	}, {
		key: 'playSound',
		value: function playSound(sound) {
			var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if (volume != null) sound.volume = volume;

			var playPromise = sound.play();
			if (playPromise !== null) {

				playPromise.catch(function () {
					sound.play();
				});
			}
		}

		/// Check if image is loaded

	}, {
		key: 'imageIsLoaded',
		value: function imageIsLoaded(img) {
			if (!(img instanceof Image)) return false;
			return img.complete && img.naturalWidth !== 0 && img.naturalHeight !== 0;
		}

		/// Check if the gameObject position (x,y) is out of the canvas

	}, {
		key: 'isOutOfCanvas',
		value: function isOutOfCanvas(gameObject) {
			// canvas rect starts at 0 and ends at canvas.size - 1
			return gameObject.x < 0 || gameObject.x >= Ramu.canvas.width || gameObject.y < 0 || gameObject.y >= Ramu.canvas.height;
		}

		/// Check if the part of gameObject size (x,y,w,h) is inside of the canvas

	}, {
		key: 'isInsidesOfCanvas',
		value: function isInsidesOfCanvas(gameObject) {
			// canvas rect starts at 0 and ends at canvas.size - 1
			return gameObject.x + gameObject.width >= 0 && gameObject.x < Ramu.width && gameObject.y + gameObject.height >= 0 && gameObject.y < Ramu.height;
		}

		/// Check if object/hash is empty

	}, {
		key: 'isEmpty',
		value: function isEmpty(obj) {
			for (var key in obj) {
				return false;
			}return true;
		}

		/// Used in ramu internal to throw erros

	}, {
		key: 'CustomTypeError',
		value: function CustomTypeError(instance, classToCompare) {
			// esse keys é inutil pois ele retorna a palavra instance e não o nome da variavel que passei no metodo
			// criar um outro método só para converter para string e passar como parametro aqui
			return new Error("TypeError: " + Object.keys({ instance: instance })[0] + ' must be a ' + classToCompare.name + ' instance.');
		}
	}]);

	return Utils;
}();

var GameObj = function () {
	function GameObj() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

		_classCallCheck(this, GameObj);

		if (arguments.length > 4) throw new Error('ArgumentError: Wrong number of arguments');

		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.tag = this.tag || "none";
		this.updatePriority = Ramu.updateLastPriority++;
		this.canUpdate = true;
		this.canDestroy = false;

		GameObj.addObjt(this);
	}

	_createClass(GameObj, [{
		key: 'toRect',
		value: function toRect() {
			return new Rect(this.x, this.y, this.width, this.height);
		}
	}, {
		key: 'setActive',
		value: function setActive(bool) {
			if (!(typeof bool === 'boolean')) throw Ramu.Utils.CustomTypeError(bool, Boolean);
			this.canUpdate = bool;
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			if (!this._start_was_called) {
				console.warn("The update was not called yet,");
				return;
			}

			//remover se não funcionar a nova técnica
			// console.log("destroy chamado para " )
			// console.log(this)
			// console.log("  " )

			this.setActive(false);

			this.canDestroy = true;
			Ramu.callDestroy = true;

			for (var i = 0; i < Ramu.gameObjs.length; i++) {
				if (Ramu.gameObjs[i] === this) {
					Ramu.gameObjs.splice(i, 1);
					break;
				}
			}
		}

		/// Virtual start to be inherited.

	}, {
		key: 'start',
		value: function start() {}

		/// Virtual update to be inherited.

	}, {
		key: 'update',
		value: function update() {}
	}], [{
		key: 'addObjt',
		value: function addObjt(obj) {
			Ramu.gameObjs.push(obj);
			Ramu.callSortUpdate = true;
		}
	}, {
		key: 'sortPriority',
		value: function sortPriority() {
			for (var i = 0; i < Ramu.gameObjs.length; ++i) {
				for (var j = i + 1; j < Ramu.gameObjs.length; ++j) {
					if (Ramu.gameObjs[i].updatePriority > Ramu.gameObjs[j].updatePriority) {
						var temp = Ramu.gameObjs[i];
						Ramu.gameObjs[i] = Ramu.gameObjs[j];
						Ramu.gameObjs[j] = temp;
					}
				}
			}
		}
	}]);

	return GameObj;
}();

var Drawable = function (_GameObj) {
	_inherits(Drawable, _GameObj);

	function Drawable(x, y, width, height) {
		var canDraw = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

		_classCallCheck(this, Drawable);

		var _this = _possibleConstructorReturn(this, (Drawable.__proto__ || Object.getPrototypeOf(Drawable)).call(this));

		if (arguments.length < 4) throw new Error('ArgumentError: Wrong number of arguments');

		_this.x = x;
		_this.y = y;
		_this.width = width;
		_this.height = height;
		_this.canDraw = canDraw;
		_this.drawPriority = Ramu.drawLastPriority++;
		_this.flipHorizontally = false;
		_this.flipVertically = false;
		_this.drawOutOfCanvas = false;
		_this.opacity = 1;
		Drawable.addObjt(_this);
		return _this;
	}

	_createClass(Drawable, [{
		key: 'destroy',
		value: function destroy() {
			if (!this._start_was_called) {
				console.warn("The update was not called yet,");
				return;
			}

			_get(Drawable.prototype.__proto__ || Object.getPrototypeOf(Drawable.prototype), 'destroy', this).call(this);
			for (var i = 0; i < Ramu.objsToDraw.length; i++) {
				if (Ramu.objsToDraw[i] === this) {
					Ramu.objsToDraw.splice(i, 1);
					break;
				}
			}
		}
	}, {
		key: 'drawInCanvas',
		value: function drawInCanvas() {
			if (this.canDraw) {

				Ramu.ctx.globalAlpha = this.opacity;

				// To flip anything that is drawn (the position need be recalculated in draw() method).
				if (this.flipHorizontally || this.flipVertically) {
					Ramu.ctx.save();
					Ramu.ctx.scale(this.flipHorizontally ? -1 : 1, this.flipVertically ? -1 : 1);
				}

				this.draw();

				if (this.flipHorizontally || this.flipVertically) Ramu.ctx.restore();
			}
		}

		/// Virtual draw to be inherited.

	}, {
		key: 'draw',
		value: function draw() {}
	}], [{
		key: 'addObjt',
		value: function addObjt(drawableObj) {
			Ramu.objsToDraw.push(drawableObj);
			Ramu.callSortDraw = true;
		}
	}, {
		key: 'sortPriority',
		value: function sortPriority() {
			for (var i = 0; i < Ramu.objsToDraw.length; ++i) {
				for (var j = i + 1; j < Ramu.objsToDraw.length; ++j) {
					if (Ramu.objsToDraw[i].drawPriority > Ramu.objsToDraw[j].drawPriority) {
						var temp = Ramu.objsToDraw[i];
						Ramu.objsToDraw[i] = Ramu.objsToDraw[j];
						Ramu.objsToDraw[j] = temp;
					}
				}
			}
		}
	}]);

	return Drawable;
}(GameObj);

var Collisor = function (_Drawable) {
	_inherits(Collisor, _Drawable);

	function Collisor(x, y, width, height) {
		_classCallCheck(this, Collisor);

		var _this2 = _possibleConstructorReturn(this, (Collisor.__proto__ || Object.getPrototypeOf(Collisor)).call(this, x, y, width, height));

		if (arguments.length != 4) throw new Error('ArgumentError: Wrong number of arguments');
		_this2.canCollide = true;
		_this2.collision = [];
		_this2.collisionPriority = Ramu.collisionLastPriority++;

		Collisor.addObjt(_this2);
		return _this2;
	}

	_createClass(Collisor, [{
		key: 'destroy',
		value: function destroy() {
			if (!this._start_was_called) {
				console.warn("The update was not called yet,");
				return;
			}

			for (var i = 0; i < Ramu.objsToCollide.length; i++) {
				if (Ramu.objsToCollide[i] === this) {
					Ramu.objsToCollide.splice(i, 1);
					break;
				}
			}
			_get(Collisor.prototype.__proto__ || Object.getPrototypeOf(Collisor.prototype), 'destroy', this).call(this);
		}
	}, {
		key: 'update',
		value: function update() {
			this.canDraw = Ramu.debugMode;
		}
	}, {
		key: 'onCollision',


		/// Virtual onCollision to be inherited.
		value: function onCollision() {}
	}, {
		key: 'checkCollision',
		value: function checkCollision() {
			if (!this.canCollide) return;

			this.collision = [];
			for (var i = 0; i < Ramu.objsToCollide.length; i++) {
				if (Ramu.objsToCollide[i] === this || !Ramu.objsToCollide[i].canCollide || !Ramu.gameObjs[i].canUpdate) continue;

				var rect1 = new Rect(this.x, this.y, this.width, this.height);
				var rect2 = new Rect(Ramu.objsToCollide[i].x, Ramu.objsToCollide[i].y, Ramu.objsToCollide[i].width, Ramu.objsToCollide[i].height);

				if (Ramu.Math.overlap(rect1, rect2)) {
					Ramu.objsToCollide[i].collision.push(this);
					this.collision.push(Ramu.objsToCollide[i]);
					this.onCollision();
				}
			}
		}
	}, {
		key: 'isInCollision',
		get: function get() {
			return this.collision.length != 0;
		}
	}], [{
		key: 'addObjt',
		value: function addObjt(colObj) {
			Ramu.objsToCollide.push(colObj);
			Ramu.callSortCollision = true;
		}
	}, {
		key: 'sortPriority',
		value: function sortPriority() {
			for (var i = 0; i < Ramu.objsToCollide.length; ++i) {
				for (var j = i + 1; j < Ramu.objsToCollide.length; ++j) {
					if (Ramu.objsToCollide[i].collisionPriority > Ramu.objsToCollide[j].collisionPriority) {
						var temp = Ramu.objsToCollide[i];
						Ramu.objsToCollide[i] = Ramu.objsToCollide[j];
						Ramu.objsToCollide[j] = temp;
					}
				}
			}
		}
	}]);

	return Collisor;
}(Drawable);

var SimpleRectCollisor = function (_Collisor) {
	_inherits(SimpleRectCollisor, _Collisor);

	function SimpleRectCollisor() {
		_classCallCheck(this, SimpleRectCollisor);

		return _possibleConstructorReturn(this, (SimpleRectCollisor.__proto__ || Object.getPrototypeOf(SimpleRectCollisor)).apply(this, arguments));
	}

	_createClass(SimpleRectCollisor, [{
		key: 'draw',
		value: function draw() {
			if (Ramu.debugMode) {

				if (this.canCollide) {
					if (this.isInCollision) Ramu.ctx.strokeStyle = "red";else Ramu.ctx.strokeStyle = "blue";
				} else Ramu.ctx.strokeStyle = "green";

				Ramu.ctx.strokeRect(this.x, this.y, this.width, this.height);
				Ramu.ctx.strokeStyle = "#000000"; // reset to default value
			}
		}
	}]);

	return SimpleRectCollisor;
}(Collisor);

var Raycast = function (_Collisor2) {
	_inherits(Raycast, _Collisor2);

	function Raycast() {
		_classCallCheck(this, Raycast);

		var _this4 = _possibleConstructorReturn(this, (Raycast.__proto__ || Object.getPrototypeOf(Raycast)).call(this, 1, 1, 1, 1));

		_this4.started = false;
		_this4.abort();
		return _this4;
	}

	_createClass(Raycast, [{
		key: 'onRaycastEnd',
		value: function onRaycastEnd() {} // Virtual

	}, {
		key: 'init',
		value: function init(initX, initY, velocityX, velocityY, lifeTime) {
			if (arguments.length != 5) throw new Error('ArgumentError: Wrong number of arguments');

			// To call onRaycastEnd when was aborted
			if (this.started) this.onRaycastEnd();

			this.x = initX;
			this.y = initY;
			this.initX = initX;
			this.initY = initY;
			this.velocityX = velocityX;
			this.velocityY = velocityY;
			this.lifeTime = lifeTime;
			this.currentTime = 0;
			this.started = true;
		}
	}, {
		key: 'abort',
		value: function abort() {
			this.currentTime = 0;
			this.started = false;
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.started && this.currentTime >= this.lifeTime) {
				this.onRaycastEnd();
				this.abort();
			}

			if (!this.started || this.currentTime >= this.lifeTime) return;

			if (this.started) {
				_get(Raycast.prototype.__proto__ || Object.getPrototypeOf(Raycast.prototype), 'update', this).call(this);

				this.currentTime += Ramu.time.delta;
				this.x += this.velocityX * Ramu.time.delta;
				this.y += this.velocityY * Ramu.time.delta;
			}
		}
	}, {
		key: 'draw',
		value: function draw() {
			if (this.canCollide) {
				if (this.isInCollision) Ramu.ctx.strokeStyle = "red";else Ramu.ctx.strokeStyle = "blue";
			} else Ramu.ctx.strokeStyle = "green";

			Ramu.ctx.beginPath();
			Ramu.ctx.moveTo(this.x, this.y);
			Ramu.ctx.lineTo(this.initX, this.initY);
			Ramu.ctx.stroke();

			Ramu.ctx.strokeStyle = "#000000"; // reset to default value
		}
	}]);

	return Raycast;
}(Collisor);

/// Displays an entire image


var Sprite = function (_Drawable2) {
	_inherits(Sprite, _Drawable2);

	function Sprite(img, x, y, w, h) {
		var canDraw = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

		_classCallCheck(this, Sprite);

		var _this5 = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, x, y, w, h));

		if (arguments.length < 5) throw new Error('ArgumentError: Wrong number of arguments');
		if (!(img instanceof Image)) throw Ramu.Utils.CustomTypeError(img, Image);

		_this5.img = img;
		_this5.canDraw = canDraw;
		return _this5;
	}

	_createClass(Sprite, [{
		key: 'draw',
		value: function draw() {
			var originX = this.flipHorizontally ? -this.width - this.x : this.x;
			var originY = this.flipVertically ? -this.height - this.y : this.y;

			if (!Ramu.Utils.imageIsLoaded(this.img)) {
				Ramu.ctx.fillRect(originX, originY, this.width, this.height); // Draw a black rect instead of image
				return;
			}

			//if (this.canDraw)
			Ramu.ctx.imageSmoothingEnabled = false;
			Ramu.ctx.drawImage(this.img, originX, originY, this.width, this.height);
		}
	}]);

	return Sprite;
}(Drawable);

/// Displays an region (sprite sheet) of a image


var Spritesheet = function (_Drawable3) {
	_inherits(Spritesheet, _Drawable3);

	function Spritesheet(image, sheetRect, x, y, w, h) {
		var canDraw = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

		_classCallCheck(this, Spritesheet);

		var _this6 = _possibleConstructorReturn(this, (Spritesheet.__proto__ || Object.getPrototypeOf(Spritesheet)).call(this, x, y, w, h));

		if (arguments.length < 6) throw new Error('ArgumentError: Wrong number of arguments');
		if (!(image instanceof Image)) throw Ramu.Utils.CustomTypeError(image, Image);

		_this6.img = image;
		_this6.setSheet(sheetRect);
		_this6.canDraw = canDraw;
		return _this6;
	}

	_createClass(Spritesheet, [{
		key: 'setSheet',
		value: function setSheet(sheetRect) {
			if (!(sheetRect instanceof Rect)) throw Ramu.Utils.CustomTypeError(sheetRect, Rect);

			this.sheet = sheetRect;
		}
	}, {
		key: 'setPosition',
		value: function setPosition(x, y) {
			this.x = parseFloat(x);
			this.y = parseFloat(y);
		}
	}, {
		key: 'draw',
		value: function draw() {
			var originX = this.flipHorizontally ? -this.width - this.x : this.x;
			// does not work
			var originY = this.flipVertically ? -this.height - this.y : this.y;

			if (!Ramu.Utils.imageIsLoaded(this.img)) {
				Ramu.ctx.fillRect(originX, originY, this.width, this.height); // Draw a black rect instead of image
				return;
			}

			Ramu.ctx.imageSmoothingEnabled = false;
			Ramu.ctx.drawImage(this.img, this.sheet.x, this.sheet.y, this.sheet.width, this.sheet.height, originX, originY, this.width, this.height);
		}
	}]);

	return Spritesheet;
}(Drawable);

/// Displays an animation that uses various images


var SpriteAnimation = function (_Drawable4) {
	_inherits(SpriteAnimation, _Drawable4);

	function SpriteAnimation(x, y, width, height) {
		_classCallCheck(this, SpriteAnimation);

		var _this7 = _possibleConstructorReturn(this, (SpriteAnimation.__proto__ || Object.getPrototypeOf(SpriteAnimation)).call(this, x, y, width, height, true));

		if (arguments.length != 4) throw new Error('ArgumentError: Wrong number of arguments');
		_this7.frames = [];
		_this7.currentFrame = 0;
		_this7.currentTime = 0;
		_this7.animationTime = 2;
		_this7.animationPause = false;
		_this7.animationIsOver = false;
		_this7.playInLoop = true;
		return _this7;
	}

	_createClass(SpriteAnimation, [{
		key: 'addFrame',
		value: function addFrame(img) {
			if (void 0 === img || arguments.length != 1) throw new Error('ArgumentError: Wrong number of arguments');

			if (Array.isArray(img)) {
				for (var i = 0; i < img.length; i++) {
					if (!img[i] instanceof Image) throw Ramu.Utils.CustomTypeError(img, img);

					this.frames.push(img[i]);
				}
				return;
			} else if (img instanceof Image) {
				if (!img instanceof Image) throw Ramu.Utils.CustomTypeError(img, img);

				this.frames.push(img);
				return;
			}

			throw Ramu.Utils.CustomTypeError(img, Image);
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.animationIsOver = false;
			this.currentFrame = 0;
			this.currentTime = 0;
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.animationPause) return;
			if (this.currentFrame == this.frames.length - 1) {
				this.animationIsOver = true;
				if (!this.playInLoop) return;
			} else this.animationIsOver = false;

			this.currentTime += Ramu.time.delta;
			if (this.frames.length > 0 && this.currentTime > this.animationTime) {
				this.currentFrame = (this.currentFrame + 1) % this.frames.length;
				this.currentTime = 0;
			}
		}
	}, {
		key: 'draw',
		value: function draw() {
			var originX = this.flipHorizontally ? -this.width - this.x : this.x;
			var originY = this.flipVertically ? -this.height - this.y : this.y;

			if (this.frames.length > 0) {
				if (!Ramu.Utils.imageIsLoaded(this.frames[this.currentFrame])) {
					Ramu.ctx.fillRect(originX, originY, this.width, this.height); // Draw a black rect instead of image
					return;
				}

				Ramu.ctx.imageSmoothingEnabled = false;
				Ramu.ctx.drawImage(this.frames[this.currentFrame], originX, originY, this.width, this.height);
			}
		}
	}]);

	return SpriteAnimation;
}(Drawable);

// se eu colocar para ele se mexer em x ou y com algum valor que nao seja inteiro
// e ele tiver setado para girar o sprite em vertical ou horizontal
// ele desenha parte fora do sprite
// isso acontece mesmo se a animação tiver um frame

/// Displays an animation that uses various sprite sheets of a single image


var SpritesheetAnimation = function (_SpriteAnimation) {
	_inherits(SpritesheetAnimation, _SpriteAnimation);

	function SpritesheetAnimation(img, x, y, width, height) {
		_classCallCheck(this, SpritesheetAnimation);

		var _this8 = _possibleConstructorReturn(this, (SpritesheetAnimation.__proto__ || Object.getPrototypeOf(SpritesheetAnimation)).call(this, x, y, width, height));

		if (arguments.length != 5) throw new Error('ArgumentError: Wrong number of arguments');
		if (!(img instanceof Image)) throw Ramu.Utils.CustomTypeError(img, Image);

		_this8.img = img;
		return _this8;
	}

	_createClass(SpritesheetAnimation, [{
		key: 'addFrame',
		value: function addFrame(rect) {
			// multi frame support by github.com/Kawtmany
			if (void 0 === rect || arguments.length != 1) throw new Error('ArgumentError: Wrong number of arguments');

			if (Array.isArray(rect)) {
				for (var i = 0; i < rect.length; i++) {
					if (!rect[i] instanceof Rect) throw Ramu.Utils.CustomTypeError(rect, rect);

					if (Rect.hasNegativeValueInXY(rect[i])) throw new Error('ArgumentOutOfRangeError: The rect position cannot be negative.');

					this.frames.push(rect[i]);
				}

				return;
			} else if (rect instanceof Rect) {
				if (!rect instanceof Rect) throw Ramu.Utils.CustomTypeError(rect, rect);

				if (Rect.hasNegativeValueInXY(rect)) throw new Error('ArgumentOutOfRangeError: The rect position cannot be negative.');

				this.frames.push(rect);
				return;
			}

			throw Ramu.Utils.CustomTypeError(rect, rect);
		}
	}, {
		key: 'draw',
		value: function draw() {
			// o problema deve estar aqui
			var originX = this.flipHorizontally ? -this.width - this.x : this.x;
			var originY = this.flipVertically ? -this.height - this.y : this.y;
			var rect = this.frames[this.currentFrame];

			if (Ramu.Utils.imageIsLoaded(this.img) && (rect.width > this.img.width || rect.height > this.img.height)) throw new Error('The rect size cannot be greater than the image size.');

			//Draw
			if (this.frames.length > 0) {
				if (!Ramu.Utils.imageIsLoaded(this.img)) {
					Ramu.ctx.fillRect(originX, originY, this.width, this.height); // Draw a black rect instead of image
					return;
				}

				Ramu.ctx.imageSmoothingEnabled = false;
				Ramu.ctx.drawImage(this.img, rect.x, rect.y, rect.width, rect.height, originX, originY, this.width, this.height);
			}
		}
	}]);

	return SpritesheetAnimation;
}(SpriteAnimation);

/// Control SpritesheetAnimations


var SpritesheetAnimator = function (_GameObj2) {
	_inherits(SpritesheetAnimator, _GameObj2);

	function SpritesheetAnimator(x, y, width, height) {
		_classCallCheck(this, SpritesheetAnimator);

		var _this9 = _possibleConstructorReturn(this, (SpritesheetAnimator.__proto__ || Object.getPrototypeOf(SpritesheetAnimator)).call(this, x, y, width, height));

		if (arguments.length != 4) throw new Error('ArgumentError: Wrong number of arguments');

		_this9.anim = {};
		_this9.animDrawPriority = drawLastPriority++;
		_this9.currentID = "";
		return _this9;
	}

	_createClass(SpritesheetAnimator, [{
		key: 'setCanDraw',
		value: function setCanDraw(bool) {
			if (!(typeof bool == 'boolean')) throw Ramu.Utils.CustomTypeError(bool, Boolean);
			this.anim[this.currentID].canDraw = bool;
		}
	}, {
		key: 'setDrawPriority',
		value: function setDrawPriority(integer) {
			if (arguments.length != 1) throw new Error('ArgumentError: Wrong number of arguments');

			for (var key in this.anim) {
				this.anim[key].drawPriority = parseInt(integer);
			}
		}
	}, {
		key: 'addAnimation',
		value: function addAnimation(nameID, spritesheetAnimation) {
			if (arguments.length != 2) throw new Error('ArgumentError: Wrong number of arguments');
			// if (!(nameID instanceof String)) throw Ramu.Utils.CustomTypeError(nameID, String);
			if (!(spritesheetAnimation instanceof SpritesheetAnimation)) throw Ramu.Utils.CustomTypeError(spritesheetAnimation, SpritesheetAnimation);

			spritesheetAnimation.x = this.x;
			spritesheetAnimation.y = this.y;
			spritesheetAnimation.canDraw = false;
			spritesheetAnimation.drawPriority = this.animDrawPriority;
			Ramu.callSortDraw = true;
			this.anim[nameID] = spritesheetAnimation;
		}
	}, {
		key: 'setCurrentAnimation',
		value: function setCurrentAnimation(nameID) {
			if (arguments.length != 1) throw new Error('ArgumentError: Wrong number of arguments');
			// if (!(nameID instanceof String)) throw Ramu.Utils.CustomTypeError(nameID, String);

			this.currentID = nameID;
			for (var key in this.anim) {
				this.anim[key].canDraw = false;
			}if (this.anim[key] != null) this.anim[nameID].canDraw = true;
		}
	}, {
		key: 'getCurrentAnimationID',
		value: function getCurrentAnimationID() {
			for (var key in this.anim) {
				if (this.anim[key].canDraw) return key;
			}return null;
		}
	}, {
		key: 'setFlipHorizontally',
		value: function setFlipHorizontally(bool) {
			if (!(typeof bool == "boolean")) throw Ramu.Utils.CustomTypeError(bool, Boolean);

			for (var key in this.anim) {
				this.anim[key].flipHorizontally = bool;
			}
		}
	}, {
		key: 'setFlipVertically',
		value: function setFlipVertically(bool) {
			if (!(typeof bool == "boolean")) throw Ramu.Utils.CustomTypeError(bool, Boolean);

			for (var key in this.anim) {
				this.anim[key].flipVertically = bool;
			}
		}
	}, {
		key: 'setX',
		value: function setX(x) {
			this.x = x;
			for (var key in this.anim) {
				this.anim[key].x = x;
			}
		}
	}, {
		key: 'setY',
		value: function setY(y) {
			this.y = y;
			for (var key in this.anim) {
				this.anim[key].y = y;
			}
		}
	}, {
		key: 'setActive',
		value: function setActive(bool) {
			_get(SpritesheetAnimator.prototype.__proto__ || Object.getPrototypeOf(SpritesheetAnimator.prototype), 'setActive', this).call(this, bool);
			for (var key in this.anim) {
				this.anim[key].setActive(bool);
			}
		}
	}, {
		key: 'addX',
		value: function addX(x) {
			this.x += x;
			for (var key in this.anim) {
				this.anim[key].x += x;
			}
		}
	}, {
		key: 'addY',
		value: function addY(y) {
			this.y += y;
			for (var key in this.anim) {
				this.anim[key].y += y;
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			for (var key in this.anim) {
				this.anim[key].destroy();
				delete this.anim[key]; //= null;
			}
			this.anim = {};
			_get(SpritesheetAnimator.prototype.__proto__ || Object.getPrototypeOf(SpritesheetAnimator.prototype), 'destroy', this).call(this);
		}
	}]);

	return SpritesheetAnimator;
}(GameObj);

var Clickable = function (_GameObj3) {
	_inherits(Clickable, _GameObj3);

	function Clickable(x, y, w, h) {
		_classCallCheck(this, Clickable);

		var _this10 = _possibleConstructorReturn(this, (Clickable.__proto__ || Object.getPrototypeOf(Clickable)).call(this, x, y, w, h));

		if (arguments.length != 4) throw new Error('ArgumentError: Wrong number of arguments');
		_this10.enabled = true;
		_this10.isInHover = false;
		return _this10;
	}

	_createClass(Clickable, [{
		key: 'update',
		value: function update() {
			if (!Clickable.clickEventExists() || !this.enabled) return;

			this.checkHover();
			this.checkClick();
		}
	}, {
		key: 'checkClick',
		value: function checkClick() {
			// to add a onClickEnter and a onClickExit will be need add an onmouseup and onmousedown event
			if (!Ramu.clickedPosition.X && !Ramu.clickedPosition.Y) return;

			var rect = new Rect(Ramu.clickedPosition.X, Ramu.clickedPosition.Y, 1, 1);

			if (Ramu.Math.overlap(this.toRect(), rect)) {
				if (!this.isClicking) this.isClicking = true;
				this.onClick();
			} else {
				this.isClicking = false;
			}
		}
	}, {
		key: 'checkHover',
		value: function checkHover() {
			var rect = new Rect(Ramu.mousePosition.X, Ramu.mousePosition.Y, 1, 1);

			if (Ramu.Math.overlap(this.toRect(), rect)) {
				if (!this.isInHover) {
					this.isInHover = true;
					this.onHoverEnter();
					return;
				}
			} else {
				if (this.isInHover) {
					this.isInHover = false;
					this.onHoverExit();
					return;
				}
			}

			if (this.isInHover) this.onHoverStay();
		}

		/// Virtual to be inherited

	}, {
		key: 'onHoverEnter',
		value: function onHoverEnter() {}

		/// Virtual to be inherited

	}, {
		key: 'onHoverStay',
		value: function onHoverStay() {}

		/// Virtual to be inherited

	}, {
		key: 'onHoverExit',
		value: function onHoverExit() {}

		/// Virtual to be inherited

	}, {
		key: 'onClick',
		value: function onClick() {}
	}], [{
		key: 'clickEventExists',
		value: function clickEventExists() {
			return 'click' in document.documentElement;
		}
	}]);

	return Clickable;
}(GameObj);

/// Abstract superclass of SimpleparentBtnButton and SimpleparentBtnsheetButton


var SimpleButtonBase = function (_Clickable) {
	_inherits(SimpleButtonBase, _Clickable);

	function SimpleButtonBase(x, y, w, h) {
		_classCallCheck(this, SimpleButtonBase);

		var _this11 = _possibleConstructorReturn(this, (SimpleButtonBase.__proto__ || Object.getPrototypeOf(SimpleButtonBase)).call(this, x, y, w, h));

		if (arguments.length != 4) throw new Error('ArgumentError: Wrong number of arguments');

		_this11.onClickFunc = null;
		_this11.onClickFuncIsAdded = false;

		_this11.onHoverEnterFunc = null;
		_this11.onHoverEnterFuncIsAdded = false;

		_this11.onHoverExitFunc = null;
		_this11.onHoverExitFuncIsAdded = false;

		// Because there is a delay to go back to previous image, it was no need if it have a onClickEnter/Exit
		_this11.clicked = false;
		_this11.timeToCancelClickDrawable = 0.2;
		_this11.currentTimeToCancel = 0;
		return _this11;
	}

	_createClass(SimpleButtonBase, [{
		key: 'start',
		// Virtual

		value: function start() {
			this.updateEvents();
		}
	}, {
		key: 'setRect',
		value: function setRect(rect) {
			if (!(rect instanceof Rect)) throw Ramu.Utils.CustomTypeError(rect, Rect);

			this.x = rect.x;
			this.drawableObj.x = rect.x;
			this.y = rect.y;
			this.drawableObj.y = rect.x;
		}
	}, {
		key: 'setEnabled',
		value: function setEnabled(bool) {
			if (!(typeof bool === 'boolean')) throw Ramu.Utils.CustomTypeError(bool, Boolean);
			this.enabled = bool;
			this.drawableObj.enabled = bool;
		}
	}, {
		key: 'setOnClick',
		value: function setOnClick(func) {
			if (!(typeof func === 'function')) throw Ramu.Utils.CustomTypeError(func, Function);
			this.onClickFunc = func;
			this.onClickFuncIsAdded = true;
		}
	}, {
		key: 'setOnHoverEnter',
		value: function setOnHoverEnter(func) {
			if (!(typeof func === 'function')) throw Ramu.Utils.CustomTypeError(func, Function);
			this.onHoverEnterFunc = func;
			this.onHoverEnterFuncIsAdded = true;
		}
	}, {
		key: 'setOnHoverStay',
		value: function setOnHoverStay(func) {
			if (!(typeof func === 'function')) throw Ramu.Utils.CustomTypeError(func, Function);
			this.onHoverStay = func;
		}
	}, {
		key: 'setOnHoverExit',
		value: function setOnHoverExit(func) {
			if (!(typeof func === 'function')) throw Ramu.Utils.CustomTypeError(func, Function);
			this.onHoverExitFunc = func;
			this.onHoverExitFuncIsAdded = true;
		}

		/// Private Setter

	}, {
		key: 'setToHoverImage',
		value: function setToHoverImage() {
			this.clicked = false;
			if (this.drawableHover) this.drawableImage = this.drawableHover;
		}

		/// Private Setter

	}, {
		key: 'setToClickImage',
		value: function setToClickImage() {
			if (this.drawableClick) {
				this.clicked = true;
				this.drawableBeforeClick = this.drawableImage;
				this.drawableImage = this.drawableClick;
				this.currentTimeToCancel = 0;
			}
		}
	}, {
		key: 'updateEvents',
		value: function updateEvents() {
			this.onHoverEnter = function () {
				if (this.onHoverEnterFunc) {
					this.onHoverEnterFunc.call(this);
				}

				this.setToHoverImage();
			};

			this.onHoverExit = function () {
				if (this.onHoverExitFunc) {
					this.onHoverExitFunc.call(this);
				}

				this.clicked = false;
				this.drawableImage = this.drawableNormal;
			};

			this.onClick = function () {
				if (this.onClickFunc) {
					this.onClickFunc.call(this);
				}

				this.setToClickImage();
			};
		}
	}, {
		key: 'setActive',
		value: function setActive(bool) {
			_get(SimpleButtonBase.prototype.__proto__ || Object.getPrototypeOf(SimpleButtonBase.prototype), 'setActive', this).call(this, bool);
			this.drawableObj.setActive(bool);
		}
	}, {
		key: 'update',
		value: function update() {
			_get(SimpleButtonBase.prototype.__proto__ || Object.getPrototypeOf(SimpleButtonBase.prototype), 'update', this).call(this);

			if (this.clicked) {
				this.currentTimeToCancel += Ramu.time.delta;
				if (this.currentTimeToCancel >= this.timeToCancelClickDrawable) {
					this.drawableImage = this.drawableBeforeClick;
					this.clicked = false;
				}
			}

			// Because if setOnClick was written before Ramu.init then this.onClickFunc will be null and will never be called
			if (this.onClickFuncIsAdded) {
				this.updateEvents();
				this.onClickFuncIsAdded = false;
			}

			// Because if setOnHoverEnter was written before Ramu.init then this.onClickFunc will be null and will never be called
			if (this.onHoverEnterFuncIsAdded) {
				this.updateEvents();
				this.onHoverEnterFuncIsAdded = false;
			}

			// Because if setOnHoverExit was written before Ramu.init then this.onClickFunc will be null and will never be called
			if (this.onHoverEnterFuncIsAdded) {
				this.updateEvents();
				this.onHoverEnterFuncIsAdded = false;
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			_get(SimpleButtonBase.prototype.__proto__ || Object.getPrototypeOf(SimpleButtonBase.prototype), 'destroy', this).call(this);
			this.drawableObj.destroy();
		}
	}, {
		key: 'drawableObj',
		get: function get() {} // Virtual

	}, {
		key: 'drawableImage',
		set: function set(value) {} // Virtual

		,
		get: function get() {} // Virtual

	}, {
		key: 'drawableNormal',
		get: function get() {} // Virtual

	}, {
		key: 'drawableHover',
		get: function get() {} // Virtual

	}, {
		key: 'drawableClick',
		get: function get() {} // Virtual

	}, {
		key: 'drawableBeforeClick',
		set: function set(value) {} // Virtual

		,
		get: function get() {}
	}]);

	return SimpleButtonBase;
}(Clickable);

var SimpleSpriteButton = function (_SimpleButtonBase) {
	_inherits(SimpleSpriteButton, _SimpleButtonBase);

	function SimpleSpriteButton(x, y, w, h, bottonImg) {
		var buttonHover = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
		var buttonClick = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

		_classCallCheck(this, SimpleSpriteButton);

		var _this12 = _possibleConstructorReturn(this, (SimpleSpriteButton.__proto__ || Object.getPrototypeOf(SimpleSpriteButton)).call(this, x, y, w, h));

		if (arguments.length < 5 || arguments.length > 7) throw new Error('ArgumentError: Wrong number of arguments');
		_this12.sprite = new Sprite(bottonImg, x, y, w, h);
		_this12.imgNormal = bottonImg;
		_this12.imgHover = buttonHover;
		_this12.imgClick = buttonClick;
		_this12.imgBeforeClick = bottonImg;
		return _this12;
	}

	_createClass(SimpleSpriteButton, [{
		key: 'drawableObj',
		get: function get() {
			return this.sprite;
		}
	}, {
		key: 'drawableImage',
		set: function set(img) {
			if (!(img instanceof Image)) throw Ramu.Utils.CustomTypeError(img, Image);
			this.sprite.img = img;
		},
		get: function get() {
			return this.sprite.img;
		}
	}, {
		key: 'drawableNormal',
		get: function get() {
			return this.imgNormal;
		}
	}, {
		key: 'drawableHover',
		get: function get() {
			return this.imgHover;
		}
	}, {
		key: 'drawableClick',
		get: function get() {
			return this.imgClick;
		}
	}, {
		key: 'drawableBeforeClick',
		set: function set(img) {
			if (!(img instanceof Image)) throw Ramu.Utils.CustomTypeError(img, Image);
			this.rectBeforeClick = img;
		},
		get: function get() {
			return this.imgBeforeClick;
		}
	}]);

	return SimpleSpriteButton;
}(SimpleButtonBase);

var SimpleSpritesheetButton = function (_SimpleButtonBase2) {
	_inherits(SimpleSpritesheetButton, _SimpleButtonBase2);

	function SimpleSpritesheetButton(x, y, w, h, img, rectNormal) {
		var rectHover = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
		var rectClick = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;

		_classCallCheck(this, SimpleSpritesheetButton);

		var _this13 = _possibleConstructorReturn(this, (SimpleSpritesheetButton.__proto__ || Object.getPrototypeOf(SimpleSpritesheetButton)).call(this, x, y, w, h));

		if (arguments.length < 6 || arguments.length > 8) throw new Error('ArgumentError: Wrong number of arguments');
		_this13.spritesheet = new Spritesheet(img, rectNormal, x, y, w, h);
		_this13.rectNormal = rectNormal;
		_this13.rectHover = rectHover;
		_this13.rectClick = rectClick;
		_this13.rectBeforeClick = rectNormal;
		return _this13;
	}

	_createClass(SimpleSpritesheetButton, [{
		key: 'drawableObj',
		get: function get() {
			return this.spritesheet;
		}
	}, {
		key: 'drawableImage',
		set: function set(rect) {
			if (!(rect instanceof Rect)) throw Ramu.Utils.CustomTypeError(rect, Rect);
			this.spritesheet.setSheet(rect);
		},
		get: function get() {
			return this.spritesheet.sheet;
		}
	}, {
		key: 'drawableNormal',
		get: function get() {
			return this.rectNormal;
		}
	}, {
		key: 'drawableHover',
		get: function get() {
			return this.rectHover;
		}
	}, {
		key: 'drawableClick',
		get: function get() {
			return this.rectClick;
		}
	}, {
		key: 'drawableBeforeClick',
		set: function set(rect) {
			if (!(rect instanceof Rect)) throw Ramu.Utils.CustomTypeError(rect, Rect);
			this.rectBeforeClick = rect;
		},
		get: function get() {
			return this.rectBeforeClick;
		}
	}]);

	return SimpleSpritesheetButton;
}(SimpleButtonBase);

var Destroyer = function (_GameObj4) {
	_inherits(Destroyer, _GameObj4);

	function Destroyer(time, gameObj) {
		_classCallCheck(this, Destroyer);

		var _this14 = _possibleConstructorReturn(this, (Destroyer.__proto__ || Object.getPrototypeOf(Destroyer)).call(this, 0, 0, 0, 0));

		if (arguments.length !== 2) throw new Error('ArgumentError: Wrong number of arguments');
		_this14.timeToDestroy = time;
		_this14.currentTime = 0;
		_this14.objToBeDestroyed = gameObj;
		return _this14;
	}

	_createClass(Destroyer, [{
		key: 'update',
		value: function update() {
			this.currentTime += Ramu.time.delta;
			if (this.currentTime >= this.timeToDestroy) {
				if (this.objToBeDestroyed) this.objToBeDestroyed.destroy();
				this.destroy();
			}
		}
	}]);

	return Destroyer;
}(GameObj);

/// Simple abstraction to execute instructions when audio ends, and add a func to stop.


Ramu.Audio = function (_GameObj5) {
	_inherits(_class, _GameObj5);

	function _class(src) {
		_classCallCheck(this, _class);

		var _this15 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

		if (arguments.length != 1) throw new Error('ArgumentError: Wrong number of arguments');
		_this15.audio = new Audio(src);
		_this15.isPlaying = false;

		var ref = _this15;
		_this15.promiseCatch = function () {
			ref.isPlaying = false;
			if (Ramu.debugMode) console.warn('Ramu.Audio: Cannot play if the user did not interact with the document first.');
		};
		return _this15;
	}

	_createClass(_class, [{
		key: 'play',
		value: function play() {
			var startAt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			if (!this.canUpdate) return;
			this.isPlaying = true;
			this.audio.currentTime = startAt;
			this.audio.play().catch(this.promiseCatch);
		}
	}, {
		key: 'stop',
		value: function stop() {
			this.isPlaying = false;
			this.audio.pause();
			this.audio.currentTime = 0;
		}
	}, {
		key: 'pause',
		value: function pause() {
			this.audio.pause();
		}
	}, {
		key: 'resume',
		value: function resume() {
			if (!this.canUpdate) return;
			this.audio.play().catch(this.promiseCatch);
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.isPlaying && this.audio.ended) {
				this.stop();
				this.onAudioEnd();
			}
		}
	}, {
		key: 'setActive',
		value: function setActive(bool) {
			_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setActive', this).call(this, bool);
			this.pause();
		}

		/// Virtual to be inherited

	}, {
		key: 'onAudioEnd',
		value: function onAudioEnd() {}
	}]);

	return _class;
}(GameObj);

var Panorama = function (_GameObj6) {
	_inherits(Panorama, _GameObj6);

	function Panorama(img, x, y, w, h) {
		var velocity = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 20;

		_classCallCheck(this, Panorama);

		var _this16 = _possibleConstructorReturn(this, (Panorama.__proto__ || Object.getPrototypeOf(Panorama)).call(this, x, y, w, h));

		if (arguments.length < 5) throw new Error('ArgumentError: Wrong number of arguments');
		if (!(img instanceof Image)) throw Ramu.Utils.CustomTypeError(img, Image);

		_this16.left = new Sprite(img, x - w, y, w, h);
		_this16.center = new Sprite(img, x + w, y, w, h);
		_this16.right = new Sprite(img, x + w, y, w, h);
		_this16.velocity = velocity;
		_this16.setDrawPriority(-1);
		return _this16;
	}

	_createClass(Panorama, [{
		key: 'canDraw',
		value: function canDraw(bool) {
			if (!(typeof bool === 'boolean')) throw Ramu.Utils.CustomTypeError(bool, Boolean);

			this.left.canDraw = bool;
			this.center.canDraw = bool;
			this.right.canDraw = bool;
		}
	}, {
		key: 'setDrawPriority',
		value: function setDrawPriority(num) {
			this.left.drawPriority = parseInt(num);
			this.center.drawPriority = parseInt(num);
			this.right.drawPriority = parseInt(num);
			Ramu.callSortDraw = true;
		}
	}, {
		key: 'update',
		value: function update() {
			var vel = this.velocity * Ramu.time.delta;
			this.left.x += vel;
			this.center.x += vel;
			this.right.x += vel;

			// Left
			if (this.center.x >= Ramu.canvas.width) this.center.x = this.right.x - this.right.width;

			if (this.right.x >= Ramu.canvas.width) this.right.x = this.center.x - this.center.width;

			// Right
			if (this.center.x + this.center.width <= 0) this.center.x = this.right.width;

			if (this.right.x + this.right.width <= 0) this.right.x = this.center.width;
		}
	}, {
		key: 'setActive',
		value: function setActive(bool) {
			_get(Panorama.prototype.__proto__ || Object.getPrototypeOf(Panorama.prototype), 'setActive', this).call(this, bool);
			this.left.setActive(bool);
			this.center.setActive(bool);
			this.right.setActive(bool);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.left.destroy();
			delete this.left; //= null;
			this.center.destroy();
			delete this.center; //= null;
			this.right.destroy();
			delete this.right; //= null;
			_get(Panorama.prototype.__proto__ || Object.getPrototypeOf(Panorama.prototype), 'destroy', this).call(this);
		}
	}]);

	return Panorama;
}(GameObj);

var Text = function (_Drawable5) {
	_inherits(Text, _Drawable5);

	function Text(text, x, y, maxWidth) {
		var lineHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 25;

		_classCallCheck(this, Text);

		var _this17 = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, x, y, 1, 1, true));

		if (arguments.length < 4) throw new Error('ArgumentError: Wrong number of arguments');
		_this17.text = text;
		_this17.maxWidth = maxWidth;
		_this17.lineHeight = lineHeight;

		_this17.font = Ramu.ctx.font;
		_this17.fillStyle = Ramu.ctx.fillStyle;

		_this17.drawOutOfCanvas = true;
		return _this17;
	}

	_createClass(Text, [{
		key: 'start',
		value: function start() {}
		// this.setUp();


		// Adapted from www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial

	}, {
		key: 'draw',
		value: function draw() {
			var y = this.y,
			    testWidth = 0;
			var line = '',
			    testLine = '',
			    metrics = null;

			var oldFont = Ramu.ctx.font;
			var oldStyle = Ramu.ctx.fillStyle;

			Ramu.ctx.font = this.font;
			Ramu.ctx.fillStyle = this.fillStyle;

			this._words = this.text.replace(/\n/g, " \\n ").split(' ');

			for (var n = 0; n < this._words.length; n++) {
				testLine = line + this._words[n] + ' ';
				metrics = Ramu.ctx.measureText(testLine);
				testWidth = metrics.width;

				if (this._words[n] == "\\n") {
					Ramu.ctx.fillText(line, this.x, y);
					line = '';
					y += this.lineHeight;
				} else if (testWidth > this.maxWidth && n > 0) {
					Ramu.ctx.fillText(line, this.x, y);
					line = this._words[n] + ' ';
					y += this.lineHeight;
				} else {
					line = testLine;
				}
			}

			Ramu.ctx.fillText(line, this.x, y);
			Ramu.ctx.font = oldFont;
			Ramu.ctx.fillStyle = oldStyle;
		}

		// setUp(){ // break in apathy cloud
		// this._words = this.text.replace(/\n/g, " \\n ").split(' ');
		// }

	}]);

	return Text;
}(Drawable);

var SimpleParticle = function (_GameObj7) {
	_inherits(SimpleParticle, _GameObj7);

	function SimpleParticle(img, rect, lifeSpan, particleNumber) {
		_classCallCheck(this, SimpleParticle);

		var _this18 = _possibleConstructorReturn(this, (SimpleParticle.__proto__ || Object.getPrototypeOf(SimpleParticle)).call(this, rect.x, rect.y, rect.width, rect.height));

		if (arguments.length != 4) throw new Error('ArgumentError: Wrong number of arguments');

		_this18.drawPriority = Ramu.drawLastPriority++;
		_this18.particleNumber = particleNumber / 2;
		_this18.particle = img;
		_this18.destroyOnEnd = false;
		_this18.lifeSpan = lifeSpan;
		return _this18;
	}

	_createClass(SimpleParticle, [{
		key: 'start',
		value: function start() {
			this.particles = [];
			this.isOver = true;
			this.alreadyPlayed = false;
			Ramu.callSortDraw = true;
			for (var i = 0; i < this.particleNumber; i++) {
				this.particles[i] = new Sprite(this.particle, this.x, this.y, this.width, this.height, false);
				this.particles[i].drawPriority = this.drawPriority;
				this.particles[i].tag = 'particle-sprite';
			}
		}
	}, {
		key: 'init',
		value: function init() {
			if (!this._start_was_called) {
				console.warn("The update was not called yet,");
				this.start();
				this._start_was_called = true;
			}

			for (var i = 0; i < this.particles.length; i++) {
				this.particles[i].canDraw = true;
				this.particles[i].opacity = 1;
			}

			this.currentTimeToFall = 0;
			this.currentLife = 0;
			this.isOver = false;
		}
	}, {
		key: 'setDrawPriority',
		value: function setDrawPriority(priority) {
			Ramu.callSortDraw = true;
			this.drawPriority = priority;

			for (var i = 0; i < this.particles.length; i++) {
				this.particles[i].drawPriority = priority;
			}
		}
	}, {
		key: 'setPosition',
		value: function setPosition(x, y) {
			this.x = x;
			this.y = y;

			// if (this.isOver)
			this.resetPosition();
		}
	}, {
		key: 'setActive',
		value: function setActive(bool) {
			_get(SimpleParticle.prototype.__proto__ || Object.getPrototypeOf(SimpleParticle.prototype), 'setActive', this).call(this, bool);
			for (var i = 0; i < this.particles.length; i++) {
				this.particles[i].setActive(bool);
			}
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.isOver) return;

			this.currentTimeToFall >= this.currentLife / 2 ? this.move(this.particleNumber) : this.move(this.particleNumber / 2);
			this.currentLife += Ramu.time.delta;

			if (this.currentLife > this.lifeSpan) {
				for (var i = 0; i < this.particles.length; i++) {
					this.particles[i].opacity -= 0.07;
				}
			}

			if (this.particles[0].opacity <= 0) {
				this.isOver = true;
				this.alreadyPlayed = true;

				if (this.destroyOnEnd) this.destroy();else this.resetPosition();
			}
		}
	}, {
		key: 'resetPosition',
		value: function resetPosition() {
			for (var i = 0; i < this.particles.length; i++) {
				this.particles[i].x = this.x;
				this.particles[i].y = this.y;
				this.particles[i].canDraw = false;
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.canUpdate = false;
			// i commented this because this break something, but the sprites must be removed anyway. Gotta go figure out other way to destroy objects
			// for (let i = 0; i < this.particles.length; i++)
			// this.particles[i].destroy();

			// this.particles = null;
			// this.particle.destroy();

			// its no use, the image is a ramu object
			this.particle = null;
			_get(SimpleParticle.prototype.__proto__ || Object.getPrototypeOf(SimpleParticle.prototype), 'destroy', this).call(this);
		}
	}, {
		key: 'random',
		value: function random(max, min) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}, {
		key: 'move',
		value: function move(vel) {
			for (var i = 0; i < this.particles.length; i++) {
				var x = this.random(-vel, vel);
				var y = this.random(-vel, vel);
				this.particles[i].x += x * Ramu.time.delta;
				this.particles[i].y += y * Ramu.time.delta;
			}
		}
	}]);

	return SimpleParticle;
}(GameObj);
