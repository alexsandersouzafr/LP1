import { Download, Star, ThumbsUp } from "lucide-react";

const items = [
  { icon: <Download />, metric: "12.4M", text: "DOWNLOADS" },
  { icon: <ThumbsUp />, metric: "12.4K", text: "LIKES" },
  { icon: <Star />, metric: "9K", text: "5 STAR REVIEWS" },
];

export default function Section5() {
  return (
    <section className="section flex w-full justify-center bg-white px-4 py-16">
      <div className="flex w-full max-w-[1170px] flex-col items-center justify-center gap-8">
        <div className="flex grid-cols-2 flex-wrap items-center gap-4 md:grid">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-dark-blue">DOWNLOAD APP NOW</h2>
              <p className="text-paragraph">
                Velit consequat reprehenderit exercitation commodo. Ad minim
                nostrud duis in eu consectetur enim sunt excepteur velit culpa
                proident voluptate commodo.
              </p>
              <div className="flex gap-2">
                <img src="google-badge.png" alt="Google button." />
                <img src="apple-badge.png" alt="Apple button" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 lg:gap-4">
              {items.map(({ icon, metric, text }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-4 rounded-md bg-royal-blue p-4 text-white"
                >
                  {icon}
                  <h4 className="text-2xl md:text-4xl">{metric}</h4>
                  <h4 className="text-xs md:text-base">{text}</h4>
                </div>
              ))}
            </div>
          </div>
          <img src="design.png" alt="interface preview" />
        </div>
      </div>
    </section>
  );
}
