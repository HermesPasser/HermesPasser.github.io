---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``class`` Rect  
## Description
Represents the position and size of a [GameObj](GameObj).  

## Constructor Parameters
- ``int`` **x**: Position in x.  
- ``int`` **y**: Position in y.  
- ``int`` **w**: Width.   
- ``int`` **h**: Height.   
```javascript
let rect = new Rect(10, 10, 100, 100);
```

## Properties
- [height](Rect.height)  
- [width](Rect.width)  
- [x](Rect.x)  
- [y](Rect.y)  

### Static Methods
- [hasNegativeValue](Rect.hasNegativeValue)  
- [hasNegativeValueInWH](Rect.hasNegativeValueInWH)  
- [hasNegativeValueInXY](Rect.hasNegativeValueInXY)  
