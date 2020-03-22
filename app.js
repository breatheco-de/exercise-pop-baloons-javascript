// we declare a new global variable containing an array that represents the ballons map
let ballonsMap = [
    'red','green','blue',"pink",
    "grey","purple","orange","purple",
    "pink",'red',"black",'green',
    "brown","purple",'blue',"yellow",
    'green',"black",'red',"pink",
];

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    ballonsMap[position] = null;
    render();
}

//receive the balloon position and the active status
const renderOneBalloon = function(position, color){
    return `<div 
    class="balloon ${color !== null ? "active" : "popped"}" 
        style="background: ${color}"
        onClick="popBalloon(${position})"
    ></div>`;
}

const render = () => {
    var activeBalloons = 0; // <--- start counting how many balloons are left
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        if(color !== null) activeBalloons++; // <----- count the number of active balloons 
        return renderOneBalloon(position, color); // <--- render each balloon
    });

    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- rende the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();