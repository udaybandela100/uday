document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate form values
    const messageElement = document.getElementById('message');
    if (name === '' || email === '' || password === '') {
        messageElement.textContent = 'All fields are required.';
        return;
    }

    if (!validateEmail(email)) {
        messageElement.textContent = 'Invalid email format.';
        return;
    }

    // Simulate successful registration
    messageElement.style.color = 'green';
    messageElement.textContent = 'Registration successful!';
    // Here you can also handle further actions like sending data to a server

    // Clear the form
    document.getElementById('registrationForm').reset();
});

function validateEmail(email) {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
