document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const submitButton = document.getElementById("submit-name");

    // Check if user data exists in localStorage
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");

    if (firstName && lastName) {
        welcomeMessage.textContent = `Welcome back to us, ${firstName} ${lastName}!`;
    } else {
        welcomeMessage.textContent = "Nice to see new users here! Welcome to our website!";
    }

    // Handle name submission
    submitButton.addEventListener("click", () => {
        const newFirstName = firstNameInput.value.trim();
        const newLastName = lastNameInput.value.trim();

        if (newFirstName && newLastName) {
            const existingFirstName = localStorage.getItem("firstName");
            const existingLastName = localStorage.getItem("lastName");

            // Check if the name already exists in localStorage
            if (!existingFirstName || !existingLastName) {
                welcomeMessage.textContent = `Welcome new user, ${newFirstName} ${newLastName}!`;
            } else {
                welcomeMessage.textContent = `Welcome back to us, ${newFirstName} ${newLastName}!`;
            }

            // Store the new name in localStorage
            localStorage.setItem("firstName", newFirstName);
            localStorage.setItem("lastName", newLastName);

            // Clear the input fields
            firstNameInput.value = "";
            lastNameInput.value = "";
        } else {
            alert("Please enter both your first and last name.");
        }
    });
});
