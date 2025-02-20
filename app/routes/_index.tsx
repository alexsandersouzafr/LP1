import type { MetaFunction } from "@remix-run/node";
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
  return (
    <div className="max-w-screen relative overflow-hidden bg-royal-blue font-sans">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
