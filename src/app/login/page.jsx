import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-3 grid md:grid-cols-2 gap-10">
        <div className="image-section justify-self-end hidden md:block">
            <img className="h-4/5" src="https://i.pinimg.com/736x/46/fe/c0/46fec04a273ccc1a380cb882615fafbd.jpg" alt="IMG" />
        </div>
        <div className="login-page-section">
        <div className="brand-section my-10 flex items-center">
          <img
            className="w-20"
            src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png"
            alt=""
          />
          <div className="brand-name font-poppins">BlogSpot</div>
        </div>
        <div className="mb-5 font-bold">Nice to see you again</div>
        <form className="space-y-5" action="">
          <div className="email-section">
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
                <p className="text-blue-300 text-sm">Forgot Password?</p>
            </div>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default page;
