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
    buttonGradient: "from-indigo-500 to-purple-600",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Luca Bianchi",
    role: "Plumber • Smart Housing Specialist",
    badgeBg: "bg-green-100",
    badgeText: "text-green-600",
    buttonGradient: "from-green-500 to-emerald-600",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    name: "Chiara Verdi",
    role: "HVAC Technician • Retrofit & Commissioning",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-600",
    buttonGradient: "from-amber-500 to-orange-600",
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    name: "Elena Neri",
    role: "Heat Pump Installer • Residential",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-600",
    buttonGradient: "from-rose-500 to-pink-600",
    image: "https://i.pravatar.cc/150?img=54"
  },
  {
    name: "Ahmed Karim",
    role: "PV Mounting Specialist • Rooftop & Facade",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-600",
    buttonGradient: "from-blue-500 to-indigo-600",
    image: "https://i.pravatar.cc/150?img=66"
  },
  {
    name: "Sofia Conti",
    role: "Smart Home Electrician • KNX & Zigbee",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-600",
    buttonGradient: "from-purple-500 to-fuchsia-600",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Davide Romano",
    role: "Plumber • Smart Housing & Heat Pumps",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-600",
    buttonGradient: "from-emerald-500 to-green-600",
    image: "https://i.pravatar.cc/150?img=23"
  }
];

const ProfessionalsScreen = ({ onBack }: ProfessionalsScreenProps) => (
  <div className="flex h-full flex-col bg-gray-50">
    <div className="px-4 pb-3 pt-4">
      <h2 className="text-lg font-bold text-gray-800">Top Professionals</h2>
    </div>

    <div className="flex-1 overflow-y-auto">
      <div className="space-y-4 px-4 pb-28">
        {professionals.map((professional) => (
          <Card key={professional.name} className="rounded-3xl border-0 bg-white/90 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                <img
                  alt={professional.name}
                  src={professional.image}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className={cn("absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white", professional.badgeBg)} />
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
      <div className="sticky inset-x-0 bottom-0 border-t border-white/60 bg-gray-50/95 px-4 pb-6 pt-4 backdrop-blur supports-[backdrop-filter]:bg-gray-50/70">
        <Button
          className="flex w-full items-center justify-center gap-2 rounded-full border border-indigo-100 bg-white px-6 py-3 text-sm font-medium text-indigo-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>
    </div>
  </div>
);

export default ProfessionalsScreen;
