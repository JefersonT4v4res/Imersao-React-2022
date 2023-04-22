import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    overflow-x: hidden;
}

/* NEXTJS */
html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}
body {
    display: flex;
    flex: 1;
}
#__next {
    display: flex;
    flex: 1;
}

/* GLOBALS */
button,
a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }
}
`