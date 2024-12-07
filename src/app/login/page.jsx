import ThirdParty from "@/components/ThirdParty";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid h-full w-full gap-10 px-3 md:grid-cols-2">
      <div className="image-section hidden self-center justify-self-end md:block">
        <Image
          className="rounded-3xl"
          src="https://media.discordapp.net/attachments/1275803991804084258/1314939394423128135/46fec04a273ccc1a380cb882615fafbd.png?ex=6755983e&is=675446be&hm=4d17bfbe3192d889f43207f465a777eb7a654f68f2a9058ee8313fb7b9dbdfba&=&format=webp&quality=lossless&width=351&height=701"
          width={500}
          height={500}
          alt="Image of an astronaut"
        />
      </div>
      <div className="login-page-section md:justify-self-start">
        <div className="brand-section my-10 flex items-center">
          <img
            className="w-20"
            src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png"
            alt=""
          />
          <div className="brand-name font-poppins">BlogSpot</div>
        </div>
        <div className="mb-5 font-bold">Nice to see you again</div>
        <form className="space-y-3" action="">
          <div className="email-section">
            <label className="ml-3 text-sm text-gray-500" htmlFor="">
              Email
            </label>
            <Input
              className="focus mt-1 bg-gray-200 text-sm"
              type="email"
              // placeholder="Enter your email"
            />
          </div>
          <div className="password-section">
            <label className="ml-3 text-sm text-gray-500" htmlFor="">
              Password
            </label>
            <Input
              className="mt-1 bg-gray-200 text-sm"
              type="email"
              // placeholder="Password"
            />
          </div>
          <div className="memory flex justify-between">
            <div className="remember flex items-center gap-2">
              <Checkbox />
              <p className="text-sm">Remember Me</p>
            </div>
            <div className="forgot">
              <p className="cursor-pointer text-sm text-blue-400">
                Forgot Password?
              </p>
            </div>
          </div>
        </form>
        <ThirdParty content="Sign in" />
        <p className="mt-20 text-center text-sm">
          Don't have an account?{" "}
          <span className="cursor-pointer text-blue-400">Sign up now</span>
        </p>
      </div>
    </div>
  );
};

export default page;
