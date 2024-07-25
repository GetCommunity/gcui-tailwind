import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents, theme }) {
    addComponents({
      // button
      '.button': {
        width: 'auto',
        display: 'inline-flex',
        'align-items': 'center',
        'justify-content': 'center',
        appearance: 'none',
        outline: '2px solid transparent',
        'outline-offset': '2px',
        // disabled
        '&[data-disabled="true"]': {
          cursor: 'not-allowed',
        },
      },
      // button group + toggle
      '.toggle-group, .toggle-button': {
        transition: theme('transition'),
      },
      // button toggle item
      '.toggle-group .toggle-group__item': {},
    });
  },
  {
    content: ['./node_modules/@getcommunity/gcui/dist/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {},
    },
  }
);
