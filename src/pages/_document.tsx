import { Html, Head, Main, NextScript } from "next/document";
import ReactGA from "react-ga4";
import Script from "next/script";

export default function Document() {
  ReactGA.initialize("G-G9V2N9XES1");
  return (
    <Html lang="en">
      <Head />
      <body className="bg-lightbg dark:bg-darkbg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
w