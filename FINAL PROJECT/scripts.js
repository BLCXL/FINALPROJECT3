// Navigation bar functionality
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
  });
  
  // Membership options
  const membershipOptions = ["Basic - $10/month", "Standard - $20/month", "Premium - $30/month"];
  const membershipList = document.getElementById('membershipOptions');
  
  membershipOptions.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option;
    membershipList.appendChild(li);
  });
  
  // Form validation
  document.getElementById('membershipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    let errors = [];
  
    if (fullName.length < 3) errors.push("Full name must be at least 3 characters.");
    if (!email.includes('@')) errors.push("Email must be valid.");
    if (password.length < 6) errors.push("Password must be at least 6 characters.");
  
    document.getElementById('formErrors').textContent = errors.join(', ') || "Form submitted successfully!";
  });
  
  // Slideshow
  const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
  let currentIndex = 0;
  
  function updateSlideshow() {
    document.getElementById('slideshowImage').src = images[currentIndex];
  }
  
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlideshow();
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlideshow();
  });
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlideshow();
  }, 5000);
  