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
    <div className="flex justify-center text-white">
      <div className="max-w-[1170px] w-full flex flex-col gap-4 py-4">
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
          <div className="flex items-center gap-4">
            <Facebook />
            <Instagram />
            <Youtube />
            <Twitter />
          </div>
        </div>
        <div className="bg-white h-16 flex justify-between items-center overflow-visible text-dark-blue rounded-md p-4">
          <div className="flex gap-4">
            {navbar.slice(0, 3).map((item, i) => (
              <button
                className="py-2 px-4 hover:bg-royal-blue rounded-md  hover:text-white text-md transition-all duration-300"
                key={i}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="h-24 bg-white p-8 rounded-md shadow-sm transition-all duration-300">
            <img src="./logo.png" alt="logo" />
          </button>
          <div className="flex gap-4">
            {navbar.slice(3).map((item, i) =>
              item === "DOWNLOAD" ? (
                <button
                  className="py-2 px-4 text-md text-white rounded-md bg-royal-blue "
                  key={i}
                >
                  {item}
                </button>
              ) : (
                <button
                  className="py-2 px-4 rounded-md text-md hover:bg-royal-blue hover:text-white transition-all duration-300"
                  key={i}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
