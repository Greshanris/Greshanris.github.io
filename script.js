// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example form validation 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm'); 
    if (form) {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Basic email validation
            if (email && !email.value.includes('@')) {
                isValid = false;
                alert('Please enter a valid email address.');
            }

            // Check message length
            if (message && message.value.length < 10) {
                isValid = false;
                alert('Message must be at least 10 characters long.');
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});

// Example for a button click event
document.querySelectorAll('button[id^="Project"]').forEach(button => {
    button.addEventListener('click', function() {
        alert(`You clicked on ${this.id}`);
    });
});