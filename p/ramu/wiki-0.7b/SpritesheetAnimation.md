---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` SpritesheetAnimation : [SpriteAnimation](SpriteAnimation)

## Description
Displays an animation using sheets of an image.

## Constructor Parameters
- ``Image Object`` **img**: The image.  
- ``int`` **x**: Position in x.  
- ``int`` **y**: Position in y.  
- ``int`` **width**: Width.   
- ``int`` **height**: Height.   
```javascript
let img = Ramu.Utils.getImage("image.png");
let sa = new SpritesheetAnimation(img,10,10,10,10);
sa.addFrame(new Rect(0,0,5,5));
```

## Properties
- [img](SpritesheetAnimation.img)  

## Public Methods 
- [addFrame](SpritesheetAnimation.addFrame)  

## Inherited Members
- [animationIsOver](SpriteAnimation.animationIsOver)  
- [animationPause](SpriteAnimation.animationPause)  
- [animationTime](SpriteAnimation.animationTime)  
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
- [playInLoop](SpriteAnimation.playInLoop)  
- [setActive](GameObj.setActive)  
- [start](GameObj.start)  
- [tag](GameObj.tag)  
- [toRect](GameObj.toRect)  
- [update](GameObj.update)   
- [updatePriority](GameObj.updatePriority)  
- [width](GameObj.width)  
- [x](GameObj.x)  
- [y](GameObj.y)  