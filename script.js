const data = [
  { id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952" },
  { id: 2, title: "reprehenderit est deserunt velit ipsam", url: "https://via.placeholder.com/600/771796" },
  { id: 3, title: "officia porro iure quia iusto qui ipsa ut modi", url: "https://via.placeholder.com/600/24f355" },
  { id: 4, title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae", url: "https://via.placeholder.com/600/d32776" }
];

const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function createCarouselItem(item) {
  const div = document.createElement('div');
  div.className = 'carousel-item';
  div.setAttribute('data-id', item.id);
  const img = document.createElement('img');
  img.src = item.url;
  img.alt = item.title;
  div.appendChild(img);
  return div;
}

function updateCarousel() {
  const transformValue = -currentIndex * 100;
  carousel.style.transform = 'translateX(' + transformValue + '%)';

  let dotsHTML = '';
  data.forEach(function (item, i) {
    dotsHTML += '<span class="dot';
    if (i === currentIndex) {
      dotsHTML += ' active';
    }
    dotsHTML += '" data-index="' + i + '"></span>';
  });

  dotsContainer.innerHTML = dotsHTML;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % data.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function autoPlay() {
  setInterval(function () {
    nextSlide();
  }, 5000);
}

data.forEach(function (item) {
  const itemElement = createCarouselItem(item);
  carousel.appendChild(itemElement);
});

prevButton.addEventListener('click', function () {
  prevSlide();
});

nextButton.addEventListener('click', function () {
  nextSlide();
});

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dot')) {
    goToSlide(parseInt(e.target.getAttribute('data-index')));
  }
});

autoPlay();
