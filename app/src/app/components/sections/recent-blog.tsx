import React from "react";
import Link from "next/link";
import { type Article } from "@/types";
import { Grid } from "@/ui/grid";
import { Card } from "@/ui/card";

const recentArticles: Article[] = [
  {
    title: "10 Tips for Building in Public Successfully",
    date: "July 15, 2023",
    shortContent:
      "Building in public is a powerful strategy for creators and entrepreneurs. Here are 10 actionable tips to make your journey a success...",
    href: "link-to-full-article-page-1",
    issueNumber: 18,
  },
  {
    title: "Navigating Challenges in Open Source Projects",
    date: "July 10, 2023",
    shortContent:
      "Contributing to open source projects can be rewarding, but it comes with its own set of challenges. Learn how to navigate these challenges...",
    href: "link-to-full-article-page-2",
    issueNumber: 17,
  },
  {
    title: "The Art of Writing Clean and Maintainable Code",
    date: "July 5, 2023",
    shortContent:
      "Writing code is one thing, but writing clean and maintainable code is a whole different skill. Discover best practices and principles...",
    href: "link-to-full-article-page-3",
    issueNumber: 16,
  },
];

export const RecentBlogs = () => {
  return (
    <section className="flex flex-col items-center gap-12 justify-between bg-[#111827] w-full text-white py-6 lg:py-16">
      <h1 className="font-extrabold text-center text-3xl md:text-4xl lg:text-[42px]">
        Recent Issues of Emmanuel&apos;s Build in Public Weekly
      </h1>
      <div className="container">
        <Grid className=" px-8 lg:px-20" as={"ul"} rowGap={true}>
          {recentArticles.map((article: Article) => {
            const { date, issueNumber, title, href, shortContent } = article;
            return (
              <Card as={"li"} key={date}>
                <Link href={`blogs/${href}`} className="flex flex-col gap-2">
                  <h3 className="font-semibold text-xl text-gray-100">{`BIPW #${issueNumber}: ${title}`}</h3>
                  <span className="text-lg text-gray-400">{date}</span>
                  <article className="leading-6 text-gray-200">
                    {shortContent}
                  </article>
                </Link>
              </Card>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export {};
