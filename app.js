'use strict';

const TELEGRAM_BOT_TOKEN = '8733946115:AAHU7-2Hw60yD32pWJj2ThApsciWe3ufWVs';
const TELEGRAM_CHAT_ID = '-5169580118';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
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

// ============ LANGUAGE SWITCHER ============
function initLanguage() {
  // Get saved language or default to 'ru'
  const savedLang = localStorage.getItem('language') || 'ru';
  setLanguage(savedLang);

  // Setup language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      localStorage.setItem('language', lang);
    });
  });
}

function setLanguage(lang) {
  if (!translations || !translations[lang]) return;

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'ro' ? 'ro' : 'ru';

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = t(key, lang);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else if (el.tagName === 'SELECT') {
      // Handle select options
      if (key === 'neededService') {
        el.innerHTML = `
          <option value="" disabled selected></option>
          <option value="meta">${t('metaAds', lang)}</option>
          <option value="google">${t('googleAds', lang)}</option>
          <option value="smm">${t('smm', lang)}</option>
          <option value="cgi">${t('cgi', lang)}</option>
          <option value="complex">${t('customSolution', lang)}</option>
        `;
      }
    } else {
      el.textContent = text;
    }
  });

  // Update page title
  document.title = `${t('servicesTitle', lang)} | Calvin Dalli — ${lang === 'ro' ? 'Agenție de Marketing Digital' : 'Digital Marketing Agency'}`;

  // Update specific sections that need complex updates
  updateServiceCards(lang);
  updateAboutSection(lang);
  updateCasesSection(lang);
  updatePricingCards(lang);
  updateFooter(lang);
  updateModals(lang);
}

function updateServiceCards(lang) {
  const services = [
    { index: 0, title: 'metaAds', desc: 'metaAdsDesc', features: 'metaFeatures' },
    { index: 1, title: 'googleAds', desc: 'googleAdsDesc', features: 'googleFeatures' },
    { index: 2, title: 'smm', desc: 'smmServiceDesc', features: 'smmFeatures' },
    { index: 3, title: 'cgi', desc: 'aiVideoServiceDesc', features: 'cgiFeatures' }
  ];

  services.forEach(service => {
    const card = document.querySelector(`.service-card[data-index="${service.index}"]`);
    if (card) {
      card.querySelector('.card-title').textContent = t(service.title, lang);
      card.querySelector('.card-desc').textContent = t(service.desc, lang);
      const features = translations[lang][service.features];
      const featuresList = card.querySelector('.card-features');
      if (featuresList && features) {
        featuresList.innerHTML = features.map(f => `<li>${f}</li>`).join('');
      }
    }
  });
}

function updateAboutSection(lang) {
  const about = document.querySelector('.about');
  if (!about) return;

  about.querySelector('.section-tag').textContent = t('aboutCalvin', lang);
  
  // Update title - simplify by just setting first part
  const titleElement = about.querySelector('.section-title');
  if (titleElement) {
    titleElement.innerHTML = '<span>' + t('aboutTitle', lang) + '</span><br /><span class="gradient-text"></span>';
  }

  const process = document.querySelectorAll('.process-step');
  if (process[0]) process[0].querySelector('h4').textContent = t('auditStrategy', lang);
  if (process[0]) process[0].querySelector('p').textContent = t('auditStrategyDesc', lang);
  if (process[1]) process[1].querySelector('h4').textContent = t('launchTest', lang);
  if (process[1]) process[1].querySelector('p').textContent = t('launchTestDesc', lang);
  if (process[2]) process[2].querySelector('h4').textContent = t('optimization', lang);
  if (process[2]) process[2].querySelector('p').textContent = t('optimizationDesc', lang);
}

function updateCasesSection(lang) {
  const cases = document.querySelectorAll('.case-card');
  const caseData = [
    { title: 'clothingStore', desc: 'clothingDesc' },
    { title: 'construction', desc: 'constructionDesc' },
    { title: 'restaurant', desc: 'restaurantDesc' }
  ];

  cases.forEach((card, i) => {
    if (caseData[i]) {
      card.querySelector('h3').textContent = t(caseData[i].title, lang);
      card.querySelector('p').textContent = t(caseData[i].desc, lang);
    }
  });
}

function updatePricingCards(lang) {
  // Complete feature text mapping for all cards
  const featureMaps = {
    'Meta Basic': {
      'Настройка рекламного кабинета': 'setupCabinet',
      '2 рекламные кампании': 'twoCampaigns',
      'Анализ целевой аудитории': 'audienceAnalysis',
      'Ежемесячный отчёт': 'monthlyReport',
      'A/B тестирование': 'abTesting',
    },
    'Meta Pro': {
      'Всё из базового плана': 'allFromBasic',
      'До 5 кампаний одновременно': 'fiveCampaigns',
      'A/B тестирование креативов': 'abTestingCreatives',
      'Lookalike аудитории': 'lookalikeAudience',
      'Еженедельные отчёты': 'weeklyReports',
    },
    'Meta Max': {
      'Всё из Pro плана': 'allFromBasic',
      'Неограниченные кампании': 'allCampaignTypes',
      'Персональный менеджер': 'dedicatedStrateg',
      'Ежедневная оптимизация': 'priority247',
      'Стратегическое консультирование': 'priority247',
    },
    'Google Start': {
      'Настройка Search кампаний': 'searchDisplay',
      'Подбор ключевых слов': 'searchDisplay',
      'Базовая аналитика и отчёты': 'basicAnalytics',
      'Ежемесячный отчёт': 'monthlyReport',
      'Performance Max': 'performanceMax',
    },
    'Google Pro': {
      'Search + Display кампании': 'searchDisplay',
      'Performance Max': 'performanceMax',
      'Ремаркетинг': 'remarketing',
      'Настройка конверсий': 'conversionSetup',
      'Еженедельные отчёты': 'weeklyReports',
    },
    'Google Max': {
      'Все типы кампаний': 'allCampaignTypes',
      'YouTube реклама': 'youtubeShopping',
      'Shopping кампании': 'youtubeShopping',
      'Dedicated стратег': 'dedicatedStrateg',
      'Приоритетная поддержка 24/7': 'priority247',
    },
    'SMM Start': {
      '10 постов в месяц': 'smmPosts10',
      '4 видео на смартфон': 'smmVideosSmartphone4',
      '6 фото-постов': 'smmPhotoPosts6',
      '3 съёмки в месяц': 'smmShooting3',
      'Контент-планирование': 'smmContentPlanning',
      'Репост всех постов в сторис': 'smmRepostStories',
      'Работа с блогерами': 'smmBloggerWork',
      'Копирайтинг': 'smmCopywriting',
      'Аналитика и отчетность': 'smmAnalytics1',
      'Создание визуального стиля': 'smmVisualStyle',
    },
    'SMM Medium': {
      '14 постов в месяц': 'smmPosts14',
      '1 видео на проф. камеру': 'smmVideoProfessional',
      '4 видео на смартфон': 'smmVideosSmartphone',
      '9 фото-постов': 'smmPhotoPosts9',
      'Insta Stories (35 уникальных)': 'smmStories35',
      'Контент-планирование': 'smmContentPlanning',
      'Репост всех постов в сторис': 'smmRepostStories',
      'Работа с блогерами': 'smmBloggerWork',
      'Копирайтинг': 'smmCopywriting',
      'Аналитика и отчетность 2 соц сетей': 'smmAnalytics2',
      'Создание визуального стиля': 'smmVisualStyle',
    },
    'SMM Premium': {
      '17 постов в месяц': 'smmPosts17',
      '1 видео премиум (CGI/дрон)': 'smmVideoProfessional',
      '4 видео на смартфон': 'smmVideosSmartphone',
      '12 фото-постов': 'smmPhotoPosts12',
      'Insta Stories (40 уникальных)': 'smmStories40',
      '5 съёмок в месяц': 'smmShooting5',
      'Контент-планирование': 'smmContentPlanning',
      'Работа с блогерами': 'smmBloggerWork',
      'Копирайтинг': 'smmCopywriting',
      'Аналитика и отчетность 2 соц сетей': 'smmAnalytics2',
      'Создание визуального стиля': 'smmVisualStyle',
    },
    'AI Video 5s': {
      'AI-видео высокого качества': 'aiVideoHighQuality',
      'До создания видео — фото-кадры на утверждение': 'aiVideoFrames',
      'Включено до 3 правок': 'aiVideoEdits',
      'Каждая дополнительная правка — 17 €': 'aiVideoAdditional',
      'Срок: 1-3 рабочих дня': 'aiVideoTurnaround',
    },
    'AI Video 15s': {
      'AI-видео высокого качества': 'aiVideoHighQuality',
      'До создания видео — фото-кадры на утверждение': 'aiVideoFrames',
      'Включено до 3 правок': 'aiVideoEdits',
      'Каждая дополнительная правка — 17 €': 'aiVideoAdditional',
      'Голос-за (RO/RU) +50 €': 'aiVideoVoiceover',
      'Срок: 1-3 рабочих дня': 'aiVideoTurnaround',
    },
    'AI Video 25s': {
      'AI-видео высокого качества': 'aiVideoHighQuality',
      'До создания видео — фото-кадры на утверждение': 'aiVideoFrames',
      'Включено до 3 правок': 'aiVideoEdits',
      'Каждая дополнительная правка — 17 €': 'aiVideoAdditional',
      'Голос-за (RO/RU) +50 €': 'aiVideoVoiceover',
      'Срок: 1-3 рабочих дня': 'aiVideoTurnaround',
    }
  };

  // Update all pricing cards
  document.querySelectorAll('.price-card').forEach(card => {
    const h3 = card.querySelector('h3');
    if (!h3) return;

    const cardText = h3.textContent.trim();
    
    // Map titles
    const titleMap = {
      'Meta Basic': 'metaBasic',
      'Meta Pro': 'metaPro',
      'Meta Max': 'metaMax',
      'Google Start': 'googleStart',
      'Google Pro': 'googleProTitle',
      'Google Max': 'googleMax',
      'SMM Start': 'smmStart',
      'SMM Medium': 'smmMedium',
      'SMM Premium': 'smmPremium',
      'AI Video 5s': 'aiVideo5s',
      'AI Video 15s': 'aiVideo15s',
      'AI Video 25s': 'aiVideo25s'
    };

    const descMap = {
      'Meta Basic': 'metaBasicDesc',
      'Meta Pro': 'metaProDesc',
      'Meta Max': 'metaMaxDesc',
      'Google Start': 'googleStartDesc',
      'Google Pro': 'googleProDesc',
      'Google Max': 'googleMaxDesc',
      'SMM Start': 'smmStartDesc',
      'SMM Medium': 'smmMediumDesc',
      'SMM Premium': 'smmPremiumDesc',
      'AI Video 5s': 'aiVideo5sDesc',
      'AI Video 15s': 'aiVideo15sDesc',
      'AI Video 25s': 'aiVideo25sDesc'
    };

    // Update title
    const titleKey = titleMap[cardText];
    if (titleKey) h3.textContent = t(titleKey, lang);

    // Update description
    const desc = card.querySelector('.price-desc');
    const descKey = descMap[cardText];
    if (descKey && desc) desc.textContent = t(descKey, lang);

    // Update button
    const btn = card.querySelector('.btn-price');
    if (btn) btn.textContent = t('choosePlan', lang);

    // Update features
    const featureMap = featureMaps[cardText];
    if (featureMap) {
      const features = card.querySelectorAll('.price-features li');
      features.forEach(li => {
        const svgElement = li.querySelector('svg');
        const textContent = li.textContent.trim();
        let originalText = textContent;
        
        // Remove checkmark/x symbols
        originalText = originalText.replace(/✓|✕/g, '').trim();
        
        // Find matching translation key
        let translationKey = null;
        for (const [origText, key] of Object.entries(featureMap)) {
          if (textContent.includes(origText) || originalText.includes(origText)) {
            translationKey = key;
            break;
          }
        }
        
        if (translationKey) {
          const newText = t(translationKey, lang);
          const isDisabled = li.classList.contains('disabled');
          
          // Rebuild li content
          li.innerHTML = '';
          if (svgElement) {
            li.appendChild(svgElement.cloneNode(true));
          }
          li.appendChild(document.createTextNode(newText));
          
          // Restore disabled state
          if (isDisabled) {
            li.classList.add('disabled');
          }
        }
      });
    }
  });

  // Update period text
  document.querySelectorAll('.period').forEach(el => {
    el.textContent = t('perMonth', lang);
  });
}

function updateFooter(lang) {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const footerBottomItems = footer.querySelectorAll('.footer-bottom p');
  if (footerBottomItems[0]) footerBottomItems[0].textContent = t('allRightsReserved', lang);
  if (footerBottomItems[1]) footerBottomItems[1].textContent = t('footerLocation', lang);

  const footerCols = footer.querySelectorAll('.footer-col');
  if (footerCols[0]) footerCols[0].querySelector('h4').textContent = t('servicesFooter', lang);
  if (footerCols[1]) footerCols[1].querySelector('h4').textContent = t('company', lang);
  if (footerCols[2]) footerCols[2].querySelector('h4').textContent = t('contactsFooter', lang);
}

function updateModals(lang) {
  const modal = document.getElementById('planModal');
  if (modal) {
    const title = modal.querySelector('.modal-title');
    const desc = modal.querySelector('.modal-desc');
    const nameInput = modal.querySelector('#modalName');
    const phoneInput = modal.querySelector('#modalPhone');
    const btn = modal.querySelector('.modal-submit span');
    const privacy = modal.querySelector('.modal-privacy');

    if (title) title.textContent = t('sendRequest', lang);
    if (desc) desc.textContent = t('contactDesc', lang);
    if (nameInput) nameInput.placeholder = t('yourName', lang);
    if (phoneInput) phoneInput.placeholder = t('phoneWhatsapp', lang);
    if (btn) btn.textContent = t('sendRequest', lang);
    if (privacy) privacy.textContent = t('dataConsent', lang);
  }

  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = t('requestSent', lang);
  }
}

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
