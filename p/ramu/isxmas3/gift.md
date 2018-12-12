---
title: Santa's Gift
pagename: santasgift
keywords: ramu, demo
description: Ramu demo.
show-comments: false

layout: default
---
[back to Ramu](../) &#8226; [demo source](https://github.com/HermesPasser/ENatal3)   

<script type="text/javascript" src="ramu-0.7b.js"></script>
<script type="text/javascript" src="snow.js"></script>
<script type="text/javascript" src="gift.js"></script>
<script>
	// from https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
	window.addEventListener("keydown", function(e) {
		// space and arrow keys
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1){
			e.preventDefault();
		}
	}, false);
	window.onload = addCanvasOnMain;
</script>
