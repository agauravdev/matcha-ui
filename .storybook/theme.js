import { create } from '@storybook/theming';

export default create({
    colorPrimary: 'rgb(76, 175, 80)',
    colorSecondary: 'rgb(255, 152, 0)',

    // Typography
    fontBase:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    // Text colors
    textColor: 'rgba(0, 0, 0, 0.87)',

    base: 'light',
    brandTitle: 'Matcha-UI',
    brandImage: './logo.png',
});
