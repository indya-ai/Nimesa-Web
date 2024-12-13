import "@/styles/globals.css";
// import { SiteFooter } from "../components/components/common/layout/Footer";
// import { SiteHeader } from "../components/components/common/layout/Header";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";


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
