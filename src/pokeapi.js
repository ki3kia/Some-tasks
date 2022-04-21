let offset = 1, limit = 10;
let url = "https://pokeapi.co/api/v2/pokemon/";
let loadBtn = document.createElement("button");
let pokeSection;


window.onload = function () {
    pokeSection = document.getElementById("poke");
    loadBtn.append("Завантажити ще");

    fetch(url + `?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(function (json) {
            console.log(offset);
            let pokeArr = json.results;
            pokeArr.forEach(poke => createBlock(poke.name, pokeSection));
            pokeSection.prepend(loadBtn);
        });
}


loadBtn.addEventListener("click", loadPoke);

function createBlock(text, sect) {

    let block = document.createElement('div');
    block.append(text);
    sect.appendChild(block);
}


async function loadPoke() {
    offset += 10;
    let result = await fetch(url + `?offset=${offset}&limit=${limit}`);
    let arr = await result.json();
    arr = arr.results;
    arr.forEach(poke => createBlock(poke.name, pokeSection));
}