import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaArrowDown } from 'react-icons/fa';

const Main = () => {
  return (
    <main id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] xs:px-8 w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-2 text-gray-700">
            <span className="text-[#5651e5]">Steve</span> Mckinnon
          </h1>
          <h1 className="xs:mt-8 py-2 text-gray-700">
            Full-Stack <span className="text-[#5651e5]">Developer</span>
          </h1>
          <p className="py-4 text-xl text-gray-600 max-w-[70%] m-auto">
            <span className="font-bold">Committed to always learning</span> - I
            enjoy technology, and both the challenge and reward of programming.
            I am looking for an opportunity to grow my knowledge, and apply my
            skills.
          </p>
          <div className="flex justify-center text-sm sm:text-lg ">
            <Link href="/#contact">
              <div className="flex justify-center items-center text-center">
                <a className=" px-4 py-3 m-3 text-gray-100 mt-4 shadow-xl cursor-pointer shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  Get in Touch
                  <span className="inline-block ml-4 ">
                    <FaArrowDown />
                  </span>
                </a>
              </div>
            </Link>
            <Link href="/#projects">
              <div className="flex justify-center items-center text-center">
                <a className="px-4 py-3 m-3 text-gray-100 mt-4 shadow-xl cursor-pointer shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  See My Work
                  <span className="inline-block ml-4 ">
                    <FaArrowDown />
                  </span>
                </a>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/stevem42"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/stevem42"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
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
