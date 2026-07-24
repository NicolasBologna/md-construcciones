try {
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'on-surface-variant': '#42484a',
          'primary-container': '#1a2e35',
          'technical-gray': '#666666',
          'border-subtle': '#D1D5DB',
          'on-secondary': '#ffffff',
          'tertiary-fixed-dim': '#cbc6b7',
          'on-primary-container': '#81969e',
          'surface-variant': '#e4e2e2',
          'on-primary-fixed': '#091e25',
          'architectural-parchment': '#E8E3D3',
          'secondary-container': '#fe9d7c',
          'on-secondary-fixed': '#390c00',
          'on-error-container': '#93000a',
          'outline-variant': '#c2c7ca',
          'on-tertiary-fixed': '#1d1c12',
          'on-tertiary-container': '#969284',
          'surface-bright': '#fbf9f8',
          'inverse-on-surface': '#f2f0f0',
          'surface-container-low': '#f5f3f3',
          'primary-fixed-dim': '#b4cad3',
          'on-error': '#ffffff',
          'surface-tint': '#4d6169',
          'inverse-surface': '#303031',
          'surface-container-high': '#e9e8e7',
          background: '#fbf9f8',
          primary: '#041920',
          'tertiary-container': '#2d2b21',
          'on-tertiary-fixed-variant': '#49473b',
          'secondary-fixed': '#ffdbcf',
          'on-primary-fixed-variant': '#364a51',
          outline: '#73787a',
          'surface-container-lowest': '#ffffff',
          'on-primary': '#ffffff',
          'secondary-fixed-dim': '#ffb59c',
          'on-background': '#1b1c1c',
          'on-secondary-container': '#773319',
          secondary: '#94492d',
          'surface-container': '#efeded',
          'surface-container-highest': '#e4e2e2',
          'slate-deep': '#1A2E35',
          'surface-dim': '#dbdad9',
          surface: '#fbf9f8',
          'on-tertiary': '#ffffff',
          'tertiary-fixed': '#e7e2d2',
          error: '#ba1a1a',
          'primary-fixed': '#d0e6ef',
          'on-surface': '#1b1c1c',
          'error-container': '#ffdad6',
          'blueprint-white': '#FFFFFF',
          'on-secondary-fixed-variant': '#763218',
          'inverse-primary': '#b4cad3',
          'terracotta-technical': '#9B4E32',
          tertiary: '#18170d'
        },
        borderRadius: {
          DEFAULT: '0.25rem',
          lg: '0.5rem',
          xl: '0.75rem',
          full: '9999px'
        },
        spacing: {
          'margin-mobile': '20px',
          gutter: '24px',
          unit: '8px',
          'section-padding': '120px',
          'container-max': '1280px',
          'margin-desktop': '80px'
        },
        fontFamily: {
          'label-technical': ['Inter'],
          'headline-display': ['Montserrat'],
          'headline-lg-mobile': ['Montserrat'],
          'headline-md': ['Montserrat'],
          'headline-lg': ['Montserrat'],
          'label-caps': ['Inter'],
          'body-lg': ['Inter'],
          'body-md': ['Inter']
        },
        fontSize: {
          'label-technical': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
          'headline-display': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
          'headline-lg-mobile': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
          'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
          'headline-lg': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
          'label-caps': ['12px', { lineHeight: '1.0', letterSpacing: '0.1em', fontWeight: '600' }],
          'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
          'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }]
        }
      }
    }
  };
} catch (_error) {
}

/* =====================================================
   UI/UX interactions — less generic, more tactile
   ===================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Hero architectural watermark
  const hero = document.querySelector('main > section');
  if (hero) {
    const watermark = document.createElement('div');
    watermark.className = 'hero-watermark';
    watermark.setAttribute('aria-hidden', 'true');
    watermark.textContent = 'MD';
    hero.insertBefore(watermark, hero.firstChild);
  }

  // 2. Render projects gallery from obras/proyectos.js
  const galleryGrid = document.querySelector('#obras .grid');
  const projects = window.mdProjects || [];
  if (galleryGrid && projects.length) {
    var galleryHtml = '';
    projects.forEach(function (project) {
      project.media.forEach(function (media, i) {
        var wide = (i % 3 === 0);
        var spanClass = wide ? 'md:col-span-8' : 'md:col-span-4';
        var aspectClass = wide ? 'aspect-[16/9]' : 'aspect-[4/5]';
        var src = encodeURI(media.src);
        var mediaEl;
        if (media.type === 'video') {
          mediaEl = '<video class="gallery-image w-full h-full object-cover" src="' + src + '" controls playsinline preload="metadata"></video>';
        } else {
          mediaEl = '<img class="gallery-image w-full h-full object-cover" alt="' + (media.alt || project.title) + '" src="' + src + '">';
        }
        var info;
        if (wide) {
          info = '<div class="gallery-info flex justify-between items-center"><span class="title-md">' + project.title + '</span><span class="label-tech copy-muted">' + project.city + ', Santa Fe</span></div>';
        } else {
          info = '<div class="gallery-info"><span class="label-tech text-terracotta-technical block mb-1">' + (project.type || 'Obra').toUpperCase() + '</span><span class="title-md block">' + (media.alt || project.title) + '</span></div>';
        }
        galleryHtml += '<div class="group gallery-card ' + spanClass + ' reveal"><div class="' + aspectClass + ' overflow-hidden relative gallery-media">' + mediaEl + '</div>' + info + '</div>';
      });
    });
    galleryGrid.innerHTML = galleryHtml;
  }

  // 3. Mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  let menu = document.getElementById('mobile-menu');
  let overlay = document.getElementById('mobile-menu-overlay');

  if (menuToggle && !menu) {
    overlay = document.createElement('div');
    overlay.id = 'mobile-menu-overlay';
    overlay.className = 'mobile-menu-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    menu = document.createElement('nav');
    menu.id = 'mobile-menu';
    menu.className = 'mobile-menu';
    menu.setAttribute('aria-label', 'Menú móvil');
    menu.innerHTML =
      '<button id="mobile-menu-close" class="absolute top-6 right-6 text-white flex items-center justify-center" aria-label="Cerrar menú">' +
        '<span class="material-symbols-outlined">close</span>' +
      '</button>' +
      '<a href="#servicios" class="mobile-link">Servicios</a>' +
      '<a href="#obras" class="mobile-link">Proyectos</a>' +
      '<a href="#estudio" class="mobile-link">Perfil</a>' +
      '<a href="#contacto" class="mobile-link">Contacto</a>' +
      '<a href="https://wa.me/5493413663408" target="_blank" class="mobile-link">Consultar Obra</a>';
    document.body.appendChild(menu);

    document.getElementById('mobile-menu-close').addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    overlay.addEventListener('click', closeMenu);
  }

  function openMenu () {
    document.body.classList.add('menu-open');
    if (menu) menu.classList.add('open');
    if (overlay) overlay.classList.add('open');
  }

  function closeMenu () {
    document.body.classList.remove('menu-open');
    if (menu) menu.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);

  // 4. Scroll reveal
  const revealTargets = document.querySelectorAll(
    'section:not(:first-of-type), .service-card, .gallery-card, .faq-item, #metodologia .grid > div.relative.z-10'
  );

  revealTargets.forEach(function (el, i) {
    el.classList.add('reveal');
    // Avoid overwriting already-staggered HTML classes
    const base = (i % 4) + 1;
    if (!/\bstagger-/.test(el.className)) {
      el.classList.add('stagger-' + base);
    }
  });

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  revealTargets.forEach(function (el) { revealObserver.observe(el); });

  // 5. Service card index numbers
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(function (card, i) {
    const num = document.createElement('span');
    num.className = 'service-number';
    num.textContent = String(i + 1).padStart(2, '0');
    num.setAttribute('aria-hidden', 'true');
    card.appendChild(num);
  });

  // 6. Gallery "Ver más" overlay
  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach(function (card) {
    const media = card.querySelector('div[class*="aspect-"]');
    if (media) {
      media.classList.add('gallery-media');
      const view = document.createElement('a');
      view.href = '#contacto';
      view.className = 'gallery-view';
      view.innerHTML = '<span class="material-symbols-outlined">open_in_full</span><span>Ver más</span>';
      media.appendChild(view);
    }
  });

  // 7. Process connecting-line fill
  const processGrid = document.querySelector('#metodologia .grid');
  if (processGrid) {
    const fill = document.createElement('div');
    fill.className = 'process-line-fill';
    processGrid.appendChild(fill);

    const lineObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          fill.classList.add('visible');
          lineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    lineObserver.observe(processGrid);
  }
});