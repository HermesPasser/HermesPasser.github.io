---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[Raycast](Raycast).init()   

## Description
Starts the raycast.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20ray%20=%20new%20Raycast(1,3,5,6);%0Aray.init(0,%200,%2020,%2030,%2010);%0A%0ARamu.init();%0ARamu.debugMode%20=%20true;).
```javascript
let ray = new Raycast(1,3,5,6);
ray.init(0, 0, 20, 30, 10);

Ramu.init();
Ramu.debugMode = true;
``` 
See also [Raycast.abort](Raycast.abort).