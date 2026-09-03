"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const actors = [
  {
    role: "Employer",
    subtitle: "Hiring Targets",
    image: "/home/icons/hiring-target-icon.svg",
    acrossLink:"https://employer.connectec.app/register"
  },
  {
    role: "Recruiter",
    subtitle: "Hiring Delivery",
    image: "/home/icons/successful-placements-icon.svg",
    acrossLink:"https://recruiter.connectec.app/"
  },
  {
    role: "Candidate",
    subtitle: "Career Progress",
    image: "/home/icons/right-talent-icon.svg",
    acrossLink:"https://play.google.com/store/apps/details?id=com.primethic.connectec"
  },
];

export default function ActorCards() {
  return (
    <section className="w-full pt-[5%] pb-[2%] md:py-[1%]">
      <div className="grid grid-cols-1 gap-md md:grid-cols-3">

        {actors.map((actor) => (
          <div
            key={actor.role}
            className="
              relative
              flex
              flex-col
              items-center
              rounded-md
              border
              border-[#DEEDFF]
              bg-white
              p-md
              transition-all
              duration-300
              ease-out
              hover:border-[#0668E1]
              hover:shadow-web-medium
            "
          >

            {/* =================================================
                AVATAR
            ================================================= */}

            <div
              className="
                relative
                flex
                size-iconsize-2xl
                scale-120
                md:scale-100
                items-center
                justify-center
                overflow-hidden
                rounded-full
              "
            >
              <Image
                src={actor.image}
                alt={actor.role}
                fill
                className="object-cover"
              />
            </div>

            {/* =================================================
                ROLE
            ================================================= */}

            <h2
              className="
                mt-md
                text-center
                text-h5
                font-bold
                
              "
            >
              {actor.role}
            </h2>

            {/* =================================================
                SUBTITLE
            ================================================= */}

            <p
              className="
                text-center
                text-xl
                font-bold
                text-[#2C2C2C]
              "
            >
              {actor.subtitle}
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="mt-auto w-full space-y-3 pt-md">

              {/* BEGIN WITHIN */}

              <Link
              href={`/resources/alignment-test/register?mode=single&phase=uncertainty&role=${actor.role.toLowerCase()}`}
                type="button"
                className="
                group
                  flex
                  h-btn-h
                  w-full
                  items-center
                  justify-center
                  gap-5
                  rounded-md
                  border
                  border-[#B2D0F6]
                  bg-white
                  text-base
                  font-medium
                  text-[#0668E1]
                  transition-all
                  duration-300
                  hover:border-[#0668E1]
                  hover:bg-[#F5F9FF]
                "
              >
                <span>Begins Within</span>

                {/* Arrow only appears on hover */}

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
              </Link>

              {/* CONTINUES ACROSS */}

              <Link
              href={actor.acrossLink}
              target={"_blank"}
                type="button"
                className="
                group
                  flex
                  h-btn-h
                  w-full
                  items-center
                  justify-center
                  gap-sm
                  rounded-md
                  border
                  border-[#0668E1]
                  bg-[#0668E1]
                  text-base
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#005FCC]
                "
              >
                <span>Continues Across</span>

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
              </Link>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}