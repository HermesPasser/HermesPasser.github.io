---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` Clickable : [GameObj](GameObj)

## Description
Base class for clickable classes.

## Constructor Parameters
- ``int`` **x**: Position in x.   
- ``int`` **x**: Position in y.   
- ``int`` **w**: Width.   
- ``int`` **h**: Height.   
```javascript
let clk = new Clickable(10, 10, 100, 100);
```

## Properties
- [enabled](Clickable.enabled)  

## Public Methods
- [onClick](Clickable.onClick)  
- [onHoverEnter](Clickable.onHoverEnter)  
- [onHoverExit](Clickable.onHoverExit)  
- [onHoverStay](Clickable.onHoverStay)  

## Static Methods
- [clickEventExists](Clickable.clickEventExists) 

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