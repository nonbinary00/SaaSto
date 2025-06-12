document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.slider--comment', {
    loop: true,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
  });
});
