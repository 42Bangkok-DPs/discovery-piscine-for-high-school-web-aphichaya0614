document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation (optional)
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you can add code to send the form data to a server if needed
    } else {
        alert('Please fill in all fields.');
    }

    // Clear the form
    document.getElementById('contact-form').reset();
});