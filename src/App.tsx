import { useState } from "react";
import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";
import JobsScreen from "./components/screens/JobsScreen";
import ProfessionalsScreen from "./components/screens/ProfessionalsScreen";
import AiCvScreen from "./components/screens/AiCvScreen";
import CvPreviewScreen from "./components/screens/CvPreviewScreen";
import type { Screen } from "./types";

function App() {
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-0 sm:p-6">
      <div className="mx-auto flex min-h-full w-full flex-col bg-white sm:max-w-5xl sm:rounded-[2.5rem] sm:border sm:border-gray-200 sm:shadow-2xl">
        <Header />
        <main className="flex-1">
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
    </div>
  );
}

export default App;
