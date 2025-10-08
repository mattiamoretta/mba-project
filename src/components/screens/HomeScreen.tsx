import { useEffect, useState } from "react";
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

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {

  const [highlightIndex, setHighlightIndex] = useState(0);
  const [showTrends, setShowTrends] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHighlightIndex((previous) => (previous + 1) % highlights.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="flex space-x-2">
          <Input placeholder="🔍 Search for jobs or professionals..." className="flex-1 rounded-xl" />
          <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Card
        className="mx-4 my-3 hover:shadow-xl transition-transform transform hover:scale-[1.02] cursor-pointer"
        onClick={() => onNavigate("aiCv")}
      >
        <CardContent className="flex items-center space-x-4 p-5">
          <div className="bg-indigo-100 p-3 rounded-xl">
            <Mic className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="font-bold text-lg">AI CV Builder</h2>
            <p className="text-sm text-gray-500">Create your CV just by speaking</p>
          </div>
          <Button className="ml-auto rounded-full px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">Start</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4 px-4 mt-3">
        <div
          className="relative"
          onMouseEnter={() => setShowTrends(true)}
          onMouseLeave={() => setShowTrends(false)}
        >
          <Card
            className="cursor-pointer hover:shadow-xl transition-transform transform hover:scale-[1.02]"
            onClick={() => onNavigate("jobs")}
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Briefcase className="w-10 h-10 text-blue-600" />
              <span className="mt-2 font-semibold">Find Jobs</span>
            </CardContent>
          </Card>
          {showTrends && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full w-56 bg-white border rounded-xl shadow-lg p-3 z-10"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <TrendingUp className="w-4 h-4" /> Trending searches
              </div>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                <li>• Electrician (solar)</li>
                <li>• Plumber (smart housing)</li>
                <li>• HVAC technician</li>
                <li>• Heat pump installer</li>
              </ul>
            </motion.div>
          )}
        </div>

        <Card
          className="cursor-pointer hover:shadow-xl transition-transform transform hover:scale-[1.02]"
          onClick={() => onNavigate("professionals")}
        >
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Users className="w-10 h-10 text-green-600" />
            <span className="mt-2 font-semibold">Hire Experts</span>
          </CardContent>
        </Card>
      </div>

      <motion.div
        key={highlightIndex}
        className="mt-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 text-center border-t flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-2">{highlights[highlightIndex].icon}</div>
        <h3 className="font-bold text-indigo-700 text-lg">{highlights[highlightIndex].title}</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-xs">
          {highlights[highlightIndex].description}
        </p>
      </motion.div>

      <div className="px-4 mt-2">
        <ReviewsTicker />
      </div>

      <div className="px-4 pt-3 pb-5 border-t mt-3 bg-white/70 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/40?img=12" alt="avatar" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm text-gray-800 font-medium">“So easy I built my CV in 2 minutes.”</p>
              <p className="text-[11px] text-gray-500">— Anna, Electrician</p>
            </div>
          </div>
          <RatingStars />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
