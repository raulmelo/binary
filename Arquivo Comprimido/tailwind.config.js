module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: 'var(--content-size)'
    },
    spacing: {
      px: '1px',
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      88: '88px',
      100: '100px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      error: 'var(--cl-error)',
      link: '#6e72ff',
      gray: {
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)'
      },
      primary: {
        200: 'var(--cl-primary-200)',
        300: 'var(--cl-primary-300)',
        400: 'var(--cl-primary-400)',
        500: 'var(--cl-primary-500)',
        600: 'var(--cl-primary-600)',
        700: 'var(--cl-primary-700)',
        800: 'var(--cl-primary-800)',
        900: 'var(--cl-primary-900)'
      },
      secondary: {
        50: 'var(--cl-second-50)',
        100: 'var(--cl-second-100)',
        200: 'var(--cl-second-200)',
        300: 'var(--cl-second-300)',
        400: 'var(--cl-second-400)',
        500: 'var(--cl-second-500)',
        600: 'var(--cl-second-600)',
        700: 'var(--cl-second-700)',
        800: 'var(--cl-second-800)',
        900: 'var(--cl-second-900)'
      }
    },
    backgroundColor: (theme) => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradiente-secondary': 'var(--cl-gradient-secondary)',
      'gradient-to-t': 'linear-gradient(to top, var(--gradient-color-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--gradient-color-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--gradient-color-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--gradient-color-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--gradient-color-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--gradient-color-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--gradient-color-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--gradient-color-stops))'
    },
    backgroundOpacity: (theme) => theme('opacity'),
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor')
    }),
    borderOpacity: (theme) => theme('opacity'),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: 'var(--box-radius)',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px'
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 11px 16px 0 rgba(29, 73, 96, 0.33);',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      none: 'none'
    },
    container: {},
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexShrink: {
      0: '0',
      default: '1'
    },
    fontFamily: {
      gotham: ['var(--font-primary)'],
      garli: ['var(--font-secondary)']
    },
    fontSize: {
      mini: '12px',
      xs: '14px',
      sm: '16px',
      md: '24px'
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    maxHeight: {
      full: '100%',
      '50': '50%',
      screen: '100vh'
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      ...breakpoints(theme('screens'))
    }),
    minHeight: {
      0: '0',
      full: '100%',
      screen: '100vh'
    },
    minWidth: {
      0: '0',
      '50': '50%',
      full: '100%'
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12'
    },
    padding: (theme) => theme('spacing'),
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    stroke: {
      current: 'currentColor'
    },
    textColor: (theme) => theme('colors'),
    textOpacity: (theme) => theme('opacity'),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw'
    }),
    transitionDuration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    transitionDelay: {
      75: '75ms',
      1: '150ms',
      2: '300ms',
      3: '450ms',
      4: '600ms',
      5: '740ms',
      6: '900ms',
      8: '1000ms',
      9: '1150ms',
      10: '1300ms'
    }
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundOpacity: ['responsive', 'hover', 'focus'],
    backgroundSize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    display: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    padding: ['responsive'],
    space: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textOpacity: ['responsive', 'hover', 'focus'],
    verticalAlign: ['responsive'],
    width: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
    accessibility: [],
    appearance: [],
    backgroundAttachment: [],
    backgroundClip: [],
    backgroundImage: [],
    gradientColorStops: [],
    backgroundPosition: [],
    backgroundRepeat: [],
    borderCollapse: [],
    borderColor: [],
    borderOpacity: [],
    borderRadius: [],
    borderStyle: [],
    borderWidth: [],
    boxSizing: [],
    container: [],
    cursor: [],
    divideColor: [],
    divideOpacity: [],
    divideStyle: [],
    divideWidth: [],
    fill: [],
    float: [],
    clear: [],
    fontSmoothing: [],
    inset: [],
    objectFit: [],
    objectPosition: [],
    outline: [],
    overflow: [],
    overscrollBehavior: [],
    placeContent: [],
    placeItems: [],
    placeSelf: [],
    placeholderColor: [],
    placeholderOpacity: [],
    pointerEvents: [],
    position: [],
    resize: [],
    stroke: [],
    strokeWidth: [],
    tableLayout: [],
    textDecoration: [],
    textTransform: [],
    userSelect: [],
    visibility: [],
    whitespace: [],
    wordBreak: [],
    zIndex: [],
    gap: [],
    gridAutoFlow: [],
    gridTemplateColumns: [],
    gridColumn: [],
    gridColumnStart: [],
    gridColumnEnd: [],
    gridTemplateRows: [],
    gridRow: [],
    gridRowStart: [],
    gridRowEnd: [],
    transform: [],
    transformOrigin: [],
    scale: [],
    rotate: [],
    translate: [],
    transitionProperty: [],
    transitionTimingFunction: [],
    animation: []
  },
  corePlugins: {},
  plugins: []
};
