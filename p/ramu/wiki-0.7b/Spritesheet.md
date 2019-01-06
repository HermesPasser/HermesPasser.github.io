---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` Spritesheet: [Drawable](Drawable)

## Description
Displays a region (spritesheet) of an image.

## Constructor Parameters
- ``Image Object`` **image**: The image.  
- [``Rect``](Rect) **sheetRect**: The spritesheet to be displayed.  
- ``int`` **x**: Position in x.  
- ``int`` **y**: Position in y.  
- ``int`` **width**: Width.   
- ``int`` **height**: Height.   
- ``bool`` **canDraw**: Whether it will be drawn or not. (optional, default is true)   
```javascript
let img = Ramu.Utils.getImage("image.png");
let rec = new Rect(20, 20, 40, 40);
let sh = new Spritesheet(img, rec, 10, 10, 100, 100, true);
```

## Properties
- [img](Spritesheet.img)  
- [sheet](Spritesheet.sheet)  

## Public Methods
- [setPosition](Spritesheet.setPosition)  
- [setSheet](Spritesheet.setSheet)  

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