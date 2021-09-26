import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:url" content="https://chooseyourdate.netlify.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Choose your date !" />
          <meta property="og:description" content="Make choices to find out what date you get" />
          <meta property="og:image" content={"https://tinder.com/static/tinder.png"} />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
