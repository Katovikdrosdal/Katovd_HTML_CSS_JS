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

  {
    id: 5,
    name: "Evan",
    age: 32,
    occupation: "Engineer",
    contact: { email: "evan@example.com", phone: "555-123-6789" },
    address: { city: "Austin", country: "USA" },
  },
  {
    id: 6,
    name: "Fiona",
    age: 29,
    occupation: "Scientist",
    contact: { email: "fiona@example.com", phone: "321-555-6789" },
    address: { city: "San Diego", country: "USA" },
  },
  {
    id: 7,
    name: "George",
    age: 40,
    occupation: "Lawyer",
    contact: { email: "george@example.com", phone: "666-777-8888" },
    address: { city: "Miami", country: "USA" },
  },
  {
    id: 8,
    name: "Hannah",
    age: 27,
    occupation: "Nurse",
    contact: { email: "hannah@example.com", phone: "111-222-3333" },
    address: { city: "Seattle", country: "USA" },
  },
  {
    id: 9,
    name: "Ian",
    age: 45,
    occupation: "Doctor",
    contact: { email: "ian@example.com", phone: "777-888-9999" },
    address: { city: "Boston", country: "USA" },
  },
  {
    id: 10,
    name: "Julia",
    age: 36,
    occupation: "Teacher",
    contact: { email: "julia@example.com", phone: "123-444-5678" },
    address: { city: "Portland", country: "USA" },
  },
  {
    id: 11,
    name: "Kevin",
    age: 22,
    occupation: "Student",
    contact: { email: "kevin@example.com", phone: "987-555-1111" },
    address: { city: "Denver", country: "USA" },
  },
  {
    id: 12,
    name: "Laura",
    age: 31,
    occupation: "Chef",
    contact: { email: "laura@example.com", phone: "456-789-1234" },
    address: { city: "San Francisco", country: "USA" },
  },
  {
    id: 13,
    name: "Michael",
    age: 38,
    occupation: "Photographer",
    contact: { email: "michael@example.com", phone: "666-999-5555" },
    address: { city: "Atlanta", country: "USA" },
  },
  {
    id: 14,
    name: "Nina",
    age: 26,
    occupation: "Engineer",
    contact: { email: "nina@example.com", phone: "222-444-7777" },
    address: { city: "Orlando", country: "USA" },
  },
  {
    id: 15,
    name: "Oscar",
    age: 50,
    occupation: "Business Owner",
    contact: { email: "oscar@example.com", phone: "333-555-6666" },
    address: { city: "Dallas", country: "USA" },
  },
  {
    id: 16,
    name: "Patricia",
    age: 33,
    occupation: "Scientist",
    contact: { email: "patricia@example.com", phone: "888-777-2222" },
    address: { city: "Nashville", country: "USA" },
  },
  {
    id: 17,
    name: "Quincy",
    age: 29,
    occupation: "Nurse",
    contact: { email: "quincy@example.com", phone: "444-888-5555" },
    address: { city: "Phoenix", country: "USA" },
  },
  {
    id: 18,
    name: "Rachel",
    age: 34,
    occupation: "Marketing Specialist",
    contact: { email: "rachel@example.com", phone: "777-333-2222" },
    address: { city: "Las Vegas", country: "USA" },
  },
  {
    id: 19,
    name: "Sam",
    age: 41,
    occupation: "Veterinarian",
    contact: { email: "sam@example.com", phone: "111-999-8888" },
    address: { city: "Minneapolis", country: "USA" },
  },
  {
    id: 20,
    name: "Tina",
    age: 37,
    occupation: "Engineer",
    contact: { email: "tina@example.com", phone: "123-888-5555" },
    address: { city: "Charlotte", country: "USA" },
  }
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

  {
    id: 5,
    make: "Toyota",
    model: "Corolla",
    year: 2019,
    owner: { name: "Evan", id: 5 },
    specs: { color: "Gray", engine: "1.8L", transmission: "Automatic" },
  },
  {
    id: 6,
    make: "Honda",
    model: "Civic",
    year: 2020,
    owner: { name: "Fiona", id: 6 },
    specs: { color: "Blue", engine: "2.0L", transmission: "Manual" },
  },
  {
    id: 7,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    owner: { name: "George", id: 7 },
    specs: { color: "Red", engine: "Electric", transmission: "Automatic" },
  },
  {
    id: 8,
    make: "Ford",
    model: "Focus",
    year: 2018,
    owner: { name: "Hannah", id: 8 },
    specs: { color: "Silver", engine: "1.5L", transmission: "Automatic" },
  },
  {
    id: 9,
    make: "Chevrolet",
    model: "Malibu",
    year: 2021,
    owner: { name: "Ian", id: 9 },
    specs: { color: "White", engine: "2.0L", transmission: "Automatic" },
  },
  {
    id: 10,
    make: "BMW",
    model: "3 Series",
    year: 2020,
    owner: { name: "Julia", id: 10 },
    specs: { color: "Black", engine: "3.0L", transmission: "Automatic" },
  },
  {
    id: 11,
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    owner: { name: "Kevin", id: 11 },
    specs: { color: "Blue", engine: "1.8L", transmission: "Automatic" },
  },
  {
    id: 12,
    make: "Audi",
    model: "A4",
    year: 2022,
    owner: { name: "Laura", id: 12 },
    specs: { color: "White", engine: "2.0L", transmission: "Automatic" },
  },
  {
    id: 13,
    make: "Honda",
    model: "Civic",
    year: 2019,
    owner: { name: "Michael", id: 13 },
    specs: { color: "Black", engine: "2.0L", transmission: "Manual" },
  },
  {
    id: 14,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    owner: { name: "Nina", id: 14 },
    specs: { color: "Red", engine: "Electric", transmission: "Automatic" },
  },
  {
    id: 15,
    make: "Chevrolet",
    model: "Malibu",
    year: 2020,
    owner: { name: "Oscar", id: 15 },
    specs: { color: "Gray", engine: "2.0L", transmission: "Automatic" },
  },
  {
    id: 16,
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    owner: { name: "Patricia", id: 16 },
    specs: { color: "White", engine: "1.8L", transmission: "Automatic" },
  },
  {
    id: 17,
    make: "BMW",
    model: "3 Series",
    year: 2021,
    owner: { name: "Quincy", id: 17 },
    specs: { color: "Black", engine: "3.0L", transmission: "Automatic" },
  },
  {
    id: 18,
    make: "Audi",
    model: "A4",
    year: 2020,
    owner: { name: "Rachel", id: 18 },
    specs: { color: "Blue", engine: "2.0L", transmission: "Automatic" },
  },
  {
    id: 19,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    owner: { name: "Sam", id: 19 },
    specs: { color: "Black", engine: "Electric", transmission: "Automatic" },
  },
  {
    id: 20,
    make: "Ford",
    model: "Focus",
    year: 2021,
    owner: { name: "Tina", id: 20 },
    specs: { color: "White", engine: "1.5L", transmission: "Automatic" },
  }
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

const togglePeopleButton = document.getElementById("toggle-people-button");
const toggleCarsButton = document.getElementById("toggle-cars-button");

let arePeopleVisible = true; // Track visibility state
let areCarsVisible = true;

function toggleVisibility(type) {
    if (type === "people") {
        if (arePeopleVisible) {
            peopleContainer.innerHTML = ""; // Hide people
            togglePeopleButton.textContent = "Show People";
        } else {
            displayFilteredItems("people"); // Show people
            togglePeopleButton.textContent = "Hide People";
        }
        arePeopleVisible = !arePeopleVisible;
    } else if (type === "cars") {
        if (areCarsVisible) {
            carsContainer.innerHTML = ""; // Hide cars
            toggleCarsButton.textContent = "Show Cars";
        } else {
            displayFilteredItems("cars"); // Show cars
            toggleCarsButton.textContent = "Hide Cars";
        }
        areCarsVisible = !areCarsVisible;
    }
}

// Attach event listeners to the buttons
togglePeopleButton.addEventListener("click", () => toggleVisibility("people"));
toggleCarsButton.addEventListener("click", () => toggleVisibility("cars"));

// Ensure initial display
displayFilteredItems("people");
displayFilteredItems("cars");


const showNoneButton = document.getElementById("show-none-button");
let isShowingNone = true; // Track the state, default to "Show None"

// Function to render items dynamically
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

// Toggle between showing none and all items
function toggleShowNone() {
    if (isShowingNone) {
        // Show all items
        displayFilteredItems("people");
        displayFilteredItems("cars");
        showNoneButton.textContent = "Show None";
    } else {
        // Hide all items
        peopleContainer.innerHTML = "";
        carsContainer.innerHTML = "";
        showNoneButton.textContent = "Show All";
    }
    isShowingNone = !isShowingNone; // Toggle state
}

// Attach event listener to the button
showNoneButton.addEventListener("click", toggleShowNone);

// Set default state to "Show None" on page load
document.addEventListener("DOMContentLoaded", () => {
    peopleContainer.innerHTML = ""; // Clear people section
    carsContainer.innerHTML = ""; // Clear cars section
    showNoneButton.textContent = "Show All"; // Update button text
});


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
