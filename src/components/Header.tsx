import { ShieldCheck } from "lucide-react";

const Header = () => (
  <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-md flex flex-col items-center text-center">
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-extrabold tracking-tight drop-shadow-md">BestMbaProjectEver</h1>
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm"
        aria-label="verified skills badge"
      >
        <ShieldCheck className="w-4 h-4" />
      </span>
    </div>
    <p className="text-xs opacity-95 mt-1 max-w-xs">
      We connect the experts of today to build the companies of tomorrow
    </p>
  </div>
);

export default Header;
