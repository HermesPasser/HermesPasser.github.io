---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` SimpleRectCollisor: [Collisor](Collisor)

## Description
Rectangle collisor.

## Constructor Parameters
- ``int`` **x**: Position in x.  
- ``int`` **y**: Position in y.  
- ``int`` **width**: Width.   
- ``int`` **height**: Height.   
```javascript
let rec = new SimpleRectCollisor(10, 10, 100, 100);
```
You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init();%0ARamu.debugMode%20=%20true;%0A%0Alet%20rec1%20=%20new%20SimpleRectCollisor(10,%2015,%20100,%20100);%0Alet%20rec2%20=%20new%20SimpleRectCollisor(15,%2010,%2050,%2050);%0A%0Anew%20GameObj().update%20=%20function()%7B%0A%20%20%20if%20(keyCode.space%20in%20Ramu.lastKeysPressed)%7B%0A%20%20%20%20%20%20rec1%20.canCollide%20=%20!rec1.canCollide;%0A%20%20%20%7D%0A%7D;%0A%0A).
```javascript
Ramu.init();
Ramu.debugMode = true;

let rec1 = new SimpleRectCollisor(10, 15, 100, 100);
let rec2 = new SimpleRectCollisor(15, 10, 50, 50);

new GameObj().update = function(){
   if (keyCode.space in Ramu.lastKeysPressed){
      rec1 .canCollide = !rec1.canCollide;
   }
};
```

## Inherited Members
- [canCollide](Collisor.canCollide)  
- [canDestroy](GameObj.canDestroy)  
- [canDraw](Drawable.canDraw)  
- [canUpdate](GameObj.canUpdate)  
- [collision](Collisor.collision)  
- [collisionPriority](Collisor.collisionPriority)  
- [destroy](GameObj.destroy)  
- [draw](Drawable.draw)  
- [drawOutOfCanvas](Drawable.drawOutOfCanvas)  
- [drawPriority](Drawable.drawPriority)  
- [flipHorizontally](Drawable.flipHorizontally)  
- [flipVertically](Drawable.flipVertically)  
- [height](GameObj.height)  
- [isInCollision](Collisor.isInCollision)  
- [onCollision](Collisor.onCollision)  
- [opacity](Drawable.opacity)  
- [setActive](GameObj.setActive)  
- [start](GameObj.start)  
- [tag](GameObj.tag)  
- [toRect](GameObj.toRect)  
- [update](GameObj.update)   
- [updatePriority](GameObj.updatePriority)  
- [width](GameObj.width)  
- [x](GameObj.x)  
- [y](GameObj.y)  