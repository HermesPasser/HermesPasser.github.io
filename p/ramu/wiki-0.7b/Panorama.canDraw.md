---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[Panorama](Panorama).canDraw(bool)   

## Parameters
``bool`` **bool**: Flag to tells whether it will be drawn or not.  

## Description
Set the value of [canDraw](Drawable.canDraw) of its sprites.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20img%20=%20Ramu.Utils.getImage(%22https://github.com/HermesPasser/Ramu/blob/master/demos/img/montains.png?raw=true%22);%0Alet%20panorama%20=%20new%20Panorama(img,%200,%200,%20500,%20500);%0Apanorama.canDraw(true);%0A%0ARamu.init();).
```javascript
let img = Ramu.Utils.getImage("https://github.com/HermesPasser/Ramu/blob/master/demos/img/montains.png?raw=true");
let panorama = new Panorama(img, 0, 0, 500, 500);
panorama.canDraw(true);
``` 
