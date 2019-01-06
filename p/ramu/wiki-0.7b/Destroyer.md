---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` Destroyer : [GameObj](GameObj)

## Description
Destroy a GameObj after a period of time.

## Constructor Parameters
- ``float`` **time**: Time to destroy the gameObj.  
- [``GameObj``](GameObj) **gameObj**: gameObj to be destroyed.    
```javascript
new Destroyer (3, new Text("I will be destroyed", 20, 20, 100));
```
You can also test this snipped of code [here](https://hermespasser.github.io/p/ramu/tryramu/?new%20Destroyer%20(3,%20new%20Text(%22I%20will%20be%20destroyed%22,%2020,%2020,%20100));%0ARamu.init(400,300);)

## Properties
- [canDraw](Drawable.canDraw)  
- [drawOutOfCanvas](Drawable.drawOutOfCanvas)  
- [drawPriority](Drawable.drawPriority)  
- [flipHorizontally](Drawable.flipHorizontally)  
- [flipVertically](Drawable.flipVertically)  
- [opacity](Drawable.opacity)   

## Inherited Members
- [canDestroy](GameObj.canDestroy)  
- [canUpdate](GameObj.canUpdate)  
- [destroy](GameObj.destroy)  
- [height](GameObj.height)  
- [setActive](GameObj.setActive)  
- [start](GameObj.start)  
- [tag](GameObj.tag)  
- [toRect](GameObj.toRect)  
- [update](GameObj.update)   
- [updatePriority](GameObj.updatePriority)  
- [width](GameObj.width)  
- [x](GameObj.x)  
- [y](GameObj.y)  