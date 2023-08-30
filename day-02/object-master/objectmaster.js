const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//an array of pokémon objects where the id is evenly divisible by 3
const divisibleBy3Pkmn = pokémon.filter(p => p.id % 3 === 0);
console.log(divisibleBy3Pkmn);
//what is the role of includes methods 
//The includes method is a built-in JavaScript method
// used with arrays and strings to check whether a particular element or substring is present in the array or string, respectively.
// It returns a boolean value (true or false) based on whether the element or substring is found or not.

//For arrays:
//const array = [1, 2, 3, 4, 5];
//console.log(array.includes(3)); // Output: true
//console.log(array.includes(6)); // Output: false
//an array of pokémon objects that are "fire" type
const fireTypePkmn = pokémon.filter(p => p.types.includes("fire"));
console.log(fireTypePkmn);
//an array of pokémon objects that have more than one type
const multiTypePkmn = pokémon.filter(p => p.types.length > 1);
console.log(multiTypePkmn);
//an array with just the names of the pokémon
const pokemonNames = pokémon.map(p => p.name);
console.log(pokemonNames);
//an array with just the names of pokémon with an id greater than 99
const highIdPokemonNames = pokémon
    .filter(p => p.id > 99)
    .map(p => p.name);
console.log(highIdPokemonNames);
//an array with just the names of the pokémon whose only type is poison
const poisonTypePokemonNames = pokémon
    .filter(p => p.types.length === 1 && p.types[0] === "poison")
    .map(p => p.name);
console.log(poisonTypePokemonNames);
//an array containing just the first type of all the pokémon whose second type is "flying"
const flyingSecondTypeFirstTypes = pokémon
    .filter(p => p.types.length === 2 && p.types[1] === "flying")
    .map(p => p.types[0]);
console.log(flyingSecondTypeFirstTypes);
//a count of the number of pokémon that are "normal" type
const normalTypeCount = pokémon.filter(p => p.types.includes("normal")).length;
console.log(normalTypeCount);