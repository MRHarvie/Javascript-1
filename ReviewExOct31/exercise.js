document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

    let count = 1; // Initialize count with the starting number
    let counting = false; // State to check if counting is active
    let interval; // Variable to hold the interval

    const numberDisplay = document.getElementById("number"); // Get the number display element

    // Create a start/stop button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Start";
    document.body.appendChild(toggleButton);

    // Function to update the counter
    const updateCounter = () => {
        count++;
        numberDisplay.textContent = count; // Update the text content of the h1
    };

    // Event listener for button click
    toggleButton.addEventListener("click", () => {
        if (!counting) {
            // Start counting
            counting = true;
            toggleButton.textContent = "Stop"; // Change button text
            interval = setInterval(updateCounter, 1000); // Call updateCounter every second
        } else {
            // Stop counting
            counting = false;
            toggleButton.textContent = "Start"; // Change button text back
            clearInterval(interval); // Clear the interval
        }
    });
});
