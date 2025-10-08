import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Mic, Search, TrendingUp, Users, Zap, ShieldCheck, Clock } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import ReviewsTicker from "../ReviewsTicker";
import RatingStars from "../RatingStars";
import type { Screen } from "../../types";

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

const highlights = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "Fast & Easy",
    description: "AI-powered CVs and deadlines keep hiring moving at speed."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "Reliable Skills",
    description: "Verified experts ready to support sustainability projects."
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    title: "No Delays",
    description: "Don’t let scarce talent slow down your innovation pipeline."
  }
];

const featuredProfessionals = [
  {
    name: "Marco Rossi",
    role: "Senior Electrician",
    location: "Milan, IT"
  },
  {
    name: "Sofia Conti",
    role: "Smart Home Electrician",
    location: "Turin, IT"
  },
  {
    name: "Chiara Verdi",
    role: "HVAC Engineer",
    location: "Turin, IT"
  }
];

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {

  const [highlightIndex, setHighlightIndex] = useState(0);
  const [showTrends, setShowTrends] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHighlightIndex((previous) => (previous + 1) % highlights.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowTrends(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="space-y-4 overflow-y-auto px-4 pb-6 pt-4">
        <div ref={searchRef} className="relative rounded-2xl bg-white/70 p-2 shadow-sm backdrop-blur">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search for jobs or professionals..."
              className="flex-1 rounded-xl border-none bg-transparent text-base focus-visible:ring-0"
              onFocus={() => setShowTrends(true)}
            />
            <Button
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
              onClick={() => setShowTrends(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          {showTrends && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute left-0 right-0 top-full z-10 mt-2 rounded-2xl border bg-white p-3 text-left shadow-xl"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <TrendingUp className="h-4 w-4" /> Trending searches
              </div>
              <ul className="mt-2 space-y-1 text-xs text-gray-600">
                <li>• Electrician (solar)</li>
                <li>• Plumber (smart housing)</li>
                <li>• HVAC technician</li>
                <li>• Heat pump installer</li>
              </ul>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                  <Users className="h-4 w-4" /> Featured professionals
                </div>
                {featuredProfessionals.map((professional) => (
                  <button
                    key={professional.name}
                    type="button"
                    onClick={() => {
                      setShowTrends(false);
                      onNavigate("professionals");
                    }}
                    className="flex w-full items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/70 px-3 py-2 text-left shadow-sm transition hover:bg-indigo-100"
                  >
                    <div>
                      <p className="text-sm font-semibold text-indigo-900">{professional.name}</p>
                      <p className="text-xs text-indigo-700">{professional.role}</p>
                    </div>
                    <span className="text-[11px] font-medium text-indigo-600">{professional.location}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <Card
          className="cursor-pointer rounded-3xl border-0 bg-gradient-to-r from-indigo-500/95 via-purple-500/95 to-pink-500/90 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          onClick={() => onNavigate("aiCv")}
        >
          <CardContent className="flex items-center space-x-4 p-5">
            <div className="rounded-2xl bg-white/20 p-3">
              <Mic className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">AI CV Builder</h2>
              <p className="text-sm text-white/80">Create your CV just by speaking</p>
            </div>
            <Button className="ml-auto rounded-full bg-white/15 px-6 text-white shadow-inner transition hover:bg-white/25">
              Start
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Card
              className="h-full cursor-pointer rounded-3xl border-0 bg-white/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => onNavigate("jobs")}
            >
              <CardContent className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                <Briefcase className="h-10 w-10 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Find Jobs</span>
              </CardContent>
            </Card>
          </div>

          <Card
            className="h-full cursor-pointer rounded-3xl border-0 bg-white/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            onClick={() => onNavigate("professionals")}
          >
            <CardContent className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
              <Users className="h-10 w-10 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Hire Experts</span>
            </CardContent>
          </Card>
        </div>

        <motion.div
          key={highlightIndex}
          className="rounded-3xl border bg-gradient-to-r from-indigo-50 to-purple-50 p-6 text-center shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-2">{highlights[highlightIndex].icon}</div>
          <h3 className="text-lg font-bold text-indigo-700">{highlights[highlightIndex].title}</h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
            {highlights[highlightIndex].description}
          </p>
        </motion.div>

        <div className="rounded-3xl border bg-white/80 p-4 shadow-sm">
          <ReviewsTicker />
        </div>
      </div>

      <div className="border-t bg-white/80 px-4 py-4 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/40?img=12" alt="avatar" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium text-gray-800">“So easy I built my CV in 2 minutes.”</p>
              <p className="text-[11px] text-gray-500">— Anna, Electrician</p>
            </div>
          </div>
          <RatingStars />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
