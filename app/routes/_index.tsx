import { useGSAP } from "@gsap/react";
import type { MetaFunction } from "@remix-run/node";
import animeteScroll from "~/animations/scroll";
import Footer from "~/components/footer";
import NavBar from "~/components/nav-bar";
import Section1 from "~/components/section-1";
import Section2 from "~/components/section-2";
import Section3 from "~/components/section-3";
import Section4 from "~/components/section-4";

export const meta: MetaFunction = () => {
  return [
    { title: "Landing Page Example" },
    { name: "Developed by Alexsander Souza.", content: "Hello World!" },
  ];
};

export default function Index() {
  useGSAP(() => animeteScroll());
  return (
    <div className="animate-scroll max-w-screen relative min-h-screen overflow-hidden bg-royal-blue font-sans">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
