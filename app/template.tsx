"use client";
import { delay } from "@/utils/LinkRoute";
import React, { useEffect, useState } from "react";

const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    async function rem() {
      await delay(100);
      document.querySelector(".__ts__anim")?.classList.remove("active");
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
