import BoxReveal from "@/components/magicui/box-reveal";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaLaravel } from "react-icons/fa";
import { SiFirebase, SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { SiReact } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <div className="container min-h-screen flex items-center mx-auto">
      <div className="lg:grid-cols-2 lg:w-auto w-full lg:justify-start justify-center grid">
        <div className="flex  flex-col gap-5">
          <BoxReveal>
            <h2 className="text-5xl lg:text-7xl py-1 font-bold ">Hello 👋</h2>
          </BoxReveal>
          <BoxReveal>
            <h1 className="text-6xl lg:text-8xl py-1 font-bold">I'm Tsotne!</h1>
          </BoxReveal>
          <BoxReveal>
            <h3 className=" text-4xl lg:text-6xl py-1 font-bold">
              a <span className="text-[#5046e6]">Fullstack</span> developer
            </h3>
          </BoxReveal>
          <div className="mt-3">
            <BoxReveal>
              <div className="flex gap-3 lg:gap-5">
                <FaLaravel size={"2rem"} />
                <SiNextdotjs
                  className="dark:text-white text-black"
                  size={"2rem"}
                />
                <SiExpo className="dark:text-white text-black" size={"2rem"} />
                <SiExpress
                  className="dark:text-white text-black"
                  size={"2rem"}
                />
                <BiLogoPostgresql size={"2rem"} />
                <SiMongodb
                  className="dark:text-white text-black"
                  size={"2rem"}
                />
                <SiReact className="dark:text-white text-black" size={"2rem"} />
                <BiLogoCPlusPlus
                  className="dark:text-white text-black"
                  size={"2rem"}
                />
                <SiFirebase
                  className="dark:text-white text-black"
                  size={"2rem"}
                />
              </div>
            </BoxReveal>
          </div>
        </div>
        <div className="lg:flex hidden justify-center items-center flex-col">
          <BlurFade delay={0.6} className="w-full flex justify-center">
            <div className="w-2/3 aspect-square rounded-full bg-right-top bg-[url(/sad.gif)]"></div>
          </BlurFade>
        </div>
      </div>
      <DotPattern
        width={24}
        height={24}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] -z-10"
        )}
      />
    </div>
  );
}
