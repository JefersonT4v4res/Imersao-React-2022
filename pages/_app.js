import { CSSReset } from "../src/components/CSSReset";
import { ThemeProvider } from "styled-components";

const theme = {
    light: {
        backgroundBase: "#F9F9F9",
        backgroundLevel1: "#FFFFFF",
        backgroundLevel2: "#F0F0F0",
        borderBase: "#E5E5E5",
        textColorBase: "#222222"
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF"
    }
};

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme.dark}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}