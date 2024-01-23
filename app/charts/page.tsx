import AgeGroupItems from "./AgeGroupItems";

const ChartsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-16">
      <header className=" justify-center py-16">
        <h1 className="text-center text-6xl text-background">Score Charts</h1>
        <p className="text-center text-slate-300">Links open in a new tab</p>
      </header>
      <div className="grid min-h-screen w-full max-w-[50rem] grid-cols-2 items-center justify-center gap-2 px-2 sm:gap-8 lg:grid-cols-3  ">
        <AgeGroupItems />
      </div>
    </div>
  );
};

export default ChartsPage;
