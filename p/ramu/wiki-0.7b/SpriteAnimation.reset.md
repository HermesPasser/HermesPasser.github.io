---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SpriteAnimation](SpriteAnimation).reset()   

## Description
Reset the animation.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20anim%20=%20new%20SpriteAnimation(10,%2010,%2035,%2035);%0Aanim.playInLoop%20=%20false;%0Aanim.addFrame(%5B%0A%20%20%20Ramu.Utils.getImage(%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_1.gif%22),%0A%20%20%20Ramu.Utils.getImage(%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_2.gif%22),%0A%5D);%0A%0Anew%20GameObj().update%20=%20function()%7B%0A%20%20%20if%20(keyCode.space%20in%20Ramu.lastKeysPressed)%7B%0A%20%20%20%20%20%20anim.reset();%0A%20%20%20%7D%0A%7D;%0A%0ARamu.init();).
```javascript
let anim = new SpriteAnimation(10, 10, 35, 35);
anim.playInLoop = false;
anim.addFrame([
   Ramu.Utils.getImage("https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_1.gif"),
   Ramu.Utils.getImage("https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSprite_2.gif"),
]);

new GameObj().update = function(){
   if (keyCode.space in Ramu.lastKeysPressed){
      anim.reset();
   }
};

``` 
