---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[Spritesheet](setPosition).setPosition()   

## Description
Set the Spritesheet position.    

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20img%20=%20Ramu.Utils.getImage(%22https://i.imgur.com/E0Z8YMr.png%22);%0Alet%20rec%20=%20new%20Rect(0,%2050,%2059,%2020);%0Alet%20sh%20=%20new%20Spritesheet(img,%20rec,%2010,%2010,%2059,%2050,%20true);%0A%0Ash.update%20=%20function()%7B%0A%20%20%20if%20(!Ramu.Utils.isEmpty(Ramu.lastKeysPressed))%7B%0A%20%20%20%20%20%20this.setPosition(this.x%20+%2020,%20this.y%20+%2020);%0A%20%20%20%7D%0A%7D;%0A%0ARamu.init();).
```javascript
let img = Ramu.Utils.getImage("https://i.imgur.com/E0Z8YMr.png");
let rec = new Rect(0, 50, 59, 20);
let sh = new Spritesheet(img, rec, 10, 10, 59, 50, true);

sh.update = function(){
   if (!Ramu.Utils.isEmpty(Ramu.lastKeysPressed)){
      this.setPosition(this.x + 20, this.y + 20);
   }
};
``` 