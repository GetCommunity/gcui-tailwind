import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents }) {
    addComponents({
      '.pagination__root': {
        display: 'inline-flex',
        'align-items': 'center',
        'justify-content': 'space-between',
        gap: '0.5rem',
        // page items
        '& > ul': {
          display: 'inline-flex',
          'align-items': 'center',
          'justify-content': 'space-between',
          gap: '0.5rem',
        },
        // item / ellipsis
        '.pagination__item, .pagination__ellipsis': {
          width: 'auto',
          display: 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          appearance: 'none',
          outline: '2px solid transparent',
          'outline-offset': '2px',
        },
        // item
        '.pagination__item': {
          cursor: 'pointer',
        },
        // ellipsis
        '.pagination__ellipsis': {
          cursor: 'default',
        },
      },
    });
  },
  {
    content: ['@getcommunity/gcui', 'src/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {},
    },
  }
);
