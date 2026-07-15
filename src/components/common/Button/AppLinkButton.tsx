import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

type AppLinkButtonProps = {
    url: string;
    text:string
};

export const AppLinkButton = ({url,text}: AppLinkButtonProps) => {
  return (
          <Link href={url} target="_blank" className=" h-btn-h text-nowrap  bg-[#0668E1] border-2 border-[#0072FF] cursor-pointer rounded-[12px] px-md py-sm flex items-center justify-center gap-sm">
                      <span className=" font-bold text-xl text-white">
                        {text}
                      </span>
        
                      <FaArrowRight className="text-white text-base"/>
                    </Link>
  )
}
