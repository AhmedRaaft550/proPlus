const Logo = ({ className }: { className?: string }) => {
  return (
    <h1
      className={`text-center text-sky-500 text-3xl font-bold leading-relaxed ${className}`}
    >
      ProPlus <span className="text-sky-900">OS</span>
    </h1>
  );
};

export default Logo;
