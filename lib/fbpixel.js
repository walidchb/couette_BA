// /lib/fbpixel.js
export const fbPixel = {
  init: (pixelId) => {
    if (!window.fbq) return;
    window.fbq('init', pixelId);
  },
  pageview: () => {
    if (!window.fbq) return;
    window.fbq('track', 'PageView');
  },
  event: (name, options = {}) => {
    if (!window.fbq) return;
    window.fbq('track', name, options);
  },
};
