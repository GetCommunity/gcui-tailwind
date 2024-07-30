import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents, theme, config }) {
    let [, darkMode] = config('darkMode', 'selector');
    addComponents({
      '.tabs': {
        width: '100%',
        // orientation: vertical
        '&[data-orientation="vertical"]': {
          display: 'flex',
        },
      },
      // list
      '.tabs__list': {
        position: 'relative',
        display: 'flex',
        // orientation: horizontal
        '&[data-orientation="horizontal"]': {
          'align-items': 'center',
          'border-bottom': '1px solid transparent',
        },
        // orientation: vertical
        '&[data-orientation="vertical"]': {
          'flex-direction': 'column',
          'align-items': 'stretch',
          'border-right': '1px solid transparent',
        },
      },
      // trigger
      '.tabs__trigger': {
        display: 'inline-block',
        outline: '2px solid transparent',
        'outline-offset': '2px',
        // disabled
        '&[data-disabled="true"]': {
          cursor: 'not-allowed',
          'background-color': 'transparent',
          opacity: '0.5',
        },
      },
      // indicator
      '.tabs__indicator': {
        position: 'absolute',
        transition: theme('transition.all'),
        // orientation: horizontal
        '&[data-orientation="horizontal"]': {
          bottom: '-1px',
          height: '2px',
        },
        // orientation: vertical
        '&[data-orientation="vertical"]': {
          right: '-1px',
          width: '2px',
        },
      },
      // content
      '.tabs__content': {},
    });
  },
  {
    content: ['@getcommunity/gcui', 'src/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {},
    },
  }
);
