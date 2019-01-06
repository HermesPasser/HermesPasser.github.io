---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` Panorama : [GameObj](GameObj)

## Description
Make a horizontal panorama effect using sprites.  

**Note:** This class is depreciated.

## Constructor Parameters
- ``Image Object`` **img**: Panorama image.  
- ``int`` **x**: Position in x.  
- ``int`` **y**: Position in y.  
- ``int`` **w**: Width.   
- ``int`` **h**: Height. 
- ``float`` **velocity**: X velocity. (optional, default is 20)   

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20img%20=%20Ramu.Utils.getImage(%22https://github.com/HermesPasser/Ramu/blob/master/demos/img/montains.png?raw=true%22);%0Alet%20panorama%20=%20new%20Panorama(img,%200,%200,%20500,%20500);%0ARamu.init();).
```javascript
let img = Ramu.Utils.getImage("https://github.com/HermesPasser/Ramu/blob/master/demos/img/montains.png?raw=true");
let panorama = new Panorama(img, 0, 0, 500, 500);
``` 

## Properties
- [velocity](Panorama.velocity)   

## Public Methods
- [canDraw](Panorama.canDraw)  
- [setDrawPriority](Panorama.setDrawPriority)  

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