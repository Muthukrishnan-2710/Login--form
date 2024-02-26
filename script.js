document.getElementById("login-form").addEventListener("submit", function(event) {
 event.preventDefault();

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

const validUsername = "admin";
const validPassword = "Welcome123";
            
if (username === validUsername && password === validPassword) {
    alert("Login successful!"); 
} else {
    alert("Invalid username or password.");
}
 
});
