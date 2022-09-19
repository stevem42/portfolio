import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const GtmModalContent = () => {
  return (
    <div className="mb-4 border-2 border-black p-4">
      <div>
        <h2>Guess The Movie</h2>
        <p className="pt-4">
          This is a demo project which utilises the TMDB API for fetching a
          movie based on a seed title, and using that movie information to fetch
          the correct movie poster.
        </p>
        <p>The aim is to guess all the letters without running out of turns</p>
        <p>
          It uses conditional rendering, and the css blur property to hide the
          movie until is has been correctly guessed, or the turns have run out
        </p>
      </div>
      <div className="mt-4">
        <p className="font-bold">Technology Used</p>
        <ul className="uppercase text-bold list-disc ml-4">
          <li>react</li>
          <li>HTML</li>
          <li>CSS modules</li>
          <li>JAVASCRIPT</li>
          <li>conditional rendering</li>
          <li>data fetching with the fetch api</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="font-bold">Notes:</p>
        <ul className="list-disc ml-4">
          <li>
            It fetches a random movie based on a movie array, this list has not
            been completely curated so could result in an error matching the
            movie poster to the title
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="font-bold">ToDo:</p>
        <ul className="list-disc ml-4">
          <li>
            Implement custom hook for fetching the poster, error handling on no
            poster fetched
          </li>
          <li>Utilize local storage to keep track of scores</li>
          <li>Styling and layout changes</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-center ">
        <a
          href="https://guess-the-movie-nine.vercel.app"
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
          href="https://github.com/stevem42/guess-the-movie"
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

export default GtmModalContent;
