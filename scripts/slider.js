const isTouchDevice = window.matchMedia(
  '(hover: none) and (pointer: coarse)'
).matches;

if (isTouchDevice) {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();

      const isActive = card.classList.contains('card--active');

      cards.forEach((c) => {
        c.classList.remove('card--active');
      });

      if (!isActive) {
        card.classList.add('card--active');
      }
    });
  });

  document.addEventListener('click', () => {
    cards.forEach((c) => {
      c.classList.remove('card--active');
    });
  });
}