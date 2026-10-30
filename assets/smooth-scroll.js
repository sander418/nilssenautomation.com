/* Self-hosted, optional enhancement. The document works without JavaScript. */
(() => {
  if (typeof window.Lenis !== 'function') return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lenis;

  function updateScrolling() {
    if (reducedMotion.matches) {
      if (lenis) lenis.destroy();
      lenis = undefined;
      return;
    }
    if (lenis) return;
    lenis = new window.Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.12,
      anchors: false,
      respectReducedMotion: true,
    });
  }

  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
        event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href^="#"]');
    if (!link || !lenis) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;

    // Keyboard focus or scrollIntoView can move the browser before Lenis catches up.
    lenis.scrollTo(window.scrollY, { immediate: true });

    // Preserve native skip-link focus and never make keyboard users wait.
    if (link.classList.contains('skip-link')) {
      lenis.scrollTo(target, { immediate: true });
      return;
    }
    if (!link.hasAttribute('data-scroll-link')) return;

    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    lenis.scrollTo(target, {
      duration: 0.7,
      lerp: 0,
      onComplete: () => target.focus({ preventScroll: true }),
    });
  });

  reducedMotion.addEventListener('change', updateScrolling);
  updateScrolling();
})();
