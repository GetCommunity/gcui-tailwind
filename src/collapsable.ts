import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents }) {
    addComponents({
      '.collapsible': {
        width: '100%',
        'border-width': '1px',
        'border-style': 'solid',
        overflow: 'hidden',
        // trigger
        '.collapsible__trigger': {
          width: '100%',
          display: 'inline-flex',
          'align-items': 'center',
          'justify-content': 'space-between',
          'text-align': 'left',
          'font-weight': 'bold',
          outline: '2px solid transparent',
          'outline-offset': '2px',
          // focus
          '&:focus-visible': {
            'z-index': '10',
          },
          // trigger text
          '.collapsible__trigger-text': {},
          // trigger icon
          '.collapsible__trigger-icon': {},
        },
        // content
        '.collapsible__content': {
          width: '100%',
          overflow: 'hidden',
          'border-top-width': '1px',
          '.collapsible__content-text': {},
        },
      },
    });
  },
  {
    content: ['@getcommunity/gcui', 'src/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        keyframes: {
          'collapsable-slide-down': {
            '0%': { height: '0' },
            '100%': { height: 'var(--kb-collapsible-content-height);' },
          },
          'collapsable-slide-up': {
            '0%': { height: 'var(--kb-collapsible-content-height);' },
            '100%': { height: '0' },
          },
        },
        animation: {
          'collapsable-slide-down': 'collapsable-slide-down 300ms ease-out',
          'collapsable-slide-up': 'collapsable-slide-up 300ms ease-out',
        },
      },
    },
  }
);
