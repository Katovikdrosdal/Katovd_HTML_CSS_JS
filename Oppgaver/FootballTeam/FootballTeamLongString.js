// Array of team players with their details
const team = [
    { firstName: "Liam", lastName: "Spencer", JerseyNumber: 1, FieldPosition: "Goalkeeper" },
    { firstName: "Diego", lastName: "Martinez", JerseyNumber: 2, FieldPosition: "Right Back" },
    { firstName: "Marco", lastName: "Flores", JerseyNumber: 5, FieldPosition: "Center Back" },
    { firstName: "Ethan", lastName: "Clarke", JerseyNumber: 4, FieldPosition: "Center Back" },
    { firstName: "Jackson", lastName: "Bennett", JerseyNumber: 3, FieldPosition: "Left Back" },
    { firstName: "Lucas", lastName: "Silva", JerseyNumber: 6, FieldPosition: "Defensive Midfield" },
    { firstName: "Oliver", lastName: "Rossi", JerseyNumber: 7, FieldPosition: "Right Midfield" },
    { firstName: "Mateo", lastName: "Santos", JerseyNumber: 8, FieldPosition: "Central Midfield" },
    { firstName: "Max", lastName: "Weber", JerseyNumber: 10, FieldPosition: "Attacking Midfield" },
    { firstName: "Leo", lastName: "Romero", JerseyNumber: 11, FieldPosition: "Left Midfield" },
    { firstName: "Jonah", lastName: "Harper", JerseyNumber: 9, FieldPosition: "Striker" }
];

// Function to toggle display of the full team list
function toggleDisplayFullTeam() {
    const teamList = document.getElementById("team-list");
    if (teamList.innerHTML.trim() !== "") {
        // Clear the list if it is already populated
        teamList.innerHTML = "";
    } else {
        // Populate the list with all team members
        teamList.innerHTML = "";
        team.forEach(player => {
            const li = document.createElement("li");
            li.innerHTML = `
                Firstname: ${player.firstName}<br/>
                Lastname: ${player.lastName}<br/>
                Jersey Number: ${player.JerseyNumber}<br/>
                Field Position: ${player.FieldPosition}
            `;
            teamList.appendChild(li);
        });
    }
}

// Function to toggle display of only the attack players
function toggleDisplayAttackPlayers() {
    const teamList = document.getElementById("team-list");
    if (teamList.innerHTML.trim() !== "") {
        // Clear the list if it is already populated
        teamList.innerHTML = "";
    } else {
        // Filter out players with attacking positions
        teamList.innerHTML = "";
        const attackPositions = ["Striker", "Attacking Midfield"];
        const attackPlayers = team.filter(player => attackPositions.includes(player.FieldPosition));
        
        attackPlayers.forEach(player => {
            const li = document.createElement("li");
            li.innerHTML = `
                Firstname: ${player.firstName}<br/>
                Lastname: ${player.lastName}<br/>
                Jersey Number: ${player.JerseyNumber}<br/>
                Field Position: ${player.FieldPosition}
            `;
            teamList.appendChild(li);
        });
    }
}
