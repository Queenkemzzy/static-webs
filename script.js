// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Button click handler
    const demoBtn = document.getElementById('demo-btn');
    const demoText = document.getElementById('demo-text');
    
    if (demoBtn && demoText) {
        demoBtn.addEventListener('click', function() {
            demoText.textContent = 'Button was clicked!';
        });
    }
    
    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real app, you would send this data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! (This is a demo - no data was actually sent)');
            
            // Reset form
            contactForm.reset();
        });
    }
});