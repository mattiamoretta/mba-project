import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Download, Upload } from "lucide-react";

interface CvPreviewScreenProps {
  onBackToRecording: () => void;
  onBackToHome: () => void;
}

const skills = ["Solar PV", "Heat Pumps", "KNX", "Wiring", "Troubleshooting", "Blueprints", "Italian/English"];

const CvPreviewScreen = ({ onBackToRecording, onBackToHome }: CvPreviewScreenProps) => (
  <div className="flex-1 bg-gray-50 flex flex-col">
    <div className="p-5 flex items-center justify-between">
      <h2 className="text-lg font-bold text-gray-800">Your CV is ready</h2>
      <span className="text-xs text-gray-500">ATS‑friendly</span>
    </div>
    <div className="px-5 pb-4 overflow-y-auto">
      <Card className="shadow-sm">
        <CardContent className="p-5 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900">Mario Rossi</h3>
              <p className="text-sm text-gray-600">Certified Electrician • Milan, IT</p>
              <p className="text-xs text-gray-500">mario.rossi@example.com • +39 333 123 4567</p>
            </div>
            <div className="text-right">
              <span className="inline-block text-[10px] px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Verified</span>
            </div>
          </div>

          <section>
            <h4 className="text-sm font-semibold text-gray-800">Professional Summary</h4>
            <p className="text-xs text-gray-700 mt-1">
              Electrician with 10+ years in residential & commercial projects, specializing in solar PV, smart home (KNX), and
              heat pump installations. Safety‑first, on‑time delivery, and excellent client communication.
            </p>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-gray-800">Skills</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="text-[11px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-gray-800">Experience</h4>
            <ul className="mt-1 space-y-2">
              <li className="text-xs text-gray-700">
                <span className="font-medium">Senior Electrician</span> — Green Energy Co. (2019–2025)
                <br />Installed 120+ solar systems (residential & SME); reduced install time by 25%.
              </li>
              <li className="text-xs text-gray-700">
                <span className="font-medium">Electrician</span> — Domotix (2015–2019)
                <br />Smart home wiring (KNX), fault‑finding, and safety compliance.
              </li>
            </ul>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-gray-800">Certifications</h4>
            <ul className="mt-1 text-xs text-gray-700 list-disc pl-4">
              <li>CEI 11‑27 Electrical Safety</li>
              <li>Solar PV Installer (EN 62446)</li>
              <li>KNX Partner</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>

    <div className="px-5 pb-5 mt-auto grid grid-cols-2 gap-3">
      <Button className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2">
        <Upload className="w-4 h-4" /> Upload CV
      </Button>
      <Button className="rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2">
        <Download className="w-4 h-4" /> Export PDF
      </Button>
      <Button className="col-span-2 text-indigo-600 hover:text-indigo-700" onClick={onBackToRecording}>
        ↩ Edit recording
      </Button>
      <Button className="col-span-2 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-100" onClick={onBackToHome}>
        ⬅ Back to Home
      </Button>
    </div>
  </div>
);

export default CvPreviewScreen;
