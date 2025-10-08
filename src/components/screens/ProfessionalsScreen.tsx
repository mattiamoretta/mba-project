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
  <div className="p-4 flex-1 overflow-y-auto bg-gray-50">
    <h2 className="text-xl font-bold mb-4 text-gray-800">Top Professionals</h2>

    {professionals.map((professional) => (
      <Card key={professional.name} className="mb-4 hover:shadow-lg">
        <CardContent className="flex items-center space-x-4 p-5">
          <div className={cn("p-3 rounded-xl", professional.badgeBg)}>
            <span className={cn("text-sm font-semibold", professional.badgeText)}>{professional.name[0]}</span>
          </div>
          <div>
            <h3 className="font-semibold">{professional.name}</h3>
            <p className="text-sm text-gray-500">{professional.role}</p>
          </div>
          <Button className={cn("ml-auto rounded-full text-white px-5 bg-gradient-to-r", professional.buttonGradient)}>
            Hire
          </Button>
        </CardContent>
      </Card>
    ))}

    <Button
      className="mt-6 w-full rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      onClick={onBack}
    >
      ⬅ Back to Home
    </Button>
  </div>
);

export default ProfessionalsScreen;
