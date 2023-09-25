import { Homepage, StackSection } from "@/components/sections";
import { RecentBlogs } from "./components/sections/recent-blog";
import { Projects } from "./components/sections";
import { ConnectWithMe } from "./components/sections/connect-with-me";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-between">
      <Homepage>
        <Homepage.Hero />
      </Homepage>
      <StackSection />
      {/* <RecentBlogs /> */}
      <Projects />
      <ConnectWithMe />
    </div>
  );
}
