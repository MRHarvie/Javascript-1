document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

    let count = 1; 
    let counting = false; 
    let interval; 

    const numberDisplay = document.getElementById("number"); // Get the number display element

    // Create a start/stop button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Start";
    document.body.appendChild(toggleButton);

    // Function to update the counter
    const updateCounter = () => {
        count++;
        numberDisplay.textContent = count;
    };

    // Event listener for button click
    toggleButton.addEventListener("click", () => {
        if (!counting) {
            // Start counting
            counting = true;
            toggleButton.textContent = "Stop"; // Change button text
            interval = setInterval(updateCounter, 1000);
        } else {
            // Stop counting
            counting = false;
            toggleButton.textContent = "Start"; // Change button text back
            clearInterval(interval);
        }
    });
});
