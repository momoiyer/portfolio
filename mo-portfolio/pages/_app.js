import 'semantic-ui-css/semantic.min.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import '@/styles/globals.css';

import Script from 'next/script';

// AOS Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {

  // load AOS on page load
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (<>

    <Script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"
    ></Script>
    <Component {...pageProps} />
  </>
  );
}
