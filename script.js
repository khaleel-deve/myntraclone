// Function to show the welcome message alert
function showWelcomeMessage() {
    alert('Welcome to my project!');
}

// Function to show the thank you message alert
function showThankYouMessage() {
    alert('Thanks for visiting  website!');
}

// Wait for the window to be fully loaded
window.onload = function() {
    // Show the welcome message alert immediately
    showWelcomeMessage();
    
    // Set a timeout to show the thank you message alert after 10 seconds
    setTimeout(function() {
        showThankYouMessage();
    }, 10000); // 10000 milliseconds = 10 seconds
};