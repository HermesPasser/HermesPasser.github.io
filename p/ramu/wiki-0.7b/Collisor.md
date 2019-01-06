---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` Collisor : [Drawable](Drawable)

## Description
Class responsible for collision.

## Constructor Parameters
- ``int`` **x**: Position in x.  
- ``int`` **y**: Position in y.  
- ``int`` **width**: Width.   
- ``int`` **height**: Height.   
```javascript
let coll = new Collisor(10, 10, 100, 100);
```

## Properties
- [canCollide](Collisor.canCollide)  
- [collision](Collisor.collision)  
- [collisionPriority](Collisor.collisionPriority)  
- [isInCollision](Collisor.isInCollision)  

## Public Methods
- [onCollision](Collisor.onCollision)  

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