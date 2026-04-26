// PIXELZONE — main.js

// Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.game-card').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Mobile nav
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}
