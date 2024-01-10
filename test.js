// This is a simple JavaScript code with an intentional XSS vulnerability

function displayMessage(message) {
  // Vulnerable code: This line does not properly sanitize the user input
  document.getElementById('output').innerHTML = '<p>' + message + '</p>';
}

// Example usage
var userInput = '<img src=x onerror=alert("XSS Vulnerability")>';
displayMessage(userInput);
