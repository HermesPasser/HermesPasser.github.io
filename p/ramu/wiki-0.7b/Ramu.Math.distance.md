---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static float`` [Ramu.Math](Ramu.Math).distance(gameObjectA, gameObjectB)   

## Parameters
- [``GameObj``](GameObj) **gameObjectA**: Rect that will be checked. 
- [``GameObj``](GameObj) **gameObjectB**: Rect that will be checked. 

## Return
``float``: The distance between the parameters.  

## Description
Get the distance between two [GameObjs](GameObj).  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init();%0Alet%20player%20=%20new%20GameObj(3,%206);%0Alet%20enemy%20=%20new%20GameObj(6,%206);%0Alet%20distance%20=%20Ramu.Math.distance(player,%20enemy);%0A%0Aif%20(distance%20%3C%202)%7B%0A%20%20%20let%20t%20=%20new%20Text(%27died%27,%2010,%2010,%20100);%0A%7D%0A%0A).
```javascript
let player = new GameObj(3, 6);
let enemy = new GameObj(6, 6);
let distance = Ramu.Math.distance(player, enemy);

if (distance < 2){
   let t = new Text('died', 10, 10, 100);
}
``` 
