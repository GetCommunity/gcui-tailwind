import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents }) {
    addComponents({
      '.avatar': {
        // image
        '.avatar__img, .avatar__img-fallback': {
          width: 'auto',
          'object-fit': 'cover',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'aspect-ratio': '1 / 1',
          'border-radius': '9999px',
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
