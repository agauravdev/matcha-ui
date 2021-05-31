import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import _ from "lodash";
import { defaultTheme } from "../config";

const ThemeProvider = ({ theme: parsedTheme, children }) => {
  const theme = _.assign(defaultTheme, parsedTheme);

  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

// ThemeProvider.propTypes ={
//   theme?: PropTypes.
// }

export default ThemeProvider;