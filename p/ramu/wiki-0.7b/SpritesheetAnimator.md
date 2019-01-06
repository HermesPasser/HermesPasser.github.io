---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` SpritesheetAnimator : [GameObj](GameObj)

## Description
Unify and controls [Spritesheets](Spritesheet).  

**Note:** in the next version this will be renamed to *Animator* and will supports [SpriteAnimation](SpriteAnimation).

## Constructor Parameters
- ``int`` **x**: Position in x.  
- ``int`` **y**: Position in y.  
- ``int`` **width**: Width.   
- ``int`` **height**: Height.     
```javascript
let sh = new SpritesheetAnimation(Ramu.Utils.getImage("image.png"),10,10,10,10);
sh.addFrame(new Rect(0,0,5,5));
let animator = new SpritesheetAnimator(10, 10, 10, 10);
animator.addAnimation("id", sh); 
```

## Properties
- [anim](SpritesheetAnimator.anim)   
- [animDrawPriority](SpritesheetAnimator.animDrawPriority)   

## Public Methods
- [addAnimation](SpritesheetAnimator.addAnimation)   
- [addX](SpritesheetAnimator.addX)   
- [addY](SpritesheetAnimator.addY)  
- [setCanDraw](SpritesheetAnimator.setCanDraw)   
- [getCurrentAnimationID](SpritesheetAnimator.getCurrentAnimationID)   
- [setCurrentAnimation](SpritesheetAnimator.setCurrentAnimation)   
- [setDrawPriority](SpritesheetAnimator.setDrawPriority)   
- [setFlipHorizontally](SpritesheetAnimator.setFlipHorizontally)   
- [setFlipVertically](SpritesheetAnimator.setFlipVertically)   
- [setX](SpritesheetAnimator.setX)   
- [setY](SpritesheetAnimator.setY)   

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