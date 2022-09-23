import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Steve | My Portfolio</title>
        <meta name="description" content="Steves Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
