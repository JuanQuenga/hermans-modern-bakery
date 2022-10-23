import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <a
          href="#main-content"
          className="hidden focus:visible fixed top-0 left-0 right-0 text-center bg-red-600 font-bold text-white p-4 z-50"
        >
          Skip to main content
        </a>
        <title>Herman's Modern Bakery</title>
        <meta
          name="description"
          content="Herman's Modern Bakery, Saipan's First & Finest"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main id="#main-content" className="pt-20 md:pt-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
