import React from 'react';
import HnyModalContent from '../modal/content/HnyModalContent';
import GtmModalContent from '../modal/content/GtmModalContent';
import Haven3ModalContent from '../modal/content/Haven3ModalContent';

import hnyImg from '../../public/assets/projects/hny-home.png';
import haven1Img from '../../public/assets/projects/haven1.png';
import haven3Img from '../../public/assets/projects/haven3.png';
import guessImg from '../../public/assets/projects/guess.png';

import Project from './Project';
import RecipeHavenModalContent from '../modal/content/RecipeHavenModalContent';

const Projects = () => {
  return (
    <section id="projects" className="w-full scroll-mt-[2rem] bg-[#dcdcdc]">
      <div className="max-w-[1240px] m-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Some of the things I have built</h2>
        <h3 className="text-red-600">
          *Click on More Info for some important points about each project*
        </h3>
        <div className="grid md:grid-cols-2 gap-8 gap-y-16 mt-8 md:auto-rows-fr">
          <Project
            title="Recipe Haven 3"
            subtitle="CRUD App Made With NextJS"
            backgroundImg={haven3Img}
            projectUrl="/crypto"
            tech={[
              'React',
              'Nextjs',
              'tailwind css',
              'prisma',
              'postgresql',
              'next-auth',
            ]}
            content={<Haven3ModalContent />}
            url={{
              live: 'https://recipehaven.vercel.app/login?ref=portfolio',
              code: 'https://github.com/stevem42/haven3',
              more: '/hny',
            }}
          />
          <Project
            title="Hny Removals"
            subtitle="Real Site Made For A Local Business"
            backgroundImg={hnyImg}
            projectUrl="/hny"
            tech={['html', 'css', 'javascript', 'bootstrap']}
            url={{
              live: 'https://hny.stevemckinnon.dev',
              code: 'https://github.com/stevem42/hny-removals',
              more: '/hny',
            }}
            content={<HnyModalContent />}
          />
          <Project
            title="Guess The Movie"
            subtitle="Hangman Game Using the TMDB Api"
            backgroundImg={guessImg}
            projectUrl="/netflix"
            tech={['react', 'css modules', 'tmdb api']}
            url={{
              live: 'https://guess-the-movie-nine.vercel.app/',
              code: 'https://github.com/stevem42/guess-the-movie',
              more: '/hny',
            }}
            content={<GtmModalContent />}
          />
          <Project
            title="Recipe Haven"
            subtitle="CRUD App Made With Python"
            backgroundImg={haven1Img}
            projectUrl="/twitch"
            tech={['html', 'css', 'python', 'flask', 'postgresql']}
            url={{
              live: 'http://recipe-haven.herokuapp.com/',
              code: 'https://github.com/stevem42/recipe-haven',
              more: '/hny',
            }}
            content={<RecipeHavenModalContent />}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
