"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";

type OutcomeHighlightSectionData = {
  title: string;
  subtitle: string;
  points: string[];
  description?: string;
  description_top?: string;
  footerText: string;
  footerHighlight: string;
  footerSuffix: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bottomTitle?: string;
  bottomHighlight?: string;
};

interface OutcomeHighlightSectionProps {
  data: OutcomeHighlightSectionData;
}

export default function OutcomeHighlightSection({
  data,
}: OutcomeHighlightSectionProps) {
  const {
    title,
    subtitle,
    points,
    description,
    description_top,
    footerText,
    footerHighlight,
    footerSuffix,
    bottomTitle,
    bottomHighlight,
    image,
  } = data;

  const showBottomBlock = !!(bottomTitle && bottomHighlight);
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

  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid items-center gap-8 sm:grid-cols-[1.25fr_0.75fr]">
        {/* Left Content */}
        <div>
          <h2 className="text-h2 font-extrabold text-[#0668E1]">{title}</h2>

          <p className="mt-xs text-h6 font-bold mb-md">{subtitle}</p>

          {description_top && (
            <p className="text-base font-medium mt-md">{description_top} </p>
          )}
          <div className="mt-xs space-y-sm">
            <div className="space-y-[1.8%]">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/tick-gradient-icon.svg"
                    alt="tick icon"
                    className="mt-[0.5%] size-iconsize-sm p-[0.1%]"
                  />
                  <p className="text-base font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-base font-medium mt-md">{description} </p>

          <div className="mt-md">
            <p
              className={`text-base font-medium ${
                showBottomBlock ? "mt-1" : "mt-"
              }`}
            >
              {footerText}{" "}
              <span
                className={`font-bold ${!showBottomBlock ? "text-[#0668E1]" : ""} `}
              >
                {footerHighlight}{" "}
              </span>
              {!showBottomBlock && <br />}
              {footerSuffix}
            </p>

            {showBottomBlock && (
              <h3 className="text-h5 font-bold">
                {bottomTitle}{" "}
                <span className="text-[#0668E1]">{bottomHighlight}</span>
              </h3>
            )}
          </div>
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
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[90%]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
