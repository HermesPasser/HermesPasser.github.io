---
title: Rhythm Flamenco
pagename: rhythmflamenco
keywords: ramu, demo
description: Ramu demo.
show-comments: false

layout: default
---
[back to Ramu](../)   
<script type="text/javascript" src="../ramu-0.6.js"></script>
<script type="text/javascript" src="game.js"></script>
<script>
	// from https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
	window.addEventListener("keydown", function(e) {
		// space and arrow keys
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1)
			e.preventDefault();
	}, false);
	addCanvasOnMain(); 
</script>