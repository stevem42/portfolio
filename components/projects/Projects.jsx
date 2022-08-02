import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../../public/assets/projects/property.jpg';
import cryptoImg from '../../public/assets/projects/crypto.jpg';
import netflixImg from '../../public/assets/projects/netflix.jpg';
import twitchImg from '../../public/assets/projects/twitch.jpg';
import Project from './Project';

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <Project
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <Project
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <Project
            title="Twitch Clone"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;