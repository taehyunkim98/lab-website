// --- Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.gap = '6px';
});

// --- Theme toggle (light/dark)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if(saved) root.setAttribute('data-theme', saved);
themeToggle?.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  root.setAttribute('data-theme', isLight ? 'dark' : 'light');
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
});

// --- Active tab by pathname & footer year
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href')?.split('#')[0]?.toLowerCase();
    if(href === path) a.classList.add('active');
  });
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
})();
