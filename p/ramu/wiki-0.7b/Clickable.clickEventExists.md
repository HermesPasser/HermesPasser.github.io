---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static bool`` [Clickable](Clickable).clickEventExists()   

## Return
``bool``: True if the device supports the click event.  

## Description
Check if the click event exists on the device.    

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?new%20Text(%22Event%20exists?%20%22%20+%20Clickable.clickEventExists(),%2010,%2010,%20200);%0A%0ARamu.init();).
```javascript
new Text("Event exists? " + Clickable.clickEventExists(), 10, 10, 200);
``` 