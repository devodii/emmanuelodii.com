import React, { memo } from "react";
import Image from "next/image";
import { StackType, StackTypeArray } from "@/types";

const stack: StackTypeArray = [
  {
    name: "Next js",
    src: "/stack/nextjs.png",
  },
  {
    name: "Nest js",
    src: "/stack/nestjs.png",
  },
  {
    name: "Typescript",
    src: "/stack/typescript.png",
  },
  {
    name: "Docker",
    src: "/stack/docker.png",
  },
  {
    name: "Postgresql",
    src: "/stack/postgresql.png",
  },
];

export const StackSection = memo(() => {
  return (
    <section className="w-full bg-white py-6 lg:py-10">
      <div className="container mx-auto flex flex-wrap items-center justify-around">
        {stack.map((stack: StackType) => {
          const { name, src } = stack;
          return (
            <div key={name}>
              <Image
                src={src}
                alt={`Emmanuel odii works with ${name}`}
                width={80}
                height={80}
                className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
                priority
              />
            </div>
          );
        })}
      </div>
    </section>
  );
});

StackSection.displayName = "Stack section";
