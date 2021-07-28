import { ChakraProvider } from "@chakra-ui/react";
import { GoogleFonts } from "next-google-fonts";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" />
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
