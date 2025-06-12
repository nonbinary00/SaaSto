const backButton = document.getElementById('back-to-top');

if (backButton) {
  backButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    const halfPageHeight = document.body.scrollHeight / 2;

    if (window.pageYOffset > halfPageHeight) {
      backButton.classList.add('back-to-top_visible');
    } else {
      backButton.classList.remove('back-to-top_visible');
    }
  });
}
