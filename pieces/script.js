function load(){
	
	// Change main height - set the size of main as the same as content
	var content = document.getElementById('content');
	var contentheight = (content.clientHeight + 1) + "px";
	document.getElementById('main').setAttribute("style","height:" + contentheight);
}
