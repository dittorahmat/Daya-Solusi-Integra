/**
 * Navigasi Terpusat Aplikasi (Single Source of Truth)
 * Menangani routing internal SPA, history pushState, dan sinkronisasi tab aktif.
 */
export function navigateTo(path: string, options?: { replace?: boolean; activeTab?: string }) {
  if (options?.replace) {
    window.history.replaceState({}, '', path);
  } else {
    window.history.pushState({}, '', path);
  }
  window.dispatchEvent(new PopStateEvent('popstate'));
}
