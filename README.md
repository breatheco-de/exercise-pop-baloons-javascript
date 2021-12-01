# Pop Balloons game using Javascript, HTML/CSS 🎈🎊

This is an amazing game to practice HTML, CSS and a little Javascript.
The game goal is to POP all the balloons by clicking on them.

## 🌱  How to start this project

This project comes with the necessary files to start working, but you have two options to start:

a) Open this link in your browser with gitpod (recommended): https://gitpod.io#https://github.com/breatheco-de/exercise-pop-baloons-javascript.git

b) You can clone this repository on your local computer:
```sh
$ git clone https://github.com/breatheco-de/exercise-pop-baloons-javascript.git
```

Run the website by typing the following command on your terminal: `$ npx http-server --yes -c-1`

## 📝 Instructions

![Balloon Pop Game with HTML/CSS and Javascript](https://github.com/breatheco-de/exercise-pop-baloons-javascript/blob/master/preview.gif?raw=true)

Build a game with the following workflow:

1. When the website loads (`window.onload`) you have to render all the balloons.
2. Every balloon needs to have an onClick attached to listen to when the user clicks on it.
3. When the user clicks on it the balloon disappears (pops) from the screen.
4. When all the 20 balloons have disappeared the website reloads and the game starts again.

## 💪 Strategy

![Strategy to complete the pop balloons](https://github.com/breatheco-de/exercise-pop-baloons-javascript/blob/master/strategy.png?raw=true)

1. First, declare an array of 20 colors, each color will represent a balloon, the colors can repeat.
2. To pop a balloon, you will have to turn the value on that balloon position on the array equal to `null`. 
3. Loop all the colors and make the html string for each balloon, you should generate a big html string like this, and add it into the DOM:

```
<div class="balloon active"></div>
<div class="balloon popped"></div>
<div class="balloon active"></div>
<div class="balloon active"></div>
```

4. Add that string to the innerHTML of the `<div id="balloon-map">` element using document.querySelector.

5. Update your function that renders the ballons to add also an onClick on each balloon div to listen to the click.

6. When a balloon is clicked, go the array of colors and turn the color back to null.
