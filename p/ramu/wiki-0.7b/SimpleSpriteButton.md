---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` SimpleSpriteButton : [SimpleButtonBase](SimpleButtonBase) 

## Description
A simple sprite button.

## Constructor Parameters
- ``int`` **x**: Position in x.   
- ``int`` **x**: Position in y.   
- ``int`` **w**: Width.   
- ``int`` **h**: Height.   
- [``Sprite``](Sprite) **bottonImg**: Default image.    
- [``Sprite``](Sprite) **buttonHover**: Image on hover. (optional, default is null)    
- [``Sprite``](Sprite) **buttonClick**: Image on click. (optional, default is null)   
```javascript
new SimpleSpriteButton(30, 30, 50, 50, imgNormal, imgHover, imgClick);
```

## Inherited Members
- [canDestroy](GameObj.canDestroy)  
- [canUpdate](GameObj.canUpdate)  
- [destroy](GameObj.destroy)  
- [drawableClick](SimpleButtonBase.drawableClick)  
- [drawableHover](SimpleButtonBase.drawableHover)  
- [drawableImage](SimpleButtonBase.drawableImage)  
- [drawableNormal](SimpleButtonBase.drawableNormal)  
- [drawableObj](SimpleButtonBase.drawableObj)  
- [enabled](Clickable.enabled)  
- [height](GameObj.height)  
- [setEnabled](SimpleButtonBase.setEnabled)  
- [setOnClick](SimpleButtonBase.setOnClick)  
- [setOnHoverEnter](SimpleButtonBase.setOnHoverEnter)  
- [setOnHoverExit](SimpleButtonBase.setOnHoverExit)  
- [setOnHoverStay](SimpleButtonBase.setOnHoverStay)  
- [setRect](SimpleButtonBase.setRect)  
- [onClick](Clickable.onClick)  
- [onHoverEnter](Clickable.onHoverEnter)  
- [onHoverExit](Clickable.onHoverExit)  
- [onHoverStay](Clickable.onHoverStay)  
- [setActive](GameObj.setActive)  
- [start](GameObj.start)  
- [tag](GameObj.tag)  
- [toRect](GameObj.toRect)  
- [update](GameObj.update)   
- [updatePriority](GameObj.updatePriority)  
- [width](GameObj.width)  
- [x](GameObj.x)  
- [y](GameObj.y)  