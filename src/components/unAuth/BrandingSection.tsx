import Logo from "@/custom/ui/Logo";

const BrandingSection = () => {
  return (
    <div className="hidden text-center lg:flex lg:w-1/2 bg-sky-600 p-12 flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-red-500/70 rounded-full blur-3xl opacity-50"></div>
      <div className="relative z-10">
        <Logo className="text-white text-6xl font-bold tracking-tighter" />
        <h1 className="text-sky-100 text-2xl mt-4 font-light max-w-md">
          The intelligent operating system for {""}
          <span className="font-semibold text-white">
            Global Real Estate
          </span>{" "}
          assets.
        </h1>
      </div>
      <div className="absolute bottom-10 text-center z-10 w-full text-sky-200 text-sm ">
        © 2026 PropPulse OS. All rights reserved.
      </div>
    </div>
  );
};

export default BrandingSection;
