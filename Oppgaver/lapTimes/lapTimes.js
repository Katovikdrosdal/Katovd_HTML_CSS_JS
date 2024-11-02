let previousTime = null;
let lapTimes = [];
let startTime = null;

const addTimeButton = document.getElementById("addTimeButton");
const lapTimesList = document.getElementById("lapTimesList");

addTimeButton.addEventListener("click", function() {
    const currentTime = new Date();
    let lapTime;

    if (previousTime) {
        lapTime = (currentTime - previousTime) / 1000;
        if (lapTime > 60) {
            const minutes = Math.floor(lapTime / 60);
            const seconds = (lapTime % 60).toFixed(2);
            addLapTimeToList(`Lap time: ${minutes} minute(s) and ${seconds} seconds`);
        } else {
            addLapTimeToList(`Lap time: ${lapTime.toFixed(2)} seconds`);
        }
        lapTimes.push(lapTime);
        updateAverageTime();
        updateTotalTime(currentTime);
    } else {
        addLapTimeToList("Starting time recorded");
        startTime = currentTime;
    }

    previousTime = currentTime;
});

function addLapTimeToList(text) {
    const listItem = document.createElement("li");
    listItem.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function() {
        listItem.remove();
        const lapIndex = Array.from(listItem.parentNode.children).indexOf(listItem);
        lapTimes.splice(lapIndex, 1);
        updateAverageTime();
    });

    listItem.appendChild(deleteButton);
    lapTimesList.appendChild(listItem);
}

function updateAverageTime() {
    if (lapTimes.length > 0) {
        const average = lapTimes.reduce((a, b) => a + b, 0) / lapTimes.length;
        document.getElementById("averageTime").textContent = `Average lap time: ${average.toFixed(2)} seconds`;
    } else {
        document.getElementById("averageTime").textContent = "";
    }
}

function updateTotalTime(currentTime) {
    if (startTime) {
        const totalTime = (currentTime - startTime) / 1000;
        document.getElementById("totalTime").textContent = `Total time: ${totalTime.toFixed(2)} seconds`;
    }
}
