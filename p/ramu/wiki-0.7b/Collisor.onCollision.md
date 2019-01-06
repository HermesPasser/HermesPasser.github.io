---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``virtual`` [Collisor](Collisor).onCollision()   

## Description
Triggered when a collisor is colliding with it.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20enemy%20=%20new%20Collisor(1,%204,%205,%205);%0Aenemy.tag%20=%20%27enemy%27;%0A%0Aclass%20NewObj%20extends%20Collisor%7B%0A%20%20%20onCollision()%7B%0A%20%20%20%20%20%20for%20(let%20i%20in%20this.collision)%7B%0A%20%20%20%20%20%20%20%20%20if%20(this.collision%5Bi%5D.tag%20===%20%27enemy%27)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20/*%20logic%20here%20*/%0A%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Anew%20NewObj(1,3,5,6);%0A%0ARamu.init();).
```javascript
let enemy = new Collisor(1, 4, 5, 5);
enemy.tag = 'enemy';

class NewObj extends Collisor{
   onCollision(){
      for (let i in this.collision){
         if (this.collision[i].tag === 'enemy'){
            /* logic here */
         }
      }
  }
}
``` 
See also [GameObj.update](GameObj.update) and [Drawable.draw](Drawable.draw).