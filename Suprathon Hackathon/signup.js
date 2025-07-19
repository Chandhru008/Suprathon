document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }
    // Simulate signup success
    alert('Signup successful! (Simulation)');
    // Here you would typically send data to the server
}); 