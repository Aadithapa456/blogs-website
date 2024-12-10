'use client'
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";


const ThirdParty = () => {

  const handleLogin = async (event, provider) => {
    event.preventDefault();
    const result = signIn(provider);
    console.log("okay")
  }

  return (
    <div className="third-party-signup">
      <button
        className="mb-4 mt-2 flex w-full items-center justify-center gap-4 rounded-sm border px-2 py-3 transition-colors duration-200 hover:bg-blue-100"
        aria-label="Sign in with Google"
        onClick={(event) => handleLogin(event, "google")}
      >
        <FaGoogle />
        Sign Up With Google
      </button>
      <button
        onClick={(event) => handleLogin(event, "github")}
        className="flex w-full items-center justify-center gap-4 rounded-sm border px-2 py-3 transition-colors duration-200 hover:bg-gray-100"
        aria-label="Sign in with GitHub"
      >
        <FaGithub />
        Sign Up With GitHub
      </button>
      </div>
  );
};

export default ThirdParty;
