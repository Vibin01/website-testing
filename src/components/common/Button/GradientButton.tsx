"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

export const GradientButton = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  return (
    <>
      <button id={text} className="group gap-xs flex justify-center items-center bg-[linear-gradient(203.87deg,#0075FF_15.37%,#004BA6_84.69%)] cursor-pointer font-bold text-white text-xl w-fit h-btn-h rounded-[12px] px-lg">
       <span>{text}</span> 
         <ArrowRight
                          className="
                           size-iconsize-sm
                            opacity-0
                            -translate-x-2
                            transition-all
                            duration-300
                            group-hover:translate-x-0
                            group-hover:opacity-100
                          "
                        />
      </button>
    </>
  );
};
