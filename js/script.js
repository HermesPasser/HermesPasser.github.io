
function addCanvasOnMain() {
	var main = document.getElementById('main');
	var canvas = document.getElementsByTagName('canvas')[0];
	if (main !== null && canvas !== void(0))
		main.appendChild(canvas);
}

function blockScroll() {
	// from https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
	window.addEventListener('keydown', function(e) {
		// space and arrow keys
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1){
			e.preventDefault();
		}
	}, false);
	window.onload = addCanvasOnMain;
}

