---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static bool`` [Rect](Rect).hasNegativeValue(rect)   

## Parameters
- [``Rect``](Rect) **rect**: Rect that will be checked. 

## Return
``bool``: True if it has a negative value or not ``x`` or ``y``.  

## Description
Checks if a rect has a negative value ``x`` or ``y``. 

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20gameObj%20=%20new%20GameObj(30,%2050,%203,%202);%0Alet%20txt%20=%20new%20Text(%27%27,%2010,%2010,%20200);%0A%0AgameObj.update%20=%20function()%7B%0A%20%20this.y%20-=%202;%0A%20%20%0A%20%20const%20has%20=%20Rect.hasNegativeValueInXY(gameObj.toRect());%0A%20%20txt.text%20=%20(has%20?%20%27hasn%5C%27t%20a%20negative%20value,%20y%20=%20%27%20:%20%27is%20inside,%20y%20=%20%27)%20+%20this.y;%0A%20%20if%20(has)%7B%0A%09%20%20gameObj.destroy();%0A%20%20%7D%0A%7D;%0A%0ARamu.init();).
```javascript
let gameObj = new GameObj(30, 50, 3, 2);
let txt = new Text('', 10, 10, 200);

gameObj.update = function(){
  this.y -= 2;
  
  const has = Rect.hasNegativeValueInXY(gameObj.toRect());
  txt.text = (has ? 'hasn\'t a negative value, y = ' : 'is inside, y = ') + this.y;
  if (has){
	  gameObj.destroy();
  }
};

Ramu.init();
``` 
See also [Rect.hasNegativeValue](Rect.hasNegativeValue) and [Rect.hasNegativeValueInWH](Rect.hasNegativeValueInWH).