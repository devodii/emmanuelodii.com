import { FC, ReactNode } from "react";
import { Hero } from "./index";

type HomepageType = {
  Hero: typeof Hero;
};

export const Homepage: FC<{ children: ReactNode }> & HomepageType = ({
  children,
}) => {
  return (
    <div className="w-full bg-[#111827]">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

Homepage.Hero = Hero;

export {};
