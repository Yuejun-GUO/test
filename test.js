// This is a simple JavaScript code with an intentional XSS vulnerability

function displayMessage(message) {
  // Vulnerable code: This line does not properly sanitize the user input
  document.getElementById('output').innerHTML = '<p>' + message + '</p>';
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
