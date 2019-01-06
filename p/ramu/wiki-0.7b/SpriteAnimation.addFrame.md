---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SpriteAnimation](SpriteAnimation).addFrame()   

## Parameters
``Image Object``\\``Image Object[]`` **img**: Image or image array to be added as frames to the animation.  

## Description
Add an animation frame.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20f1%20=%20%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_1.gif%22;%0Alet%20f2%20=%20%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_2.gif%22;%0Alet%20f3%20=%20%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_3.gif%22;%0Alet%20f4%20=%20%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_4.gif%22;%0Alet%20f5%20=%20%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_5.gif%22;%0A%0Alet%20anim%20=%20new%20SpriteAnimation(10,%2010,%2035,%2035);%0Aanim.addFrame(Ramu.Utils.getImage(f1));%0Aanim.addFrame(Ramu.Utils.getImage(f2));%0Aanim.addFrame(Ramu.Utils.getImage(f3));%0Aanim.addFrame(%5B%0A%20%20%20Ramu.Utils.getImage(f4),%0A%20%20%20Ramu.Utils.getImage(f5)%0A%5D);%0ARamu.init();).
```javascript
let f1 = "https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_1.gif";
let f2 = "https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_2.gif";
let f3 = "https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_3.gif";
let f4 = "https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_4.gif";
let f5 = "https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_5.gif";

let anim = new SpriteAnimation(10, 10, 35, 35);
anim.addFrame(Ramu.Utils.getImage(f1));
anim.addFrame(Ramu.Utils.getImage(f2));
anim.addFrame(Ramu.Utils.getImage(f3));
anim.addFrame([
   Ramu.Utils.getImage(f4),
   Ramu.Utils.getImage(f5)
]);
``` 
