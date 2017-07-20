function load(){
	
	// Change main height - set the size of main as the same as content
	document.getElementById('main').setAttribute("style","height:" + document.getElementById('content').clientHeight+ "px");
}
