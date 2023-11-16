// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = ['green'];
const colors = ["red", "blue", "black", "green", "pink", "yellow", "gray", "brown", "orange", "purple", "cyan"];

let balloonsAlive = 20;
let start = "";


for (let i = 0; i < balloonsAlive; i++) {
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    let balloon = document.createElement("div");
    balloon.classList.add("balloon", "balloon");
    balloon.style.background= randomColor;
    balloon.id = i;

    //agregar evenListener ---> click 
    balloon.addEventListener("click", e=>{
        if (balloonsAlive===20){
            start = Date.now() // nos genera la fecha actual
        }
        balloon.style.visibility="hidden";
        balloonsAlive--;
        render();
    });

    document.querySelector("#balloon-map").appendChild(balloon)
}


const render = () => {

    document.querySelector("#balloon-count").innerHTML= balloonsAlive;

    if (balloonsAlive===0){
        console.log((Date.now() - start)/1000)
        document.querySelector("#balloon-map").innerHTML= `
        <h3> Tiempo: ${(Date.now() - start)/1000} segundos</h3>
        <h4>Volver a jugar?</h4>
        <button id="restartGame">Volver a jugar</button>
        `
        document.querySelector("#restartGame").addEventListener("click", ()=>{
            window.location.reload()
        })
    }

}

// this makes the "render" function trigger when the website starts existing
window.onload = render();