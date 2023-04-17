import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Khin Mo Mo Zin</title>
        <link rel="shortcut icon" href="/programmer.png" />
      </Head>
      <header>
        <Nav />
      </header>
      <div>
        {children}
      </div>
      <Footer />

    </div>
  );
};

export default Layout;