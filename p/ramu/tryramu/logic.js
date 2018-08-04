var ramuIsHide = false;
var editorIsHide = true;

function addCanvasToDiv() {
	var canvas = document.getElementsByTagName('canvas')[0];
	if (canvas) {
		document.getElementsByClassName('code')[0].appendChild(canvas);
	}
}

function setVisibility(el, isHidden) {
	el.style.visibility = isHidden ? 'hidden' : 'visible';
}

function showRamu() {
	ramuIsHide = !ramuIsHide;
	setVisibility(document.getElementsByTagName('canvas')[0], ramuIsHide);
}

function clearCode() {
	var href = window.location.href;
	var index = href.indexOf('?');
	if (index !== -1) {
		var newhref = href.substring(0, index);
		window.location.href = newhref;
	}
}

function execute() {
	var href = window.location.href;
	var index = href.indexOf('?');
	var value = document.getElementById('editor').value;
	if (index !== -1) {
		window.location.href = encodeURI(href.substring(0, index) + "?" + value);
	} else {
		window.location.href = encodeURI(href + "?" + value);
	}
	addCanvasToDiv();
}

function setUrlTextInEditor() {
	var codetext = document.getElementById('code').innerText;
	if (codetext !== '') document.getElementById('editor').innerText = codetext;
}

function editor() {
	editorIsHide = !editorIsHide;
	setUrlTextInEditor();
	setVisibility(document.getElementById('editor'), editorIsHide);
}

function addCode() {
	var href = window.location.href;
	var index = href.indexOf('?');
	if (index !== -1) {
		var code = decodeURI(href.substring(index + 1));
		var scrtag = document.getElementById('code');
		scrtag.innerText = code;
		addCanvasToDiv();
	}
}

addCode();
setUrlTextInEditor();