// Darkmode function
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}


// Ducks data array - each object contains information about a specific duck character
const ducks = [
  {
    firstName: "Donald",
    lastName: "Duck",
    address: "1313 Webfoot Walk, Duckburg, Calisota",
    phoneNumber: "555-0123",
    workPhoneNumber: "555-1001",
    eMail: "donald.duck@duckmail.com",
    workEmail: "donald.duck@duckcorp.com",
  },
  {
    firstName: "Ole",
    lastName: "Duck",
    address: "1313 Webfoot Walk, Duckburg, Calisota",
    phoneNumber: "555-0456",
    workPhoneNumber: "555-1002",
    eMail: "ole.duck@duckmail.com",
    workEmail: "ole.duck@duckcorp.com",
  },
  {
    firstName: "Dole",
    lastName: "Duck",
    address: "1313 Webfoot Walk, Duckburg, Calisota",
    phoneNumber: "555-0789",
    workPhoneNumber: "555-1003",
    eMail: "dole.duck@duckmail.com",
    workEmail: "dole.duck@duckcorp.com",
  },
  {
    firstName: "Doffen",
    lastName: "Duck",
    address: "1313 Webfoot Walk, Duckburg, Calisota",
    phoneNumber: "555-0912",
    workPhoneNumber: "555-1004",
    eMail: "doffen.duck@duckmail.com",
    workEmail: "doffen.duck@duckcorp.com",
  },
];

/**
 * Converts a lowerCamelCase string to a more readable Camel Case format with spaces.
 * @param {string} str - The lowerCamelCase string to be converted.
 * @returns {string} - A string with spaces between words and capitalized first letter, e.g., "firstName" -> "First Name".
 */
function toReadableCamelCase(str) {
    return str
        .replace(/([A-Z])/g, ' $1')       // Inserts a space before each uppercase letter
        .replace(/^./, s => s.toUpperCase()); // Capitalizes the first letter of the resulting string
}

// Get the HTML element with ID 'ducks-list' where the list of ducks will be rendered
let outerList = document.getElementById("ducks-list");

// Loop through each duck object in the ducks array
for (let duck of ducks) {
  // Create an outer list item to represent each duck in the main list
  let outerEntry = document.createElement('li');
  
  // Create an inner unordered list to store the individual properties of each duck
  let innerList = document.createElement('ul');

  // Iterate over each key-value pair in the duck object
  for (let [key, value] of Object.entries(duck)) {
    // Create a list item for each property of the duck
    let innerEntry = document.createElement('li');

    // Format the key into a readable format and set it with the value
    innerEntry.innerHTML = `${toReadableCamelCase(key)}: ${value}`;

    // Append the formatted list item to the inner list
    innerList.appendChild(innerEntry);
  }

  // Append the inner list (with all properties) to the outer entry
  outerEntry.appendChild(innerList);

  // Append the outer entry to the main ducks list in the HTML
  outerList.appendChild(outerEntry);
}
