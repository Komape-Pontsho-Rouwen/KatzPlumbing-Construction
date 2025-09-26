
const container = document.querySelector('.gallery-images');
const images = document.querySelectorAll('.gallery-images img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentIndex = 0;

function showImageMobile(index) {
  if (window.innerWidth > 768) return; // skip desktop
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  currentIndex = index;

  // scroll to the image's offset
  container.scrollTo({
    left: images[currentIndex].offsetLeft,
    behavior: 'smooth'
  });
}

// Arrow click handlers
leftArrow.addEventListener('click', () => showImageMobile(currentIndex - 1));
rightArrow.addEventListener('click', () => showImageMobile(currentIndex + 1));

// Initialize
showImageMobile(currentIndex);

// Handle window resize
window.addEventListener('resize', () => showImageMobile(currentIndex));
