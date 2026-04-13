'use strict';

const TELEGRAM_BOT_TOKEN = '8733946115:AAHU7-2Hw60yD32pWJj2ThApsciWe3ufWVs';
const TELEGRAM_CHAT_ID = '-5169580118';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initParticles();
  initReveal();
  initCounters();
  initPricingTabs();
  initMobileMenu();
  initForm();
  initModal();
  initHeroAnimations();
});

// ============ MODAL ============
function initModal() {
  // Create modal HTML
  const modal = document.createElement('div');
  modal.id = 'planModal';
  modal.innerHTML = `
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal-box">
        <button class="modal-close" id="modalClose">✕</button>
        <div class="modal-badge" id="modalBadge">SMM Pro</div>
        <h3 class="modal-title">Оставьте заявку</h3>
        <p class="modal-desc">Мы свяжемся с вами в течение 2 часов и обсудим все детали</p>
        <form id="modalForm">
          <div class="modal-field">
            <input type="text" id="modalName" placeholder="Ваше имя" required />
          </div>
          <div class="modal-field">
            <input type="tel" id="modalPhone" placeholder="Телефон / WhatsApp" required />
          </div>
          <input type="hidden" id="modalPlan" value="" />
          <button type="submit" class="modal-submit">
            <span>Отправить заявку</span>
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </form>
        <p class="modal-privacy">Нажимая кнопку, вы соглашаетесь на обработку данных</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Add modal styles
  const modalStyle = document.createElement('style');
  modalStyle.textContent = `
    #planModal {
      display: none;
      position: fixed; inset: 0;
      z-index: 10000;
    }
    #planModal.open { display: block; }
    .modal-overlay {
      position: fixed; inset: 0;
      background: rgba(5,5,8,0.85);
      backdrop-filter: blur(12px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: modalFadeIn 0.3s ease;
    }
    @keyframes modalFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .modal-box {
      background: #0f0f1a;
      border: 1px solid rgba(124,58,255,0.3);
      border-radius: 24px;
      padding: 40px;
      width: 100%;
      max-width: 460px;
      position: relative;
      animation: modalSlideUp 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
      box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,255,0.1);
    }
    @keyframes modalSlideUp {
      from { opacity: 0; transform: translateY(30px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .modal-close {
      position: absolute; top: 16px; right: 16px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.5);
      width: 36px; height: 36px;
      border-radius: 50%;
      font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s;
    }
    .modal-close:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .modal-badge {
      display: inline-block;
      background: linear-gradient(135deg, rgba(124,58,255,0.2), rgba(0,212,255,0.15));
      border: 1px solid rgba(124,58,255,0.4);
      color: #00d4ff;
      font-size: 0.78rem; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase;
      padding: 6px 16px; border-radius: 100px;
      margin-bottom: 20px;
    }
    .modal-title {
      font-family: 'Syne', sans-serif;
      font-size: 1.6rem; font-weight: 800;
      margin-bottom: 8px; color: #f0f0f5;
    }
    .modal-desc {
      font-size: 0.9rem;
      color: rgba(240,240,245,0.5);
      margin-bottom: 28px;
      line-height: 1.6;
    }
    .modal-field {
      margin-bottom: 16px;
    }
    .modal-field input {
      width: 100%;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      color: #f0f0f5;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.95rem;
      padding: 16px 18px;
      border-radius: 12px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .modal-field input::placeholder { color: rgba(240,240,245,0.3); }
    .modal-field input:focus {
      border-color: rgba(124,58,255,0.6);
      box-shadow: 0 0 0 3px rgba(124,58,255,0.1);
    }
    .modal-submit {
      width: 100%;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      background: linear-gradient(135deg, #7c3aff, #00d4ff);
      border: none; color: #fff;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1rem; font-weight: 600;
      padding: 16px; border-radius: 12px;
      cursor: pointer;
      margin-top: 8px;
      transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
    }
    .modal-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(124,58,255,0.4); }
    .modal-submit:disabled { opacity: 0.7; }
    .modal-submit svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
    .modal-privacy {
      font-size: 0.75rem;
      color: rgba(240,240,245,0.25);
      text-align: center;
      margin-top: 14px;
    }
  `;
  document.head.appendChild(modalStyle);

  // Open modal on plan button click
  document.querySelectorAll('.btn-price').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Get plan name from card
      const card = btn.closest('.price-card');
      const planName = card ? card.querySelector('h3')?.textContent : 'Тариф';

      document.getElementById('modalBadge').textContent = '📦 ' + planName;
      document.getElementById('modalPlan').value = planName;
      document.getElementById('planModal').classList.add('open');
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        document.getElementById('modalName').focus();
      }, 300);
    });
  });

  // Close modal
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    document.getElementById('planModal').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('modalForm').reset();
  }

  // Modal form submit
  document.getElementById('modalForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = e.target.querySelector('.modal-submit');
    const name = document.getElementById('modalName').value.trim();
    const phone = document.getElementById('modalPhone').value.trim();
    const plan = document.getElementById('modalPlan').value;

    if (!name || !phone) return;

    btn.innerHTML = '<span>Отправляем...</span>';
    btn.disabled = true;

    try {
      await sendToTelegram({ name, phone, plan, source: 'Кнопка тарифа' });

      btn.innerHTML = '<span>✓ Заявка отправлена!</span>';

      setTimeout(() => {
        closeModal();
        showToast('✅ Заявка отправлена! Свяжемся в течение 2 часов.');
        btn.innerHTML = '<span>Отправить заявку</span><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        btn.disabled = false;
      }, 1500);

    } catch (err) {
      btn.innerHTML = '<span>Ошибка — попробуйте снова</span>';
      btn.disabled = false;
      setTimeout(() => {
        btn.innerHTML = '<span>Отправить заявку</span><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
      }, 2000);
    }
  });
}

// ============ SEND TO TELEGRAM ============
async function sendToTelegram(data) {
  const now = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Chisinau' });

  let text = '';

  if (data.source === 'Кнопка тарифа') {
    text = `
💎 *Выбран тариф с сайта!*

📦 *План:* ${data.plan}
👤 *Имя:* ${data.name}
📞 *Телефон:* ${data.phone}
🕐 *Время:* ${now}
🌐 *Источник:* Кнопка тарифа на calvindalli.md
    `.trim();
  } else {
    const serviceNames = {
      meta: 'Meta Ads', google: 'Google Ads',
      smm: 'SMM', cgi: 'CGI', complex: 'Комплексный маркетинг'
    };
    const service = serviceNames[data.service] || data.service || 'Не указано';
    text = `
🔥 *Новая заявка с сайта!*

👤 *Имя:* ${data.name}
📞 *Телефон:* ${data.phone}
🎯 *Услуга:* ${service}
💬 *Сообщение:* ${data.message || 'Не указано'}
🕐 *Время:* ${now}
🌐 *Источник:* Форма на calvindalli.md
    `.trim();
  }

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'Markdown'
    })
  });

  if (!response.ok) throw new Error('Telegram API error');
  return await response.json();
}

// ============ TOAST ============
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.style.borderColor = isError ? 'rgba(255,77,109,0.4)' : 'rgba(124,58,255,0.3)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}

// ============ FORM HANDLING ============
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('.btn-submit');
    const originalHTML = btn.innerHTML;

    const data = {
      name: form.querySelector('#name').value.trim(),
      phone: form.querySelector('#phone').value.trim(),
      service: form.querySelector('#service').value,
      message: form.querySelector('#message').value.trim()
    };

    if (!data.name || !data.phone) {
      showToast('❌ Заполните имя и телефон!', true);
      return;
    }

    btn.innerHTML = '<span>Отправляем...</span>';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    try {
      await sendToTelegram(data);
      btn.innerHTML = '<span>✓ Отправлено!</span>';
      btn.style.opacity = '1';
      form.reset();
      showToast('✅ Заявка отправлена! Свяжемся в течение 2 часов.');
      setTimeout(() => { btn.innerHTML = originalHTML; btn.disabled = false; }, 3000);
    } catch (err) {
      btn.innerHTML = originalHTML;
      btn.style.opacity = '1';
      btn.disabled = false;
      showToast('❌ Ошибка отправки. Напишите нам напрямую в Telegram!', true);
    }
  });
}

// ============ CUSTOM CURSOR ============
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px';
  });
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + 'px'; follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
  document.querySelectorAll('a, button, .service-card, .case-card, .price-card').forEach(el => {
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
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      const menu = document.getElementById('mobileMenu');
      const burger = document.getElementById('burger');
      if (menu?.classList.contains('open')) {
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

// ============ PARTICLES ============
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
  const particles = [];
  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x = Math.random() * W; this.y = init ? Math.random() * H : H + 20;
      this.vx = (Math.random() - 0.5) * 0.3; this.vy = -(Math.random() * 0.5 + 0.2);
      this.size = Math.random() * 2 + 0.5; this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '124,58,255' : '0,212,255';
      this.pulse = Math.random() * Math.PI * 2;
    }
    update() {
      this.x += this.vx; this.y += this.vy; this.pulse += 0.02;
      this.alpha = Math.sin(this.pulse) * 0.2 + 0.3;
      if (this.y < -20 || this.x < -20 || this.x > W + 20) this.reset();
    }
    draw() {
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`; ctx.fill();
    }
  }
  for (let i = 0; i < 80; i++) particles.push(new Particle());
  function animate() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,255,${(1-dist/120)*0.08})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============ REVEAL ============
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = parseInt(entry.target.dataset.index || 0);
        setTimeout(() => entry.target.classList.add('visible'), [0,100,200,300][idx] || 0);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============ COUNTERS ============
function initCounters() {
  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        document.querySelectorAll('.stat-num').forEach(el => {
          const target = parseInt(el.dataset.count);
          const start = performance.now();
          const update = (now) => {
            const p = Math.min((now - start) / 2000, 1);
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            el.textContent = Math.round(eased * target).toLocaleString('ru-RU');
            if (p < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
        });
      }
    });
  }, { threshold: 0.5 });
  const stats = document.querySelector('.hero-stats');
  if (stats) observer.observe(stats);
}

// ============ PRICING TABS ============
function initPricingTabs() {
  const tabs = document.querySelectorAll('.ptab');
  const groups = document.querySelectorAll('.pricing-group');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      groups.forEach(g => {
        if (g.id === `tab-${tab.dataset.tab}`) {
          g.classList.remove('hidden');
          g.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 100);
          });
        } else g.classList.add('hidden');
      });
    });
  });
}

// ============ HERO ANIMATIONS ============
function initHeroAnimations() {
  ['.hero-badge','.hero-title','.hero-desc','.hero-actions','.hero-stats'].forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.opacity = '0'; el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)';
      el.style.opacity = '1'; el.style.transform = 'translateY(0)';
    }, 200 + i * 120);
  });
  window.addEventListener('scroll', () => {
    const canvas = document.getElementById('particleCanvas');
    if (canvas && window.scrollY < window.innerHeight) canvas.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }, { passive: true });
  document.querySelectorAll('.btn-primary, .btn-submit, .nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.15}px,${(e.clientY-r.top-r.height/2)*0.15}px) translateY(-3px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

// ============ CARD TILT ============
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-card, .case-card, .price-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-0.5, y = (e.clientY-r.top)/r.height-0.5;
      card.style.transform = `perspective(1000px) rotateX(${y*-8}deg) rotateY(${x*8}deg) translateY(-6px)`;
      const glow = card.querySelector('.card-glow');
      if (glow) glow.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(124,58,255,0.12) 0%, transparent 60%)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      const glow = card.querySelector('.card-glow');
      if (glow) glow.style.background = '';
    });
  });
});

// ============ EXTRA STYLES ============
const style = document.createElement('style');
style.textContent = `
  @keyframes glitch {
    0%{transform:translate(0)} 20%{transform:translate(-3px,2px);filter:hue-rotate(90deg)}
    40%{transform:translate(3px,-2px);filter:hue-rotate(-90deg)} 60%{transform:translate(-2px,1px);filter:hue-rotate(45deg)}
    80%{transform:translate(2px,-1px)} 100%{transform:translate(0);filter:none}
  }
  .service-card::after{content:'';position:absolute;top:-100%;left:0;right:0;height:40%;background:linear-gradient(to bottom,transparent,rgba(124,58,255,0.03) 50%,transparent);animation:scanline 4s ease-in-out infinite;pointer-events:none;border-radius:inherit}
  @keyframes scanline{0%{top:-40%}100%{top:120%}}
  .hero-title .gradient-text::after{content:'';display:inline-block;width:3px;height:0.85em;background:var(--accent2);margin-left:4px;vertical-align:middle;animation:blink 1s step-end infinite}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
  .stat-num{text-shadow:0 0 20px rgba(124,58,255,0.3)}
  @keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .btn-primary,.nav-cta,.btn-price.featured,.btn-submit{background-size:200% 200%;animation:gradientShift 4s ease infinite}
  .price-card.featured::before{content:'';position:absolute;inset:-1px;border-radius:inherit;background:var(--grad);z-index:-1;opacity:0.5;filter:blur(8px)}
  .nav-link.active{color:var(--text)!important;background:rgba(124,58,255,0.1)!important}
`;
document.head.appendChild(style);

// ============ ACTIVE NAV ============
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

// ============ LOGO GLITCH ============
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-logo').forEach(logo => {
    logo.addEventListener('mouseenter', () => {
      logo.style.animation = 'glitch 0.3s ease';
      setTimeout(() => logo.style.animation = '', 300);
    });
  });
});

// ============ PAGE LOAD ============
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => { document.body.style.opacity = '1'; });
});
