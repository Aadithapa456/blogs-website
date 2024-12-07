import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const ThirdParty = () => {
  return (
    <div>
      <div className="third-party-signup">
        <button className="mb-4 mt-2 flex w-full items-center justify-center gap-4 rounded-sm border px-2 py-3 lg:w-10">
          <FaGoogle />
          Sign Up With Google
        </button>
        <button className="flex w-full items-center justify-center gap-4 rounded-sm border px-2 py-3 lg:w-10">
          <FaGithub />
          Sign Up With GitHUb
        </button>
      </div>
    </div>
  );
};

export default ThirdParty;
