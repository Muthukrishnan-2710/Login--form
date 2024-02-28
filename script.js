const validUsername = "admin";
const validPassword = "Welcome123";
            

document.getElementById("login-form").addEventListener("submit", function(event) {
 event.preventDefault();

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if (username === validUsername && password === validPassword) {
    alert("Login successful!"); 
} else {
    alert("Invalid username or password.");
}
 
});
