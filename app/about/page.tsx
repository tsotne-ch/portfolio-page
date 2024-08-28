import BlurFade from "@/components/magicui/blur-fade";
import BoxReveal from "@/components/magicui/box-reveal";
import DotPattern from "@/components/magicui/dot-pattern";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoPostgresql, BiLogoCPlusPlus } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpo,
  SiExpress,
  SiMongodb,
  SiReact,
  SiVite,
  SiGithub,
} from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import { TbChevronLeft } from "react-icons/tb";

export const metadata = {
  title: "About me",
};

const Page = () => {
  return (
    <div className="container min-h-screen py-36 mx-auto">
      <BoxReveal duration={0.5}>
        <h1 className="text-6xl lg:text-8xl py-1 font-bold">About me</h1>
      </BoxReveal>
      <div className="mt-10 mb-10 flex flex-col gap-6">
        <BoxReveal>
          <p className="text-2xl font-semibold">
            Hey there, I am a Full stack web developer based in{" "}
            <a
              className=" border-red-500 inline-block font-bold text-red-500"
              href="https://en.wikipedia.org/wiki/Georgia_(country)"
            >
              Georgia
            </a>
            , currently working on improving Android/IOS app development with{" "}
            <a
              className=" border-white inline-block font-bold"
              href="https://expo.dev/"
            >
              Expo
            </a>{" "}
            and Data Structures and Algorithms with{" "}
            <a
              className=" border-gray-500 inline-block font-bold text-gray-500"
              href="https://www.learn-c.org/"
            >
              C
            </a>{" "}
            and{" "}
            <a
              className=" border-blue-500 inline-block font-bold text-blue-500"
              href="https://www.learncpp.com/"
            >
              C++
            </a>
          </p>
        </BoxReveal>
        <BoxReveal>
          <p className="text-2xl font-semibold">
            I currently don't take commissions and just made this portfolio page
            for fun. Im totally not stretching this text cuz why not idk what
            else to put. i have ur ip btw this website stores ips lmfao.
            dumbass. paata pookie
          </p>
        </BoxReveal>
      </div>
      <BoxReveal duration={0.5}>
        <h2 className="text-4xl lg:text-5xl py-1 font-bold">Tech stack</h2>
      </BoxReveal>
      <BlurFade className="mt-10 mb-10" delay={0.5}>
        <div className="flex gap-3 lg:gap-5">
          <Link
            href="https://laravel.com/"
            className="hover:scale-125 duration-200 ease-out transition-transform"
          >
            <FaLaravel size={"1.7rem"} />
          </Link>
          <Link
            href="https://nextjs.org/"
            className="hover:scale-125 duration-200 ease-out transition-transform"
          >
            <SiNextdotjs
              className="dark:text-white text-black"
              size={"1.7rem"}
            />
          </Link>

          <Link
            href="https://expo.dev/"
            className="hover:scale-125 duration-200 ease-out transition-transform"
          >
            <SiExpo className="dark:text-white text-black" size={"1.7rem"} />
          </Link>
          <Link
            href="https://expressjs.com/"
            className="hover:scale-125 duration-200 ease-out transition-transform"
          >
            <SiExpress className="dark:text-white text-black" size={"1.7rem"} />
          </Link>
          <Link
            href="https://www.postgresql.org/"
            className="hover:scale-125 duration-200 ease-out transition-transform"
          >
            <BiLogoPostgresql size={"1.7rem"} />
          </Link>
          <Link
            href="https://www.mongodb.com/"
            className="hover:scale-125 duration-200 ease-out transition-transform"
          >
            <SiMongodb className="dark:text-white text-black" size={"1.7rem"} />
          </Link>
          <Link
            href="https://react.dev/"
            className="hover:scale-125 duration-200 ease-out transition-transform"
          >
            <SiReact className="dark:text-white text-black" size={"1.7rem"} />
          </Link>
          <Link
            href="https://cplusplus.com/"
            className="hover:scale-125 duration-200 ease-out transition-transform"
          >
            <BiLogoCPlusPlus
              className="dark:text-white text-black"
              size={"1.7rem"}
            />
          </Link>
          <Link
            href="https://firebase.google.com/"
            className="hover:scale-125 duration-200 ease-out transition-transform"
          >
            <SiFirebase
              className="dark:text-white text-black"
              size={"1.7rem"}
            />
          </Link>
        </div>
      </BlurFade>
      <BoxReveal duration={0.5}>
        <h2 className="text-4xl lg:text-5xl py-1 font-bold">Recent projects</h2>
      </BoxReveal>
      <BlurFade className="mt-14 mb-10" delay={0.5}>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className=" relative rounded-2xl">
            <CardHeader>
              <Image
                alt="vekua logo"
                src="/vekua.png"
                width={81}
                height={81}
                className="p-1 absolute z-10 -top-5 -left-5 bg-white rounded-full"
              />
            </CardHeader>
            <CardContent>
              <div className="relative bg-black rounded-xl group">
                <img
                  alt="vekua page"
                  src="/vek2.png"
                  className="w-full group-hover:opacity-25 transition-opacity ease-in-out duration-200 rounded-xl"
                />
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-200 top-2 left-2 right-2">
                  <code className="text-xs  md:block hidden  md:text-base">
                    <span className=" text-blue-400">import </span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-white">React</span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-blue-400"> from </span>
                    <span className=" text-cyan-300">"</span>
                    <span className=" text-lime-400">react</span>
                    <span className=" text-cyan-300">";</span>
                    <br></br>
                    <span className=" text-blue-400">import </span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-white">VekuaSchoolApp</span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-blue-400"> from </span>
                    <span className=" text-cyan-300">"</span>
                    <span className=" text-lime-400">./Vekua</span>
                    <span className=" text-cyan-300">";</span>
                    <br></br>
                    <br></br>
                    <span className=" text-blue-400">export </span>
                    <span className=" text-blue-400">default </span>
                    <span className=" text-blue-400">function </span>
                    <span className=" text-white">App </span>
                    <span className=" text-white">() </span>
                    <span className=" text-yellow-400">{"{"}</span>
                    <br />
                    <span className="pl-4">
                      <span className=" text-cyan-300 italic">
                        return {"<"}
                      </span>
                      <span className=" text-yellow-400">
                        {"VekuaSchoolApp "}
                      </span>
                      <span className=" text-cyan-300 italic">{"/>"}</span>
                    </span>
                    <br></br>
                    <span className=" text-yellow-400">{"}"}</span>
                    <br />
                  </code>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Firebase</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express</Badge>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <Link href="https://github.com/tsotne-ch/vekua-school">
                  <Badge variant="secondary" className="gap-2">
                    <SiGithub /> Source code
                  </Badge>
                </Link>
                <Link href="https://vekua42.edu.ge/">
                  <Badge className="gap-1">
                    <TbChevronLeft /> Visit
                  </Badge>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className=" relative rounded-2xl">
            <CardHeader>
              <Image
                alt="Geomedi logo"
                src="/geomedi.png"
                width={81}
                height={81}
                className="p-1 absolute z-10 -top-5 -left-5 bg-white rounded-full"
              />
            </CardHeader>
            <CardContent>
              <div className="relative bg-black rounded-xl group">
                <img
                  alt="Geomedi page"
                  src="/geo2.png"
                  className="w-full group-hover:opacity-25 transition-opacity ease-in-out duration-200 rounded-xl"
                />
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-200 top-2 left-2 right-2">
                  <code className="text-xs  md:block hidden  md:text-base">
                    <span className=" text-blue-400">import </span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-white">express</span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-blue-400"> from </span>
                    <span className=" text-cyan-300">"</span>
                    <span className=" text-lime-400">express</span>
                    <span className=" text-cyan-300">";</span>
                    <br></br>

                    <span className=" text-blue-400">import </span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-white">GeomediApp</span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-blue-400"> from </span>
                    <span className=" text-cyan-300">"</span>
                    <span className=" text-lime-400">geo-medi.ge</span>
                    <span className=" text-cyan-300">";</span>
                    <br></br>

                    <span className=" text-blue-400">const </span>
                    <span className=" text-gray-300">app </span>
                    <span className=" text-purple-400">= </span>
                    <span className=" text-blue-400">express</span>
                    <span className=" text-white">();</span>
                    <br></br>
                    <br></br>
                    <span className=" text-white">app</span>
                    <span className=" text-white">.</span>
                    <span className=" text-blue-400">use</span>
                    <span>(</span>
                    <span className=" text-white">express</span>
                    <span className=" text-white">.</span>
                    <span className=" text-blue-400">json</span>
                    <span className=" text-white">()</span>
                    <span className=" text-white">);</span>
                    <br></br>
                    <span className=" text-white">app</span>
                    <span>.</span>
                    <span className=" text-blue-400">use</span>
                    <span className=" text-white">(</span>
                    <span className=" text-blue-400">GeomediApp</span>
                    <span className=" text-white">()</span>
                    <span className=" text-white">);</span>
                  </code>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-4">
                <Badge variant="secondary">JWT</Badge>
                <Badge variant="secondary">JQuery</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express</Badge>
              </div>
              <div className="flex gap-3 items-center mt-4">
                {/* <Link href="https://github.com/tsotne-ch/vekua-school">
                  <Badge variant="secondary" className="gap-2">
                    <SiGithub /> Source code
                  </Badge>
                </Link> */}
                <Link href="https://vekua42.edu.ge/">
                  <Badge className="gap-1">
                    <TbChevronLeft /> Visit
                  </Badge>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className=" relative rounded-2xl">
            <CardHeader>
              <Image
                alt="Aestheticmedi logo"
                src="/aes.jpg"
                width={81}
                height={81}
                className=" absolute z-10 -top-5 -left-5  rounded-full"
              />
            </CardHeader>
            <CardContent>
              <div className="relative group bg-black rounded-xl">
                <img
                  alt="Aestheticmedi page"
                  src="/ae.png"
                  className="w-full group-hover:opacity-25 transition-opacity ease-in-out duration-200 rounded-xl"
                />

                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-200 top-2 left-2 right-2">
                  <code className="md:text-base md:block hidden text-xs">
                    <span className=" text-cyan-300">"</span>
                    <span className=" text-lime-400">use client</span>
                    <span className=" text-cyan-300">"</span>
                    <span className=" text-white">;</span>
                    <br />
                    <span className=" text-blue-400">import </span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-white">AestheticMedi</span>
                    <span className=" text-yellow-400"> </span>
                    <span className=" text-blue-400"> from </span>
                    <span className=" text-cyan-300">"</span>
                    <span className=" text-lime-400">aesthetics</span>
                    <span className=" text-cyan-300">"</span>
                    <span className=" text-white">;</span>
                    <br></br>
                    <br></br>
                    <span className=" text-blue-400">const </span>
                    <span className=" text-white">page </span>
                    <span className=" text-purple-400">= </span>
                    <span className=" text-white">() </span>
                    <span className=" text-purple-400">={">"} </span>
                    <span className=" text-yellow-400">{"{"}</span>
                    <br></br>
                    <span className="pl-4">
                      <span className=" text-cyan-300 italic">
                        return {"<"}
                      </span>
                      <span className=" text-yellow-400">
                        {"AestheticMedi.JSX "}
                      </span>
                      <span className=" text-cyan-300 italic">{"/>"}</span>
                    </span>
                    <br></br>
                    <span className=" text-yellow-400">{"}"}</span>
                    <br />
                    <span className=" text-blue-400">export </span>
                    <span className=" text-blue-400">default </span>
                    <span className=" text-white">page</span>
                    <span className=" text-white">;</span>
                  </code>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-4">
                <Badge variant="secondary">JWT</Badge>
                <Badge variant="secondary">Next.JS</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>
              <div className="flex gap-3 items-center mt-4">
                {/* <Link href="https://github.com/tsotne-ch/vekua-school">
                  <Badge variant="secondary" className="gap-2">
                    <SiGithub /> Source code
                  </Badge>
                </Link> */}
                <Link href="https://aesthetics.geo-medi.ge">
                  <Badge className="gap-1">
                    <TbChevronLeft /> Visit
                  </Badge>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </BlurFade>
      <DotPattern
        width={24}
        height={24}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] -z-10"
        )}
      />
    </div>
  );
};

export default Page;
