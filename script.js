// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
  
    // Toggle the visibility of navbar links when menu icon is clicked
    menuToggle.addEventListener('change', function () {
      if (menuToggle.checked) {
        navbarLinks.style.display = 'flex';
      } else {
        navbarLinks.style.display = 'none';
      }
    });
  
    // Close navbar when clicking outside
    document.addEventListener('click', function (event) {
      if (!navbarLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navbarLinks.style.display = 'none';
        menuToggle.checked = false;
      }
    });
  });
