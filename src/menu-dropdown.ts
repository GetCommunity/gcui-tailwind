import plugin from 'tailwindcss/plugin';

export default plugin(
  function ({ addComponents, theme }) {
    addComponents({
      // menu-dropdown: icon
      '.dropdown-menu__trigger-icon': {
        width: theme('width.5'),
        height: theme('height.5'),
        'flex-shrink': '0',
        'flex-grow': '0',
        'flex-basis': theme('basis.5'),
        transition: theme('transition.transform'),
        '&[data-expanded]': {
          transform: 'rotate(180deg)',
        },
      },
      // menu-dropdown + menubar: trigger
      '.dropdown-menu__trigger, .menubar__trigger': {
        width: 'auto',
        height: theme('height.10'),
        display: 'inline-flex',
        'align-items': 'center',
        justifyContent: 'center',
        gap: theme('gap.2'),
        'line-height': '0',
        appearance: 'none',
        outline: '2px solid transparent',
        'outline-offset': '2px',
        transition: theme('transition.colors'),
      },
      // menubar
      '.menubar__root': {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
      },
      // menu-dropdown + menubar: content
      '.dropdown-menu__content, .menubar__content, .dropdown-menu__sub-content, .menubar__sub-content':
        {
          'transform-origin': 'var(--kb-menu-content-transform-origin)',
          padding: theme('padding.2'),
          'border-width': '1px',
          'border-style': 'solid',
          'border-color': theme('colors.gray.200'),
          'background-color': theme('colors.white'),
          'box-shadow': theme('boxShadow.md'),
          outline: '2px solid transparent',
          'outline-offset': '2px',
          animation: theme('animation.animate-menu-dropdown-hide'),
          '&[data-expanded]': {
            animation: theme('animation.animate-menu-dropdown-show'),
          },
        },
      // menu-dropdown + menubar: arrow
      '.dropdown-menu__arrow, .menubar__arrow': {},
      // menu-dropdown + menubar: items
      '.dropdown-menu__item, .menubar__item, .dropdown-menu__checkbox-item, .menubar__checkbox-item, .dropdown-menu__sub-trigger, .menubar__sub-trigger, .dropdown-menu__radio-item, .menubar__radio-item':
        {
          position: 'relative',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'space-between',
          'user-select': 'none',
          'line-height': '1',
          outline: '2px solid transparent',
          'outline-offset': '2px',
          '&:hover': {
            cursor: 'pointer',
          },
          '&[data-highlighted]': {
            outline: '2px solid transparent',
            'outline-offset': '2px',
          },
          '&[data-disabled]': {
            opacity: '0.5',
            '&:hover': {
              cursor: 'not-allowed',
            },
          },
        },
      '.dropdown-menu__item-right-slot, .menubar__item-right-slot': {
        'padding-left': theme('padding.4'),
        'font-size': theme('fontSize.sm'),
        width: theme('width.4'),
        height: theme('width.4'),
      },
      '.dropdown-menu__item-indicator, .menubar__item-indicator': {
        position: 'absolute',
        display: 'inline-flex',
        'align-items': 'center',
        'align-content': 'center',
      },
      '.dropdown-menu__separator, .menubar__separator': {
        'border-top-width': '1px',
        'border-top-style': 'solid',
        'border-top-color': theme('colors.gray.300'),
        'margin-top': '6px',
        'min-height': '1px',
      },
      '.dropdown-menu__radio-item-indicator, .menubar__radio-item-indicator': {
        position: 'absolute',
        display: 'inline-flex',
        'align-items': 'center',
        'align-content': 'center',
        'font-size': theme('fontSize.4xl'),
        'margin-top': `calc(-1 * ${theme('margin.1')})`,
      },
      // menu-dropdown + menubar: group
      '.dropdown-menu__group-label, .menubar__group-label': {
        'line-height': theme('lineHeight.3'),
        color: theme('colors.gray.500'),
      },
    });
  },
  {
    content: ['./node_modules/@getcommunity/gcui/dist/**/*.{html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        keyframes: {
          'keyframes-menu-dropdown-show': {
            '0%': { opacity: '0', transform: 'scale(0.96)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          'keyframes-menu-dropdown-hide': {
            '0%': { opacity: '1', transform: 'scale(1)' },
            '100%': { opacity: '0', transform: 'scale(0.96)' },
          },
        },
        annimation: {
          'animate-menu-dropdown-show': 'keyframes-menu-dropdown-show 250ms ease-out',
          'animate-menu-dropdown-hide':
            'keyframes-menu-dropdown-hide 250ms ease-in forwards',
        },
      },
    },
  }
);
