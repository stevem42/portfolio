import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 scroll-mt-[2rem] p-2 flex items-center bg-[#dcdcdc]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Why choose me?</h2>
          <p>
            Software development often frustrates the heck out of me. However
            there is nothing more rewarding than when a piece of code finally
            works the way it is intended. I enjoy solving problems, and I take
            pride in my work.
          </p>
          <p className="py-2 text-gray-600">
            I’m a mostly self taught developer, with a University Diploma of
            Information Technology.
          </p>
          <p className="py-2 text-gray-600">
            I discovered my passion for coding way back when I was coming into
            my teens. My first experience was making a choose your own adventure
            text game in BASIC but it wasn’t until years later that I realised
            “this is what I want to do”.
          </p>
          <p className="py-2 text-gray-600">
            There is a balance to be found between using the latest and
            greatest, and what is right for the job. I am now a lifetime learner
            who enjoys learning new technologies, and how best to use them.
            Currently I am focusing on full stack web development, but I am open
            to learning any and all technology stacks. I really do just love
            building and seeing things appear from nothing.
          </p>

          <p className="py-2 text-gray-600">
            Get in touch now or check out my{' '}
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
