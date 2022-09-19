import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const RecipeHavenModalContent = () => {
  return (
    <div className="mb-4 border-2 border-black p-4">
      <div>
        <h2>Recipe Haven</h2>
        <p className="mt-4 text-xl">
          Demo Username: demouser@demo.com ---- Demo Password: Demouser123
        </p>
        <p className="pt-4">
          This site is a personal project made for myself and my wife to keep
          track of our recipes in a place where either of us can access them.
        </p>
        <p>
          This was my CS50 final project. I wanted to create something I would
          actually use.
        </p>
      </div>
      <div className="mt-4">
        <p className="font-bold">Technology Used</p>
        <ul className="uppercase text-bold list-disc ml-4">
          <li>python</li>
          <li>flask</li>
          <li>css</li>
          <li>postgresql</li>
          <li>authentication and authorisaztion</li>
          <li>Recipe search</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="font-bold">Notes:</p>
        <ul className="list-disc ml-4">
          <li className="text-red-600">
            ** This site only uses HTTP so do not create an account with any
            real info **
          </li>
          <li className="text-red-600">
            It is hosted on Heroku so will be slow on first load
          </li>
          <li>This site will not be worked on any more</li>
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
          href="http://recipe-haven.herokuapp.com/"
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
          href="https://github.com/stevem42/recipe-haven"
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

export default RecipeHavenModalContent;
