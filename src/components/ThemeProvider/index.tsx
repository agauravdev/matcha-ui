import React from 'react';

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import _ from 'lodash';
import { defaultTheme } from '../../config';
import { Theme } from '../../config/theme';

const Index = ({
    theme: parsedTheme,
    children,
}: {
    theme?: Theme;
    children: React.ReactNode;
}) => {
    const theme = _.assign(defaultTheme, parsedTheme);

    return (
        <StyledComponentsThemeProvider theme={theme}>
            {children}
        </StyledComponentsThemeProvider>
    );
};

export default Index;
