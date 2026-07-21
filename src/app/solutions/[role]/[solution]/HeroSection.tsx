"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa6';

export const HeroSection = ({title,description}:{title:string,description:string}) => {
      const pathname=usePathname();
    
  return (
    <div className="flex flex-col items-center justify-center py-[5%]">
              <h1 className="text-h1 font-extrabold text-center text-[#0668E1]">
                {title}
              </h1>
              <h2 className="text-h2 font-extrabold text-center">
                {description}
              </h2>
                       <Link href={
      pathname.includes("candidate")
        ? "https://play.google.com/store/apps/details?id=com.primethic.connectec"
        : pathname.includes("recruiter")
          ? "https://recruiter.connectec.app/register"
          : "https://employer.connectec.app/register"
    } target="_blank" className="w-fit mt-lg h-btn-h text-nowrap  bg-[#0668E1] border-2 cursor-pointer border-[#0072FF] rounded-[12px] px-md py-sm flex items-center justify-center gap-sm">
            <span className=" font-bold text-xl text-white">
              Unlock Connect EC for Free
            </span>

            <FaArrowRight className="text-white text-base" />
          </Link>
            </div>
  )
}
