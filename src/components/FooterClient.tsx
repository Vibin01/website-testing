"use client";
import { usePathname } from "next/navigation";
import { FaInstagram, FaYoutube, FaMediumM } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FooterClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const router = useRouter();

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleFaqClick = () => {
    router.push("/employer-alignment-system"); // Go to /about without auto-scroll
    sessionStorage.setItem("scrollToFaq", "true");
  };

  return (
    <>
      {!pathname.includes("login") &&
        !pathname.includes("register") &&
        !pathname.includes("reset-password") &&
        !pathname.includes("forgot-password") &&
        !pathname.includes("otp-verify") &&
        !pathname.includes("account-verify") && (
          <footer className="overflow-x-hidden no-print bg-[#0668E1] text-[16px] xl:text-[18px] 2xl:text-[20px]  text-white pt-[2%]  px-[3%]">
            <div className="flex flex-col  justify-center items-center xl:justify-between pb-10  mx-auto">
              <div className=" w-[100%]  flex flex-col lg:flex-row justify-center  md:justify-between  lg:items-end gap-6">
                <div className=" mt-10 lg:mt-0 px-[2%]- mb-2 lg:mb-0">
                  <div className="flex justify-center lg:justify-start mb-4">
<<<<<<< HEAD
                    <Link href={"https://connectec.app/"} aria-label="Connect EC Homepage">
                      <Image
                        src="/Connect_EC_Logo-white.svg"
                        alt="Connect EC Logo"
                        width={200}
                        height={200}
                        className="h-auto mb-8 w-auto max-w-[300px] cursor-pointer"
=======
                    <Link href={"https://connectec.app/"}>
                      <Image
                        src="/Connect_EC_Logo-white.svg"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="h-auto  mb-8 w-auto max-w-[300px] cursor-pointer"
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
                      />
                    </Link>
                  </div>

                  <p className="mt-4 text-[14px] xl:text-[18px] lg:font-medium">
                    Phone : <a href="tel:+919499045851">+91 9499045851</a>
                  </p>

                  <p className="mt-1 lg:mt-2 text-[14px] xl:text-[18px] lg:font-medium">
                    Email :{" "}
                    <a href="mailto:hello@connectec.app">hello@connectec.app</a>
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row h-full gap-3 lg:gap-14 items-start lg:justify-between lg:items-center px-[2%] ">
                  <Link
                    href={
                      "https://play.google.com/store/apps/details?id=com.primethic.connectec"
                    }
                    target="_blank"
<<<<<<< HEAD
                    aria-label="Download Connect EC App on Google Play"
=======
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
                  >
                    <Image
                      src="/googleplay.svg"
                      alt="Google Play"
                      loading="lazy"
                      width={200}
                      height={200}
                      className=" w-auto h-[50px]"
                    />
                  </Link>

                  {/* Social Icons */}
<<<<<<< HEAD
                  <div className="mt-3 lg:mt-0 flex items-center gap-3 lg:gap-6 lg:text-xl">
=======
                  <div className="mt-3 lg:mt-0 flex items-center gap-3 lg:gap-6  lg:text-xl">
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <Link
                        href={
                          "https://www.linkedin.com/company/connect-ec-app/about/"
                        }
                        target="_blank"
<<<<<<< HEAD
                        aria-label="Connect EC on LinkedIn"
=======
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
                      >
                        <ImLinkedin2 />
                      </Link>
                    </div>
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
<<<<<<< HEAD
                      <Link
                        href={"https://connectec.blog"}
                        target="_blank"
                        aria-label="Connect EC Blog on Medium"
                      >
=======
                      <Link href={"https://connectec.blog"} target="_blank">
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
                        <FaMediumM />
                      </Link>
                    </div>

                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <Link
                        href={"https://www.youtube.com/@TeamConnectEC"}
                        target="_blank"
<<<<<<< HEAD
                        aria-label="Connect EC on YouTube"
=======
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
                      >
                        <FaYoutube />
                      </Link>
                    </div>
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <Link
                        href={
<<<<<<< HEAD
                          "https://www.instagram.com/team_connect_ec/?hl=en"
                        }
                        target="_blank"
                        aria-label="Connect EC on Instagram"
=======
                          " https://www.instagram.com/team_connect_ec/?hl=en"
                        }
                        target="_blank"
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
                      >
                        <FaInstagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-4 lg:mt-0 pt-3">
                <div className="flex flex-col items-end  md:py-4">
                  <div className="w-[100%] h-px   border-t border-[#FFFFFF] my-2"></div>
                </div>

                <div className="mt-5 lg:mt-0 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between ">
                  <div className="flex justify-center items-center flex-wrap lg:flex-nowrap lg:block   text-[12px] md:text-[14px]  text-start lg:font-medium space-x-3">
                    <Link href="/about-us">About us</Link>|{" "}
                    <Link href="/terms-and-condition" target="_blank">
                      &nbsp;&nbsp;Terms & Conditions
                    </Link>
                    |&nbsp;&nbsp; {""}
                    <Link href="/privacy-policy" target="_blank">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF1A] -mx-[8%] md:-mx-[5%]  flex flex-col items-center justify-center py-3 md:py-[2%]">
<<<<<<< HEAD
              <p className=" text-lg font-normal flex flex-col justify-center items-center ">
                <span>
                  <Link href="https://primethic.com/" target="_blank" aria-label="Primethic Private Limited">
=======
              <p className=" text-lg  font-normal flex flex-col justify-center items-center ">
                <span>
                  <Link href="https://primethic.com/" target="_blank">
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
                    © Copyright Primethic Private Limited{" "}
                  </Link>
                  {new Date().getFullYear()}. All Rights Reserved.
                </span>
              </p>
              <p className="font-medium text-lg mt-[1%] text-center px-[4%]">
                The principles, frameworks, and methodologies are proprietary to
                and owned by Primethic Private Limited. Unauthorized use,
                reproduction, or distribution is strictly prohibited.
              </p>
<<<<<<< HEAD
              <p className="text-[5px] lg:text-[9px] mt-[1%] text-white/90"> {children}</p>
=======
              <p className="text-[5px] lg:text-[9px] mt-[1%] "> {children}</p>
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
            </div>
          </footer>
        )}
    </>
  );
}
