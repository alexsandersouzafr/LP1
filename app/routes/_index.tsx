import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/nav-bar";
import Section1 from "~/components/section-1";

export const meta: MetaFunction = () => {
  return [
    { title: "Landing Page Example" },
    { name: "Developed by Alexsander Souza.", content: "Hello World!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-royal-blue h-screen font-sans relative ">
      <NavBar />
      <Section1 />
    </div>
  );
}
