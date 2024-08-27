"use client";
import { delay } from "@/utils/LinkRoute";
import React, { useEffect, useState } from "react";

const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    console.log("a");
    async function rem() {
      await delay(100);
      console.log("b");
      document.querySelector(".__ts__anim")?.classList.remove("active");
      console.log("c");
    }

    rem();
  }, []);

  return (
    <>
      <div className={"bg-[#5046e6] __ts__anim active"}></div>
      {children}
    </>
  );
};

export default Template;
