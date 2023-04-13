import Head from 'next/head';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import About from '../components/About';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/programmer.png" />
      </Head>
      <Nav />
      <Intro />
      <About />
      <Skill />
      <Project />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default Home;