import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents, theme, config }) {
    let [, darkMode] = config('darkMode', 'selector');
    addComponents({
      '.progress': {
        width: '100%',
        'min-width': '10rem',
        display: 'flex',
        'flex-direction': 'column',
        gap: '0.25rem',
        // label
        '.progress__label-container': {
          display: 'flex',
          'justify-content': 'space-between',
          // text
          '.progress__label': {},
          '.progress__value-label': {},
        },
        // track
        '.progress__track': {
          'border-width': '1px',
          'border-style': 'solid',
          'border-color': theme('colors.gray.200'),
          'background-color': theme('colors.gray.100'),
          transition: theme('transition.width'),
          // fill
          '.progress__fill': {
            height: '100%',
            width: 'var(--kb-progress-fill-width)',
            'min-width': '0.5rem',
          },
          // dark mode
          [`${darkMode} &`]: {
            'background-color': theme('colors.gray.950'),
          },
        },
      },
    });
  },
  {
    content: ['@getcommunity/gcui', 'src/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        keyframes: {
          'progress-pulse-opacity': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.6' },
          },
        },
        annimation: {
          'progress-pulse': 'progress-pulse-opacity 1s ease-in-out infinite',
        },
      },
    },
  }
);
