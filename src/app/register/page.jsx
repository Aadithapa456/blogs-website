import ThirdParty from "@/components/ThirdParty";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { FaGoogle } from "react-icons/fa";
const Register = () => {
  const handleGoogleLogin = () => {};
  return (
    <div className="h-full w-full bg-red-400 p-4">
      <div className="container mx-3 grid gap-10 md:grid-cols-2">
        <div className="image-section hidden justify-self-end md:block">
          <Image
            src="https://media.discordapp.net/attachments/1286306187951734824/1314933637128388658/image.png?ex=675592e1&is=67544161&hm=a3f0382f8e8e02b8a43677dbc1536a1b2817663f86e3b88272c0dc9e1c2b54ab&=&format=webp&quality=lossless&width=476&height=700"
            width={250}
            height={50}
            alt="Image of an astronaut"
          />
        </div>
        <div className="login-page-section">
          <div className="brand-section my-10 flex items-center">
            <Image
              src="https://media.discordapp.net/attachments/1310883737847730186/1314942284890112101/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png?ex=67559aef&is=6754496f&hm=51ac3a2bc8d1948224aa1e6588aa2fd659479d4ac51572d5667ea70955be7381&=&format=webp&quality=lossless&width=350&height=350"
              alt="Logo"
              width={60}
              height={60}
            />
            <div className="brand-name font-poppins">BlogSpot</div>
          </div>
          <div className="mb-5 font-bold">Sign Up to Continue</div>
          <form className="space-y-5" action="">
            <div className="email-section">

              <label className="ml-5 text-sm text-gray-500" htmlFor="">
                Login
              </label>
              <Input
                className="bg-gray-200 text-sm"
                type="name"
                placeholder="Enter your name"
              />
              <label className="ml-5 text-sm text-gray-500" htmlFor="">
                Login
              </label>
              <Input
                className="bg-gray-200 text-sm"
                type="email"
                placeholder="Email..."
              />
            </div>
            <div className="password-section">
              <label className="ml-5 text-sm text-gray-500" htmlFor="">
                Password
              </label>
              <Input
                className="bg-gray-200 text-sm"
                type="email"
                placeholder="Password..."
              />
            </div>
            <div className="memory flex justify-between">
              <div className="remember flex items-center gap-2">
                <Checkbox />
                <p className="text-sm">Remember Me</p>
              </div>
              <div className="forgot">
                <p className="text-sm text-blue-300">Forgot Password?</p>
              </div>
            </div>
          </form>
          <ThirdParty />
        </div>
      </div>
      <Checkbox />
    </div>
  );
};

export default Register;
