const typecolor = {
    bug: "#25de81",
    dragon: "#ffeaa7",
    electric: "#f6e58d",
    fire: "#ff6b81",
    fairy: "#ff7979",
    fighting: "#badc58",
    ghost: "#dff9fb",
    ice: "#74b9ff",
    normal: "#dfe6e9",
    poison: "#ff9ff3",
    psychic: "#f9ca24",
    rock: "#e056fd",
    steel: "#30336b",
    water: "#3ae374",
};
const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");




let getpokedata = () => {

    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id);
    const finalUrl = url + id;
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data);
            
        });
};

let generateCard = (data) => {
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other["dream_world"].front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
  

    const themeColor = typecolor[data.types[0].type.name];
    console.log(themeColor);

    card.innerHTML = `
        <p class="hp">
            <span>HP</span>
                 ${hp}   
        </p>
        <img src= ${imgSrc} />
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types">
                
        </div>
        <div class="states">
            <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
            </div>
            <div>
                    <h3>${statDefense}</h3>
                    <p>Defense</p>
            </div>
            <div>
                    <h3>${statSpeed}</h3>
                    <p>Speed</p>
            </div>
            
        </div>
         `;
    appendTypes(data.types);
    styleCard(themeColor);
};

let appendTypes = (types) => {
    types.forEach(item => {
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);
    });
};

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle ar 50% 0%, ${color} 36%, #ffffff 36%);`
    card.querySelectorAll(".types span").forEach(
        (typeSpan) => {
            typeSpan.style.background = color;
        });
};

btn.addEventListener("click", getpokedata);
window.addEventListener("load", getpokedata);