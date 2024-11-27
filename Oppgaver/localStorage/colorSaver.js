// Function to initialize the page on load
function startup() {
    const savedColor = localStorage.getItem("backgroundColor");

    // Apply the saved background color if it exists
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById("colorPicker").value = savedColor;
    }

    // Add event listener to dropdown menu
    const colorPicker = document.getElementById("colorPicker");
    colorPicker.addEventListener("change", () => {
        const selectedColor = colorPicker.value;

        // Set background color and save the value to localStorage
        document.body.style.backgroundColor = selectedColor;
        localStorage.setItem("backgroundColor", selectedColor);
    });
}

// Run the startup function when the page loads
window.onload = startup;
