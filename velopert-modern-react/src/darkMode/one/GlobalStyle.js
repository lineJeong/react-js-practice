import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}
button {
    background: ${({ theme }) => theme.button.body};
    color: ${({ theme }) => theme.button.text};
}
`;
