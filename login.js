const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginButton = document.querySelector('.btn'); // Add this line to select the login button
const signUpButton = document.querySelector('.register .btn'); // Add this line to select the sign-up button

registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};
// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Here you can add authentication logic

    // Redirect to index.html after successful login
    window.location.href = 'index.html';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Here you can add sign-up logic

    // Redirect to index.html after successful sign up
    window.location.href = 'index.html';
});


// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Send data to backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'index.html'; // Redirect on success
        } else {
            alert(data.message); // Show error message
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Send data to backend
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'index.html'; // Redirect on success
        } else {
            alert(data.message); // Show error message
        }
    })
    .catch(error => console.error('Error:', error));
});