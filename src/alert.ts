import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents }) {
    addComponents({
      '.alert': {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'space-between',
        padding: '0.5rem 0.75rem',
        'border-width': '1px',
        'border-style': 'solid',
        'border-radius': '0.25rem',
        'margin-top': '0.25rem',
        'margin-bottom': '0.25rem',
        // focus
        '&:focus': {
          'outline-width': '2px',
          'outline-style': 'solid',
          'outline-color': 'transparent',
          'outline-offset': '2px',
        },
        // closable
        '.alert__close': {
          'margin-left': '0.5rem',
        },
      },
    });
  },
  {
    content: ['./node_modules/@getcommunity/gcui/dist/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {},
    },
  }
);
