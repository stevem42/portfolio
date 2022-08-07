import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Steve | My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
