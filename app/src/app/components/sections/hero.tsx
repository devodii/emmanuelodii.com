import { Button } from "@/ui/button";
import Image from "next/image";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <section className="min-h-full py-12 lg:py-20 w-full flex justify-center mx-auto text-white ">
      <div className="md:w-1/2 justify-center flex flex-col gap-3 px-8 lg:px-20">
        <div className="flex flex-col gap-2 font-bold text-4xl lg:text-5xl lg:max-w-lg w-full text-center lg:text-left">
          <h1> Full-stack Developer</h1>
          <h1>
            & Builder in <span className="text-indigo-600">Public</span>
          </h1>
        </div>

        <span className="text-lg text-gray-100 leading-[30px] text-center lg:text-left">
          Hey there! I&apos;m Emmanuel, a self-taught full-stack developer eager
          to learn and build. highly dedicated to scalable solutions and
          effective problem-solving,
          <br />
          I&apos;m committed to sharing my experience of building in public and
          supporting others in their journey.
        </span>

        <Button
          variant={"primary"}
          className={"mt-2 max-w-md mx-auto w-full lg:mx-0"}
          text={"Download Resume"}
        />
      </div>

      <div className="md:w-1/2 items-start hidden lg:flex ">
        <Image
          src="/emmanuel.png"
          placeholder="blur"
          alt="Emmanuel odii"
          width={480}
          height={480}
          blurDataURL="/emmanuel.jpg"
        />
      </div>
    </section>
  );
};
