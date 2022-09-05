import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';

const Project = ({ title, backgroundImg, projectUrl, tech, url }) => {
  const stack = tech.map((item) => (
    <li
      className="flex justify-center rounded-full shadow-lg text-center md:text-md uppercase hover:scale-105 cursor-default ease-in bg-white shadow-gray-300 my-2 mx-1 px-2 md:px-4 py-2 md:mx-2"
      key={item}
    >
      {item}
    </li>
  ));
  return (
    <div className="relative  bg-[#ecf0f3] flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 pb-12">
      <h1>{title}</h1>
      <Image className="rounded-xl" src={backgroundImg} alt="/" />

      <div>
        <div className="md:py-8 lg:h-32">
          <ul className="flex flex-wrap justify-center pt-2">{stack}</ul>
        </div>
        <div className="flex items-center text-center">
          <a
            href={url.live}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 mx-1 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
          >
            See Live
            <span className="inline-block ml-4">
              <FaLink />
            </span>
          </a>
          <a
            href={url.code}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 mx-1 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
          >
            See On Github
            <span className="inline-block ml-1 md:ml-4">
              <FaGithub />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href={url.more}
            rel="noreferrer"
            className=" w-full max-w-[75%] text-center px-4 py-4 md:px-12 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
