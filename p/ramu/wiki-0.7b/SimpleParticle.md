---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` SimpleParticle : [GameObj](GameObj)

## Description
A particle system with an "explosion" effect.   

**Note:** This class is depreciated.

## Constructor Parameters
img, rect, lifeSpan, particleNumber
- ``Image Object`` **img**: Particle image.  
- [``Rect``](Rect) **rect**: Position and size.  
- ``float`` **lifeSpan**: Time to particles vanish.  
- ``int`` **particleNumber**: Number of particles.   
```javascript
let img = Ramu.Utils.getImage("https://github.com/HermesPasser/Ramu/blob/master/demos/img/particleblue.png?raw=true");
let particle = new SimpleParticle(img, new Rect(2, 2, 5, 6), 100, 200);
``` 

## Properties
- [destroyOnEnd ](SimpleParticle.destroyOnEnd)    
- [isOver](SimpleParticle.isOver)   
- [lifeSpan](SimpleParticle.lifeSpan)   
- [particleNumber](SimpleParticle.particleNumber)   

## Public Methods
- [init](SimpleParticle.init)   
- [setDrawPriority](SimpleParticle.setDrawPriority) 

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