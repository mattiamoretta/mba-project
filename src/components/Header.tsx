import { ShieldCheck } from "lucide-react";

const Header = () => (
  <header className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-5 text-white shadow-md">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" aria-hidden="true" />
    <div className="relative z-10 flex items-center gap-3">
      <h1 className="text-2xl font-extrabold tracking-tight drop-shadow-md">MBA Project</h1>
      <span
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm"
        aria-label="verified skills badge"
      >
        <ShieldCheck className="h-4 w-4" />
      </span>
    </div>
    <p className="relative z-10 mt-1 max-w-xs text-xs opacity-95">
      We connect the experts of today to build the companies of tomorrow
    </p>
  </header>
);

export default Header;
