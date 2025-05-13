// Get all clickable images
const clickableImages = document.querySelectorAll('.clickable-img');

// Get modal and modal image elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

// Add click event to each image
clickableImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src; 
    });
});

// Close modal when clicking outside of the image
function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}