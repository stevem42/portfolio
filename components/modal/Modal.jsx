import React from 'react';

const Modal = ({ content, show, close }) => {
  if (!show) return null;

  return (
    <div
      className="fixed flex items-center justify-center inset-0 z-10 w-full h-full bg-black/80"
      onClick={close}
    >
      <div
        className="px-8 mx-8 max-w-[1240px] z-10 bg-white rounded-lg max-h-[80%] overflow-scroll"
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
