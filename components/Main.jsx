import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <main id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hey, I&apos;m <span className="text-[#5651e5]">Steve</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Software Developer from QLD, Australia
          </h1>
          <p className="py-4 text-xl text-gray-600 max-w-[70%] m-auto">
            <span className="underline font-bold">
              Committed to always learning
            </span>{' '}
            - I enjoy technology, and both the challenge and reward of
            programming. I am looking for an opportunity to grow my knowledge,
            and apply my skills.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
