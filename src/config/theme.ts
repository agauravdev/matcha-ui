const defaultTheme = {
    primary: {
        main: 'rgb(76, 175, 80)',
        light: 'rgb(111, 191, 115)',
        dark: 'rgb(53, 122, 56)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
        hover: 'rgba(76, 175, 80, 0.04)',
        focus: 'rgb(76, 175, 80, 0.12)',
        active: 'rgb(76, 175, 80, 0.2)',
        lighter10: 'rgb(93, 183, 97)',
        darker10: 'rgb(68, 157, 72)',
        lighter20: 'rgb(111, 191, 115)',
        darker20: 'rgb(60, 140, 64)',
        lighter30: 'rgb(129, 199, 132)',
        darker30: 'rgb(53, 122, 56)',
        lighter40: 'rgb(147, 207, 150)',
        darker40: 'rgb(45, 105, 48)',
        lighter50: 'rgb(165, 215, 167)',
        darker50: 'rgb(38, 87, 40)',
        lighter60: 'rgb(183, 223, 185)',
        darker60: 'rgb(30, 70, 32)',
        lighter70: 'rgb(201, 231, 202)',
        darker70: 'rgb(22, 52, 24)',
        lighter80: 'rgb(219, 239, 220)',
        darker80: 'rgb(15, 34, 15)',
        lighter90: 'rgb(237, 247, 237)',
        darker90: 'rgb(7, 17, 7)',
    },
    secondary: {
        main: 'rgb(255, 152, 0)',
        light: 'rgb(255, 172, 51)',
        dark: 'rgb(178, 106, 0)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
        hover: 'rgba(255, 152, 0, 0.04)',
        focus: 'rgb(255, 152, 0, 0.12)',
        active: 'rgb(255, 152, 0, 0.2)',
        lighter10: 'rgb(255, 162, 25)',
        darker10: 'rgb(229, 136, 0)',
        lighter20: 'rgb(255, 172, 51)',
        darker20: 'rgb(204, 121, 0)',
        lighter30: 'rgb(255, 182, 76)',
        darker30: 'rgb(178, 106, 0)',
        lighter40: 'rgb(255, 193, 102)',
        darker40: 'rgb(153, 91, 0)',
        lighter50: 'rgb(255, 203, 127)',
        darker50: 'rgb(127, 76, 0)',
        lighter60: 'rgb(255, 213, 153)',
        darker60: 'rgb(102, 60, 0)',
        lighter70: 'rgb(255, 224, 178)',
        darker70: 'rgb(76, 45, 0)',
        lighter80: 'rgb(255, 234, 204)',
        darker80: 'rgb(50, 30, 0)',
        lighter90: 'rgb(255, 244, 229)',
        darker90: 'rgb(25, 15, 0)',
    },
    error: {
        light: 'rgb(229, 115, 115)',
        main: 'rgb(244, 67, 54)',
        dark: 'rgb(211, 47, 47)',
        contrastText: 'rgb(255, 255, 255)',
        hover: 'rgba(244, 67, 54, 0.04)',
        focus: 'rgb(244, 67, 54, 0.12)',
        active: 'rgb(244, 67, 54, 0.2)',
        lighter10: 'rgb(245, 85, 74)',
        darker10: 'rgb(219, 60, 48)',
        lighter20: 'rgb(246, 104, 94)',
        darker20: 'rgb(195, 53, 43)',
        lighter30: 'rgb(247, 123, 114)',
        darker30: 'rgb(170, 46, 37)',
        lighter40: 'rgb(248, 142, 134)',
        darker40: 'rgb(146, 40, 32)',
        lighter50: 'rgb(249, 161, 154)',
        darker50: 'rgb(122, 33, 27)',
        lighter60: 'rgb(250, 179, 174)',
        darker60: 'rgb(97, 26, 21)',
        lighter70: 'rgb(251, 198, 194)',
        darker70: 'rgb(73, 20, 16)',
        lighter80: 'rgb(252, 217, 214)',
        darker80: 'rgb(48, 13, 10)',
        lighter90: 'rgb(253, 236, 234)',
        darker90: 'rgb(24, 6, 5)',
    },
    warning: {
        light: 'rgb(255, 184, 77)',
        main: 'rgb(255, 152, 0)',
        dark: 'rgb(245, 123, 0)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
        hover: 'rgba(255, 152, 0, 0.04)',
        focus: 'rgb(255, 152, 0, 0.12)',
        active: 'rgb(255, 152, 0, 0.2)',
        lighter10: 'rgb(255, 162, 25)',
        darker10: 'rgb(229, 136, 0)',
        lighter20: 'rgb(255, 172, 51)',
        darker20: 'rgb(204, 121, 0)',
        lighter30: 'rgb(255, 182, 76)',
        darker30: 'rgb(178, 106, 0)',
        lighter40: 'rgb(255, 193, 102)',
        darker40: 'rgb(153, 91, 0)',
        lighter50: 'rgb(255, 203, 127)',
        darker50: 'rgb(127, 76, 0)',
        lighter60: 'rgb(255, 213, 153)',
        darker60: 'rgb(102, 60, 0)',
        lighter70: 'rgb(255, 224, 178)',
        darker70: 'rgb(76, 45, 0)',
        lighter80: 'rgb(255, 234, 204)',
        darker80: 'rgb(50, 30, 0)',
        lighter90: 'rgb(255, 244, 229)',
        darker90: 'rgb(25, 15, 0)',
    },
    info: {
        light: 'rgb(100, 180, 246)',
        main: 'rgb(33, 150, 243)',
        dark: 'rgb(25, 118, 210)',
        contrastText: 'rgb(255, 255, 255)',
        hover: 'rgba(33, 150, 243, 0.04)',
        focus: 'rgb(33, 150, 243, 0.12)',
        active: 'rgb(33, 150, 243, 0.2)',
        lighter10: 'rgb(55, 160, 244)',
        darker10: 'rgb(29, 135, 218)',
        lighter20: 'rgb(77, 171, 245)',
        darker20: 'rgb(26, 120, 194)',
        lighter30: 'rgb(99, 181, 246)',
        darker30: 'rgb(23, 105, 170)',
        lighter40: 'rgb(121, 192, 247)',
        darker40: 'rgb(19, 90, 145)',
        lighter50: 'rgb(144, 202, 249)',
        darker50: 'rgb(16, 75, 121)',
        lighter60: 'rgb(166, 213, 250)',
        darker60: 'rgb(13, 60, 97)',
        lighter70: 'rgb(188, 223, 251)',
        darker70: 'rgb(9, 45, 72)',
        lighter80: 'rgb(210, 234, 252)',
        darker80: 'rgb(6, 29, 48)',
        lighter90: 'rgb(232, 244, 253)',
        darker90: 'rgb(3, 14, 24)',
    },
    grey: {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
        A100: '#f5f5f5',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
    },
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',
    },
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    divider: 'rgba(0, 0, 0, 0.12)',
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
    componentSizes: {
        sm: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem',
    },
};

export type MainColors = 'primary' | 'secondary' | 'error' | 'warning' | 'info';

export type ColorVariants = {
    main?: string;
    light?: string;
    dark?: string;
    contrastText?: string;
    hover?: string;
    focus?: string;
    active?: string;
    lighter10?: string;
    darker10?: string;
    lighter20?: string;
    darker20?: string;
    lighter30?: string;
    darker30?: string;
    lighter40?: string;
    darker40?: string;
    lighter50?: string;
    darker50?: string;
    lighter60?: string;
    darker60?: string;
    lighter70?: string;
    darker70?: string;
    lighter80?: string;
    darker80?: string;
    lighter90?: string;
    darker90?: string;
};

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointValues = {
    [key in Breakpoint]?: number;
};

export type Theme = typeof defaultTheme;

export default defaultTheme;
