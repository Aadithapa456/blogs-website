import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { Badge } from "./ui/badge";

const Modal = () => {
  const [isShown, setVisibility] = useState(true);
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {isShown && (
        <div className="modal-container grid justify-items-center space-y-5 rounded-xl bg-blue-300 p-5 sm:w-1/2 xl:w-[40%]">
          <div className="cross-button-section mb-5 justify-self-end">
            <button
              onClick={() => {
                setVisibility(!isShown);
              }}
              className="cursor-pointer"
            >
              <ImCross />
            </button>
          </div>
          <div className="modal-title">
            <h1 className="text-xl font-bold">What are your preferences?</h1>
          </div>
          <div className="prefer-buttons grid grid-cols-2 gap-3 pb-10 md:grid-cols-3">
            <Badge
              className={
                "w-full cursor-pointer justify-center truncate px-4 py-2 md:w-auto"
              }
            >
              HTML
            </Badge>
            <Badge
              className={
                "w-full cursor-pointer justify-center truncate px-4 py-2 md:w-auto"
              }
            >
              CSS
            </Badge>
            <Badge
              className={
                "w-full cursor-pointer justify-center truncate px-4 py-2 md:w-auto"
              }
            >
              JavaScript
            </Badge>
            <Badge
              className={
                "w-full cursor-pointer justify-center truncate px-4 py-2 md:w-auto"
              }
            >
              Python
            </Badge>
            <Badge
              className={
                "w-full cursor-pointer justify-center truncate px-4 py-2 md:w-auto"
              }
            >
              React
            </Badge>
          </div>
          <div className="next-button-section justify-self-center">
            <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800">
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                Next
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;