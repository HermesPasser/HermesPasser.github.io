---
title: RGSS Scripts
pagename: rgss-scripts
keywords: rgss, rpg maker, rm
description: Scripts for the RPG Maker XP, VX and VX Ace
show-comments: true

layout: default
---
<p align="center">Scripts for the RPG Maker XP, VX and VX Ace.</p>

Source code and other scripts in [Github](https://github.com/HermesPasser/RGSS-Scripts). See also Plugins for RPG Maker MV [here]({{site.url}}/{{site.baseurl}}p/mv-plugins).

<!--
================
Add systems too
================
-->

<h2 align="center">RGSS Scripts (XP)</h2>

### Title Splash XP 0.1
Show a splash screen before the title screen that you can skip pressing enter (C).  
Download [here](https://github.com/HermesPasser/RGSS-Scripts/blob/master/RGSS/Hermes_Splash-XP.rb)  

#### Usage

To make it works you need change the line ``$scene = Scene_Title.new`` with ``$scene = Scene_Splash.new`` in Main script.  

Customizable variables:  
**SPLASH_IMG_LIST**: List of images separated by ','. All images must be in pictures folder. Default: Splash screen 1,Splash screen 2  
**CAN_SKIP**: Enable/disable skip the splash screen pressing enter. Default: true  
**PACE**: How much opacity will be incremented per frame. Default: 5  

---
### Wolf Menu 0.1
An alternative menu that:  
\- uses a image in pictures as character graphics. If it exists. If not use the default character graphic.  
\- add a animation to the windows;  
\- add a custom opacity to the windows;  
\- add a margin to the status windows;  
\- resize the the status window to fit of the number of characters in the party;  
\- add a background image;  
\- change the status order and add a separator in between the character names and it classes;  
\- remove the windows "time played" and "steps walked".  
Download [here](https://github.com/HermesPasser/RGSS-Scripts/blob/master/RGSS/Wolf%20Menu.rb)  
![image of menu](https://i.imgur.com/XkivRnR.png)

#### Usage

Customizable variables:  
**BACKGROUND_IMAGE**: Background image name without extension. Must be in pictures folder. Default: background  
**CLASS_SEPARATOR**: Text in between character name and it class. Must be in pictures folder. Default: ' the '  
**WINDOW_OPACITY**: Window opacity. Maximum 255, minimum 0. Must be in pictures folder. Default: 100  
**PIXELS_PER_FRAME**: Frames per frame in the animation. Must be in pictures folder. Default: 5  
**STATS_MARGIN_X**: Window status margin in x. Must be in pictures folder. Default: 5  
**STATS_MARGIN_Y**: Window status margin in y. Must be in pictures folder. Default: 5  

Menu in use:
<iframe src="https://www.youtube.com/embed/6Oq-GTXemQg" frameborder="0" allowfullscreen></iframe> 

<!-- <h2 align="center">RGSS2 Scripts (VX)</h2> -->

<h2 align="center">RGSS3 Scripts (VX Ace)</h2>

### Title Splash Ace 0.2
Show a splash screen before the title screen that you can skip pressing enter (C), also can play the title music in the splash and disable music in title.   
Download [here](https://github.com/HermesPasser/RGSS-Scripts/blob/master/RGSS3/Hermes_Splash-Ace.rb)  

#### Usage

Customizable variables:  
**SPLASH_IMG_LIST**: List of images separated by ','. All images must be in pictures folder. Default: Splash screen 1,Splash screen 2  
**CAN_SKIP**: Enable/disable skip the splash screen pressing enter. Default: true  
**PACE**: How much opacity will be incremented per frame. Default: 5  
**PLAY_TITLE_MUSIC_ON_SPLASH**: Play the title music in splash screen. Default: true  
**DISABLE_TITLE_MUSIC**: Disable title music in title screen. Default: false  

---
### Remove Optimize Option 0.2
Remove the optimize option in equip menu.   
Download [here](https://github.com/HermesPasser/RGSS-Scripts/blob/master/RGSS3/Hermes_RemoveOptimizeOption.rb)  
