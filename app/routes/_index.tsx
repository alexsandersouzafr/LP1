import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/nav-bar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-royal-blue h-screen font-sans">
      <NavBar />
    </div>
  );
}
