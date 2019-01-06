---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` SpriteAnimation : [Drawable](Drawable)

## Description
Displays an animation of sprites.

## Constructor Parameters
- ``int`` **x**: Position in x.  
- ``int`` **y**: Position in y.  
- ``int`` **width**: Width.   
- ``int`` **height**: Height.   
```javascript
let img = Ramu.Utils.getImage("image.png");
let sa = new SpriteAnimation(10,10,10,10);
sa.addFrame(img);
```

## Properties
- [animationIsOver](SpriteAnimation.animationIsOver)  
- [animationPause](SpriteAnimation.animationPause)  
- [animationTime](SpriteAnimation.animationTime)  
- [playInLoop](SpriteAnimation.playInLoop)  

## Public Methods 
- [addFrame](SpriteAnimation.addFrame)  
- [reset](SpriteAnimation.reset)  

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