const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('lightboxClose');

galleryImages.forEach(function (photo) {
    photo.addEventListener('click', function () {
        lightboxImg.src = photo.getAttribute('data-full');
        lightbox.classList.add('open');
    });
});

closeBtn.addEventListener('click', function () {
    lightbox.classList.remove('open');
});