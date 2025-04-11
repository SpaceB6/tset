// Signup Function
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully
      window.location.href = '/profile.html';
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Login Function
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Logged in successfully
      window.location.href = '/profile.html';
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Listen for auth state changes
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in, show profile
    window.location.href = '/profile.html';
  } else {
    // User is not signed in, stay on login page
    window.location.href = '/login.html';
  }
});
