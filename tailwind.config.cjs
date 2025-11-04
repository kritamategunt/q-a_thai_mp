/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ci: {
          primary: {
            primary: '#074E9F',
            'upper-text': '#FFFFFF',
            'primary-container': '#DEEDFE',
            'on-primary-container': '#0A6EE1',
          },
          secondary: {
            secondary: '#22AB68',
            'secondary-container': '#E3F7ED',
            'on-secondary-container': '#43BC80',
          },
        },
        neutral: {
          base: {
            white: '#FFFFFF',
            grey: '#F6F7F9',
            'base-light': '#D0D5DD',
            'base-500': '#667085',
            'base-700': '#344054',
            black: '#101828',
            border: '#E5E7EB',
          },
          surface: {
            'primary-surface': '#F5FAFE',
            'secondary-surface': '#F7FCFA',
            'neutral-surface': '#F6F7F9',
            'white-surface': '#FFFFFF',
            'grey-surface': '#E4E7EC',
          },
          outline: {
            primary: '#DEEDFE',
            grey: '#E4E7EC',
            'darker-grey': '#D7D7D7',
          },
        },
        text: {
          descriptive: {
            normal: '#344054',
            light: '#667085',
            lighter: '#98A2B3',
          },
          link: {
            normal: '#0086C9',
            neutral: '#344054',
            primary: '#074E9F',
            secondary: '#D7D7D7',
          },
        },
        function: {
          success: {
            success: '#07A721',
            'on-success': '#FFFFFF',
            'success-container': '#E4F0E5',
            'on-success-cont': '#06951E',
            'success-surface': '#F2F8F2',
          },
          info: {
            info: '#0086C9',
            'on-info': '#FFFFFF',
            'new-info': '#ECF2F8',
            'on-info-cont': '#0078B4',
            'info-surface': '#F2F6FA',
          },
          error: {
            error: '#D92D20',
            'on-error': '#FFFFFF',
            'error-container': '#F8E5E5',
            'on-error-cont': '#C2281D',
            'error-surface': '#FBF2F2',
          },
          warning: {
            warning: '#F8BD26',
            'on-warning': '#FFFFFF',
            'warning-container': '#FEF3E5',
            'on-warning-cont': '#DEA922',
            'warning-surface': '#FEF9F2',
          },
          new: {
            new: '#6554C0',
            'on-new': '#FFFFFF',
            'new-container': '#E9E7F4',
            'on-new-cont': '#5A4BAC',
            'new-surface': '#F4F3F9',
          },
          default: {
            default: '#757575',
            'on-default': '#FFFFFF',
            'default-container': '#EAEAEA',
            'on-default-cont': '#696969',
            'default-surface': '#F5F5F5',
          },
          spare: {
            success: {
              success: '#00B2AA',
              'on-success': '#FFFFFF',
              'success-container': '#E4F2F0',
              'on-success-cont': '#009F98',
              'success-surface': '#F2F8F8',
            },
            error: {
              error: '#E5347C',
              'on-error': '#FFFFFF',
              'error-container': '#FAE5EB',
              'on-error-cont': '#CD2F6F',
              'error-surface': '#FDF2F5',
            },
            warning: {
              warning: '#F79009',
              'on-warning': '#FFFFFF',
              'warning-container': '#FDEDE4',
              'on-warning-cont': '#DD8108',
              'warning-surface': '#FEF6F2',
            },
            new: {
              new: '#BF5AF2',
              'on-new': '#FFFFFF',
              'new-container': '#F4E8FC',
              'on-new-cont': '#AB50D8',
              'new-surface': '#F9F4FE',
            },
          },
        },
        state: {
          primary: {
            default: '#074E9F',
            'on-default': '#FFFFFF',
            active: '#042F5F',
            'on-active': '#FFFFFF',
            hover: '#0A6EE1',
            'on-hover': '#FFFFFF',
          },
          secondary: {
            default: '#22AB67',
            'on-default': '#FFFFFF',
            active: '#35674E',
            'on-active': '#FFFFFF',
            hover: '#6ACD9C',
            'on-hover': '#FFFFFF',
          },
          success: {
            default: '#07A721',
            'on-default': '#FFFFFF',
            active: '#05811A',
            'on-active': '#FFFFFF',
            hover: '#72BC76',
            'on-hover': '#FFFFFF',
          },
          error: {
            default: '#D92D20',
            'on-default': '#FFFFFF',
            active: '#A82319',
            'on-active': '#FFFFFF',
            hover: '#E17976',
            'on-hover': '#FFFFFF',
          },
          info: {
            default: '#0086C9',
            'on-default': '#FFFFFF',
            active: '#00689C',
            'on-active': '#FFFFFF',
            hover: '#72A5D5',
            'on-hover': '#FFFFFF',
          },
          disabled: {
            default: '#F2F4F7',
            'on-default': '#98A2B3',
            'outline-default': '#E4E7EC',
          },
        },
        disable: {
          light: {
            default: '#F2F4F7',
            'on-default': '#98A2B3',
            outline: '#E4E7EC',
          },
          dark: {
            default: '#E4E7EC',
            'on-default': '#98A2B3',
            outline: '#D0D5DD',
          },
        },
        main: {
          primary: { surface: '#BDDBFC' },
          secondary: { surface: '#C8EEDB' },
          warningSpare: { surface: '#FDEDE4' },
        },
      },
      width: {
        'fill-available': ['-webkit-fill-available', '-moz-available'],
      },
      gridTemplateColumns: {
        'auto-fill-150': 'repeat(auto-fill, minmax(150px, 1fr))',
        'auto-fill-120': 'repeat(auto-fill, minmax(120px, 1fr))',
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
      },
      screens: {
        '2xs': '360px',
        xs: '420px',
        sm: '640px', // tablet
        md: '768px',
        lg: '1024px', // laptop
        xl: '1280px', // desktop
        '2xl': '1536px', // full desktop
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'spin-reverse': 'spin-reverse 1s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animated'),
  ],
};
