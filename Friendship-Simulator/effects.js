const box = document.querySelector('.particles');

for (let i = 0; i < 30; i++) {
  const p = document.createElement('span');
  p.className = 'particle';

  const size = 2 + Math.random() * 5;
  p.style.width = p.style.height = size + 'px';
  p.style.left = Math.random() * 100 + '%';
  p.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px'); // sideways drift
  p.style.setProperty('--o', 0.3 + Math.random() * 0.6);          // peak opacity
    p.style.animationDuration = (25 + Math.random() * 20) + 's';   // was 10 + random * 14
    p.style.animationDelay    = (-Math.random() * 45) + 's';       // keep this range ≥ the max duration

  box.appendChild(p);
}