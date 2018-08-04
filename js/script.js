
function addCanvasOnMain(){
	var main = document.getElementById('main');
	var canvas = document.getElementsByTagName('canvas')[0];
	if (main !== null && canvas !== void(0))
		main.appendChild(canvas);
}

function getCode(string){
	var request = new XMLHttpRequest();
	request.open("GET", string, false);
	request.send();
	return request.responseText;
}
