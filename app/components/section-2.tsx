import { CheckCircle } from "lucide-react";

const listItems = ["CREATIVE DESIGN", "EASY TO USE", "BEST USER EXPERIENCE"];

export default function Section2() {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="flex min-h-screen w-full max-w-[1170px] flex-col items-center justify-center gap-8">
        <h1 className="text-3xl">About Our App</h1>
        <p className="max-w-[600px] text-center text-paragraph">
          Velit consequat reprehenderit exercitation commodo. Ad minim nostrud
          duis in eu consectetur enim sunt excepteur velit culpa proident
          voluptate commodo. Dolor laboris commodo sunt cillum eu do amet.
          Nostrud occaecat sit sit commodo laboris culpa.
        </p>
        <div className="flex w-full justify-between">
          <div className="flex w-1/2 items-center justify-center">
            <img src="preview-2.png" alt="App preview" />
          </div>
          <div className="flex flex-col gap-16">
            {listItems.map((item, i) => (
              <div
                className="flex max-w-[500px] items-start gap-4 rounded-lg border border-royal-blue/10 p-4 shadow-md"
                key={i}
              >
                <CheckCircle className="size-[24px] shrink-0 text-royal-blue" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl">{item}</h3>
                  <p className="text-paragraph">
                    Et laboris laborum nulla Lorem in ut pariatur et sint elit
                    ad quis velit commodo. Ullamco qui nisi reprehenderit cillum
                    mollit ex ex sit cupidatat aute Lorem.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
