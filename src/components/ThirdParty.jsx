import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const ThirdParty = (props) => {
  return (
    <div>
      <div className="third-party-signup grid md:justify-center mt-10">
        <button className="mb-4 mt-2 flex w-full items-center justify-center gap-4 rounded-lg border px-2 py-3 lg:w-96 text-sm hover:bg-black hover:text-white transition-colors duration-300">
          <FaGoogle />
          {props.content} With Google
        </button>
        <button className="flex w-full items-center justify-center gap-4 rounded-lg border px-2 py-3 lg:w-96 text-sm hover:bg-black hover:text-white transition-colors duration-300">
          <FaGithub />
          {props.content} With GitHUb
        </button>
      </div>
    </div>
  );
};

export default ThirdParty;
