---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static bool`` [Ramu.Utils](Ramu.Utils).imageIsLoaded(img)   

## Parameters
- ``image`` **img**: Image to be checked.  

## Return
``bool``: Return true if the image is loaded and false if not.  

## Description
Checks if an image is loaded.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init();%0A%0Aconst%20ramuLogo%20=%20Ramu.Utils.getImage(%22https://i.imgur.com/E0Z8YMr.png%22);%0Aif%20(Ramu.Utils.imageIsLoaded(ramuLogo))%7B%0A%20%20%20let%20sprite%20=%20new%20Sprite(ramuLogo,%2020,%2020,%2059,%2070);%0A%7D%20else%20%7B%0A%20%20new%20Text(%27the%20ramuLogo%20is%20taking%20too%20long%27,%2010,%20200,%20100);%0A%7D%0A%0Aconst%20imgEmpty%20=%20Ramu.Utils.getImage(%22%22);%0Aif%20(Ramu.Utils.imageIsLoaded(imgEmpty))%7B%0A%20%20%20let%20sprite2%20=%20new%20Sprite(imgEmpty,%2020,%2020,%2059,%2070);%0A%7D%20else%20%7B%0A%20%20new%20Text(%27the%20imgEmpty%20is%20taking%20too%20long%27,%2010,%20200,%20200);%0A%7D).
```javascript
Ramu.init();

const ramuLogo = Ramu.Utils.getImage("https://i.imgur.com/E0Z8YMr.png");
if (Ramu.Utils.imageIsLoaded(ramuLogo)){
   let sprite = new Sprite(ramuLogo, 20, 20, 59, 70);
} else {
  new Text('the ramuLogo is taking too long', 10, 100, 200);
}

const imgEmpty = Ramu.Utils.getImage("");
if (Ramu.Utils.imageIsLoaded(imgEmpty)){
   let sprite2 = new Sprite(imgEmpty, 20, 20, 59, 70);
} else {
  new Text('the imgEmpty is taking too long', 10, 200, 200);
}
``` 
