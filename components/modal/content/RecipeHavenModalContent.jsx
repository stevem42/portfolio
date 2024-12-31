import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const RecipeHavenModalContent = () => {
  return (
    <div className="mb-4 border-2 border-black p-4">
      <div>
        <h2>Recipe Haven</h2>
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
            For security reasons I have taken this site offline as it will no
            longer be updated. You can still view the original code on Github
          </li>
          <li>
            This site will not be worked on any more. The site and databse were
            previously hosted on Heroku. The database has been migrated to
            Supabase, and is still in use with my Haven3 project
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center text-center ">
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
