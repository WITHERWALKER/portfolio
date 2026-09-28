/* Progressive-enhancement behaviours, bound by delegation on `document`.
   Delegation is what makes these survive Astro view transitions: the
   <body> is swapped on client-side navigation, but `document` and its
   listeners are not, so the handlers keep working on every page.

   The BOUND guard makes re-execution harmless: if this module is ever
   evaluated twice (a `data-astro-rerun` script, an HMR update, a second
   import) the duplicate listeners would fire in pairs and the menu would
   open and close on the same click. */

const BOUND = Symbol.for('portfolio.ui.bound');

function setMenuOpen(open: boolean) {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !menu) return;

  menu.classList.toggle('hidden', !open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');

  const openIcon = toggle.querySelector('[data-icon="menu"]');
  const closeIcon = toggle.querySelector('[data-icon="close"]');
  openIcon?.classList.toggle('hidden', open);
  closeIcon?.classList.toggle('hidden', !open);
}

function copyToClipboard(button: HTMLButtonElement, value: string) {
  navigator.clipboard.writeText(value).then(
    () => {
      const copyIcon = button.querySelector('[data-icon="copy"]');
      const checkIcon = button.querySelector('[data-icon="check"]');
      copyIcon?.classList.add('hidden');
      checkIcon?.classList.remove('hidden');
      window.setTimeout(() => {
        copyIcon?.classList.remove('hidden');
        checkIcon?.classList.add('hidden');
      }, 2000);
    },
    () => {
      /* clipboard blocked (insecure context or denied permission) */
    },
  );
}

function init() {
  if ((document as unknown as Record<symbol, boolean>)[BOUND]) return;
  (document as unknown as Record<symbol, boolean>)[BOUND] = true;

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (target.closest('[data-menu-toggle]')) {
      const menu = document.querySelector('[data-menu]');
      setMenuOpen(menu?.classList.contains('hidden') ?? true);
      return;
    }

    if (target.closest('[data-menu] a')) {
      setMenuOpen(false);
      return;
    }

    const copyButton = target.closest<HTMLButtonElement>('[data-copy]');
    const value = copyButton?.dataset.copyValue;
    if (copyButton && value) copyToClipboard(copyButton, value);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
}

init();
