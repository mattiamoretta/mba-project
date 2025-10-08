import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";

interface AiCvScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

const AiCvScreen = ({ onBack, onContinue }: AiCvScreenProps) => (
  <div className="flex h-full flex-col bg-white">
    <div className="px-6 pb-3 pt-5">
      <h2 className="text-lg font-extrabold text-gray-800">AI CV Builder</h2>
    </div>

    <div className="flex-1 overflow-y-auto px-6 pb-10 text-sm text-gray-700">
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">Why it’s super fancy:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Speak naturally → instant structured CV.</li>
            <li>Auto-summarizes skills & certifications.</li>
            <li>One-tap translation and formatting.</li>
            <li>ATS-friendly and company-ready in minutes.</li>
          </ul>
        </div>
        <div className="flex items-center justify-center py-6">
          <motion.button
            className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-red-500 to-orange-500 text-white shadow-2xl"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
          >
            <span className="absolute inset-0 animate-pulse rounded-full bg-white/20" />
            <span className="absolute inset-1 rounded-full border border-white/30" />
            <div className="relative flex flex-col items-center">
              <Play className="h-7 w-7" />
              <span className="mt-1 text-sm font-semibold tracking-wide">Tap to record</span>
            </div>
          </motion.button>
        </div>
      </div>
    </div>

    <div className="border-t border-white/60 bg-white/95 px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-4 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="space-y-3">
        <Button
          className="flex w-full items-center justify-center gap-2 rounded-full border border-indigo-100 bg-white px-6 py-3 text-sm font-medium text-indigo-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
        <Button
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg transition hover:shadow-xl"
          onClick={onContinue}
        >
          Continue to preview
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
);

export default AiCvScreen;
