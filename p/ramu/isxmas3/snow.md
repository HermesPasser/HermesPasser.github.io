---
title: Snow Simulation
pagename: snowmanssacrifice
keywords: ramu, demo
description: Ramu demo.
show-comments: false

layout: default
---
[back to Ramu](../../) &#8226; [demo source](https://github.com/HermesPasser/ENatal3)   

<script type="text/javascript" src="ramu-0.7b.js"></script>
<script type="text/javascript" src="snow.js"></script>
<script type="text/javascript">
	blockScroll();
	window.onload = addCanvasOnMain;

	var game = new SnowGame();
	Ramu.init(500, 500);
</script>
