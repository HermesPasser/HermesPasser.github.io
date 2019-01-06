---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``bool`` [GameObj](GameObj).canUpdate

## Description
If false, the GameObj will not be have it methods update, checkCollision and draw called in the game loop.

**Note:** is recommended not to change directly, use [GameObj.setActive](GameObj.setActive) instead.