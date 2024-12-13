import "@/styles/globals.css";
import { SiteFooter } from "../components/components/common/layout/Footer";
import { SiteHeader } from "../components/components/common/layout/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}
