---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static image`` [Ramu.Utils](Ramu.Utils).getImage(src)   

## Parameters
- ``string`` **src**: Image source (url/filepath).  

## Return
``image``: The image.  

## Description
Get a image from the ``src``.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init();%0Aconst%20img%20=%20Ramu.Utils.getImage(%22https://i.imgur.com/E0Z8YMr.png%22);%0Alet%20ramuLogo%20=%20new%20Sprite(img,%2010,%2010,%2059,%2070);).
```javascript
const img = Ramu.Utils.getImage("https://i.imgur.com/E0Z8YMr.png");
let ramuLogo = new Sprite(img, 10, 10, 59, 70);
``` 
