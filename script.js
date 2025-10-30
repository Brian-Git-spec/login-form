// Detect which form exists
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// 🔹 LOGIN PAGE
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
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
      // You could redirect: window.location.href = "dashboard.html";
    }
  });
}

// 🔹 SIGN-UP PAGE
if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const userError = document.getElementById("userError");
    const passError = document.getElementById("passError");
    const confirmError = document.getElementById("confirmError");

    nameError.textContent = "";
    emailError.textContent = "";
    userError.textContent = "";
    passError.textContent = "";
    confirmError.textContent = "";

    let isValid = true;

    if (fullname === "") {
      nameError.textContent = "Full name is required";
      isValid = false;
    }

    if (email === "" || !email.includes("@")) {
      emailError.textContent = "Valid email is required";
      isValid = false;
    }

    if (username.length < 3) {
      userError.textContent = "Username must be at least 3 characters";
      isValid = false;
    }

    if (password.length < 6) {
      passError.textContent = "Password must be at least 6 characters";
      isValid = false;
    }

    if (password !== confirmPassword) {
      confirmError.textContent = "Passwords do not match";
      isValid = false;
    }

    if (isValid) {
      alert("Sign-up successful! (Frontend only)");
      // Optional redirect:
      // window.location.href = "index.html";
    }
  });
}

// Dashboard logic
if (window.location.pathname.endsWith("dashboard.html")) {
  const name = localStorage.getItem("username") || "User";
  document.getElementById("userName").textContent = name;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("username");
    alert("You have logged out.");
    window.location.href = "index.html";
  });
}
