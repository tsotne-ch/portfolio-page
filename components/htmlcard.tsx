"use client";
import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";

export function Indent({ children }: any) {
  return <div className=" ml-4">{children}</div>;
}

const Htmlcard = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full md:block hidden">
      <MagicCard
        className="cursor-pointer shadow-2xl whitespace-nowrap text-md p-4"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <code className=" text-gray-500">
          {"<"}
          <span className=" text-pink-400">{"!DOCTYPE "}</span>
          <span className=" text-orange-400 ">{"html"}</span>
          {">"}
        </code>
        <br></br>
        <code className=" text-gray-500">
          {"<"}
          <span className=" text-pink-400">{"html"}</span>
          {">"}
        </code>
        <br></br>
        <code className=" text-gray-500">
          {"<"}
          <span className=" text-pink-400">{"head"}</span>
          {">"}
        </code>
        <br></br>

        <Indent>
          <code className=" text-gray-500">
            {"<"}
            <span className=" text-pink-400">{"link "}</span>
            <span className=" text-orange-400 ">{"href"}</span>
            <span className="">{"="}</span>
            <span className=" text-green-500 dark:text-lime-400">
              {'"./styles/main.css" '}
            </span>
            <span className=" text-orange-400 ">{"rel"}</span>
            <span className="">{"="}</span>
            <span className=" text-green-500 dark:text-lime-400">
              {'"stylesheet" '}
            </span>
            <span className=" text-orange-400 ">{"type"}</span>
            <span className="">{"="}</span>
            <span className=" text-green-500 dark:text-lime-400">
              {'"text/css"'}
            </span>
            {">"}
          </code>
        </Indent>
        <Indent>
          <code className=" text-gray-500">
            {"<"}
            <span className=" text-pink-400">{"title"}</span>
            {">"}
          </code>
          <code>Awesome title!</code>
          <code className=" text-gray-500">
            {"</"}
            <span className=" text-pink-400">{"title"}</span>
            {">"}
          </code>
        </Indent>
        <code className=" text-gray-500">
          {"</"}
          <span className=" text-pink-400">{"head"}</span>
          {">"}
        </code>
        <br></br>
        <code className=" text-gray-500">
          {"<"}
          <span className=" text-pink-400">{"body"}</span>
          {">"}
        </code>
        <Indent>
          <code className=" text-gray-500">
            {"<"}
            <span className=" text-pink-400">{"h1"}</span>
            {">"}
          </code>
          <code>Blogpost #6999</code>
          <code className=" text-gray-500">
            {"</"}
            <span className=" text-pink-400">{"h1"}</span>
            {">"}
          </code>
          <br></br>
          <code className=" text-gray-500">
            {"<"}
            <span className=" text-pink-400">{"main"}</span>
            {">"}
          </code>

          <Indent>
            <code className=" text-gray-500">
              {"<"}
              <span className=" text-pink-400">{"p"}</span>
              {">"}
            </code>

            <Indent>
              <code className="">Baqari is my pookie patooie</code>
            </Indent>

            <code className=" text-gray-500">
              {"</"}
              <span className=" text-pink-400">{"p"}</span>
              {">"}
            </code>
          </Indent>

          <code className=" text-gray-500">
            {"</"}
            <span className=" text-pink-400">{"main"}</span>
            {">"}
          </code>
          <br></br>
          <code className=" text-gray-500">
            {"<"}
            <span className=" text-pink-400">{"script "}</span>
            <span className=" text-orange-400 ">{"href"}</span>
            <span className="">{"="}</span>
            <span className=" text-green-500 dark:text-lime-400">
              {'"./scripts/main.js"'}
            </span>
            {">"}
          </code>
          <code className=" text-gray-500">
            {"</"}
            <span className=" text-pink-400">{"script"}</span>
            {">"}
          </code>
          <br></br>
        </Indent>
        <code className=" text-gray-500">
          {"</"}
          <span className=" text-pink-400">{"body"}</span>
          {">"}
        </code>
      </MagicCard>
    </div>
  );
};

export default Htmlcard;
