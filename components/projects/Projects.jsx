import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import cryptoImg from '../../public/assets/projects/crypto.jpg';

import hnyImg from '../../public/assets/projects/hny-home.png';
import haven1Img from '../../public/assets/projects/haven1.png';
import guessImg from '../../public/assets/projects/guess.png';

import Project from './Project';

const Projects = () => {
  return (
    <section id="projects" className="w-full scroll-mt-[2rem] bg-[#dcdcdc]">
      <div className="max-w-[1240px] m-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Some of the things I have built</h2>
        <div className="grid md:grid-cols-2 gap-8 gap-y-16 mt-4">
          <Project
            title="Recipe Haven 3"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech={[
              'React',
              'Nextjs',
              'tailwind css',
              'prisma',
              'postgresql',
              'next-auth',
            ]}
            url={{
              live: 'https://recipehaven.vercel.app/',
              code: 'https://github.com/stevem42/haven3',
              more: '/hny',
            }}
          />
          <Project
            title="Hny Removals"
            backgroundImg={hnyImg}
            projectUrl="/hny"
            tech={['html', 'css', 'javascript', 'bootstrap']}
            url={{
              live: 'https://hny.stevemckinnon.dev',
              code: 'https://github.com/stevem42/hny-removals',
              more: '/hny',
            }}
          />
          <Project
            title="Guess The Movie"
            backgroundImg={guessImg}
            projectUrl="/netflix"
            tech={['react', 'css modules', 'tmdb api']}
            url={{
              live: 'https://guess-the-movie-nine.vercel.app/',
              code: 'https://github.com/stevem42/guess-the-movie',
              more: '/hny',
            }}
          />
          <Project
            title="Recipe Haven"
            backgroundImg={haven1Img}
            projectUrl="/twitch"
            tech={['html', 'css', 'python', 'flask', 'postgresql']}
            url={{
              live: 'http://recipe-haven.herokuapp.com/',
              code: 'https://github.com/stevem42/hny-removals',
              more: '/hny',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
