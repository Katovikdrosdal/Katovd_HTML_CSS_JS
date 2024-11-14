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

let output = "";
for (let duck of ducks) {
  output += 
`<li> 
    Firstname: ${duck.firstName}<br/> 
    Lastname: ${duck.lastName}<br/>  
    Address: ${duck.address}<br/>  
    Phonenumber: ${duck.phoneNumber}<br/>
    Workphone: ${duck.workPhoneNumber}<br/>
    Email: ${duck.eMail}<br/>
    WorkEmail: ${duck.workEmail} 
</li>`;
}

document.getElementById("ducks-list").innerHTML = output;
