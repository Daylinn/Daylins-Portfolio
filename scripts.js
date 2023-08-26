// For the sake of brevity, I'll add a basic interaction for the profile image.

document.getElementById('profile-image').addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.1)'; // Slightly enlarges the image when hovered over.
});

document.getElementById('profile-image').addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1)'; // Returns to original size on mouse leave.
});
