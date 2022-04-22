let offset = 1, limit = 10;
let url = "https://pokeapi.co/api/v2/pokemon/";
let loadBtn = document.createElement("button");
let pokeSection;


window.onload = function () {
    pokeSection = document.getElementById("poke");
    loadBtn.append("Завантажити ще");

    fetch(url + `?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then((json) => {
            let pokeArr = json.results;
            pokeArr.forEach(poke => createBlock(poke.name, pokeSection));
            pokeSection.prepend(loadBtn);
        })
        .catch((reject)=>{
            createBlock('Something going wrong', pokeSection)
        });
}


loadBtn.addEventListener("click", ()=>{
    let result = loadPoke();
    result.then(arr => arr.forEach(poke => createBlock(poke.name, pokeSection)));
});

function createBlock(text, sect) {

    let block = document.createElement('div');
    block.append(text);
    sect.appendChild(block);
}


async function loadPoke() {
    offset += 10;
    let result = await fetch(url + `?offset=${offset}&limit=${limit}`);
    let arr = await result.json();
    return arr.results;
}