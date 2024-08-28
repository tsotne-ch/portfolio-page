import BlurFade from "@/components/magicui/blur-fade";
import BoxReveal from "@/components/magicui/box-reveal";
import DotPattern from "@/components/magicui/dot-pattern";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
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
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MagicCard } from "@/components/magicui/magic-card";
import Htmlcard from "@/components/htmlcard";

export const metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <div className="container min-h-screen py-36 mx-auto">
      <BoxReveal duration={0.5}>
        <h1 className="text-6xl lg:text-8xl py-1 font-bold">Get in Touch</h1>
      </BoxReveal>

      <div className="mt-10 flex flex-col gap-5">
        <BoxReveal>
          <p className="text-xl items-center flex gap-4 font-semibold">
            <FaDiscord size={"2.2rem"} /> .tht1kid
          </p>
        </BoxReveal>
        <BoxReveal>
          <p className="text-xl items-center flex gap-4 font-semibold">
            <MdEmail size={"2.2rem"} /> tchavtchavadze.ts@gmail.com
          </p>
        </BoxReveal>
        <BoxReveal>
          <p className="text-xl items-center flex gap-4 font-semibold">
            <SiGithub size={"2.2rem"} /> tsotne-ch
          </p>
        </BoxReveal>
      </div>
      <div className="mt-24 flex md:justify-start justify-center">
        <BoxReveal duration={0.5}>
          <h1 className="text-3xl lg:text-5xl py-1 text-center font-bold">
            Send a message!
          </h1>
        </BoxReveal>
      </div>
      <BlurFade
        delay={0.5}
        className="mt-10 flex justify-center md:grid md:grid-cols-2 md:gap-5"
      >
        <div className="grid w-full gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="msg">Message</Label>
            <Textarea id="msg"></Textarea>
          </div>
          <Button type="submit" className="w-full">
            Send message
          </Button>
        </div>
        <Htmlcard />
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
