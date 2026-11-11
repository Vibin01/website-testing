"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// ============================================================
// TYPES
// ============================================================

type ActorCard = {
  id: string;
  role: string;
  title: string;
  avatar: string;
  link: string;
};

// ============================================================
// DATA
// ============================================================

const actors: ActorCard[] = [
  {
    id: "employer",
    role: "Employers",
    title: "Hiring Targets",
    avatar: "/home/icons/right-talent-icon.svg",
    link: "https://employer.connectec.app/register",

  },
  {
    id: "recruiter",
    role: "Recruiters",
    title: "Hiring Delivery",
    avatar: "/home/icons/successful-placements-icon.svg",
    link: "https://play.google.com/store/apps/details?id=com.primethic.connectec",

  },

  {
    id: "candidate",
    role: "Candidate",
    title: "Career Progress",
    avatar: "/home/icons/hiring-target-icon.svg",
    link: "https://play.google.com/store/apps/details?id=com.primethic.connectec",


  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function HiringAlignmentCTA() {
  return (
    <section className="w-full py-[3]">
      <div
        className="
          relative
          mx-auto
          w-full
          
          overflow-hidden
          rounded-xl
          border
          border-[#5D9DF5]
          p-md
        md:p-xl
        "
        style={{
          background:
            "linear-gradient(190.87deg, #0075FF 15.37%, #004BA6 84.69%)",
        }}
      >
        {/* ====================================================
            CONTENT
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-lg

            md:flex-row
            md:items-center
            md:justify-between
            md:gap-xl
            
          "
        >


          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <div className="min-w-0 ">

            <p className="text-h5 text-white font-bold">Three Actors. Three Journeys.</p>
            <h2 className="text-h2 text-white font-extrabold pb-xl">All Aligned</h2>


            {/* Actor cards */}

            <div
              className="
                grid
                grid-cols-1
                gap-md

                sm:grid-cols-3
                

              "
            >
              {actors.map((actor) => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
            </div>

            <div className="md:hidden flex justify-center mt-xl">
              <PhonePreview />
            </div>
            {/* ==================================================
                CTA AREA
            ================================================== */}

          </div>

          {/* ==================================================
              RIGHT PHONE
          ================================================== */}
          <div className="hidden md:flex h-full">
            <PhonePreview />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ACTOR CARD
// ============================================================

function ActorCard({ actor }: { actor: ActorCard }) {
  return (
    <article
      className="
        relative
        group
        cursor-pointer
        flex
        flex-row
        items-center
        md:min-h-[152px]
        md:flex-col
        md:items-start
        rounded-md
        bg-white
        p-md

        shadow-web-mini

        transition-all
        duration-300

        gap-sm
        hover:shadow-web-small
      "
      onClick={() => window.open(actor.link, "_blank")}
    >
      {/* Top-Right Up Arrow on Hover */}
      <div className="absolute top-md right-md">
        <div
          className="
            flex
            p-1
            items-center
            justify-center
            rounded-full
            bg-[#0668E1]
            text-white
            shadow-sm
            opacity-0
            translate-y-1
            -translate-x-1
            transition-all
            duration-300
            ease-out
            group-hover:opacity-100
            group-hover:scale-100
            group-hover:translate-y-0
            group-hover:translate-x-0
          "
        >
          <ArrowUpRight className="size-sm stroke-[2.5]" />
        </div>
      </div>

      {/* Avatar */}
      <div>
        <Image
          src={actor.avatar}
          alt={actor.role}
          width={52}
          height={52}
          className="size-iconsize-2xl scale-120 md:scale-100 md:size-iconsize-lg object-cover"
        />
      </div>
      <div>
        {/* Role */}

        <h3
          className="
          mt-xs
          text-xl
          font-medium
        "
        >
          {actor.role}
        </h3>

        {/* Title */}

        <p
          className="
        
          text-base
          font-bold
          text-[#0668E1]
        "
        >
          {actor.title}
        </p>
      </div>
    </article>
  );
}

// ============================================================
// PHONE PREVIEW
// ============================================================

function PhonePreview() {
  return (
    <div className="flex ">
      <Image
        src="/home/hiring-banner.svg"
        alt="Connect EC mobile application"
        width={300}
        height={200}
        className=" w-[600px] h-auto sm:h-[clamp(200px,calc(280_/_var(--width)*100vw),600px)] sm:w-auto object-contain"
      />
    </div>
  );
}
