import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../utils/cn";

interface ProfessionalsScreenProps {
  onBack: () => void;
}

const professionals = [
  {
    name: "Marco Rossi",
    role: "Certified Electrician • 10 yrs exp.",
    badgeBg: "bg-indigo-100",
    badgeText: "text-indigo-600",
    buttonGradient: "from-indigo-500 to-purple-600"
  },
  {
    name: "Luca Bianchi",
    role: "Plumber • Smart Housing Specialist",
    badgeBg: "bg-green-100",
    badgeText: "text-green-600",
    buttonGradient: "from-green-500 to-emerald-600"
  },
  {
    name: "Chiara Verdi",
    role: "HVAC Technician • Retrofit & Commissioning",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-600",
    buttonGradient: "from-amber-500 to-orange-600"
  },
  {
    name: "Elena Neri",
    role: "Heat Pump Installer • Residential",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-600",
    buttonGradient: "from-rose-500 to-pink-600"
  },
  {
    name: "Ahmed Karim",
    role: "PV Mounting Specialist • Rooftop & Facade",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-600",
    buttonGradient: "from-blue-500 to-indigo-600"
  },
  {
    name: "Sofia Conti",
    role: "Smart Home Electrician • KNX & Zigbee",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-600",
    buttonGradient: "from-purple-500 to-fuchsia-600"
  },
  {
    name: "Davide Romano",
    role: "Plumber • Smart Housing & Heat Pumps",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-600",
    buttonGradient: "from-emerald-500 to-green-600"
  }
];

const ProfessionalsScreen = ({ onBack }: ProfessionalsScreenProps) => (
  <div className="flex h-full flex-col bg-gray-50">
    <div className="flex items-center justify-between gap-3 px-4 pb-3 pt-4">
      <Button
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition duration-200 hover:shadow-xl"
        onClick={onBack}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Button>
      <h2 className="text-lg font-bold text-gray-800">Top Professionals</h2>
    </div>

    <div className="flex-1 space-y-4 overflow-y-auto px-4 pb-6">
      {professionals.map((professional) => (
        <Card key={professional.name} className="rounded-3xl border-0 bg-white/90 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
          <CardContent className="flex items-center gap-4 p-5">
            <div className={cn("rounded-2xl p-3", professional.badgeBg)}>
              <span className={cn("text-sm font-semibold", professional.badgeText)}>{professional.name[0]}</span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-800">{professional.name}</h3>
              <p className="text-sm text-gray-500">{professional.role}</p>
            </div>
            <Button className={cn("ml-auto rounded-full px-5 text-white shadow", professional.buttonGradient ? `bg-gradient-to-r ${professional.buttonGradient}` : "bg-indigo-600")}>Hire</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ProfessionalsScreen;
