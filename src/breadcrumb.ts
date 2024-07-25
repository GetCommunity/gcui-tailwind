import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents }) {
    addComponents({
      '.breadcrumbs': {
        // list
        '.breadcrumbs__list': {
          display: 'inline-flex',
          'align-items': 'center',
          // item
          '.breadcrumbs__item': {
            display: 'inline-flex',
            'align-items': 'center',
            // link
            '.breadcrumbs__link': {},
            // separator
            '.breadcrumbs__separator': {
              display: 'inline-flex',
              width: '1.25rem',
              height: '1.25rem',
              'align-items': 'center',
              'justify-content': 'center',
              margin: '0rem 0.25rem',
            },
          },
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
