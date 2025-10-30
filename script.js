document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const userError = document.getElementById("userError");
  const passError = document.getElementById("passError");

  userError.textContent = "";
  passError.textContent = "";

  let isValid = true;

  if (username === "") {
    userError.textContent = "Username is required";
    isValid = false;
  }

  if (password === "") {
    passError.textContent = "Password is required";
    isValid = false;
  }

  if (isValid) {
    alert("Login successful! (Frontend only)");
    
  }
});
