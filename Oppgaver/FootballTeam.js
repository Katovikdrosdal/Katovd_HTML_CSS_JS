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

function toggleDisplayFullTeam() {
  const teamList = document.getElementById("team-list");
  if (teamList.innerHTML.trim() !== "") {
    teamList.innerHTML = ""; 
  } else {
    let output = "";
    team.forEach(player => {
      output += `
        <li> 
          Firstname: ${player.firstName}<br/> 
          Lastname: ${player.lastName}<br/>  
          Jersey Number: ${player.JerseyNumber}<br/>  
          Field Position: ${player.FieldPosition}
        </li>`;
    });
    teamList.innerHTML = output;
  }
}

function toggleDisplayAttackPlayers() {
  const teamList = document.getElementById("team-list");
  if (teamList.innerHTML.trim() !== "") {
    teamList.innerHTML = "";
  } else {
    const attackPositions = ["Striker", "Attacking Midfield"];
    const attackPlayers = team.filter(player => attackPositions.includes(player.FieldPosition));
    
    let output = "";
    attackPlayers.forEach(player => {
      output += `
        <li>
          Firstname: ${player.firstName}<br/> 
          Lastname: ${player.lastName}<br/>  
          Jersey Number: ${player.JerseyNumber}<br/>  
          Field Position: ${player.FieldPosition}
        </li>`;
    });
    
    teamList.innerHTML = output;
  }
}
