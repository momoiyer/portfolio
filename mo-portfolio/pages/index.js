import Head from 'next/head';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import About from '../components/About';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Khin Mo Mo Zin</title>
        <link rel="shortcut icon" href="/programmer.png" />
      </Head>
      <header>
        <Nav />
      </header>
      <div>
        <Intro />
        <About />
        <Skill />
        <Project />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;