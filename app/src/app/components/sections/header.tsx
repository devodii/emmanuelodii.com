import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Props = {};
export const ProfileCard = ({
  boldText,
  size,
  className,
}: {
  boldText?: boolean;
  className?: string;
  size?: "sm" | "lg";
}) => (
  <Link
    href="/"
    className={clsx("flex items-center gap-4", size === "sm" && "gap-[8px]")}
  >
    <Image
      src="/emmanuel.jpg"
      priority
      placeholder="blur"
      alt="Emmanuel odii"
      width={55}
      height={55}
      blurDataURL="/emmanuel.jpg"
      className={clsx("rounded-full", size === "sm" && "h-7 w-7")}
    />
    <strong className={clsx("tracking-wide text-xl", className)}>
      Emmanuel Odii
    </strong>
  </Link>
);

export const Header = ({}: Props) => {
  return (
    <header className=" bg-[#030712]  text-white">
      <div className="container flex flex-wrap items-center justify-between px-8 py-2 lg:px-20 lg:py-4 mx-auto">
        <ProfileCard size="lg" boldText={true} className="font-bold" />
        <nav>
          <ul className="flex items-center gap-4">
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
    </header>
  );
};

export {};
