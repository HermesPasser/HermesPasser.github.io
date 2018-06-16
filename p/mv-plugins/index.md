---
title: RPG Maker MV Plugins
pagename: mv-plugins
keywords: rpg maker mv, rpg maker, rm, rmmv, plugins, plugin
description: Plugins for the RPG Maker MV.
show-comments: true

layout: default
---
<p align="center">Plugins for the RPG Maker MV.</p>

Source code and other plugins at [Github](https://github.com/HermesPasser/RMMV-Plugins), see also [RPG Maker XP-Ace](https://github.com/HermesPasser/RGSS-Scripts) scripts.  

Thanks to [Kazzter](http://www.condadobraveheart.com/forum/index.php?action=profile;u=1820) for the for the spelling corrections.  

## Created for Condado Braveheart Christmas Event

### Jump System 0.2
Allow the player to jump.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Condado%20Braveheart/Christmas%20Event/JumpSystem.js)  

#### Usage

The name of the file must be JumpSystem.js to work.

Plugin parameters:  
**Key Code**: Jump key. Default: tab  
**SE Jump**: Sound when the player jump. Default: Jump1, do not put the extension.  
**SE Cannot Jump**: Sound when the player cannot jump. Default: Jump2, do not put the extension.  

The whole process in video:
<iframe src="https://www.youtube.com/embed/YtZyBFPRnck" frameborder="0" allowfullscreen></iframe>

---
### Name Window 0.1
Show a window with the name of the event that is talking with the player.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Condado%20Braveheart/Christmas%20Event/NameWindow.js)  

#### Usage

Put _#[name/id]_ in the first line of a text in "show text" command, the name is the name to be showed and the id is the event id. Set event id as -1 to se the game player as the event.  

Plugin commands:  
**NameWindow \<name\> \<event id\>**: Show a window with the name in the event with the id. The \<name\> must be replaced with name to be showed and the same should be done with \<id\>.  
**NameWindow player \<name\>**: Show a window with the name in the player. Replace \<name\> with the name to be showed.   
**NameWindow off**: Disable window. 
 
The whole process in video:
<iframe src="https://www.youtube.com/embed/kuSR69E4hvM" frameborder="0" allowfullscreen></iframe>

---
### Player Shadow 0.2
Create a shadow for the player. The shadow follow the player opacity.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Condado%20Braveheart/Christmas%20Event/PlayerShadow.js)  

#### Usage

The whole process in video:
<iframe src="https://www.youtube.com/embed/0up4i6BAggc" frameborder="0" allowfullscreen></iframe>

---
### Simple Time System 0.1
A very simple time system. After 'n' times the time change of day to night and vice versa.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Condado%20Braveheart/Christmas%20Event/SimpleTimeSystem.js)  

#### Usage

The name of the file must be SimpleTimeSystem.js to work.

Add #day# or #night# in the map note to lock in a specify time.

Plugin parameters:  
**Day Duration**: Time (in frames) to the time be changed. Default: 12000  

The whole process in video:
<iframe src="https://www.youtube.com/embed/bqjU2xWHuiQ" frameborder="0" allowfullscreen></iframe>

---
### Fly System 0.1
Allow the player to fly.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Condado%20Braveheart/Christmas%20Event/FlySystem.js)  

#### Usage

Plugin commands:  
**FlySystem on**: Start flying.  
**FlySystem off**: Stop flying.  

The whole process in video:
<iframe src="https://www.youtube.com/embed/cQeuS7kR4s " frameborder="0" allowfullscreen></iframe>

---
### Hermes Shooting System 0.1
Simple shooting system with enemy life bar. If there is some between you and the enemy then the shot will miss.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Condado%20Braveheart/Christmas%20Event/HermesShootingSystem.js)  

#### Usage

The name of the file must be HermesShootingSystem.js to work.

To make of an event an enemy you need to put a "enemy" or "zombie" in the event note field. This script is compatible with Zombie System.    

Plugin parameters:  
**Key Code**: Shot key. Default: tab  
**Shot SE**: Sound when the player shot. Default: Fire1, do not put the extension.  
**Hit SE**: Sound when an enemy was hit. Default: Damage1, do not put the extension.  
**Miss SE**: Sound a wall was hit. Default: Miss, do not put the extension.  
**Animation Shot**: Id of the animation when the player shot. Default: null  
**Animation Hit**: Id of the animation when an enemy was hit. Default: 1

The whole process in video:
<iframe src="https://www.youtube.com/embed/0g5DCdXzidE" frameborder="0" allowfullscreen></iframe>

---
### (Poor) Zombie System 0.1
Create zombies to follow the player and kill him when he's a block away.    
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Condado%20Braveheart/Christmas%20Event/useless/PutSomeRandomTile.js)  

#### Usage

Write "zombie" in the event note to make it a zombie. This script is compatible with Hermes Shooting System.

**Note: This is an experimental script and may not be very useful**

The whole process in video:
<iframe src="https://www.youtube.com/embed/2KTiFDfsqSE" frameborder="0" allowfullscreen></iframe>

---
### Clone Player 0.1
Make a clone of the player, the clone walk randomically.    
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Condado%20Braveheart/Christmas%20Event/half%20useless/ClonePlayer.js)  

#### Usage

The clone just have some basic info of the player.

Plugin commands:  
**Clone \<event_id\>**: Replace \<event_id\> with the id of event that will turn into a clone. 
 
**Note: This is an experimental script and may not be very useful**

The whole process in video:
<iframe src="https://www.youtube.com/embed/oKv7Fk4pAh0" frameborder="0" allowfullscreen></iframe>

---
### Put Some Random Tile 0.1
Put a random tile in a random spot.    
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Condado%20Braveheart/Christmas%20Event/useless/PutSomeRandomTile.js)  

#### Usage

The whole process in video:
<iframe src="https://www.youtube.com/embed/sUAdlFu8Uvg" frameborder="0" allowfullscreen></iframe>

## Created as answer in Librarium forum

### Animated Title 0.1
A example of animated title.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Other/SaveName.js)  

#### Usage

The name of the file must be AnimatedTitle.js to work.

Plugin parameters:  
**Animation Frames**: Split with ',' and do not add the file type, e.g: frame1,frame2,.... Default: none  
**Start Position X**: Start position of animation. Default: 10  
**Start Position Y**: Start position of animation. Default: 10  
**Move X Velocity**: Move velocity in x. Default: 1   
**Move Y Velocity**: Move velocity in y. Default: 1   
**Delay**: Frames to wait. Default: 10   

Part of creation of plugin:
<iframe src="https://www.youtube.com/embed/HlVXxaKEg5E" frameborder="0" allowfullscreen></iframe>

## Created for Obseris Duelo game

### Scene Book 0.2

A scene for read books.    
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Obseris%20Duelo/SceneBook.js)
![text in scene book](https://4.bp.blogspot.com/-S3-ojZMGFlY/WWPAY_SocJI/AAAAAAAAHRw/m2ISlYmWCGcxlwZUndRndDxRyJC5CfYowCLcBGAs/s1600/Sem%2Bt%25C3%25ADtulo.png)
![image in scene book](https://2.bp.blogspot.com/-WC39DUciew0/WWPAYmd-0eI/AAAAAAAAHRs/KuJIm9FJzYYX7otNZwpPyA35ie8BQW_TwCLcBGAs/s1600/Capturar.PNG)

#### Usage

The name of the file must be SceneBook.js to work.

To open the scene use _Book \<file_text\>_ in 'plugin command" replacing \<file_text\> with the file that you want to be loaded in scene. The file must have a .txt extension and should be in data/book folder.  
e.g: _Book myText_

In your file you can write all text commands that you can use in "show text" command to be processed by the plugin and some news:  
**%%:** Break the page.  
e.g: _this text will be showed in first page %%and this in the secound._ 

**%#\<pictureName\>%:** Open the picture with \<pictureName\>.  
e.g: _#picture1_ (in first line) or  _%#picture1% (in other lines)_  

Plugin parameters:  
**background**: Baground image file name in pictures folder. Default: "" (none)  
**page text**: Page text. Default: page

---
### Title Exit Option 0.1
Create a exit option in title screen.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Obseris%20Duelo/TitleExitOption.js)  
![title screen with exit option](https://i.imgur.com/kytCkZjg.png)

#### Usage

The name of the file must be TitleExitOption.js to work.

Plugin parameters:  
**Exit text**: Text of the exit button. Default: tab
 
## Other

### Animation State 0.1
Run a animation on player corresponding to current player state (on map).  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Other/AnimationState.js)  

#### Usage

In database/states select the state and add in the note: _[StateAnimation:AnimationIndex]_  
e.g: _[StateAnimation:02]_

The whole process in video:
<iframe src="https://www.youtube.com/embed/WdYjxNYn3Dg" frameborder="0" allowfullscreen></iframe>

---
### Save Name 0.1
Change save file names.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Other/SaveName.js)  

#### Usage

The name of the file must be SaveName.js to work.

Plugin parameters:  
**config text**: New name to config. Default: config
**global text**: Nw name to global.rpgsave. Default: global
**file text**: New name to file<number>.rpgsave. Default: file

==================
ESSES DOIS ESTÃO IGUAIS DEMAIS PRA MIM, TESTALOS E VER SE REALMENTE PRECISO DE DOIS SCRIPTS DE CANCELAR
==================
---
### Menu Button Cancel 0.3
Add a cancel button to the menus and remove "double touch" to cancel menus.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Other/MenuCancelOption.js)  
![cancel option in the options](https://i.imgur.com/rqUPILw.png)

cancel option in: 
[load menu](https://i.imgur.com/HioMeBt.png), 
[menu](https://i.imgur.com/D9rYZMM.png), 
[item menu](https://i.imgur.com/uXdrrPU.png), 
[stats](https://i.imgur.com/rS2a73j.png), 
[hability menu](https://i.imgur.com/sejZrud.png), 
[equip menu](https://i.imgur.com/3eLkK6Y.png), 
[formation menu](https://i.imgur.com/rW5qILO.png), 
[save menu](https://i.imgur.com/YKadeMU.png)  

#### Usage

The name of the file must be MenuButtonCancel.js to work.

This plugin was not tested and might not work in touch screen devices. 

Plugin parameters:  
**Image**: Image (75x75) name of button, if is none then will not use a image. The image must be in system folder and should not contains the extension. Default: none

---
### Menu Button Cancel.js 0.3  
Add a floating floating button to cancel in menus and disable the double touch.  
Download [here](https://github.com/HermesPasser/RMMV-Plugins/blob/master/Other/MenuButtonCancel.js)  
![button with image](https://i.imgur.com/Ziu1XNq.png)
See the [button without image](https://i.imgur.com/6KPw0Hn.png)  

### Usage

The name of the file must be MenuCancelOption.js to work.

This plugin was not tested and might not work in touch screen devices. 

Plugin parameters:  
**Image**: Image (75x75) name of button, if is none then will not use a image. The image must be in system folder and should not contains the extension. Default: none
