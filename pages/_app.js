import "@/styles/globals.css";
import Footer from "@/components/common/layout/Footer";
import { Header } from "@/components/common/layout/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <SiteHeader /> */}
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
