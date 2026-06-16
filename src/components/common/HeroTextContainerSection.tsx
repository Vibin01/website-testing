import Link from "next/link";
import React, { JSX } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface HeroTextContainerSectionProps {
  data: {
    title: string;
    sub_title: string;
    description: string;
    button_text: string;
    button_link: string;
   
  };
}


export const HeroTextContainerSection =  ({
  data,
}: HeroTextContainerSectionProps) => {
  return (
    <>
      <div className="mt-[10%] md:mt-0 w-full flex flex-col pb-[5%] lg:pb-0 items-center justify-center">
          <h1 className="text-h1 font-extrabold text-[#0668E1]">
         {data.title}

        </h1>
        <h2 className="mb-md text-h2 font-extrabold text-center">
          {data.sub_title}

        </h2>
      
        <p className="mb-sm text-center text-h6 font-bold">
          <span className="font-medium">{data.description} </span>
          
        </p>
        <Link href={"https://play.google.com/store/apps/details?id=com.primethic.connectec"} target="_blank" className=" h-btn-h text-nowrap  bg-[#0668E1] border-2 border-[#0072FF] cursor-pointer rounded-[12px] px-md py-sm flex items-center justify-center gap-sm">
                      <span className=" font-bold text-xl text-white">
                        Unlock Connect EC for Free
                      </span>
        
                      <FaArrowRight className="text-white text-base"/>
                    </Link>
      </div>
    </>
  );
};
