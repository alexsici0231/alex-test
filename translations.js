// Multi-language translations
const translations = {
  ru: {
    // Navigation
    services: 'Услуги',
    about: 'О нас',
    cases: 'Кейсы',
    pricing: 'Цены',
    contacts: 'Контакты',
    startProject: 'Начать проект',
    
    // Hero
    heroBadge: 'Digital Marketing Agency — Кишинёв, Молдова',
    heroTitle1: 'Превращаем рекламный',
    heroTitle2: 'бюджет в прибыль',
    heroTitle3: 'для вашего бизнеса',
    heroDesc: 'Meta Ads · Google Ads · SMM · AI Video — строим системы привлечения клиентов, которые работают 24/7. Первые результаты уже в течение первых недель после запуска.',
    freeAudit: 'Получить бесплатный аудит',
    viewCases: 'Смотреть кейсы',
    
    // Stats
    clients: 'Клиентов',
    projects: 'Проектов',
    reels: 'Рилсов',
    yearsExp: 'Лет опыта',
    
    // Marquee
    marqueeItems: ['Meta Ads', 'Google Ads', 'SMM', 'CGI', 'Reels Production', 'Targeting', 'Content Creation', 'Brand Strategy'],
    
    // Services
    ourServices: 'Наши услуги',
    servicesTitle: 'Digital-маркетинг под ключ',
    servicesDesc: 'Мы не просто запускаем рекламу — мы строим предсказуемые системы привлечения клиентов с измеримым ROI и прозрачной отчётностью на каждом этапе.',
    
    metaAds: 'Meta Ads',
    metaAdsDesc: 'Таргетированная реклама в Facebook и Instagram с точным попаданием в вашу аудиторию. Снижаем стоимость лида и увеличиваем ROAS через системный подход и постоянную оптимизацию.',
    metaFeatures: ['Lookalike и Custom аудитории', 'Многоуровневые воронки продаж', 'A/B тестирование креативов', 'Оптимизация по конверсиям и ROAS'],
    
    googleAds: 'Google Ads',
    googleAdsDesc: 'Захватываем клиентов в момент, когда они уже ищут ваш продукт. Search, Display, YouTube и Performance Max — настраиваем так, чтобы каждый вложенный доллар возвращался с прибылью.',
    googleFeatures: ['Search & Display кампании', 'YouTube реклама', 'Performance Max', 'Shopping и ремаркетинг'],
    
    smm: 'SMM',
    smmDesc: 'Полное ведение социальных сетей: контент-стратегия, производство Reels, дизайн и комьюнити-менеджмент. Строим живое сообщество вокруг бренда, которое превращается в лояльных покупателей.',
    smmFeatures: ['Контент-стратегия и сценарии', 'Производство Reels и Stories', 'Дизайн и визуальный стиль', 'Комьюнити-менеджмент'],
    
    cgi: 'AI Video Content',
    cgiDesc: 'Инновационное AI-видео с интеграцией вашего продукта в реальные сцены. Создаём видео контент, который невозможно отличить от профессионально снятого.',
    cgiFeatures: ['AI-видео высокого качества', 'Интеграция продукта в сцены', 'Быстрое создание контента', 'Контент для соцсетей и рекламы'],
    
    // About
    aboutCalvin: 'О Calvin Dalli',
    aboutTitle: 'Digital-агентство, которое говорит цифрами',
    aboutText1: 'Calvin Dalli — это агентство нового формата из Кишинёва. За 6+ лет работы мы помогли более 200 бизнесам в Молдове и за рубежом выстроить стабильный поток клиентов через digital-каналы. Наша сила — в системном подходе и прозрачности на каждом шаге.',
    aboutText2: 'Мы не обещаем воздух — мы устанавливаем чёткие KPI, отслеживаем каждый показатель и регулярно отчитываемся перед клиентом. Если реклама не работает — мы её чиним, а не оправдываемся.',
    aboutTags: ['Instagram', 'Facebook', 'TikTok', 'YouTube', 'Google', 'Telegram'],
    
    auditStrategy: 'Аудит и стратегия',
    auditStrategyDesc: 'Анализируем бизнес, нишу, конкурентов и целевую аудиторию. Разрабатываем стратегию с чёткими KPI.',
    
    launchTest: 'Запуск и тестирование',
    launchTestDesc: 'Настраиваем рекламные кампании, тестируем гипотезы и быстро находим работающие связки.',
    
    optimization: 'Оптимизация и масштаб',
    optimizationDesc: 'На основе данных отключаем неэффективное и масштабируем то, что приносит результат.',
    
    avgROI: 'Средний рост ROI',
    leadCost: 'Стоимость лида',
    reachMonth: 'Охват за месяц',
    
    // Cases
    results: 'Результаты',
    realCases: 'Реальные кейсы',
    caseSubtitle: 'Не обещания — конкретные цифры наших клиентов',
    
    clothingStore: 'Интернет-магазин одежды',
    clothingDesc: 'Снизили стоимость покупки с $12 до $3.8 за 6 недель. Перестроили структуру кабинета, протестировали 40+ креативов и нашли связку, которая масштабируется.',
    
    construction: 'Строительная компания',
    constructionDesc: 'Построили воронку через Google Search + ремаркетинг. Качественные заявки на ремонт и строительство выросли в 4 раза при том же ежемесячном бюджете.',
    
    restaurant: 'Ресторанный бизнес',
    restaurantDesc: 'Выстроили контент-машину с нуля. 7500+ Reels за период работы сформировали лояльную аудиторию и стабильный поток новых гостей каждую неделю.',
    
    // Pricing
    tariffs: 'Тарифы',
    transparentPrices: 'Прозрачные цены',
    pricingDesc: 'Никаких скрытых платежей — только фиксированная стоимость и понятный результат',
    
    metaBasic: 'Meta Basic',
    metaPro: 'Meta Pro',
    metaMax: 'Meta Max',
    googleStart: 'Google Start',
    googleProTitle: 'Google Pro',
    googleMax: 'Google Max',
    smmStart: 'SMM Start',
    smmMedium: 'SMM Medium',
    smmPremium: 'SMM Premium',
    
    perMonth: '/мес',
    choosePlan: 'Выбрать план',
    popular: 'Популярный',
    
    metaBasicDesc: 'Идеально для запуска и первых продаж через соцсети',
    metaProDesc: 'Для бизнесов, готовых к системному росту и масштабированию',
    metaMaxDesc: 'Агрессивный рост и полное управление рекламой вашего бизнеса',
    
    googleStartDesc: 'Первые шаги в Google Ads с правильной настройкой с нуля',
    googleProDesc: 'Максимальная видимость в поиске — ваши клиенты находят вас первыми',
    googleMaxDesc: 'Полное доминирование в Google — все форматы и каналы под управлением',
    
    smmStartDesc: 'Instagram + Facebook',
    smmMediumDesc: 'Instagram + Facebook',
    smmPremiumDesc: 'Instagram + Facebook',
    
    aiVideo5s: 'AI Video 5s',
    aiVideo15s: 'AI Video 15s',
    aiVideo25s: 'AI Video 25s',
    aiVideo5sDesc: '1-3 кадра',
    aiVideo15sDesc: '5-7 кадров',
    aiVideo25sDesc: '7-12 кадров',
    
    budgetNote: '⚠️ Рекламный бюджет оплачивается отдельно',
    
    setupCabinet: 'Настройка рекламного кабинета',
    twoCampaigns: '2 рекламные кампании',
    audienceAnalysis: 'Анализ целевой аудитории',
    monthlyReport: 'Ежемесячный отчёт',
    abTesting: 'A/B тестирование',
    allFromBasic: 'Всё из базового плана',
    fiveCampaigns: 'До 5 кампаний одновременно',
    abTestingCreatives: 'A/B тестирование креативов',
    lookalikeAudience: 'Lookalike аудитории',
    weeklyReports: 'Еженедельные отчёты',
    searchDisplay: 'Search + Display кампании',
    performanceMax: 'Performance Max',
    remarketing: 'Ремаркетинг',
    conversionSetup: 'Настройка конверсий',
    allCampaignTypes: 'Все типы кампаний',
    youtubeShopping: 'YouTube реклама и Shopping',
    dedicatedStrateg: 'Dedicated стратег',
    priority247: 'Приоритетная поддержка 24/7',
    
    postsMonth: 'постов в месяц',
    cardDesign: 'Дизайн карточек и визуал',
    oneSocial: '1 соцсеть',
    basicAnalytics: 'Базовая аналитика',
    reelsProduction: 'Reels production',
    twentyPosts: '20 постов в месяц',
    eightReels: '8 Reels/Shorts',
    twoSocial: '2 соцсети',
    storiesDaily: 'Stories каждый день',
    communityManagement: 'Комьюнити-менеджмент',
    unlimitedContent: 'Неограниченный контент',
    twentyPlusReels: '20+ Reels в месяц',
    allSocial: 'Все соцсети',
    influencerOutreach: 'Influencer outreach',
    personalManager: 'Персональный менеджер',
    
    customSolution: 'Нужно индивидуальное решение?',
    writeUs: 'Напишите нам',
    customSolutionEnd: ' — составим персональное предложение под ваши задачи и бюджет.',
    
    // Contact
    readyGrow: 'Готовы расти? Начнём сегодня',
    contactDesc: 'Оставьте заявку — свяжемся в течение 2 часов и проведём бесплатный аудит вашего маркетинга. Расскажем, что работает у конкурентов и как это обойти.',
    phone: 'Телефон',
    telegram: 'Telegram',
    location: 'Локация',
    yourName: 'Ваше имя',
    phoneWhatsapp: 'Телефон / WhatsApp',
    neededService: 'Нужная услуга',
    tellAboutBusiness: 'Расскажите о вашем бизнесе',
    sendRequest: 'Отправить заявку',
    
    // Footer
    allRightsReserved: '© 2025 Calvin Dalli. Все права защищены.',
    footerLocation: 'Digital Marketing Agency — Кишинёв, Молдова',
    servicesFooter: 'Услуги',
    company: 'Компания',
    contactsFooter: 'Контакты',
    
    // Messages
    requestSent: 'Заявка отправлена! Свяжемся с вами скоро.',
    dataConsent: 'Нажимая кнопку, вы соглашаетесь на обработку данных',
    
    // Footer credit
    siteCredit: 'Сайт сделал Сыч Александр!',
    siteCreatorUrl: 'https://www.instagram.com/aleksandrsych/'
  },
  ro: {
    // Navigation
    services: 'Servicii',
    about: 'Despre noi',
    cases: 'Cazuri de succes',
    pricing: 'Prețuri',
    contacts: 'Contact',
    startProject: 'Începe un proiect',
    
    // Hero
    heroBadge: 'Agenție de Marketing Digital — Chișinău, Republica Moldova',
    heroTitle1: 'Transformăm bugetul de',
    heroTitle2: 'publicitate în profit',
    heroTitle3: 'pentru business-ul tău',
    heroDesc: 'Meta Ads · Google Ads · SMM · AI Video — construim sisteme de atragere a clientșilor care funcționează 24/7. Primele rezultate în primele săptămâni după lansare.',
    freeAudit: 'Obține audit gratuit',
    viewCases: 'Vizualizează cazurile',
    
    // Stats
    clients: 'Clienți',
    projects: 'Proiecte',
    reels: 'Reels',
    yearsExp: 'Ani de experiență',
    
    // Marquee
    marqueeItems: ['Meta Ads', 'Google Ads', 'SMM', 'CGI', 'Reels Production', 'Targeting', 'Content Creation', 'Brand Strategy'],
    
    // Services
    ourServices: 'Serviciile noastre',
    servicesTitle: 'Marketing digital complet',
    servicesDesc: 'Nu doar lansăm publicitate — construim sisteme previzibile de atragere a clienților cu ROI măsurabil și raportare transparentă la fiecare etapă.',
    
    metaAds: 'Meta Ads',
    metaAdsDesc: 'Publicitate țintită pe Facebook și Instagram cu țintire precisă a publicului tău. Reducem costul leizii și creștere ROAS prin abordare sistematică și optimizare continuă.',
    metaFeatures: ['Audiențe Lookalike și Custom', 'Pâlnii de vânzări pe mai multe niveluri', 'Testarea A/B a creativilor', 'Optimizare pe conversii și ROAS'],
    
    googleAds: 'Google Ads',
    googleAdsDesc: 'Capturăm clienții în momentul în care deja caută produsul tău. Search, Display, YouTube și Performance Max — configurate pentru ca fiecare dolar investit să adducă profit.',
    googleFeatures: ['Campanii Search & Display', 'Publicitate YouTube', 'Performance Max', 'Shopping și remarketing'],
    
    smm: 'SMM',
    smmDesc: 'Gestionare completă a rețelelor sociale: strategie de conținut, producție Reels, design și community management. Construim o comunitate vie în jurul brandului tău.',
    smmFeatures: ['Strategie de conținut și scenarii', 'Producție Reels și Stories', 'Design și stil vizual', 'Community management'],
    
    cgi: 'AI Video Content',
    cgiDesc: 'Videoclipuri AI inovatoare cu integrarea produsului tău în scene reale. Creăm conținut video care nu poate fi distins de cel înregistrat profesional — brandul tău în centrul atenției.',
    cgiFeatures: ['Videoclipuri AI de înaltă calitate', 'Integrarea produsului în scene', 'Creare rapidă de conținut', 'Conținut pentru rețele sociale și publicitate'],
    
    // About
    aboutCalvin: 'Despre Calvin Dalli',
    aboutTitle: 'Agenție de marketing digital care vorbește în cifre',
    aboutText1: 'Calvin Dalli este o agenție de format nou din Chișinău. În cei 6+ ani de activitate, am ajutat peste 200 de afaceri din Moldova și din străinătate să construiască un flux stabil de clienți prin canale digitale. Puterea noastră este în abordarea sistematică și transparență la fiecare pas.',
    aboutText2: 'Nu promitem aer — stabilim KPI-uri clare, monitorizăm fiecare indicator și raportez regulat clientului. Dacă publicitatea nu funcționează, o reparăm, nu ne scuzăm.',
    aboutTags: ['Instagram', 'Facebook', 'TikTok', 'YouTube', 'Google', 'Telegram'],
    
    auditStrategy: 'Audit și strategie',
    auditStrategyDesc: 'Analizez afacerea, nișa, competitorii și audiența țintă. Dezvolt strategie cu KPI-uri clare.',
    
    launchTest: 'Lansare și testare',
    launchTestDesc: 'Configurez campanii publicitare, testez ipoteze și gasesc rapid combinații care funcționează.',
    
    optimization: 'Optimizare și scalare',
    optimizationDesc: 'Pe baza datelor, dezactivez ce nu e eficient și scalizez ce aduce rezultate.',
    
    avgROI: 'Creștere medie ROI',
    leadCost: 'Cost per lead',
    reachMonth: 'Reach pe lună',
    
    // Cases
    results: 'Rezultate',
    realCases: 'Cazuri reale de succes',
    caseSubtitle: 'Nu promisiuni — cifre concrete ale clienților noștri',
    
    clothingStore: 'Magazin online de îmbrăcăminte',
    clothingDesc: 'Am redus costul achiziției de la $12 la $3.8 în 6 săptămâni. Am restructurat cabinetul, am testat 40+ creativi și am găsit combinația care se scalează.',
    
    construction: 'Companie de construcții',
    constructionDesc: 'Am construit o pâlnie prin Google Search + remarketing. Cererile de calitate pentru reparații și construcții au crescut de 4 ori cu același buget lunar.',
    
    restaurant: 'Afacere de restaurant',
    restaurantDesc: 'Am construit o mașină de conținut de la zero. 7500+ Reels au format o audiență loială și un flux stabil de noi clienți în fiecare săptămână.',
    
    // Pricing
    tariffs: 'Tarife',
    transparentPrices: 'Prețuri transparente',
    pricingDesc: 'Fără plăți ascunse — doar cost fix și rezultat clar',
    
    metaBasic: 'Meta Basic',
    metaPro: 'Meta Pro',
    metaMax: 'Meta Max',
    googleStart: 'Google Start',
    googleProTitle: 'Google Pro',
    googleMax: 'Google Max',
    smmBasic: 'SMM Basic',
    smmProTitle: 'SMM Pro',
    smmMax: 'SMM Max',
    
    perMonth: '/lună',
    choosePlan: 'Alege plan',
    popular: 'Popular',
    
    metaBasicDesc: 'Ideal pentru lansare și primele vânzări prin rețele sociale',
    metaProDesc: 'Pentru afaceri gata de creștere sistematică și scalare',
    metaMaxDesc: 'Creștere agresivă și gestionare completă a publicității afacerii tale',
    
    googleStartDesc: 'Primii pași în Google Ads cu configurare corectă de la zero',
    googleProDesc: 'Vizibilitate maximă în căutare — clienții tăi te găsesc primii',
    googleMaxDesc: 'Dominare completă în Google — toate formatele și canalele sub control',
    
    smmStartDesc: 'Instagram + Facebook',
    smmMediumDesc: 'Instagram + Facebook',
    smmPremiumDesc: 'Instagram + Facebook',
    
    aiVideo5s: 'AI Video 5s',
    aiVideo15s: 'AI Video 15s',
    aiVideo25s: 'AI Video 25s',
    aiVideo5sDesc: '1-3 cadre',
    aiVideo15sDesc: '5-7 cadre',
    aiVideo25sDesc: '7-12 cadre',
    
    budgetNote: '⚠️ Bugetul de publicitate se plătește separat',
    
    setupCabinet: 'Configurare cabinet publicitar',
    twoCampaigns: '2 campanii publicitare',
    audienceAnalysis: 'Analiza publicului țintă',
    monthlyReport: 'Raport lunar',
    abTesting: 'Testare A/B',
    allFromBasic: 'Tot din planul de bază',
    fiveCampaigns: 'Până la 5 campanii simultane',
    abTestingCreatives: 'Testare A/B a creativilor',
    lookalikeAudience: 'Audiențe Lookalike',
    weeklyReports: 'Rapoarte săptămânale',
    searchDisplay: 'Campanii Search + Display',
    performanceMax: 'Performance Max',
    remarketing: 'Remarketing',
    conversionSetup: 'Configurare conversii',
    allCampaignTypes: 'Toate tipurile de campanii',
    youtubeShopping: 'Publicitate YouTube și Shopping',
    dedicatedStrateg: 'Strateg dedicat',
    priority247: 'Suport prioritar 24/7',
    
    postsMonth: 'postări pe lună',
    cardDesign: 'Design carduri și vizual',
    oneSocial: '1 rețea socială',
    basicAnalytics: 'Analitica de bază',
    reelsProduction: 'Producție Reels',
    twentyPosts: '20 postări pe lună',
    eightReels: '8 Reels/Shorts',
    twoSocial: '2 rețele sociale',
    storiesDaily: 'Stories zilnic',
    communityManagement: 'Community management',
    unlimitedContent: 'Conținut nelimitat',
    twentyPlusReels: '20+ Reels pe lună',
    allSocial: 'Toate rețelele sociale',
    influencerOutreach: 'Colaborări cu influenceri',
    personalManager: 'Manager personal',
    
    customSolution: 'Ai nevoie de o soluție personalizată?',
    writeUs: 'Scrie-ne',
    customSolutionEnd: ' — vom crea o propunere personalizată pentru sarcinile și bugetul tău.',
    
    // Contact
    readyGrow: 'Gata să crești? Să începem azi',
    contactDesc: 'Lasă o cerere — te contactez în 2 ore și fac un audit gratuit al marketingului tău. Îți spun ce funcționează la competitori și cum să-i depășești.',
    phone: 'Telefon',
    telegram: 'Telegram',
    location: 'Locație',
    yourName: 'Numele tău',
    phoneWhatsapp: 'Telefon / WhatsApp',
    neededService: 'Serviciul necesar',
    tellAboutBusiness: 'Spune-mi despre afacerea ta',
    sendRequest: 'Trimite cererea',
    
    // Footer
    allRightsReserved: '© 2025 Calvin Dalli. Toate drepturile rezervate.',
    footerLocation: 'Agenție de Marketing Digital — Chișinău, Republica Moldova',
    servicesFooter: 'Servicii',
    company: 'Companie',
    contactsFooter: 'Contact',
    
    // Messages
    requestSent: 'Cerere trimisă! Curând te contactez.',
    dataConsent: 'Apăsând pe buton, ești de acord cu procesarea datelor',
    
    // Footer credit
    siteCredit: 'Site-ul a fost creat de Alexander Sych!',
    siteCreatorUrl: 'https://www.instagram.com/aleksandrsych/'
  }
};

// Helper function to get translation
function t(key, currentLang = localStorage.getItem('language') || 'ru') {
  return translations[currentLang]?.[key] || translations.ru[key] || key;
}
