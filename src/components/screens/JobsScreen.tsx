import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface JobsScreenProps {
  onBack: () => void;
}

const jobs = [
  {
    title: "Electrician for Solar Panel Installation",
    company: "Green Energy Co.",
    location: "Milan"
  },
  {
    title: "Plumber for Smart Housing Project",
    company: "EcoBuild",
    location: "Rome"
  },
  {
    title: "HVAC Technician for Office Retrofit",
    company: "ClimaTech",
    location: "Turin"
  },
  {
    title: "Heat Pump Installer (Residential)",
    company: "EcoTherm",
    location: "Verona"
  },
  {
    title: "Rooftop PV Mounting Specialist",
    company: "SunMount",
    location: "Bologna"
  },
  {
    title: "Smart Home Electrician (KNX)",
    company: "Domotix",
    location: "Milan"
  },
  {
    title: "Junior Plumber (Apprenticeship)",
    company: "AquaFlow",
    location: "Rome"
  }
];

const JobsScreen = ({ onBack }: JobsScreenProps) => (
  <div className="p-4 flex-1 overflow-y-auto bg-gray-50">
    <h2 className="text-xl font-bold mb-2 text-gray-800">Available Jobs</h2>

    <Card className="mb-4 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-40 w-full bg-gradient-to-br from-blue-50 to-green-50">
          <div className="absolute left-10 top-8 w-3 h-3 rounded-full bg-indigo-600 shadow" title="Milan" />
          <div className="absolute left-40 top-16 w-3 h-3 rounded-full bg-emerald-600 shadow" title="Verona" />
          <div className="absolute left-24 top-28 w-3 h-3 rounded-full bg-pink-600 shadow" title="Bologna" />
          <div className="absolute right-10 top-12 w-3 h-3 rounded-full bg-yellow-600 shadow" title="Venice" />
          <div className="absolute inset-x-0 bottom-0 bg-white/90 p-2 text-xs text-gray-700 flex items-center gap-2 border-t">
            <span className="font-medium">Nearby demand:</span>
            <span>• Electrician • Plumber • HVAC</span>
          </div>
        </div>
      </CardContent>
    </Card>

    {jobs.map((job) => (
      <Card key={job.title} className="mb-4 hover:shadow-lg">
        <CardContent className="p-5">
          <h3 className="font-semibold text-lg">{job.title}</h3>
          <p className="text-sm text-gray-500">
            {job.company} • {job.location}
          </p>
          <Button className="mt-3 w-full rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Apply</Button>
        </CardContent>
      </Card>
    ))}

    <Button
      className="mt-2 w-full rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      onClick={onBack}
    >
      ⬅ Back to Home
    </Button>
  </div>
);

export default JobsScreen;
