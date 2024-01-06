/* CAROUSEL */

// Добавим JavaScript, чтобы реализовать логику карусели (переключение слайдов)

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

// Пример: переключение слайдов по кнопкам

document.getElementById('prevBtn').addEventListener('click', () => showSlide(currentSlide - 1));
document.getElementById('nextBtn').addEventListener('click', () => showSlide(currentSlide + 1));

/* CAROUSEL */

/* GALLERY */

const btnShowGallery = document.getElementById('showGallery');
const btnHideGallery = document.getElementById('hideGallery');
const photos = document.querySelectorAll('.photo--hide');

btnShowGallery.addEventListener('click', function() {
  photos.forEach(photo => photo.classList.remove('none'));
  btnShowGallery.classList.add('none');
  btnHideGallery.classList.remove('none');
})

btnHideGallery.addEventListener('click', function() {
  photos.forEach(photo => photo.classList.add('none'))
  btnHideGallery.classList.add('none');
  btnShowGallery.classList.remove('none')
})


/* GALLERY NAV */

const allPhotos = document.getElementById('allPhotos');
const touristsPhotos = document.getElementById('touristsPhotos');
const naturePhotos = document.getElementById('naturePhotos');
const touristsGallery = document.getElementById('touristsGallery');
const natureGallery = document.getElementById('natureGallery');

allPhotos.addEventListener('click', function() {
  touristsGallery.classList.remove('none');
  natureGallery.classList.remove('none');
})

touristsPhotos.addEventListener('click', function() {
  touristsGallery.classList.remove('none')
  natureGallery.classList.add('none')
})

naturePhotos.addEventListener('click', function() {
  natureGallery.classList.remove('none');
  touristsGallery.classList.add('none');
})

/* GALLERY NAV */

/* GALLERY */