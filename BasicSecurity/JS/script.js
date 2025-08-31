// =====================
// Password Checker
// =====================
function checkPassword() {
  const password = document.getElementById("password").value;
  let strength = "";

  if (password.length < 6) {
    strength = "Weak";
  } else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
    strength = "Strong";
  } else {
    strength = "Moderate";
  }

  document.getElementById("passwordResult").innerText = "Password strength: " + strength;
}

// =====================
// SQL Injection Safe Login
// =====================
function safeLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("loginPassword").value;

  // Simple sanitization to prevent SQL Injection
  const safeUsername = username.replace(/[^a-zA-Z0-9]/g, '');
  const safePassword = password.replace(/[^a-zA-Z0-9]/g, '');

  // Mock database
  const dbUsername = "admin";
  const dbPassword = "1234";

  if (safeUsername === dbUsername && safePassword === dbPassword) {
    document.getElementById("loginResult").innerText = "Login successful!";
  } else {
    document.getElementById("loginResult").innerText = "Login failed!";
  }
}

// =====================
// XSS Prevention Comment Box
// =====================
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

function addComment() {
  const comment = document.getElementById("comment").value;
  const safeComment = escapeHTML(comment);

  const li = document.createElement("li");
  li.innerHTML = safeComment;
  document.getElementById("comments").appendChild(li);

  document.getElementById("comment").value = '';
}
