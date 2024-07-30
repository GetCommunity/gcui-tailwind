import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents, theme }) {
    addComponents({});
  },
  {
    content: ['@getcommunity/gcui', 'src/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        keyframes: {
          'keyframes-select-content-show': {
            '0%': { opacity: '0', transform: 'translateY(-8px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'keyframes-select-content-hide': {
            '0%': { opacity: '1', transform: 'translateY(0)' },
            '100%': { opacity: '0', transform: 'translateY(-8px)' },
          },
        },
        animation: {
          'form-select-content-show': 'keyframes-select-content-show 250ms ease-out',
          'form-select-content-hide':
            'keyframes-select-content-hide 250ms ease-in forwards',
        },
      },
    },
  }
);
