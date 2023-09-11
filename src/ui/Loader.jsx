import { InfinitySpin } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center text-slate-200 ">
      <p className="text-3xl sm:text-6xl uppercase text-center font-semibold">
        Getting your scores...
      </p>
      <InfinitySpin color="white" />
    </div>
  );
}

export default Loader;
