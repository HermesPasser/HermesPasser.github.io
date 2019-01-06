---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static class`` Ramu  
## Description
Control de game loop, events and canvas.  

While Ramu is running it will call the [GameObjs](GameObj)/[Drawables](Drawable)/[Collisors](Collisor) methods in this order:
- start
- checkCollision
- update
- draw

**Note** that draw is the only one that is called even with [inLoop](inLoop) being false.

## Static Variables
- [callDestroy ](Ramu.callDestroy)  
- [callSortCollision](Ramu.callSortCollision)  
- [callSortDraw](Ramu.callSortDraw)  
- [callSortUpdate ](Ramu.callSortUpdate)  
- [canvas](Ramu.canvas)   
- [clickedPosition](Ramu.clickedPosition)  
- [ctx](Ramu.ctx)   
- [debugMode](Ramu.debugMode)  
- [height](Ramu.height)  
- [inLoop](Ramu.inLoop)   
- [lastKeysPressed](Ramu.lastKeysPressed)  
- [mousePosition](Ramu.mousePosition)  
- [pressedKeys](Ramu.pressedKeys)  
- [time.delta](Ramu.time.delta)   
- [VERSION](Ramu.VERSION)  
- [width](Ramu.width)  

## Static Methods
- [init](Ramu.init)
