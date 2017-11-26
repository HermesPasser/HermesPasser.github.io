function load(){
	// Mobile
	if (window.matchMedia("(max-width: 640px)" ).matches) {
		
		// Get all children of aside and sum  their sizes 
		var aside = document.getElementsByTagName('aside');
		var childs = aside[0].children;
		var totalHeight = 0;
		for(i = 0; i < childs.length; i++)
			totalHeight += childs[i].boxSizing;

		// Set the height of aside as the same of the sum  of all your children
		document.getElementsByTagName('aside')[0].setAttribute("style","height:" + totalHeight + "px");
		
	// Desktop
	} else {
		// Set the height of aside as the same as main
		var main = document.getElementsByTagName('main');
		var mainHeight = main[0].clientHeight + "px";
		document.getElementsByTagName('aside')[0].setAttribute("style","height:" + mainHeight);
	}
}

setInterval(function(){ load(); }, 3000);

function getCode(string){
	var request = new XMLHttpRequest();
	request.open("GET", string, false);
	request.send();
	return request.responseText;
}