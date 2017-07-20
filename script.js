function load(){
	
	// Change main height - set the size of main as the same as content
	let content = document.getElementById('content');
	let contentheight = (content.clientHeight + 1) + "px";
	document.getElementById('main').setAttribute("style","height:" + contentheight);
}
