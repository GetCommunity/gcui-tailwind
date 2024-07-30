import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents }) {
    addComponents({
      '.link': {},
    });
  },
  {
    content: ['@getcommunity/gcui', 'src/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {},
    },
  }
);
