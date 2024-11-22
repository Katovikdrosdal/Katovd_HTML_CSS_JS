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
  if (item.name) {
      // For people
      return `
          <div class="card">
              <h1>${item.name}</h1>
              <p>Age: ${item.age}</p>
              <p>Occupation: ${item.occupation}</p>
              <p>Contact: ${item.contact.email}, ${item.contact.phone}</p>
              <p>Address: ${item.address.city}, ${item.address.country}</p>
          </div>
      `;
  } else if (item.make) {
      // For cars
      return `
          <div class="card">
              <h1>${item.make} ${item.model}</h1>
              <p>Year: ${item.year}</p>
              <p>Owner: ${item.owner.name}</p>
              <p>Specs: ${item.specs.color}, ${item.specs.engine}, ${item.specs.transmission}</p>
          </div>
      `;
  }
  return '';
}


const occupationFilters = document.getElementById("occupation-filters");
const carBrandFilters = document.getElementById("car-brand-filters");

const uniqueOccupations = [...new Set(people.map(person => person.occupation))];
const uniqueCarBrands = [...new Set(cars.map(car => car.make))];

// Helper function to display filtered items
function displayFilteredItems(type, filterValue = null) {
  if (type === "people") {
    const filteredPeople = filterValue
      ? people.filter(person => person.occupation === filterValue)
      : people;
    peopleContainer.innerHTML = filteredPeople.map(printOut).join("");
  } else if (type === "cars") {
    const filteredCars = filterValue
      ? cars.filter(car => car.make === filterValue)
      : cars;
    carsContainer.innerHTML = filteredCars.map(printOut).join("");
  }
}

// Generate filter buttons dynamically
function createFilterButtons(container, items, type) {
  // Add a "Show All" button
  const allButton = document.createElement("button");
  allButton.textContent = "Show All";
  allButton.classList.add("active");
  allButton.addEventListener("click", () => {
    resetActiveButtons(container);
    allButton.classList.add("active");
    displayFilteredItems(type);
  });
  container.appendChild(allButton);

  // Add buttons for unique values
  items.forEach(item => {
    const button = document.createElement("button");
    button.textContent = item;
    button.addEventListener("click", () => {
      resetActiveButtons(container);
      button.classList.add("active");
      displayFilteredItems(type, item);
    });
    container.appendChild(button);
  });
}

// Reset active class for buttons
function resetActiveButtons(container) {
  container.querySelectorAll("button").forEach(button => {
    button.classList.remove("active");
  });
}

// Create buttons for filters
createFilterButtons(occupationFilters, uniqueOccupations, "people");
createFilterButtons(carBrandFilters, uniqueCarBrands, "cars");

// Initial display of all items
displayFilteredItems("people");
displayFilteredItems("cars");
