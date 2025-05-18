let currentIndex = 0;
let slides = [];
let autoScrollInterval = null;

function updateSlider() {
  const container = document.getElementById('newsContainer');
  const offset = -currentIndex * 100;
  container.style.transform = `translateX(${offset}%)`;
}

function renderNews(newsData) {
  const container = document.getElementById('newsContainer');
  container.innerHTML = '';
  slides = newsData;

  // Добавим клон последнего и первого слайда для бесконечной прокрутки
  const extendedSlides = [newsData[newsData.length - 1], ...newsData, newsData[0]];

  extendedSlides.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'news-slide';
    slide.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="news-slide-content">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
    container.appendChild(slide);
  });

  currentIndex = 1; // Начинаем с первого реального слайда
  updateSlider();
}

function slideTo(index) {
  const container = document.getElementById('newsContainer');
  container.style.transition = 'transform 0.5s ease-in-out';
  currentIndex = index;
  updateSlider();

  container.addEventListener('transitionend', handleLoop, { once: true });
}

function handleLoop() {
  const container = document.getElementById('newsContainer');
  container.style.transition = 'none';

  if (currentIndex === 0) {
    currentIndex = slides.length;
    updateSlider();
  } else if (currentIndex === slides.length + 1) {
    currentIndex = 1;
    updateSlider();
  }
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    slideTo(currentIndex + 1);
  }, 5000); // каждые 5 секунд
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

document.getElementById('prevBtn').addEventListener('click', () => {
  stopAutoScroll();
  slideTo(currentIndex - 1);
  startAutoScroll();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  stopAutoScroll();
  slideTo(currentIndex + 1);
  startAutoScroll();
});

// Загрузка данных из news.json
fetch('/js/news.json')
  .then(res => res.json())
  .then(data => {
    renderNews(data);
    startAutoScroll();
  })
  .catch(err => console.error('Ошибка загрузки новостей:', err));
