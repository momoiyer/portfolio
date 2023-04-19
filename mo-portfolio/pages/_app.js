import Head from 'next/head';
// //add MDBootstrap
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
// @import '~mdb-ui-kit/css/mdb.min.css';
//add custom global css

import 'semantic-ui-css/semantic.min.css';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <script>
        AOS.init();
      </script>
    </Head>
    <Component {...pageProps} />
  </>
  );
}
