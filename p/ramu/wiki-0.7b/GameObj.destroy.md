---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[GameObj](GameObj).destroy()   

## Description
Remove the GameObj from the game loop.  

**Note**: if the start method was not called then this will do nothing.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20txt%20=%20new%20Text(%22not%20destroyed%22,%2010,%2010,%20100);%0Alet%20time%20=%200;%0A%0Anew%20GameObj().update%20=%20function()%7B%0A%20%20%20if%20(time%20%3E%205)%7B%0A%20%20%20%20%20%20txt.destroy();%0A%20%20%20%7D%0A%20%20%20time%20+=%20Ramu.time.delta;%0A%7D;%0A%0ARamu.init();).
```javascript
let txt = new Text("not destroyed", 10, 10, 100);
let time = 0;

new GameObj().update = function(){
   if (time > 5){
      txt.destroy();
   }
   time += Ramu.time.delta;
};

Ramu.init();
``` 
