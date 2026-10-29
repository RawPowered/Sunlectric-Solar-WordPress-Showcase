"use strict";
const header = document.querySelector('.sunlectric-header');
if (header) {
  let scrollUpdateQueued = false;
  const updateHeader = () => {
    header.classList.toggle('is-compact', window.scrollY > 64);
    scrollUpdateQueued = false;
  };
  updateHeader();
  window.addEventListener('scroll', () => {
    if (!scrollUpdateQueued) {
      scrollUpdateQueued = true;
      requestAnimationFrame(updateHeader);
    }
  }, { passive: true });
}
document.querySelectorAll('.sunlectric-nav__mobile').forEach(menu => {
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  menu.addEventListener('keydown', event => { if (event.key === 'Escape') { menu.open = false; menu.querySelector('summary')?.focus(); } });
});

const contactPreviewMap = document.querySelector('#contact-preview-map');
if (contactPreviewMap) {
  const footerMapEnabled = new URLSearchParams(window.location.search).get('footer-map') === 'on';
  const footer = document.querySelector('#preview-footer');
  if (footerMapEnabled && footer) {
    document.querySelector('#footer-map-target')?.append(contactPreviewMap);
    contactPreviewMap.classList.replace('sunlectric-map--contact', 'sunlectric-map--footer');
    footer.classList.add('sunlectric-footer--with-map');
  }
  document.querySelectorAll('[data-map-choice]').forEach(link => {
    if (link.dataset.mapChoice === (footerMapEnabled ? 'on' : 'off')) link.setAttribute('aria-current', 'page');
  });
}
