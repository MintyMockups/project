document.querySelectorAll('.faq-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const wrap = item.parentElement;
    wrap.querySelectorAll('.faq-item').forEach((card) => {
      if (card !== item) card.classList.remove('open');
    });
    item.classList.toggle('open');
  });
});
