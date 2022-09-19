import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const Haven3ModalContent = () => {
  return (
    <div className="mb-4 border-2 border-black p-4">
      <div>
        <h2>Recipe Haven 3</h2>
        <p className="pt-4">
          This site is a personal project made for myself and my wife to keep
          track of our recipes in a place where either of us can access them.
        </p>
        <p>
          #3 Is because this the 3rd iteration of this idea. The original -
          shown in this section, was my CS50 final project. That was made with
          Python. This site has been rebuilt from the ground up (while using the
          same Postgres DB) with NextJs
        </p>
        <p>It is hosted on Vercel</p>
      </div>
      <div className="mt-4">
        <p className="font-bold">Technology Used</p>
        <ul className="uppercase text-bold list-disc ml-4">
          <li>NextJS</li>
          <li>tailwind css</li>
          <li>postgresql</li>
          <li>prisma (database orm)</li>
          <li>next-auth authentication and authorisaztion</li>
          <li>WYSIWYG Text Editor</li>
          <li>Real time search</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="font-bold">Notes:</p>
        <ul className="list-disc ml-4">
          <li className="text-red-600">
            Links from this portfolio site will take you to the login page with
            a demo login pre-filled. You can log in with this or create your own
            account
          </li>
          <li>
            This site will be continously worked on both for practice and new
            use-cases
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="font-bold">ToDo:</p>
        <ul className="list-disc ml-4">
          <li>Implement favourite recipes</li>
          <li>Styling and layout changes</li>
          <li>*Many more</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-center ">
        <a
          href="https://recipehaven.vercel.app/login?ref=portfolio"
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-[45%] py-3 mx-1 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
          See Live
          <span className="inline-block ml-4">
            <FaLink />
          </span>
        </a>
        <a
          href="https://github.com/stevem42/haven3"
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-[45%] py-3 mx-1 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
          See On Github
          <span className="inline-block ml-1 md:ml-4">
            <FaGithub />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Haven3ModalContent;
