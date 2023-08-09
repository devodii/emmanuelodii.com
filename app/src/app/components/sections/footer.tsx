import React from "react";
import { ProfileCard } from "./header";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaMedium, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-[#030712] text-gray-200 py-6">
      <div className="container mx-auto px-8 lg:px-20 flex flex-col gap-6">
        <div className="flex justify-between items-start w-full  ">
          <ProfileCard size="sm" className="font-normal text-[16px]" />
          <nav className="">
            <ul className="flex flex-col items-center gap-2">
              <li className="text-lg text-gray-100">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="text-lg text-gray-100">
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li className="text-lg text-gray-100">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-between">
          <p>Copyrights &copy; {new Date().getFullYear()}, Emmanuel Odii </p>

          <ul className="flex gap-6">
            {[
              { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/" },
              { icon: <FaTwitter />, url: "https://twitter.com/" },
              { icon: <BsMedium />, url: "https://medium.com/" },
              { icon: <FaGithub />, url: "https://github.com/" },
            ].map((handle: any, index: number) => (
              <li key={index} className="list-none text-xl lg:text-2xl ">
                <Link href={handle.url}>{handle.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export {};
