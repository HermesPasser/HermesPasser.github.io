---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SpritesheetAnimator](SpritesheetAnimator).setFlipVertically()   

## Parameters
``bool`` **bool**: Value of [flipVertically](Drawable.flipVertically).  

## Description
Set the flipVertically of the animations.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20img%20=%20Ramu.Utils.getImage(%22https://i.imgur.com/E0Z8YMr.png%22);%0Alet%20anim%20=%20new%20SpritesheetAnimation(img,%2025,%2025,%2059,%2050);%0Aanim.addFrame(%5Bnew%20Rect(0,%200,%2059,%2050)%5D);%0A%0Alet%20animator%20=%20new%20SpritesheetAnimator(10,%2010,%2059,%2050);%0Aanimator.addAnimation(%27anim1%27,%20anim);%0Aanimator.setCurrentAnimation(%27anim1%27);%0A%0Aanimator.setFlipVertically(true);%0ARamu.init();).
```javascript
let animator = new SpritesheetAnimator(10, 10, 59, 50);
animator.setFlipVertically(true);
``` 
