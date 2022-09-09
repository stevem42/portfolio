import React, { useEffect, useLayoutEffect } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import useLockScroll from '../../lib/useLockScroll';

const Modal = ({ content, close, noScroll }) => {
  useLockScroll();

  return (
    <div
      className="fixed flex items-center justify-center inset-0 z-10 w-full h-full bg-black/80"
      onClick={close}
    >
      <div
        className="px-8 mx-8  my-40 max-w-[1240px] z-10 bg-white rounded-lg max-h-[70%] md:max-h-[80%] overflow-scroll"
        onClick={(e) => e.stopPropagation()} //Stop onclick on the modal content
      >
        <div className="flex justify-end">
          <p className="cursor-pointer m-4 text-xl" onClick={close}>
            X
          </p>
        </div>

        <div className="relative flex justify-center items-center md:p-16">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
