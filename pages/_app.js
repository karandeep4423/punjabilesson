import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Roboto } from "@next/font/google";
import Head from "next/head";
const inter = Roboto({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <ToastContainer autoClose={false} />
      <Head>
        <title>Punjabi Lesson</title>
        <link rel="icon" href="/kk.png"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Learn Punjabi and Gurbani from experienced Punjabi school tutors at an affordable price."
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
