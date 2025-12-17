// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (you can enhance this)
    if (email && password) {
        // Here you would normally send data to your backend
        console.log(`Login successful!\nEmail: ${email}`);
        
        // Redirect to main page or dashboard
        // window.location.href = 'dashboard.html';
    } else {
        console.log('Please fill in all fields');
    }
});
