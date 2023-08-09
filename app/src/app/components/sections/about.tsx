import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MyStory } from "./mystory";

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-16 px-6 md:px-12 lg:px-40 py-24 border ">
      <div className=" flex flex-col md:flex-row justify-center gap-12">
        <div className="border-2 border-indigo-600 px-4 py-2 rounded-full min-h-[200px] min-w-[300px]">
          <Image
            src="/emmanuel.png"
            placeholder="blur"
            alt="Emmanuel odii"
            width={300}
            height={200}
            blurDataURL="/emmanuel.jpg"
            className="rounded-full"
          />{" "}
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-1 w-40 bg-white"></div>
          <h1 className="text-3xl lg:text-[50px] leading-[60px] font-bold max-w-md break-words ">
            Nice to meet you, I&apos;m Emmanuel
          </h1>
          <p className="text-gray-300 lg:text-xl max-w-2xl">
            I&apos;m someone who loves working on all parts of making websites.
            I started by learning on my own and now I&apos;m really into getting
            really good at it and solving tricky problems in creative ways.
          </p>
        </div>
      </div>

      <div>
        <MyStory />
      </div>
    </div>
  );
};
