
let section = document.createElement("section");
let button = document.createElement("button");
button.id = "addBlock";
button.append("Add block");

section.appendChild(button);
window.onload = function (){
    document.body.prepend(section);
}

button.addEventListener("click", addBlock);

function addBlock() {
    let arrSection = document.getElementsByTagName("section");
    let divCont = arrSection[1];

    let div = document.createElement("div");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    div.style.backgroundColor = randomColor;
    divCont.appendChild(div);
    console.log(randomColor);
}
