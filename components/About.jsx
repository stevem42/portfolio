import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 scroll-mt-[2rem] md:h-screen p-2 flex items-center bg-[#dcdcdc]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p>
            Hi there, I’m Steve. Software Developer. Married with dogs (I have
            photos...)
          </p>
          <p>
            I’m a mostly self taught developer, with a University Diploma of
            Information Technology.
          </p>
          <p className="py-2 text-gray-600">
            I discovered my passion for coding way back when I was coming into
            my teens. My first experience was making a choose your own adventure
            text game in BASIC (yes you read that right) but it wasn’t until
            years later that I realised “this is what I want to do”.
          </p>
          <p className="py-2 text-gray-600">
            When I started really learning I could not decide which facet of
            software development that interested me the most, web development,
            game development , desktop applications, mobile applications, mobile
            gaming, so many options but turned out I like them all. Currently I
            am focusing on full stack web development, but I am open to learning
            any and all technology stacks. I really do just love building and
            seeing things appear from nothing.
          </p>
          <p className="py-2 text-gray-600">
            You can check out my{' '}
            <Link href="/#skills">
              <a className="underline cursor-pointer font-bold text-[#5651e5]">
                Skills Section
              </a>
            </Link>{' '}
            to see some of the languages, frameworks and technologies I have
            been exposed to, with my favourite being React (and NextJS) – or
            just jump straight into checking out some of my{' '}
            <Link href="/#projects">
              <a className="underline cursor-pointer font-bold text-[#5651e5]">
                Latest Projects.
              </a>
            </Link>
          </p>
          <p className="py-2 text-gray-600">
            I completed a number of Udemy courses, Harvards CS50, an MOOC course
            from the University of Helsinki and countless Youtube tutorials.
            They taught me an enormous amount about coding and software
            development, but they all lacked the real world ‘application’, the
            experience of working within a team to collaborate and create. So I
            entered into University and completed a Diploma of Information
            Technology with a focus on Software Development, finishing with just
            a hair under an HD average. I got some exposure to working within
            teams and I really enjoyed it. Now I am ready to take all that
            experience to the next level.
          </p>
          <p className="py-2 text-gray-600">
            The other-other about me is that I like to stay active, watch and
            play basketball, muck around with my virtual reality headset, or
            just enjoy a bit of downtime with my wife in front of the TV. I have
            an absolute passion for technology but not an obsession. I like to
            leave a bit of room for life as well.
          </p>
          <p className="py-2 text-gray-600">
            Jump straight to my{' '}
            <Link href="/#projects">
              <a className="underline cursor-pointer font-bold text-[#5651e5]">
                Latest Projects
              </a>
            </Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="/assets/kboard.jpeg"
            alt="keyboard"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
