import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assets/name.png" alt="/" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <li>
              <Link href="/">
                <a className="ml-10 text-sm uppercase hover:border-b">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="ml-10 text-sm uppercase hover:border-b">About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="ml-10 text-sm uppercase hover:border-b">Skills</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
