//FOR SLIDE
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider').forEach(slider => {
    const container = slider.parentElement;
    const next = container.querySelector('.nextBtn');
    const back = container.querySelector('.backBtn');

    if (!next || !back) return;

    next.addEventListener('click', () => {
      slider.scrollBy({ left: 260, behavior: 'smooth' });
    });

    back.addEventListener('click', () => {
      slider.scrollBy({ left: -260, behavior: 'smooth' });
    });
  });
});






