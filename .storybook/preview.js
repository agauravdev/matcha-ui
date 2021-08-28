import React from 'react';
import ThemeProvider from '../src/components/ThemeProvider';
import { GlobalStyles } from '../src';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    ),
];
