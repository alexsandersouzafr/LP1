export default function Section1() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="relative flex w-full max-w-[1170px] items-center justify-between">
        <div className="relative">
          <div className="absolute -right-8 -top-8 h-[400px] w-[500px] border-[10px] border-white/50" />
          <div className="relative z-10 flex h-[400px] w-[500px] flex-col justify-between bg-white p-8">
            <h1 className="text-5xl text-royal-blue">
              A GREAT APP MAKES YOUR LIFE BETTER
            </h1>
            <p className="text-sm text-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-dark-blue">DOWNLOAD APP NOW</h2>
              <div className="flex gap-8">
                <img src="google-badge.png" alt="Google button." />
                <img src="apple-badge.png" alt="Apple button" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="mobile-preview.png"
          alt="mobile preview"
          className="relative -right-40"
        />
      </div>
    </div>
  );
}
