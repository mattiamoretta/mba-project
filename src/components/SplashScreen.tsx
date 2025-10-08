import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const SplashScreen = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
    <motion.div
      className="flex flex-col items-center space-y-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 shadow-lg backdrop-blur"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <GraduationCap className="h-10 w-10" />
        <motion.span
          className="absolute inset-0 rounded-3xl border border-white/40"
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        />
      </motion.div>
      <div className="text-center">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-white/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome to
        </motion.p>
        <motion.h1
          className="text-3xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          MBA Project
        </motion.h1>
      </div>
      <motion.div
        className="h-1 w-32 overflow-hidden rounded-full bg-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.span
          className="block h-full w-full bg-white"
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  </div>
);

export default SplashScreen;
