/* ============================================
   CALVIN DALLI — MAIN APP JAVASCRIPT
   ============================================ */

'use strict';

// ============ DOM Ready ============
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initParticles();
  initReveal();
  initCounters();
  initPricingTabs();
  initMobileMenu();
  initForm();
  initHeroAnimations();
});

// ============ CUSTOM CURSOR ============
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Cursor effects on interactive elements
  const interactives = document.querySelectorAll('a, button, .service-card, .case-card, .price-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      cursor.style.background = 'rgba(124,58,255,0.6)';
      cursor.style.mixBlendMode = 'normal';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.background = 'var(--accent2)';
      cursor.style.mixBlendMode = 'screen';
    });
  });
}

// ============ NAVIGATION ============
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      // Close mobile menu if open
      const menu = document.getElementById('mobileMenu');
      const burger = document.getElementById('burger');
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        burger.classList.remove('active');
      }
    });
  });
}

// ============ MOBILE MENU ============
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
  });
}

// ============ PARTICLE CANVAS ============
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  const PARTICLE_COUNT = 80;
  const particles = [];

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 20;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.5 + 0.2);
      this.size = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '124,58,255' : '0,212,255';
      this.pulse = Math.random() * Math.PI * 2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.pulse += 0.02;
      this.alpha = (Math.sin(this.pulse) * 0.2 + 0.3);
      if (this.y < -20 || this.x < -20 || this.x > W + 20) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  // Connection lines
  function drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.08;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,255,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============ REVEAL ON SCROLL ============
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  const delays = {0: 0, 1: 100, 2: 200, 3: 300};

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const idx = parseInt(el.dataset.index || 0);
        const delay = delays[idx] || 0;
        setTimeout(() => {
          el.classList.add('visible');
        }, delay);
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ============ COUNTER ANIMATION ============
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  let animated = false;

  const startAnimation = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(el => {
          const target = parseInt(el.dataset.count);
          animateCounter(el, target);
        });
      }
    });
  };

  const observer = new IntersectionObserver(startAnimation, { threshold: 0.5 });
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) observer.observe(statsSection);
}

function animateCounter(el, target) {
  const duration = 2000;
  const start = performance.now();
  const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutExpo(progress);
    const value = Math.round(eased * target);
    el.textContent = value.toLocaleString('ru-RU');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('ru-RU');
  };
  requestAnimationFrame(update);
}

// ============ PRICING TABS ============
function initPricingTabs() {
  const tabs = document.querySelectorAll('.ptab');
  const groups = document.querySelectorAll('.pricing-group');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Update tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update groups
      groups.forEach(g => {
        if (g.id === `tab-${target}`) {
          g.classList.remove('hidden');
          // Re-trigger animations
          g.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 100);
          });
        } else {
          g.classList.add('hidden');
        }
      });
    });
  });
}

// ============ FORM HANDLING ============
function initForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.btn-submit');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span>Отправляем...</span>';
    btn.style.opacity = '0.7';

    // Simulate submission
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.opacity = '1';
      form.reset();
      showToast();
    }, 1500);
  });

  function showToast() {
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }
}

// ============ HERO ANIMATIONS ============
function initHeroAnimations() {
  // Stagger hero elements
  const badge = document.querySelector('.hero-badge');
  const title = document.querySelector('.hero-title');
  const desc = document.querySelector('.hero-desc');
  const actions = document.querySelector('.hero-actions');
  const stats = document.querySelector('.hero-stats');

  const elements = [badge, title, desc, actions, stats].filter(Boolean);
  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200 + i * 120);
  });

  // Parallax on hero
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const canvas = document.getElementById('particleCanvas');
    if (canvas && scrolled < window.innerHeight) {
      canvas.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  }, { passive: true });

  // Magnetic buttons
  document.querySelectorAll('.btn-primary, .btn-submit, .nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-3px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ============ CARD TILT EFFECT ============
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card, .case-card, .price-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const tiltX = y * -8;
      const tiltY = x * 8;
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;

      // Move glow
      const glow = card.querySelector('.card-glow');
      if (glow) {
        const glowX = (x + 0.5) * 100;
        const glowY = (y + 0.5) * 100;
        glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(124,58,255,0.12) 0%, transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      const glow = card.querySelector('.card-glow');
      if (glow) glow.style.background = '';
    });
  });
});

// ============ SECTION BACKGROUND SHIFT ============
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const body = document.body;

  // Subtle background color shift based on scroll
  const progress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  const hue = Math.round(progress * 30);
  body.style.setProperty('--scroll-hue', hue + 'deg');
}, { passive: true });

// ============ GLITCH EFFECT ON LOGO ============
document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelectorAll('.nav-logo');
  logos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
      logo.style.animation = 'glitch 0.3s ease';
      setTimeout(() => logo.style.animation = '', 300);
    });
  });
});

// Add glitch keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-3px, 2px); filter: hue-rotate(90deg); }
    40% { transform: translate(3px, -2px); filter: hue-rotate(-90deg); }
    60% { transform: translate(-2px, 1px); filter: hue-rotate(45deg); }
    80% { transform: translate(2px, -1px); }
    100% { transform: translate(0); filter: none; }
  }

  /* Scan line effect on hover for service cards */
  .service-card::after {
    content: '';
    position: absolute;
    top: -100%;
    left: 0; right: 0;
    height: 40%;
    background: linear-gradient(to bottom, transparent, rgba(124,58,255,0.03) 50%, transparent);
    animation: scanline 4s ease-in-out infinite;
    pointer-events: none;
    border-radius: inherit;
  }
  @keyframes scanline {
    0% { top: -40%; }
    100% { top: 120%; }
  }

  /* Typing cursor blink */
  .hero-title .gradient-text::after {
    content: '';
    display: inline-block;
    width: 3px;
    height: 0.85em;
    background: var(--accent2);
    margin-left: 4px;
    vertical-align: middle;
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* Number counter glow */
  .stat-num {
    text-shadow: 0 0 20px rgba(124,58,255,0.3);
  }

  /* Smooth gradient animation for accent areas */
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .btn-primary, .nav-cta, .btn-price.featured, .btn-submit {
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
  }

  /* Glowing border for featured card */
  .price-card.featured::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: var(--grad);
    z-index: -1;
    opacity: 0.5;
    filter: blur(8px);
  }

  /* Active nav link */
  .nav-link.active {
    color: var(--text) !important;
    background: rgba(124,58,255,0.1) !important;
  }
`;
document.head.appendChild(style);

// ============ ACTIVE NAV LINK ============
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ============ PAGE LOAD INTRO ============
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});
