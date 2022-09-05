import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../../public/assets/projects/property.jpg';
import cryptoImg from '../../public/assets/projects/crypto.jpg';
import netflixImg from '../../public/assets/projects/netflix.jpg';
import twitchImg from '../../public/assets/projects/twitch.jpg';
import hnyImg from '../../public/assets/projects/hny-home.png';

import Project from './Project';

const Projects = () => {
  return (
    <section id="projects" className="w-full scroll-mt-[2rem] bg-[#dcdcdc]">
      <div className="max-w-[1240px] m-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            title="Hny Removals"
            backgroundImg={hnyImg}
            projectUrl="/hny"
            tech={[
              'html',
              'css',
              'javascript',
              'bootstrap',
              'more',
              'fdsfdasfa',
              'fdfadfdas',
            ]}
            url={{
              live: 'https://hny.stevemckinnon.dev',
              code: 'https://github.com/stevem42/hny-removals',
              more: '/hny',
            }}
          />
          <Project
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech={['html', 'css', 'javascript', 'bootstrap']}
            url={{
              live: 'https://hny.stevemckinnon.dev',
              code: 'https://github.com/stevem42/hny-removals',
              more: '/hny',
            }}
          />
          <Project
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech={['html', 'css', 'javascript', 'bootstrap']}
            url={{
              live: 'https://hny.stevemckinnon.dev',
              code: 'https://github.com/stevem42/hny-removals',
              more: '/hny',
            }}
          />
          <Project
            title="Twitch Clone"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech={[
              'html',
              'css',
              'javascript',
              'bootstrap',
              'more',
              'fdsfdasfa',
              'fdfadfdas',
            ]}
            url={{
              live: 'https://hny.stevemckinnon.dev',
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
