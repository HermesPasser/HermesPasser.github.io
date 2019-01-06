---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SpritesheetAnimator](SpritesheetAnimator).setCurrentAnimation()   

## Parameters
``string`` **nameID**: Animation to be the current.  

## Description
Set the current animation.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20anim%20=%20new%20SpritesheetAnimation(new%20Image(),%2010,%2010,%2035,%2035);%0Aanim.addFrame(%5Bnew%20Rect(43,%2052,%2035,%2035)%5D);%0A%0Alet%20animator%20=%20new%20SpritesheetAnimator(10,%2010,%2035,%2035);%0Aanimator.addAnimation(%27anim1%27,%20anim);%0Aanimator.setCurrentAnimation(%27anim1%27);%0A%0ARamu.init();).
```javascript
let animator = new SpritesheetAnimator(10, 10, 35, 35);
animator.addAnimation('anim1', new SpritesheetAnimation(10, 10, 35, 35));
animator.setCurrentAnimation('anim1');
``` 
