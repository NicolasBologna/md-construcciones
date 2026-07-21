const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14,
    rootMargin: '0px 0px -30px 0px'
  }
);

function observeRevealElements(scope = document) {
  const revealItems = scope.querySelectorAll('.reveal');

  revealItems.forEach((item) => {
    if (item.dataset.revealObserved === 'true') {
      return;
    }

    item.dataset.revealObserved = 'true';
    revealObserver.observe(item);
  });
}

function buildProjectCard(project) {
  const mediaMarkup = project.media
    .map((media) => {
      if (media.type === 'video') {
        return `
          <figure class="project-item">
            <video controls preload="metadata" muted playsinline>
              <source src="${media.src}" type="video/mp4" />
            </video>
          </figure>
        `;
      }

      return `
        <figure class="project-item">
          <img src="${media.src}" alt="${media.alt}" loading="lazy" />
        </figure>
      `;
    })
    .join('');

  const fallbackMarkup = `
    <p class="project-empty">
      Proyecto listo para cargar contenido. Agrega fotos o videos en su carpeta y actualiza obras/proyectos.js.
    </p>
  `;

  return `
    <article class="project-card reveal" data-city="${project.city}">
      <div class="project-head">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-meta">
          <span class="project-tag">${project.city}</span>
          <span class="project-tag">${project.type}</span>
        </div>
      </div>
      ${project.media.length > 0 ? `<div class="project-media">${mediaMarkup}</div>` : fallbackMarkup}
    </article>
  `;
}

function renderPortfolio(projects) {
  const portfolioRoot = document.getElementById('obras-grid');
  const filtersRoot = document.getElementById('obras-filtros');

  if (!portfolioRoot || !filtersRoot) {
    return;
  }

  if (!Array.isArray(projects) || projects.length === 0) {
    portfolioRoot.innerHTML = '<p class="portfolio-note">Aun no hay proyectos publicados.</p>';
    return;
  }

  const cities = [...new Set(projects.map((project) => project.city))];
  const filterNames = ['Todos', ...cities];

  filtersRoot.innerHTML = filterNames
    .map(
      (name, index) =>
        `<button class="chip ${index === 0 ? 'active' : ''}" type="button" data-filter="${name}">${name}</button>`
    )
    .join('');

  portfolioRoot.innerHTML = projects.map((project) => buildProjectCard(project)).join('');

  filtersRoot.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');

    if (!button) {
      return;
    }

    const filterValue = button.dataset.filter;
    const cards = portfolioRoot.querySelectorAll('.project-card');
    const chips = filtersRoot.querySelectorAll('.chip');

    chips.forEach((chip) => chip.classList.remove('active'));
    button.classList.add('active');

    cards.forEach((card) => {
      const isVisible = filterValue === 'Todos' || card.dataset.city === filterValue;
      card.style.display = isVisible ? '' : 'none';
    });
  });

  observeRevealElements(portfolioRoot);
}

observeRevealElements();
renderPortfolio(window.mdProjects || []);
