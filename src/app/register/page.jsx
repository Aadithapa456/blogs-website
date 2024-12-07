
import ThirdParty from "@/components/ThirdParty";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const Register = () => {




  return (
    <div className="h-full w-full bg-red-400 p-4">
      <div className="register-left">
        <Image
          src="https://media.discordapp.net/attachments/1286306187951734824/1314933637128388658/image.png?ex=675592e1&is=67544161&hm=a3f0382f8e8e02b8a43677dbc1536a1b2817663f86e3b88272c0dc9e1c2b54ab&=&format=webp&quality=lossless&width=476&height=700"
          width={250}
          height={250}
          alt="Image of an astronaut"
        />
      </div>
      <form className="register-right max-w-2xl">
        <div className="title"></div>
        <p>Nice to see you again</p>
        <label htmlFor="name">Enter your name:</label>
        <Input type="name" placeholder="Enter your name" />
        <label htmlFor="name">Enter your name:</label>
        <Input type="name" placeholder="Enter your name" />
        <label htmlFor="name">Enter your name:</label>
        <Input type="name" placeholder="Enter your name" />
        <div className="log-in text-sm">
          Already have an account?
          <a href="" className="px-2 text-blue-400">
            Log In
          </a>
        </div>
        <div className="w-full">
          <ThirdParty />
          </div>
      </form>
    </div>
  );
};

export default Register;
