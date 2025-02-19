import {
  Facebook,
  Instagram,
  MailPlus,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const navbar = ["HOME", "ABOUT", "FEATURE", "SCREENSHOT", "DOWNLOAD"];

export default function NavBar() {
  return (
    <div className="absolute flex w-full justify-center px-2 text-white">
      <div className="flex w-full max-w-[1170px] flex-col gap-4 py-4">
        <div className="flex justify-between">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <MailPlus />
              contato@email.com
            </div>
            <div className="flex items-center gap-2">
              <Phone />
              +1 (122) 123 9876
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Facebook />
            <Instagram />
            <Youtube />
            <Twitter />
          </div>
        </div>
        <div className="flex h-[60px] items-center justify-between overflow-visible rounded-md bg-white p-4 text-dark-blue">
          <div className="flex gap-4">
            {navbar.slice(0, 3).map((item, i) => (
              <button
                className="text-md rounded-md px-4 py-2 transition-all duration-300 hover:bg-royal-blue hover:text-white"
                key={i}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="h-24 rounded-md bg-white p-8 shadow-sm transition-all duration-300">
            <img src="./logo.png" alt="logo" />
          </button>
          <div className="flex gap-4">
            {navbar.slice(3).map((item, i) =>
              item === "DOWNLOAD" ? (
                <button
                  className="text-md rounded-md bg-royal-blue px-4 py-2 text-white"
                  key={i}
                >
                  {item}
                </button>
              ) : (
                <button
                  className="text-md rounded-md px-4 py-2 transition-all duration-300 hover:bg-royal-blue hover:text-white"
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
