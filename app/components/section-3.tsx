import { items } from "~/mocks/features";

export default function Section3() {
  return (
    <section className="section relative flex h-screen w-full justify-center overflow-hidden bg-[url(bg.png)] bg-cover px-2 py-16 text-white">
      <div className="content2 absolute flex min-h-screen w-full max-w-[1170px] flex-col items-center justify-center gap-8">
        <h1 className="text-3xl">Features</h1>
        <p className="max-w-[600px] text-center">
          Velit consequat reprehenderit exercitation commodo. Ad minim nostrud
          duis in eu consectetur enim sunt excepteur velit culpa proident
          voluptate commodo. Dolor laboris commodo sunt cillum eu do amet.
          Nostrud occaecat sit sit commodo laboris culpa.
        </p>
        <div className="hidden grid-cols-3 md:grid">
          <div className="flex flex-col justify-center gap-40">
            <FeatureItem item={items[1]} align="right" />
            <FeatureItem item={items[2]} align="right" />
          </div>
          <div className="flex flex-col justify-center">
            <FeatureItem item={items[0]} />
            <img
              src="preview-3.png"
              alt="App preview"
              className="relative -right-8 -mb-12"
            />
            <FeatureItem item={items[5]} />
          </div>
          <div className="flex flex-col justify-center gap-40">
            <FeatureItem item={items[3]} align="left" />
            <FeatureItem item={items[4]} align="left" />
          </div>
        </div>
        <div className="flex flex-col gap-8 md:hidden">
          <FeatureItem item={items[0]} />
          <FeatureItem item={items[1]} />
          <FeatureItem item={items[2]} />
          <img
            src="preview-3.png"
            alt="App preview"
            className="relative -right-8 -mb-12"
          />
          <FeatureItem item={items[3]} />
          <FeatureItem item={items[4]} />
          <FeatureItem item={items[5]} />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  item,
  align,
}: {
  item: { title: string; svg: JSX.Element };
  align?: "left" | "right";
}) {
  return (
    <div
      data-align={align}
      className="flex scale-90 flex-col items-center gap-4 data-[align=left]:items-start data-[align=right]:items-end"
    >
      {item.svg}

      <h3
        data-align={!align}
        className="text-3xl data-[align=true]:text-center"
      >
        {item.title}
      </h3>
      <p
        data-align={align}
        className="text-center data-[align=left]:text-left data-[align=right]:text-right"
      >
        Magna velit magna quis dolore voluptate qui aliqua voluptate sint labore
        qui labore.
      </p>
    </div>
  );
}
