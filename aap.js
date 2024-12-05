







/*console.log('Script is loaded successfully.');

// Event listener for the login button
document.querySelector('.login-btn').addEventListener('click', function() {
    alert("Login button clicked! This would trigger a login modal or redirect.");
  });
  
  // Event listener for the newsletter subscription form
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
  
    if (email) {
      alert(Thank you for subscribing with email: ${email});
      document.querySelector('input[type="email"]').value = ''; // Clear input
    } else {
      alert("Please enter a valid email address.");
    }
  }); */
  // This function will be called once the user is signed in successfully
  function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);
    console.log("Logged in as: " + responsePayload.name);
    alert(Hello ${responsePayload.name}! You are successfully logged in.);
  }
  
  // Decode the JWT response and get user info
  function decodeJwtResponse(encodedJWT) {
    const base64Url = encodedJWT.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
  
  // Initialize the Google Sign-In Button
  window.onload = function() {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleCredentialResponse
    });
  
    google.accounts.id.renderButton(
      document.getElementById("g_id_signin"), 
      { theme: "outline", size: "large" }  // Customize the button appearance
    );
    
    google.accounts.id.prompt(); // Show the prompt automatically (optional)
  }
  

   // Toggle between Login and Signup forms
   function toggleForm(form) {
    if (form === 'login') {
        document.getElementById('loginForm').classList.add('active');
        document.getElementById('signupForm').classList.remove('active');
        document.getElementById('signupError').style.display = 'none'; // Hide error message
    } else if (form === 'signup') {
        document.getElementById('signupForm').classList.add('active');
        document.getElementById('loginForm').classList.remove('active');
        document.getElementById('loginError').style.display = 'none'; // Hide error message
    }
}

// Dummy login logic (you can replace it with actual authentication logic)
function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation for login
    if (email === 'test@example.com' && password === 'password123') {
        alert('Login Successful');
        document.getElementById('loginError').style.display = 'none'; // Hide error message
    } else {
        document.getElementById('loginError').style.display = 'block'; // Show error message
    }
}

// Dummy sign up logic (you can replace it with actual user registration logic)
function signUpUser() {}
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simple validation for signup (you can check if email already exists here)
    if (email === 'test@example.com') {
        document.getElementById('signupError').style.display = 'block'; // Show error message
    } else {
        alert('Sign Up Successful');
        document.getElementById('signupError').style.display = 'none'; // Hide error message
    }
