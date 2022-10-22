import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutDefault from "../components/LayoutDefault";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutDefault>
      <Component {...pageProps} />
    </LayoutDefault>
  );
}

export default MyApp;
