import { useEffect, useState } from "react";
import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";
import JobsScreen from "./components/screens/JobsScreen";
import ProfessionalsScreen from "./components/screens/ProfessionalsScreen";
import AiCvScreen from "./components/screens/AiCvScreen";
import CvPreviewScreen from "./components/screens/CvPreviewScreen";
import SplashScreen from "./components/SplashScreen";
import type { Screen } from "./types";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState<Screen>("home");

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1800);

    return () => window.clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <div className="flex min-h-dvh flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />
      <main className="flex-1 overflow-y-auto">
        {screen === "home" && <HomeScreen onNavigate={setScreen} />}
        {screen === "jobs" && <JobsScreen onBack={() => setScreen("home")} />}
        {screen === "professionals" && (
          <ProfessionalsScreen onBack={() => setScreen("home")} />
        )}
        {screen === "aiCv" && <AiCvScreen onBack={() => setScreen("home")} onContinue={() => setScreen("cvPreview")} />}
        {screen === "cvPreview" && (
          <CvPreviewScreen
            onBackToRecording={() => setScreen("aiCv")}
            onBackToHome={() => setScreen("home")}
          />
        )}
      </main>
    </div>
  );
}

export default App;
