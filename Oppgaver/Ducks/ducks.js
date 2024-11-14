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

let outerList = document.getElementById("ducks-list");

for (let duck of ducks) {
  let outerEntry = document.createElement('li');
  let innerList = document.createElement('ul');

  for (let [key, value] of Object.entries(duck)) {
    let innerEntry = document.createElement('li');
    innerEntry.innerHTML = `${key}: ${value}`;
    innerList.appendChild(innerEntry);
  }

  outerEntry.appendChild(innerList);
  outerList.appendChild(outerEntry);
}
