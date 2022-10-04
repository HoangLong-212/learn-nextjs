import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import https from "https";

axios.defaults.httpAgent = new https.Agent({
  rejectUnauthorized: false,
});
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
