# Pop Balloons game using Javascript and the DOM (a little)

This is an amazing game to practice HTML, CSS and a little of Javascript.
The game goal is to POP al the balloons by clicking on them.

# Instructions

![Balloon Pop Game with HTML/CSS and Javascript](./preview.gif)

Build a game with the following workflow:

1. When the website loads (`window.onload`) you have to render all the ballons.
2. Every ballon needs to have an onClick attached to listen to when the user clicks on it.
3. When the user clicks on it the balloon disappears (pops) from the screen.
4. When all the 20 balloons have disappeared the website reloads and the game starts again.

#  Strategy

![Strategy to complete the pop balloons](./strategy.png)

1. First, declare an array of 20 colors, each color will represent a balloon, the colors can repeat.
2. To pop a balloon, you will have to turn the value on that balloon position on the array equal to `null`. 
3. Make a function that creates the html for just one balloon, and receives the color and position of the balloon.
```
const renderOneBalloon = function(position, color){} // Returns the HTML string of the balloon
```
4. Make a function that renders the balloons: Maps all the balloons and adds them to the innterHTML of the `<div id="balloon-map">` using document.querySelector.
5. Make a function pops the balloon: Set the color of the balloon equal to `null` on that position and re-render all the colors;