function changeHeight() {
	var temp = document.getElementById('content').clientHeight;
	document.getElementById('sidebar-right').setAttribute("style","height:" + temp + "px");
}