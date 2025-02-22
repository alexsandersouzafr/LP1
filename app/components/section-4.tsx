import { Download, Star, ThumbsUp } from "lucide-react";

export default function Section4() {
  return (
    <section className="section flex w-full justify-center overflow-hidden bg-white px-4 py-16">
      <div className="flex w-full max-w-[1170px] flex-col items-center justify-center gap-8">
        <h1 className="text-3xl">Checkout Our Interface</h1>
        <p className="max-w-[600px] text-center text-paragraph">
          Velit consequat reprehenderit exercitation commodo. Ad minim nostrud
          duis in eu consectetur enim sunt excepteur velit culpa proident
          voluptate commodo.
        </p>
        <img src="screenshot.png" alt="interface preview" />
      </div>
    </section>
  );
}
