"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navitems = ({ children, href }) => {
  return (
    <>
      <li className="m-2 cursor-pointer rounded-sm border border-gray-400 bg-white px-4 py-2 transition duration-300 hover:bg-gray-300">
        <a href={href}>{children}</a>
      </li>
    </>
  );
};
const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const toggleNavbar = () => {
    setNavVisible((prev) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav>
      <div className="nav-left flex items-center justify-around gap-52 py-4">
        <Image
          src={
            "https://media.discordapp.net/attachments/1275803991804084258/1314958653173792789/image.png?ex=6755aa2d&is=675458ad&hm=f1207d068336d74b4ddb965d67018f88bf790a385f8686269b8258f81c966aee&=&format=webp&quality=lossless"
          }
          width={60}
          height={60}
          alt="Logo"
        ></Image>
        {isMobile && <GiHamburgerMenu onClick={toggleNavbar} />}
      </div>
      <div className="nav-content p-2">
        {isMobile ? (
          navVisible && (
            <ul className="py-2">
              <Navitems>Home</Navitems>
              <Navitems>About</Navitems>
              <Navitems>Blog</Navitems>
              <Navitems>Contact</Navitems>
            </ul>
          )
        ) : (
          <ul className="flex py-2">
            <Navitems>Home</Navitems>
            <Navitems>About</Navitems>
            <Navitems>Blog</Navitems>
            <Navitems>Contact</Navitems>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
