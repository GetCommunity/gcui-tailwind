import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents }) {
    addComponents({
      '.popover__content': {
        'z-index': '50',
        'border-width': '1px',
        'border-style': 'solid',
        'max-width': 'min( calc( 100vw - 16px ), 380px )',
        'transform-origin': 'var(--kb-popover-content-transform-origin)',
        // header
        '.popover__header': {
          display: 'flex',
          'align-items': 'baseline',
          'justify-content': 'space-between',
          'margin-bottom': '0.5rem',
          // title
          '.popover__title': {},
          // closable
          '.popover__close-button': {},
        },
        // content
        '.popover__description': {},
      },
    });
  },
  {
    content: ['@getcommunity/gcui', 'src/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        keyframes: {
          'popover-overlay-content-show': {
            '0%': { opacity: '0', transform: 'scale(0.96)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          'popover-overlay-content-hide': {
            '0%': { opacity: '1', transform: 'scale(1)' },
            '100%': { opacity: '0', transform: 'scale(0.96)' },
          },
        },
        annimation: {
          'popover-content-show': 'popover-overlay-content-show 250ms ease-out',
          'popover-content-hide': 'popover-overlay-content-hide 250ms ease-in forwards',
        },
      },
    },
  }
);
