"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const NavItem = ({ children, href }) => {
  return (
    <li className="m-2 cursor-pointer rounded-sm border border-gray-400 bg-white px-4 py-2 transition duration-300 hover:bg-gray-300 md:border-none md:bg-gray-300">
      <a href={href}>{children}</a>
    </li>
  );
};

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  const toggleNavbar = useCallback(() => {
    setNavVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="mx-20 gap-40 md:flex md:flex-row md:justify-between"
      ref={navRef}
    >
      <div className="nav-left flex items-center justify-around gap-52 py-4">
        <Image
          src="https://media.discordapp.net/attachments/1275803991804084258/1314958653173792789/image.png?ex=6755aa2d&is=675458ad&hm=f1207d068336d74b4ddb965d67018f88bf790a385f8686269b8258f81c966aee&=&format=webp&quality=lossless"
          width={60}
          height={60}
          alt="Logo"
        />
        {isMobile && <GiHamburgerMenu onClick={toggleNavbar} />}
      </div>
      <ul className={`md:flex ${navVisible ? "flex" : "hidden"}`}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
