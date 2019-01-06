---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static bool`` [Ramu.Math](Ramu.Math).overlap(rect1, rect2)   

## Parameters
- [``Rect``](Rect) **rect1**: First rect to be checked the second. 
- [``Rect``](Rect) **rect2**: Second rect to be checked the first. 

## Return
``bool``: Returns true if the rect's are overlapping and false if not. 

## Description
Checks if the rect's are overlapping.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init();%0A%0Alet%20r1%20=%20new%20Rect(3,%205,%206,%207);%0Alet%20r2%20=%20new%20Rect(3,%205,%206,%207);%0A%0Aif%20(Ramu.Math.overlap(r1,%20r2))%7B%0A%20%20%20let%20t%20=%20new%20Text(%27r1%20is%20overlapping%20the%20r2%27,%2010,%2010,%20150);%0A%7D).
```javascript
let r1 = new Rect(3, 5, 6, 7);
let r2 = new Rect(3, 5, 6, 7);

if (Ramu.Math.overlap(r1, r2)){
   let t = new Text('r1 is overlapping the r2', 10, 10, 150);
}
``` 
