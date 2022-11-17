const desribeCountry = (country,population,capitalCity) => {
  return (`${country} has ${population} million people and its captial city is ${capitalCity}`);
}

let somaliland = desribeCountry("somaliland",3.2, "hargeisa");
let japan = desribeCountry("japan",13.9, "Tokyo");
let mexio = desribeCountry("mexio",9.2, "mexioCity");

console.log(somaliland, "\n", japan, "\n", mexio);

// functions

const percentageOfWorld = (population) =>{
   let popuPercantage = population / 7900 * 100;
   return `_china has 1441 million people, so it's about ${popuPercantage}% of the world population_`;
  
}

let china = percentageOfWorld(1441);
let france = percentageOfWorld(2139907);

console.log(china, "\n", france);

// arrays

let aPopulation = ["somaliland","Turky", "canada", 'Germany'];

let neighbours = ["Djbouti","somalia", "Ethopia", "Yemen"];

console.log(neighbours);

// iteration for loops

for(let i = 0; i < neighbours.length; i++){
  console.log(neighbours[i]);
}


for (let i = neighbours.length -1; i >= 0; i--){
  console.log(neighbours[i]);
}


// while loop


let i =0;
while(i < neighbours.length){
  console.log(neighbours[i])
  i++
} 


let r = neighbours.length -1;
while(i >= 0){
  console.log(neighbours[i])
  i--;
}