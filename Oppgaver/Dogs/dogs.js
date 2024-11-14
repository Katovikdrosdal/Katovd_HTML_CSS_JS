const dogs = [
  {
    name: "Max",
    birthYear: 2018,
    race: "Golden Retriever",
    color: "Golden",
    favoriteActivity: "Chasing butterflies",
    parents: {
      mother: "Luna",
      father: "Buddy",
    },
  },
  {
    name: "Bella",
    birthYear: 2020,
    race: "Labrador Retriever",
    color: "Black",
    favoriteActivity: "Swimming in the lake",
    parents: {
      mother: "Molly",
      father: "Oscar",
    },
  },
  {
    name: "Charlie",
    birthYear: 2019,
    race: "Beagle",
    color: "Tricolor",
    favoriteActivity: "Digging holes in the garden",
    parents: {
      mother: "Sadie",
      father: "Bailey",
    },
  },
  {
    name: "Daisy",
    birthYear: 2017,
    race: "Poodle",
    color: "White",
    favoriteActivity: "Running through sprinklers",
    parents: {
      mother: "Coco",
      father: "Max",
    },
  },
  {
    name: "Rocky",
    birthYear: 2021,
    race: "German Shepherd",
    color: "Brown and Black",
    favoriteActivity: "Playing tug-of-war",
    parents: {
      mother: "Roxy",
      father: "Zeus",
    },
  },
];


const currentYear = new Date().getFullYear();

let output = "";
for (let i = 0; i < dogs.length; i++) {
  const currentAge = currentYear - dogs[i].birthYear;
  output += `<li>${dogs[i].name}, Born in: ${dogs[i].birthYear}, Mother: ${dogs[i].parents.mother}, Father: ${dogs[i].parents.father}, Race: ${dogs[i].race}, Color: ${dogs[i].color}, 
  Favorite Activity: ${dogs[i].favoriteActivity}, Current age: ${currentAge} </li>`;
}

document.getElementById("dogs-list").innerHTML = output;
