---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` GameObj

## Description
Base class for all game classes.

## Constructor Parameters
- ``int`` **x**: Position in x. (optional, default is 0)  
- ``int`` **y**: Position in y. (optional, default is 0)  
- ``int`` **w**: Width. (optional, default is 0)   
- ``int`` **h**: Height. (optional, default is 0)   
```javascript
let gameobj = new GameObj(10, 10, 100, 100);
```

## Properties
- [canDestroy](GameObj.canDestroy)  
- [canUpdate](GameObj.canUpdate)  
- [height](GameObj.height)  
- [tag](GameObj.tag)  
- [updatePriority](GameObj.updatePriority)  
- [width](GameObj.width)  
- [x](GameObj.x)  
- [y](GameObj.y)  

## Public Methods
- [destroy](GameObj.destroy)  
- [setActive](GameObj.setActive)  
- [start](GameObj.start)  
- [toRect](GameObj.toRect)  
- [update](GameObj.update)   
