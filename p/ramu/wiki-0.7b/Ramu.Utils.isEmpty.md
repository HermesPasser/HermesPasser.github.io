---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static bool`` [Ramu.Utils](Ramu.Utils).isEmpty(obj)   

## Parameters
- ``Object`` **obj**: Object to be checked.  

## Return
``bool``: Return true if the object is empty and false if not.  

## Description
Checks if the object is empty.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init();%0Aconst%20o%20=%20%7B%7D;%0Aif%20(Ramu.Utils.isEmpty(o))%7B%0A%20%20new%20Text(%27o%20is%20empty%27,%201,%2010,%20100);%0A%7D%20else%20%7B%0A%20%20new%20Text(%27o%20is%20not%27,%201,%2010,%20100);%0A%7D%0A%0Aconst%20o2%20=%20%7B%20item:%20%22value%22%20%7D;%0Aif%20(Ramu.Utils.isEmpty(o2))%7B%0A%20%20new%20Text(%27o2%20is%20empty%27,%201,%2050,%20100);%0A%7D%20else%20%7B%0A%20%20new%20Text(%27o2%20is%20not%27,%201,%2050,%20100);%0A%7D).
```javascript
const o = {};
if (Ramu.Utils.isEmpty(o)){
  new Text('o is empty', 1, 10, 100);
} else {
  new Text('o is not', 1, 10, 100);
}

const o2 = { item: "value" };
if (Ramu.Utils.isEmpty(o2)){
  new Text('o2 is empty', 1, 50, 100);
} else {
  new Text('o2 is not', 1, 50, 100);
}
``` 