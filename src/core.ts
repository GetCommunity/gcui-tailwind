import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addVariant }) {
    // direct children variant
    addVariant('children', '& > *');
    addVariant('children-hover', '& > *:hover');
  },
  {
    content: ['./node_modules/@getcommunity/gcui/dist/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        width: {
          '1/10': '10%',
          '3/20': '15%',
          '3/10': '30%',
          '7/10': '70%',
          '9/10': '90%',
        },
        zIndex: {
          9999: '9999',
        },
        transitionProperty: {
          width: 'width',
          height: 'height',
          spacing: 'margin, padding',
          outline: 'outline',
        },
      },
    },
  }
);
