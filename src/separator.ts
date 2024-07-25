import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents, theme, config }) {
    let [, darkMode] = config('darkMode', 'selector');
    addComponents({
      '.separator': {
        display: 'inline-flex',
        'border-style': 'none',
        'background-color': theme('colors.gray.800'),
        // dark mode
        [`${darkMode} &`]: {
          'background-color': theme('colors.gray.300'),
        },
        // orientation: horizontal
        '&[data-orientation="horizontal"]': {
          'min-width': '1%',
          'min-height': '2px',
        },
        // orientation: horizontal positions
        '&[data-orientation="horizontal"] .separator--align-start': {
          'margin-right': 'auto',
          'margin-left': '0',
        },
        '&[data-orientation="horizontal"] .separator--align-center': {
          'margin-right': 'auto',
          'margin-left': 'auto',
        },
        '&[data-orientation="horizontal"] .separator--align-end': {
          'margin-right': '0',
          'margin-left': 'auto',
        },
        // orientation: vertical
        '&[data-orientation="vertical"]': {
          'min-width': '2px',
          'min-height': '1%',
        },
        // orientation: vertical positions
        '&[data-orientation="vertical"] .separator--align-start': {
          'margin-top': '0',
          'margin-bottom': 'auto',
        },
        '&[data-orientation="vertical"] .separator--align-center': {
          'margin-top': 'auto',
          'margin-bottom': 'auto',
        },
        '&[data-orientation="vertical"] .separator--align-end': {
          'margin-top': 'auto',
          'margin-bottom': '0',
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
