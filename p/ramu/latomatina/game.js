const TOMATO_IMG = RamuUtils.getImage('res/tomato.gif');
const CITIZEN_IMG = RamuUtils.getImage('res/citizen.gif');

class Tomato extends SimpleRectCollisor{
	constructor(x){
		super(x, 541, 41, 39);
		this.sprite = new Sprite(TOMATO_IMG, x, 541, 41, 39);
		this.sprite.drawPriority = 3;
		this.tag = 'tomato';
		this.velocity = 300;
		// Ramu.callSortDraw = true;
	}
	
	update(){
		super.update();
		this.y -= this.velocity * Ramu.time.delta;
		this.sprite.y -= this.velocity * Ramu.time.delta;
		
		if (this.y + this.width < 0){
			this.destroy();
			this.sprite.destroy();
		}
	}
}

class Citizen extends SimpleRectCollisor{
	constructor(x){
		super(x, 259, 58, 69);
		this.sprite = new Sprite(CITIZEN_IMG, x, 259, 58, 69);
		this.sprite.drawPriority = 1;
		this.canCollide = false;
		this.tag = 'citizen';
				
		this.state = ['goingUp', 'waiting', 'goingDown', 'destroy'];
		this.currentState = 0;
		this.timeToChangeState = 40;
		this.currentTimeToChange = 0;
	}
	
	goUp(){
		this.canCollide = false;
		this.y -= 100 * Ramu.time.delta;
		this.sprite.y -= 100 * Ramu.time.delta;	
	}
	
	goDown(){
		this.canCollide = false;
		this.y += 100 * Ramu.time.delta;
		this.sprite.y += 100 * Ramu.time.delta;	
	}
	
	update(){
		super.update();
		
		this.currentTimeToChange += 1;
		if (this.currentTimeToChange >= this.timeToChangeState){
			this.currentTimeToChange = 0;	
			this.currentState++;
		}	
	
		switch (this.state[this.currentState]){
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
	
	onCollision(){
		let obj = this;
		this.collision.forEach(function(item) {
			if (item.tag === 'tomato'){
				game.hitScore++;
				obj.destroy();
			}
		});
	}
	
	destroy(){
		super.destroy();
		this.sprite.destroy();
	}
}

class Game extends GameObj{
	start(){
		this.bg = new Parallax(RamuUtils.getImage('res/crowd.gif'), 0, 0, 500, 259, 50);
		this.truck = new Sprite(RamuUtils.getImage('res/bucket.gif'), 0, 259, 500, 241);
		this.truck.drawPriority = 2;
		this.eventCreated = false;
		
		this.score = new Text('', Ramu.width / 2 - 40, 460);
		this.infoDump = new Text('Click/touch to throw a tomato. Hermes Passer in 2018-06-26', 40, 480);
		
		this.timeToThrow = 1;
		this.currentTimeThrow = this.timeToThrow;
		this.canThrow = false;
		
		this.timeToInstantiate = 1;
		this.currentTimeInstantiate = 0;
		
		this.hitScore = 0;
		this.missScore = 0;
	}
	
	update(){
		this.createEvent();
		
		if (this.currentTimeThrow >= this.timeToThrow)
			this.canThrow = true;
		
		if (this.currentTimeInstantiate >= this.timeToInstantiate)
			this.instantiateCitizen();
		
		this.currentTimeThrow += Ramu.time.delta;
		this.currentTimeInstantiate += Ramu.time.delta;
		this.score.text = "HITS: " + this.hitScore + " | MISS: " + this.missScore;
	}
	
	createEvent(){
		// Ramu.canvas will be defined after Ramu.init was called
		if (Ramu.canvas && !this.eventCreated){
			this.eventCreated = true;
			'ontouchstart' in document.documentElement ? this.onTouch() : this.onClick();
		}
	}
	
	onClick(){
		Ramu.canvas.addEventListener('click', event => {
			let bound = Ramu.canvas.getBoundingClientRect();
			let x = event.clientX - bound.left - Ramu.canvas.clientLeft; // let y = event.clientY - bound.top - Ramu.canvas.clientTop;
			game.throwTomato(x);
		});
	}
	
	onTouch(){
		Ramu.canvas.addEventListener('touchstart', function() {
			let bound = Ramu.canvas.getBoundingClientRect();
			let x = touchEvent.touches[0].clientX - bound.left ; // let y = touchEvent.touches[0].clientY - bound.top;
			game.throwTomato(x);
		});
	}

	throwTomato(x){
		if (!this.canThrow)
			return;
		new Tomato(x);
		this.currentTimeThrow = 0;
		this.canThrow = false;
	}
	
	instantiateCitizen(){
		this.currentTimeInstantiate = 0;
		let x = Math.trunc(Math.random() * Ramu.width);
		new Citizen(x);
	}
}

Ramu.init(500, 500); 
Ramu.debugMode = true;
var game = new Game();
