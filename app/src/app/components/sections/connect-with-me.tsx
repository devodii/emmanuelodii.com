import Image from "next/image";
import React from "react";
import Link from "next/link";

const socials: Record<string, any>[] = [
  {
    name: "Linkedin",
    icon: "/social/linkedin.png",
    href: "https://www.linkedin.com/in/%F0%9F%87%B3%F0%9F%87%AC-emmanuel-odii-92239524b/",
  },
  {
    name: "Twitter",
    icon: "/social/twitter.png",
    href: "https://twitter.com/devodii_",
  },
  {
    name: "Medium",
    icon: "/social/medium.png",
    href: "https://medium.com/@emmanuelodii80",
  },
  {
    name: "Github",
    icon: "/social/github.png",
    href: "https://github.com/devodii",
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
            const { name, icon, href } = social;
            return (
              <li key={name}>
                <Link href={href}>
                  <Image
                    width={70}
                    height={70}
                    alt={`Emmanuel odii on ${name}`}
                    src={icon}
                    className="w-10 h-10 lg:w-16 lg:h-16 hover:-translate-y-2 transition-all duration-200 mb-6"
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
