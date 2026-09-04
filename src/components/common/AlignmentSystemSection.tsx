"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


type ViewLink = {
  title: string;
  linkText?: string;
};

type AlignmentItem = {
  title: string;
  linkText: string;
  link:string
};

type ViewData = {
  label: string;
  icon: string;
  title: string;
  description: string;
  answers: string[];
  see: string[];
  act: string[];
  outcome: string;
  links: ViewLink[];
};

type RoleData = {
  eyebrow: string;
  headingFirst: string;
  headingHighlight: string;
  intro: string;

  tabs: string[];

  views: Record<string, ViewData>;

  cards: AlignmentItem[];
};

export default function AlignmentSystemSection({ data }: { data: RoleData }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0]);

  const activeView = data.views[activeTab];

  const router=useRouter()
  return (
    <main className="min-h-screen">
      <div className="mx-auto ">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold uppercase text-primary"
        >
          {data.eyebrow}
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className=" text-h2 font-extrabold leading-tight"
        >
          {data.headingFirst}{" "}
          <span className="text-primary block md:inline-block">{data.headingHighlight}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-md text-base font-medium"
        >
          {data.intro}
        </motion.p>
{/* Tabs */}
<div className="mt-lg flex gap-sm overflow-x-auto md:overflow-visible py-md scrollbar-hidden">
  {data.tabs.map((tab, index) => {
    const active = activeTab === tab;

    return (
      <motion.button
        key={tab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          delay: 0.1 + index * 0.05,
        }}
       onClick={(e) => {
  setActiveTab(tab);

  // Mobile only
  if (window.innerWidth < 768) {
    const button = e.currentTarget;
    const container = button.parentElement;

    if (container) {
      const buttonCenter =
        button.offsetLeft + button.offsetWidth / 2;

      const containerCenter = container.clientWidth / 2;

      const maxScrollLeft =
        container.scrollWidth - container.clientWidth;

      const targetScroll =
        buttonCenter - containerCenter;

      // Keep scroll strictly inside the tabs container
      const safeScroll = Math.max(
        0,
        Math.min(targetScroll, maxScrollLeft)
      );

      container.scrollTo({
        left: safeScroll,
        behavior: "smooth",
      });
    }
  }
}}
        className={`relative h-btn-h w-[clamp(110px,calc(172_/_var(--width)*100vw),330px)] shrink-0 cursor-pointer rounded-md border text-xl transition-all duration-200 ${
          active
            ? "border-[#086be3] bg-primary font-bold text-white"
            : "border-[#DEEDFF] bg-white font-medium hover:border-[#086be3] hover:text-primary"
        }`}
      >
        {tab}
      </motion.button>
    );
  })}
</div>

        {/* Main content card */}
        <motion.section
          layout
          className="mt-sm overflow-hidden rounded-md border border-[#DEEDFF] bg-white shadow-web-medium"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="p-6 md:p-7"
            >
              {/* Top area */}
              <div className="flex flex-col gap-[1.5%] md:flex-row">
                {/* Illustration */}
                <div className="flex size-[clamp(60px,calc(120_/_var(--width)*100vw),300px)] shrink-0 items-center justify-center">
                  <Image
                  src={activeView.icon}
                  alt={activeView.title}
                  width={300}
                  height={300}
                  className="h-[clamp(60px,calc(120_/_var(--width)*100vw),300px)] w-[clamp(60px,calc(120_/_var(--width)*100vw),300px)] rounded-md object-contain"
                />
                </div>

                {/* Title + description */}
                <div className="flex-1">
                  <h3 className="text-h5 font-bold">{activeView.title}</h3>

                  <p className="mt-xs text-xl font-medium">
                    {activeView.description}
                  </p>

                 {/* Dynamic Links */}
<div className="mt-xs flex flex-wrap items-center gap-y-xs">
  {activeView.links.map((link, index) => (
    <div
      key={`${link.title}-${index}`}
      className="flex items-center flex-wrap  text-wrap"
    >
      {/* Link title */}
      <button className=" mt-1 text-nowrap text-xl font-medium text-primary hover:underline">
        {link.title}
      </button>

      {/* Arrow + secondary link */}
      {link.linkText && (
        <>
          <span className="mt-1 mx-md text-xl font-light text-[#006ce5]">
            »
          </span>

          <button className="mt-1 text-nowrap text-xl font-medium text-primary hover:underline">
            {link.linkText}
          </button>
        </>
      )}

      {/* Divider between link groups */}
      {index !== activeView.links.length - 1 && (
        <span className="mx-md h-4 md:h-6 w-px bg-primary block shrink-0" />
      )}
    </div>
  ))}
</div>
                </div>
              </div>

              {/* Details */}
              <div className="mt-md grid gap-y-sm gap-x-[1.5%] md:grid-cols-[clamp(60px,calc(120_/_var(--width)*100vw),300px)_1fr]">
                <div className="text-xl font-bold">Answers:</div>

                <div className="space-y-xs text-xl font-medium">
                  {activeView.answers.map((item) => (
                    <p key={item} className="text-xl font-medium">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="text-xl font-bold text-[#363636]">See:</div>

                <div className="flex flex-wrap items-center gap-y-2 text-[#303030]">
                  {activeView.see.map((item, index) => (
                    <div key={item} className="flex items-center">
                      <span className="text-xl font-medium">{item}</span>

                      {index !== activeView.see.length - 1 && (
                        <span className="mx-sm text-h5 text-[#727272]">»</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="text-xl font-bold">Act:</div>

                <div className="flex flex-wrap items-center gap-y-xs">
                  {activeView.act.map((item, index) => (
                    <div key={item} className="flex items-center">
                      <span className="text-xl font-medium">{item}</span>

                      {index !== activeView.act.length - 1 && (
                        <span className="mx-sm text-h5 text-[#727272]">»</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="text-xl font-bold">Outcome:</div>

                <div className="text-xl font-medium">{activeView.outcome}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* Bottom cards */}
        <motion.div
          layout
          className="mt-md grid grid-cols-1 gap-sm sm:grid-cols-2 lg:grid-cols-4"
        >
          {data.cards.map((card, index) => (
            <motion.div
            onClick={()=>router.push(card.link)}
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
              whileTap={{ scale: 0.98 }}
              className="
              cursor-pointer
      rounded-md
      md:bg-gradient-to-b
      from-[#0074FF]
      to-[#004BA6]
      md:p-[2px]
      border-[#B2D0F6]
      border md:border-0
    "
            >
              <button
                className="
                cursor-pointer
    group
    min-h-[75px]
    w-full
    rounded-md
    bg-white
    p-sm
    text-left
    hover:text-white
    shadow-web-medium
    transition-colors
    duration-700
    ease-in-out
    hover:bg-primary
    flex items-center  justify-between
  "
              >
                <div className="flex flex-col">
                  <div className="">
                    <span className="text-xl font-medium">{card.title}</span>
                  </div>

                  <div
                    className="md:mt-xs text-base font-bold text-primary duration-700
    ease-in-out group-hover:text-white"
                  >
                    {card.linkText}
                  </div>
                </div>
                <ArrowRight
                  size={22}
                  strokeWidth={1.8}
                  className="
                  size-iconsize-sm
                  font-bold
        group-hover:text-white
        text-primary
        transition-transform
        duration-700
        group-hover:translate-x-2
        mr-md md:mr-0
      "
                />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
