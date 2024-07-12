// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Form submission event listener
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Form input validation
        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            return;
        }

        if (message === '') {
            alert('Please enter your message.');
            return;
        }

        // Simulate form data submission to the server
        setTimeout(function() {
            document.getElementById('form-status').innerHTML = "Message sent successfully!";
        }, 1000);
    });

    // Smooth scrolling event listener
    document.querySelector('.container').addEventListener('click', function(event) {
        const target = event.target.closest('a[href^="#"]');
        if (target) {
            event.preventDefault();
            const targetId = target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});