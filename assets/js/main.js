// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Decorative "single-cell embedding" dot motif behind the portrait.
// A small nod to the UMAP plots she actually works with, not a stock gradient.
(function drawUmapMotif() {
  const group = document.querySelector('.umap-dots');
  if (!group) return;

  const palette = ['#1F5C56', '#A97B2F', '#6B4C6E', '#445E93', '#B4552F', '#6E8B74'];
  const clusters = [
    { cx: 90,  cy: 120, r: 70, color: palette[0], n: 16 },
    { cx: 230, cy: 90,  r: 55, color: palette[1], n: 12 },
    { cx: 260, cy: 230, r: 62, color: palette[2], n: 13 },
    { cx: 110, cy: 260, r: 50, color: palette[3], n: 10 },
    { cx: 190, cy: 190, r: 40, color: palette[4], n: 8  },
    { cx: 60,  cy: 200, r: 36, color: palette[5], n: 7  }
  ];

  const svgNS = 'http://www.w3.org/2000/svg';
  let delay = 0;

  clusters.forEach(cluster => {
    for (let i = 0; i < cluster.n; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * cluster.r;
      const cx = cluster.cx + Math.cos(angle) * dist;
      const cy = cluster.cy + Math.sin(angle) * dist;
      const r = 3 + Math.random() * 4.5;
      const opacity = (0.35 + Math.random() * 0.35).toFixed(2);

      const circle = document.createElementNS(svgNS, 'circle');
      circle.setAttribute('cx', cx.toFixed(1));
      circle.setAttribute('cy', cy.toFixed(1));
      circle.setAttribute('r', r.toFixed(1));
      circle.setAttribute('fill', cluster.color);
      circle.style.setProperty('--dot-o', opacity);
      circle.style.animationDelay = `${(delay * 0.012).toFixed(2)}s`;
      group.appendChild(circle);
      delay++;
    }
  });
})();

// Highlight the current section in the nav while scrolling.
(function highlightActiveSection() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.site-nav a');
  if (!sections.length || !links.length) return;

  const map = new Map();
  links.forEach(link => {
    const id = link.getAttribute('href').replace('#', '');
    map.set(id, link);
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const link = map.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(l => l.style.color = '');
          link.style.color = 'var(--teal-deep)';
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach(section => observer.observe(section));
})();
