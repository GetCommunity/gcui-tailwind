import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents, theme }) {
    addComponents({
      // trigger
      '.dialog__trigger': {
        display: 'inline-flex',
        'justify-content': 'space-between',
        // button
        '.dialog__trigger--button': {},
        // link
        '.dialog__trigger--link': {},
        // nav
        '.dialog__trigger--navlink': {
          'text-decoration': 'none',
          color: theme('colors.gray.900'),
          'font-weight': theme('fontWeight.medium'),
          'border-radius': theme('borderRadius.full'),
          padding: `${theme('padding.2')} ${theme('padding.3')}`,
          '&:hover': {
            color: 'inherit',
          },
        },
      },
      // overlay
      '.dialog__overlay': {
        display: 'fixed',
        width: '100%',
        height: '100%',
        'background-color': theme('colors.dialog-overlay'),
        inset: theme('inset-0'),
        animation: theme('animation.dialog-overlay-hide'),
        '&[data-expanded]': {
          animation: theme('animation.dialog-overlay-show'),
        },
      },
      // dialog
      '.dialog__positioner': {
        position: 'fixed',
        inset: theme('inset-0'),
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        // content
        '.dialog__content': {
          'max-width': 'min( calc( 100vw - 16px ), 500px )',
          padding: theme('padding.4'),
          'box-shadow': theme('boxShadow.sm'),
          'background-color': theme('colors.white'),
          'border-width': '1px',
          'border-style': 'solid',
          'border-color': theme('colors.gray.200'),
          'border-radius': theme('borderRadius.md'),
          animation: theme('animation.dialog-content-hide'),
          '&[data-expanded]': {
            animation: theme('animation.dialog-content-show'),
          },
          // header
          '.dialog__header': {
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'space-between',
            'margin-bottom': theme('margin.3'),
            // title
            '.dialog__title': {
              'font-size': theme('fontSize.lg'),
            },
            // closable
            '.dialog__close-button': {
              padding: theme('padding.2'),
              'margin-left': theme('margin.1'),
              color: theme('colors.gray.700'),
            },
          },
          // description
          '.dialog__description': {},
          // body
          '.dialog__body': {
            position: 'relative',
            'margin-top': theme('margin.3'),
            'margin-bottom': theme('margin.3'),
          },
          // footer
          '.dialog__footer': {
            display: 'flex',
            'align-items': 'baseline',
            'justify-content': 'space-between',
          },
        },
      },
    });
  },
  {
    content: ['@getcommunity/gcui', 'src/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        colors: {
          'dialog-overlay': 'rgb(0 0 0 / 0.2)',
        },
        keyframes: {
          'keyframes-dialog-overlay-show': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          'keyframes-dialog-overlay-hide': {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
          'keyframes-dialog-content-show': {
            '0%': { opacity: '0', transform: 'scale(0.96)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          'keyframes-dialog-content-hide': {
            '0%': { opacity: '1', transform: 'scale(1)' },
            '100%': { opacity: '0', transform: 'scale(0.96)' },
          },
        },
        animation: {
          'dialog-overlay-show': 'keyframes-dialog-overlay-show 250ms ease',
          'dialog-overlay-hide':
            'keyframes-dialog-overlay-hide 250ms ease 100ms forwards',
          'dialog-content-show': 'keyframes-dialog-content-show 300ms ease-out',
          'dialog-content-hide': 'keyframes-dialog-content-hide 300ms ease-in forwards',
        },
      },
    },
  }
);
