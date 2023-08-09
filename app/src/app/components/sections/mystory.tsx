import React from "react";
import Link from "next/link";

export const MyStory = () => {
  return (
    <div className="flex flex-col gap-4 max-w-6xl  mx-auto">
      <h1 className="inline-flex text-4xl lg:text-5xl font-bold self-start">
        My Story
      </h1>
      <article className="text-gray-300 lg:text-lg break-words flex flex-col gap-2">
        <span className="mt-1">
          I love science subjects (studying these subjects was all great times).
          At 16, I had just graduated from high school when I fell in love with
          software engineering. My parents couldn&apos;t afford a computer to
          help me learn how to write programs. I got up one morning and thought
          about leveraging anything close to me. Fortunately, I struggled to get
          an Android phone, and immediately, I started coding (Yes, on an
          Android phone).
        </span>
        {/*  */}
        <span>
          Soon, I leveraged LinkedIn to show people the things I built with my
          phone (those were great times). I remain very thankful to{" "}
          <Link
            href="https://eduardovedes.com"
            className="underline font-semibold underline-offset-2 mx-1"
          >
            Eduardo Vedes
          </Link>{" "}
          who publicly raised funds to help me get my first computer and later
          became my mentor. Also, to{" "}
          <Link
            href="https://eduardovedes.com"
            className="underline font-semibold underline-offset-2 mx-1"
          >
            Chris Xael
          </Link>{" "}
          who kept pushing me to grow. Big props to all of them.
        </span>
        <p className="text-xl font-medium mt-3">Building in Public:</p>
        <span className="mt-1">
          For me, Building in Public is more than a tagline; it&apos;s a way of
          life. By openly sharing my experiences, successes, and hurdles, I
          inspire others and contribute to the collective growth of the tech
          community.
        </span>

        <span>
          I am actively searching for a junior full-stack role to get my feet
          wet in the industry, and I&apos;m willing to learn and grow
          extensively with any team.
        </span>
        <p className="text-xl font-medium mt-3">My Tech Stack:</p>
        <span className="mt-1">
          React.js, Next.js, TypeScript, Nest.js, Docker, PostgreSQL, SQL
        </span>

        <span className="mt-2">
          If you have an offer, please don&apos;t hesitate to
          <Link
            href="/contact"
            className="underline font-semibold underline-offset-2 mx-1"
          >
            contact
          </Link>
          me as soon as possible.
        </span>
      </article>
    </div>
  );
};

export {};
