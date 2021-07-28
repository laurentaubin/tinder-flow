import { Global, css } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleFonts } from "next-google-fonts";

import theme from "../theme";

import "focus-visible/dist/focus-visible";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
    background: linear-gradient(to right, #f53803, #fba000);
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" />
      <ChakraProvider resetCSS theme={theme}>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
