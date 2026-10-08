const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#pokemon-search");
const pokemonName = document.querySelector(".pokemon-details h2");
const pokemonType = document.querySelector(".pokemon-details p:nth-of-type(1) span");
const pokemonHeight = document.querySelector(".pokemon-details p:nth-of-type(2) span");
const pokemonWeight = document.querySelector(".pokemon-details p:nth-of-type(3) span");
const pokemonImage = document.querySelector(".pokemon-image img");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const pokemon = searchInput.value.trim();

    if (pokemon === "") {
        alert("Please Enter A Pokemon Name");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokemon not Found");
            }
            return response.json();
        })
        .then(data => {
            pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            pokemonHeight.textContent = data.height / 10 + " m";
            pokemonWeight.textContent = data.weight / 10 + " kg";
            pokemonType.textContent = data.types[0].type.name;
            pokemonImage.src = data.sprites.front_default;
        })
        .catch(error => {
            alert(error.message);
        });
});