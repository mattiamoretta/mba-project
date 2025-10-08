import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "../ui/button";

interface AiCvScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

const AiCvScreen = ({ onBack, onContinue }: AiCvScreenProps) => (
  <div className="flex-1 bg-white flex flex-col">
    <div className="p-6">
      <h2 className="text-xl font-extrabold text-gray-800">AI CV Builder</h2>
      <p className="text-sm text-gray-600 mt-1">Why it’s super fancy:</p>
      <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
        <li>Speak naturally → instant structured CV.</li>
        <li>Auto-summarizes skills & certifications.</li>
        <li>One-tap translation and formatting.</li>
        <li>ATS-friendly and company-ready in minutes.</li>
      </ul>
    </div>

    <div className="flex-1 flex items-center justify-center">
      <motion.button
        className="relative w-40 h-40 rounded-full bg-red-500 text-white shadow-2xl flex items-center justify-center"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-red-400 opacity-30" />
        <div className="flex flex-col items-center">
          <Play className="w-7 h-7" />
          <span className="mt-1 font-semibold tracking-wide">REC</span>
        </div>
      </motion.button>
    </div>

    <div className="px-6 pb-6">
      <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white" onClick={onBack}>
        Done
      </Button>
    </div>
  </div>
);

export default AiCvScreen;
