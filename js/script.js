
function addCanvasOnMain(){
	var main = document.getElementById('main');
	var canvas = document.getElementsByTagName('canvas')[0];
	if (main !== null && canvas !== void(0))
		main.appendChild(canvas);
}

/// Draw a line below the current page on column
// function selectColumn(){
	// var columns = document.getElementsByClassName('selectable');
	// var href = window.location.href;
	// href = href.substr(0, href.length - 1);
	// var page = href.substr(href.lastIndexOf('/') + 1);
	
		
	// for (var i = 0; i < columns.length; ++i){
		// var attr = columns[i].attributes['href'].value;

		// if (href === void(0) || attr === window.location.href || attr.match(`https|http:\/\/.*\/${page}`)){
			// columns[i].setAttribute('class', 'selectable selected');
		// } else {
			// columns[i].setAttribute('class', 'selectable');	
		// }
	// }
// }
// selectColumn();
