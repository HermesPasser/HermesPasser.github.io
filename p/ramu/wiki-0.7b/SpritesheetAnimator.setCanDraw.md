---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SpritesheetAnimator](SpritesheetAnimator).setCanDraw()   

## Parameters
``bool`` **bool**: Flag to tells whether it will be drawn or not.  

## Description
Set the value of [canDraw](Drawable.canDraw) of its animations

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20img%20=%20Ramu.Utils.getImage(%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSheet.gif%22);%0Alet%20anim%20=%20new%20SpritesheetAnimation(img,%2010,%2010,%2035,%2035);%0Aanim.addFrame(%5Bnew%20Rect(43,%2052,%2035,%2035)%5D);%0A%0Alet%20animator%20=%20new%20SpritesheetAnimator(10,%2010,%2035,%2035);%0Aanimator.addAnimation(%27anim1%27,%20anim);%0Aanimator.setCurrentAnimation(%27anim1%27);%0Aanimator.setCanDraw(false);%0A%0ARamu.init();).
```javascript
let animator = new SpritesheetAnimator(10, 10, 35, 35);
animator.setCanDraw(false);
``` 
