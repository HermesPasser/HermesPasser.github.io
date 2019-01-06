---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` Sprite : [Drawable](Drawable)

## Description
Displays an image.

## Constructor Parameters
- ``Image Object`` **img**: The image.  
- ``int`` **x**: Position in x.  
- ``int`` **y**: Position in y.  
- ``int`` **width**: Width.   
- ``int`` **height**: Height.   
- ``bool`` **canDraw**: Whether it will be drawn or not. (optional, default is true)   

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20img%20=%20Ramu.Utils.getImage(%22https://i.imgur.com/E0Z8YMr.png%22);%0Alet%20s%20=%20new%20Sprite(img,%2010,%2010,%20100,%20100,%20true);%0A%0ARamu.init();).
```javascript
let img = Ramu.Utils.getImage("https://i.imgur.com/E0Z8YMr.png");
let s = new Sprite(img, 10, 10, 100, 100, true);
```

## Properties
- [img](Sprite.img)  

## Inherited Members
- [canDestroy](GameObj.canDestroy)  
- [canDraw](Drawable.canDraw)  
- [canUpdate](GameObj.canUpdate)  
- [destroy](GameObj.destroy)  
- [draw](Drawable.draw)  
- [drawOutOfCanvas](Drawable.drawOutOfCanvas)  
- [drawPriority](Drawable.drawPriority)  
- [flipHorizontally](Drawable.flipHorizontally)  
- [flipVertically](Drawable.flipVertically)  
- [height](GameObj.height)  
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