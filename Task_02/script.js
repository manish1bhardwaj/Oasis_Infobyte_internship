// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Form Validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }
  
    alert('Message sent successfully!');
    form.reset();
  });
  