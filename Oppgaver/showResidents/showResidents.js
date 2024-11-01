// Using const and let appropriately, and adding modularization
const residents = ["John Doe", "Jane Smith", "Peter Johnson", "Mary Lee", "Tom Brown"];

const showResidents = () => {
    const residentsListDiv = document.getElementById("residentsList");
    residentsListDiv.innerHTML = "";

    const table = document.createElement("table");
    const tableHeader = createTableHeader();
    table.appendChild(tableHeader);

    residents.forEach((resident, index) => {
        const row = createTableRow(resident, index);
        table.appendChild(row);
    });

    residentsListDiv.appendChild(table);
};

const createTableHeader = () => {
    const header = document.createElement("tr");
    ["#", "Name", "Additional Info", "Actions"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        header.appendChild(th);
    });
    return header;
};

const createTableRow = (resident, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td contenteditable="true" onblur="updateResident(${index}, this.textContent)">${resident}</td>
        <td></td>
        <td><button onclick="removeResident(${index})">Remove</button></td>
    `;

    return row;
};

const updateResident = (index, newName) => {
    if (newName.trim() !== "") {
        residents[index] = newName;
    }
};

const addResident = () => {
    const newResidentName = document.getElementById("newResident").value.trim();
    if (newResidentName !== "" && !residents.includes(newResidentName)) {
        residents.push(newResidentName);
        showResidents();
    }
};

const removeResident = (index) => {
    residents.splice(index, 1);
    showResidents();
};

const sortResidents = () => {
    residents.sort();
    showResidents();
};

const clearResidents = () => {
    residents.length = 0;
    showResidents();
};

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};
