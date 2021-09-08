import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bg: "#011936",
    font: "#F4FFFD",
    border: "#F4FFFD",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const GlobalStyle = createGlobalStyle`
*, h1 {
    margin: 0;
    padding: 0;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.font};
}

html, body {
  background-color: ${({ theme }) => theme.colors.bg};
}
`;
