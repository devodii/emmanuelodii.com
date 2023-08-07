import Image from "next/image";
import React from "react";
import Link from "next/link";

const socials: Record<string, any>[] = [
  {
    name: "Linkedin",
    icon: "/social/linkedin.png",
    href: "",
  },
  {
    name: "Twitter",
    icon: "/social/twitter.png",
    href: "",
  },
  {
    name: "Medium",
    icon: "/social/medium.png",
    href: "",
  },
  {
    name: "Github",
    icon: "/social/github.png",
    href: "",
  },
];

export const ConnectWithMe = () => {
  return (
    <section className="bg-white w-full pt-6 lg:py-12">
      <div className="container max-w-2xl mx-auto flex flex-col gap-6">
        <h1 className="text-black text-4xl font-bold text-center">
          Let&apos;s Connect
        </h1>
        <span className="text-gray-900 text-center break-words ">
          I love sharing stories about creating{" "}
          <b className="font-semibold">websites</b>, apps, and building in
          public
          <br />
          If you&apos;re into building things too, or if you&apos;re looking for
          someone to join your <b className="font-semibold">team</b>, let&apos;s
          have a chat!
        </span>

        <ul className="flex gap-8 mx-auto">
          {socials.map((social: Record<string, any>) => {
            const { name, icon } = social;
            return (
              <li key={name}>
                <Link href={""}>
                  <Image
                    width={70}
                    height={70}
                    alt={`Emmanuel odii on ${name}`}
                    src={icon}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
