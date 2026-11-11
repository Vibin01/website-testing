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
                    <Link href={"https://connectec.app/"} aria-label="Connect EC Homepage">
                      <Image
                        src="/Connect_EC_Logo-white.svg"
                        alt="Connect EC Logo"
                        width={200}
                        height={40}
                        className="h-auto mb-8 w-auto max-w-[300px] cursor-pointer"
                        style={{ height: "auto" }}
                      />
                    </Link>
                  </div>

                  <p className="mt-4 text-xl lg:font-medium">
                    Phone : <a href="tel:+919499045851">+91 9499045851</a>
                  </p>

                  <p className="mt-1 lg:mt-2 text-xl lg:font-medium">
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
                    aria-label="Download Connect EC App on Google Play"
                  >
                    <Image
                      src="/googleplay.svg"
                      alt="Google Play"
                      loading="lazy"
                      width={173}
                      height={50}
                      className="w-auto h-[50px]"
                      style={{ width: "auto" }}
                    />
                  </Link>

                  {/* Social Icons */}
                  <div className="mt-3 lg:mt-0 flex items-center gap-3 lg:gap-6 lg:text-xl">
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <Link
                        href={
                          "https://www.linkedin.com/company/connect-ec-app/about/"
                        }
                        target="_blank"
                        aria-label="Connect EC on LinkedIn"
                      >
                        <ImLinkedin2 />
                      </Link>
                    </div>
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <Link
                        href={"https://connectec.blog"}
                        target="_blank"
                        aria-label="Connect EC Blog on Medium"
                      >
                        <FaMediumM />
                      </Link>
                    </div>

                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <Link
                        href={"https://www.youtube.com/@TeamConnectEC"}
                        target="_blank"
                        aria-label="Connect EC on YouTube"
                      >
                        <FaYoutube />
                      </Link>
                    </div>
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <Link
                        href={
                          "https://www.instagram.com/team_connect_ec/?hl=en"
                        }
                        target="_blank"
                        aria-label="Connect EC on Instagram"
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

                <div className="mt-5 lg:mt-0 flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-2">
                  <div className="flex justify-center items-center flex-wrap text-xl font-medium space-x-2">
                    <Link href="/about-us" className="hover:underline">About us</Link>
                    <span>|</span>
                    <Link href="/terms-and-condition" target="_blank" className="hover:underline">
                      Terms & Conditions
                    </Link>
                    <span>|</span>
                    <Link href="/privacy-policy" target="_blank" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </div>
                  <p className="mt-2 lg:mt-0 text-xl font-medium text-center lg:text-end">
                    Connect EC® is a product of{" "}
                    <Link
                      href="https://primethic.com/"
                      target="_blank"
                      aria-label="Primethic Private Limited"
                      className="hover:underline"
                    >
                      Primethic Private Limited.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF1A] -mx-[8%] md:-mx-[5%] flex flex-col items-center justify-center py-4 md:py-[2%] px-[4%]">
              <p className="text-lg font-normal flex flex-col justify-center items-center">
                <span>
                  <Link href="https://primethic.com/" target="_blank" aria-label="Primethic Private Limited" className="hover:underline">
                    © {new Date().getFullYear()} Primethic Private Limited.
                  </Link>
                </span>
              </p>
              <p className="font-normal md:font-medium text-lg mt-[1%] text-center px-[5%] leading-relaxed">
                Alignment Continuity, the Theory of Alignment Continuity, and the proprietary Alignment Architecture—as expressed and implemented through the original definitions, frameworks, models, methodologies, assessment logic, visual representations, and associated content presented on this website—were developed by Primethic Private Limited. Unauthorized reproduction, adaptation, distribution, or commercial exploitation of these protected materials is prohibited.
              </p>
              <p className="text-[5px] lg:text-[9px] mt-[1%] text-white/90"> {children}</p>
            </div>
          </footer>
        )}
    </>
  );
}
