const peopleContainer = document.getElementById("people-container");
const carsContainer = document.getElementById("cars-container");

const people = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    occupation: "Engineer",
    contact: { email: "alice@example.com", phone: "123-456-7890" },
    address: { city: "New York", country: "USA" },
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    occupation: "Designer",
    contact: { email: "bob@example.com", phone: "987-654-3210" },
    address: { city: "Los Angeles", country: "USA" },
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    occupation: "Teacher",
    contact: { email: "charlie@example.com", phone: "555-555-5555" },
    address: { city: "Chicago", country: "USA" },
  },
  {
    id: 4,
    name: "Diana",
    age: 28,
    occupation: "Doctor",
    contact: { email: "diana@example.com", phone: "222-333-4444" },
    address: { city: "Houston", country: "USA" },
  },
];

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    owner: { name: "Alice", id: 1 },
    specs: { color: "Blue", engine: "1.8L", transmission: "Automatic" },
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2018,
    owner: { name: "Bob", id: 2 },
    specs: { color: "Red", engine: "2.0L", transmission: "Manual" },
  },
  {
    id: 3,
    make: "Ford",
    model: "Focus",
    year: 2021,
    owner: { name: "Charlie", id: 3 },
    specs: { color: "White", engine: "1.5L", transmission: "Automatic" },
  },
  {
    id: 4,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    owner: { name: "Diana", id: 4 },
    specs: { color: "Black", engine: "Electric", transmission: "Automatic" },
  },
];

function printOut(item) {
  if (item.name && item.occupation) {
    // For people
    return `
      <div class="card">
        <h1>${item.name}</h1>
        <h2>${item.occupation}</h2>
        <p><strong>City:</strong> ${item.address.city}, ${item.address.country}</p>
        <p><strong>Email:</strong> ${item.contact.email}</p>
        <p><strong>Phone:</strong> ${item.contact.phone}</p>
      </div>
    `;
  } else if (item.make && item.model) {
    // For cars
    return `
      <div class="card">
        <h1>${item.make} ${item.model}</h1>
        <h2>${item.year}</h2>
        <p><strong>Owner:</strong> ${item.owner.name}</p>
        <p><strong>Color:</strong> ${item.specs.color}</p>
        <p><strong>Specs:</strong> ${item.specs.engine}, ${item.specs.transmission}</p>
      </div>
    `;
  }
  return "";
}

// Render people and cars in separate containers
peopleContainer.innerHTML = people.map(printOut).join("");
carsContainer.innerHTML = cars.map(printOut).join("");
