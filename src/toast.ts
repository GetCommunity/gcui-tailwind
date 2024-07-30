import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents, theme, config }) {
    let [, darkMode] = config('darkMode', 'selector');
    addComponents({
      // portal
      '.toast__list': {
        position: 'fixed',
        width: '100%',
        'max-width': 'min( calc( 100vw - 16px ), 400px )',
        display: 'flex',
        'flex-direction': 'column',
        gap: '0.5rem',
        'z-index': '9999',
        margin: '0',
        padding: '1rem',
        'list-style-type': 'none',
        outline: '2px solid transparent',
        'outline-offset': '2px',
      },
      // toast
      '.toast': {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'space-between',
        gap: '0.5rem',
        'border-width': '1px',
        'border-style': 'solid',
        '&[data-openned]': {
          animation: theme('animation.toast-slide-in'),
        },
        '&[data-closed]': {
          animation: theme('animation.toast-hide'),
        },
        '&[data-swipe="move"]': {
          transform: 'translateX(var(--kb-toast-swipe-move-x))',
        },
        '&[data-swipe="end"]': {
          animation: theme('animation.toast-swipe-out'),
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateX(0)',
          tansition: theme('transition.transform'),
        },
        // content
        '.toast__content': {
          display: 'flex',
          width: '100%',
          'align-items': 'flex-start',
          // title
          '.toast__title': {
            'font-weight': 'bold',
            color: theme('colors.gray.900'),
            [`${darkMode} &`]: {
              color: theme('colors.gray.50'),
            },
          },
          // description
          '.toast__description': {
            'font-size': '0.875rem',
            'line-height': '1.25rem',
            color: theme('colors.gray.800'),
            [`${darkMode} &`]: {
              color: theme('colors.gray.100'),
            },
          },
          // closable
          '.toast__close-button': {
            'margin-left': 'auto',
            width: '1rem',
            height: '1rem',
            'flex-shrink': '0',
            color: theme('colors.gray.700'),
          },
        },
        // progress
        '.toast__progress-track': {
          width: '100%',
          'min-width': '2px',
          'border-width': '1px',
          'border-style': 'solid',
          'border-color': theme('colors.gray.200'),
          'background-color': theme('colors.gray.100'),
          [`${darkMode} &`]: {
            'background-color': theme('colors.gray.950'),
          },
          // fill
          '.toast__progress-fill': {
            transition: theme('transition.width'),
            width: 'var(--kb-toast-progress-fill-width)',
            height: '100%',
            '&[data-progress="loading"]': {
              animation: theme('animation.toast-progress-pulse'),
            },
            // data-[progress=loading]:
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
          'toast-progress-pulse-opacity': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.6' },
          },
          'toast-overlay-hide': {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
          'toast-slide-in': {
            '0%': { transform: 'translateX(calc(100% + 16px))' },
            '100%': { transform: 'translateX(0)' },
          },
          'toast-swipe-out': {
            '0%': { transform: 'translateX(var(--kb-toast-swipe-end-x))' },
            '100%': { transform: 'translateX(calc(100% + 16px))' },
          },
        },
        annimation: {
          'toast-progress-pulse':
            'toast-progress-pulse-opacity 1s ease-in-out infinite',
          'toast-hide': 'toat-overlay-hide 100ms ease-in',
          'toast-slide-in': 'toast-slide-in 150ms cubic-bezier(0.16,1,0.3,1)',
          'toast-swipe-out': 'toast-swipe-out 100ms ease-out',
        },
      },
    },
  }
);
