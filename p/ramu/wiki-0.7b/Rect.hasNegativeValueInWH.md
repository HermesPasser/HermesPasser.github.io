---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static bool`` [Rect](Rect).hasNegativeValueInWH(rect)   

## Parameters
- [``Rect``](Rect) **rect**: Rect that will be checked. 

## Return
``bool``: True if it has a negative value or not in ``width`` or ``height``.  

## Description
Checks if a rect has a negative value in ``width`` or ``height``. 

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20gameObj%20=%20new%20GameObj(30,%2050,%20300,%2020);%0Alet%20txt%20=%20new%20Text(%27%27,%2010,%2010,%20200);%0A%0AgameObj.update%20=%20function()%7B%0A%20%20this.width%20-=%202;%0A%20%20%0A%20%20const%20has%20=%20Rect.hasNegativeValueInWH(gameObj.toRect());%0A%20%20txt.text%20=%20(has%20?%20%27has%20a%20negative%20value,%20width%20=%20%27%20:%20%27hasn%5C%27t%20a%20negative%20value,%20width%20=%20%27)%20+%20this.width;%0A%20%20if%20(has)%7B%0A%09%20%20gameObj.destroy();%0A%20%20%7D%0A%7D;%0A%0ARamu.init();).
```javascript
let gameObj = new GameObj(30, 50, 300, 20);
let txt = new Text('', 10, 10, 200);

gameObj.update = function(){
  this.width -= 2;
  
  const has = Rect.hasNegativeValueInWH(gameObj.toRect());
  txt.text = (has ? 'has a negative value, width = ' : 'hasn\'t a negative value, width = ') + this.width;
  if (has){
	  gameObj.destroy();
  }
};

Ramu.init();
``` 
See also [Rect.hasNegativeValue](Rect.hasNegativeValue) and [Rect.hasNegativeValueInXY](Rect.hasNegativeValueInXY).