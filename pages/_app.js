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
        <link rel="icon" href="/kk.png"></link>
        <title>Get in Touch with Punjabi Lesson - Contact Us.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Contact Punjabi Lesson for questions, support, or inquiries. We're here to assist you with your Punjabi language and Gurbani learning needs."/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
