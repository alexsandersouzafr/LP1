import {
  Facebook,
  Instagram,
  MailPlus,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const navbar = ["HOME", "ABOUT", "FEATURE", "SCREENSHOT", "DOWNLOAD"];

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  useGSAP(() => {
    gsap.set(".navbar", {
      y: -20,
      opacity: 0,
    });
    gsap.set(".contacts>div", { x: -20, opacity: 0 });
    gsap.set(".icons>svg", { x: 20, opacity: 0 });
    gsap.set(".nav-button", { x: 10, opacity: 0 });
    gsap.set(".logo", { scaleY: 0, opacity: 0 });
    gsap.set(".logo>img", { opacity: 0 });
    gsap
      .timeline({ delay: 0.5, duration: 1, ease: "power2.in" })
      .to(".navbar", {
        y: 0,
        opacity: 1,
      })
      .to(
        ".contacts>div",
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
        },
        "<",
      )
      .to(
        ".icons>svg",
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
        },
        "<",
      )
      .to(
        ".nav-button",
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
        },
        "<",
      )
      .to(".logo", {
        scaleY: 1,
        opacity: 1,
        duration: 1,
      })
      .to(".logo>img", { opacity: 1, duration: 2 });
  });

  return (
    <div className="navbar absolute flex w-full justify-center px-2 text-white">
      <div className="flex w-full max-w-[1170px] flex-col gap-4 py-4">
        <div className="hidden justify-between lg:flex">
          <div className="contacts flex gap-8">
            <div className="flex items-center gap-2">
              <MailPlus />
              contato@email.com
            </div>
            <div className="flex items-center gap-2">
              <Phone />
              +1 (122) 123 9876
            </div>
          </div>
          <div className="icons flex items-center gap-8">
            <Facebook />
            <Instagram />
            <Youtube />
            <Twitter />
          </div>
        </div>
        <div className="relative flex h-[60px] items-center justify-between overflow-visible rounded-md bg-white p-4 text-dark-blue lg:hidden">
          <button
            className="z-50 shrink-0"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X /> : <Menu />}
          </button>
          <img src="./logo.png" alt="logo" />
          <div
            data-open={openMenu}
            className="absolute top-16 z-50 hidden w-72 flex-col items-start justify-start bg-white shadow-2xl transition-all duration-300 data-[open=true]:flex"
          >
            {navbar.map((item, i) => (
              <button key={i} className="p-4">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="hidden h-[60px] items-center justify-between overflow-visible rounded-md bg-white p-4 text-dark-blue lg:flex">
          <div className="flex gap-4">
            {navbar.slice(0, 3).map((item, i) => (
              <button
                className="nav-button text-md rounded-md px-4 py-2 transition-all duration-300 hover:bg-royal-blue hover:text-white"
                key={i}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="logo h-24 shrink-0 rounded-md bg-white p-8 shadow-sm">
            <img src="./logo.png" alt="logo" />
          </button>
          <div className="flex gap-4">
            {navbar.slice(3).map((item, i) =>
              item === "DOWNLOAD" ? (
                <button
                  className="nav-button text-md rounded-md bg-royal-blue px-4 py-2 text-white"
                  key={i}
                >
                  {item}
                </button>
              ) : (
                <button
                  className="nav-button text-md rounded-md px-4 py-2 transition-all duration-300 hover:bg-royal-blue hover:text-white"
                  key={i}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
