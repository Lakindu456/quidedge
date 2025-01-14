document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && subject && message) {
    try {
      const response = await fetch('http://your-api-url.com/api/contact', { // Update this line
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);  // Show success message
        this.reset();  // Reset the form fields
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    }
  } else {
    alert('Please fill in all fields.');
  }
});
