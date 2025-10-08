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
    <div className="flex justify-center bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-6">
      <div className="w-[390px] h-[844px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-gray-200">
        <Header />
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
      </div>
    </div>
  );
}

export default App;
