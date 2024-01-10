// This is a simple JavaScript code with an intentional XSS vulnerability

function displayMessage(message) {
  // Vulnerable code: This line does not properly sanitize the user input
  document.getElementById('output').innerHTML = '<p>' + message + '</p>';
}

// Example usage
var userInput = '<img src=x onerror=alert("XSS Vulnerability")>';
displayMessage(userInput);

// This is a simple JavaScript code with an intentional SQL Injection vulnerability

function fetchData(userInput) {
  // Vulnerable code: This code directly inserts user input into an SQL query
  var query = "SELECT * FROM users WHERE username = '" + userInput + "';";
  
  // This is a simulated database query, do not use this in a real application
  // It's just for demonstration purposes
  var result = executeQuery(query);

  return result;
}

// Simulated database query function
function executeQuery(query) {
  // In a real application, this function would interact with a database
  // Here, we'll just simulate a response for testing purposes
  var fakeDatabase = {
    'admin': 'Access granted!',
    'user': 'Normal user access'
  };

  // Simulated response, do not use this in a real application
  return fakeDatabase[query];
}

// Example usage
var userInput = "admin'; --";
var queryResult = fetchData(userInput);
console.log(queryResult);
