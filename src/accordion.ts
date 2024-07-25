import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents }) {
    addComponents({
      '.accordion': {
        width: '100%',
        'border-width': '1px',
        'border-style': 'solid',
        // item
        '.accordion__item': {
          // header
          '.accordion__item-header': {
            display: 'flex',
            // trigger
            '.accordion__item-trigger': {
              width: '100%',
              display: 'inline-flex',
              'align-items': 'center',
              'justify-content': 'space-between',
              gap: '2rem',
              'border-bottom-width': '1px',
              'border-bottom-style': 'solid',
              'text-align': 'left',
              'font-weight': 'bold',
              outline: '2px solid transparent',
              'outline-offset': '2px',
              // focus
              '&:focus-visible': {
                'z-index': '10',
              },
              // trigger content
              '.accordion__item-trigger-content': {},
              // trigger icon
              '.accordion__item-trigger-icon': {},
            },
          },
          // content
          '.accordion__item-content': {
            overflow: 'hidden',
            '.accordion__item-content-text': {},
          },
        },
      },
    });
  },
  {
    content: ['./node_modules/@getcommunity/gcui/dist/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        keyframes: {
          'accordion-slide-down': {
            '0%': { height: '0' },
            '100%': { height: 'var(--kb-accordion-content-height);' },
          },
          'accordion-slide-up': {
            '0%': { height: 'var(--kb-accordion-content-height);' },
            '100%': { height: '0' },
          },
        },
        animation: {
          'accordion-slide-down':
            'accordion-slide-down 300ms cubic-bezier(0.87,0,0.13,1)',
          'accordion-slide-up': 'accordion-slide-up 300ms cubic-bezier(0.87,0,0.13,1)',
        },
      },
    },
  }
);
