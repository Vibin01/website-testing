"use client";
<<<<<<< HEAD
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa6';

export const HeroSection = ({title,description}:{title:string,description:string}) => {
      const pathname=usePathname();
=======
import { TriangleAlert } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa6';
import { toast } from 'sonner';

export const HeroSection = ({title,description}:{title:string,description:string}) => {
      const pathname=usePathname();
      const showDesktopWarning = () => {
  toast.custom((t) => (
     <div className="relative flex  items-start gap-xs rounded-lg border border-[#F5C451] bg-white p-sm shadow-lg">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FFF7DB]">
            <TriangleAlert className="size-iconsize-sm text-[#D99A00]" />
          </div>
    
          <div className="flex-1">
            <p className="text-base font-semibold text-[#222]">
              Desktop browser recommended
            </p>
    
            <p className="mt-1 text-[13px] font-medium leading-5 text-[#666]">
              For the best experience, please use a desktop browser to access the
              dashboard.
            </p>
          </div>
    
          <button
            onClick={() => toast.dismiss(t)}
            className="text-sm font-medium text-[#666] hover:text-[#222]"
          >
            ✕
          </button>
        </div>
  ));
};

const isCandidate = pathname.includes("candidate");
const isRecruiter = pathname.includes("recruiter");
const isEmployer = pathname.includes("employer");
>>>>>>> 569b9e4 (new da)
    
  return (
    <div className="flex flex-col items-center justify-center py-[5%]">
              <h1 className="text-h1 font-extrabold text-center text-[#0668E1]">
                {title}
              </h1>
              <h2 className="text-h2 font-extrabold text-center">
                {description}
              </h2>
<<<<<<< HEAD
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
=======
                      <>
    {/* Mobile Candidate & Recruiter */}
    {(isCandidate || isRecruiter) && (
      <Link
        href="https://play.google.com/store/apps/details?id=com.primethic.connectec"
        target="_blank"
        className="md:hidden w-fit mt-lg h-btn-h text-nowrap bg-[#0668E1] border-2 cursor-pointer border-[#0072FF] rounded-[12px] px-md py-sm flex items-center justify-center gap-sm"
      >
        <span className="font-bold text-xl text-white">
          Unlock Connect EC for Free
        </span>

        <FaArrowRight className="text-white text-base" />
      </Link>
    )}

    {/* Mobile Employer */}
    {isEmployer && (
      <button
        type="button"
        onClick={showDesktopWarning}
        className="md:hidden w-fit mt-lg h-btn-h text-nowrap bg-[#0668E1] border-2 cursor-pointer border-[#0072FF] rounded-[12px] px-md py-sm flex items-center justify-center gap-sm"
      >
        <span className="font-bold text-xl text-white">
          Unlock Connect EC for Free
        </span>

        <FaArrowRight className="text-white text-base" />
      </button>
    )}

    {/* Desktop */}
    <Link
      href={
        isCandidate
          ? "https://play.google.com/store/apps/details?id=com.primethic.connectec"
          : isRecruiter
            ? "https://recruiter.connectec.app/register"
            : "https://employer.connectec.app/register"
      }
      target="_blank"
      className="hidden md:flex w-fit mt-lg h-btn-h text-nowrap bg-[#0668E1] border-2 cursor-pointer border-[#0072FF] rounded-[12px] px-md py-sm items-center justify-center gap-sm"
    >
      <span className="font-bold text-xl text-white">
        Unlock Connect EC for Free
      </span>

      <FaArrowRight className="text-white text-base" />
    </Link>
  </>
>>>>>>> 569b9e4 (new da)
            </div>
  )
}
