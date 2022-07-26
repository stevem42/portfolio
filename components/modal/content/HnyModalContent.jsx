import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const hnyModalContent = () => {
  return (
    <div className="mb-4 border-2 border-black p-4">
      <div>
        <h2>HNY Removals</h2>
        <p className="pt-4">
          This was a live site, however the owner decided to change careers, it
          is now hosted as a subdomain so it can still be viewed.
        </p>
      </div>
      <div className="mt-4">
        <p className="font-bold">Technology Used</p>
        <ul className="uppercase text-bold list-disc ml-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>bootstrap</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="font-bold">Notes:</p>
        <ul className="list-disc ml-4">
          <li>
            I used the Facebook reviews API. Some reviews are no longer
            available. It has been left intentionally as it was
          </li>
          <li>The Form will no longer submit to a correct address</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-center ">
        <a
          href="https://hny.stevemckinnon.dev"
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
          href="https://github.com/stevem42/hny-removals"
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

export default hnyModalContent;
