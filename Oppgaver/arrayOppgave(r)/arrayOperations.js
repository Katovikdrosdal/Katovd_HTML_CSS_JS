// Get the output div and track states for each button
let outputDiv = document.getElementById('output');
let states = {
    integers: false,
    decimals: false,
    catNames: false,
};

// Function to toggle content
function toggleContent(buttonType, content) {
    if (states[buttonType]) {
        outputDiv.innerHTML = ''; // Clear output
        states[buttonType] = false; // Update state
    } else {
        outputDiv.innerHTML = ''; // Clear previous content
        content.forEach((element) => {
            outputDiv.innerHTML += `<p>${element}</p>`;
        });
        states = { integers: false, decimals: false, catNames: false }; // Reset all states
        states[buttonType] = true; // Set current state
    }
}

// Event listeners for buttons
document.getElementById('generateIntegers').addEventListener('click', () => {
    const integers = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100) + 1);
    toggleContent('integers', integers);
});

document.getElementById('generateDecimals').addEventListener('click', () => {
    const decimals = Array.from({ length: 10 }, () => Math.random().toFixed(2));
    toggleContent('decimals', decimals);
});

document.getElementById('showCatNames').addEventListener('click', () => {
    const catNames = ['Molly', 'Luna', 'Leo', 'Simba', 'Nala', 'Felix', 'Bella', 'Oscar', 'Max', 'Tiger'];
    toggleContent('catNames', catNames);
});
