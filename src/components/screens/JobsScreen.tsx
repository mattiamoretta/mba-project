import { ArrowLeft } from "lucide-react";
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
  <div className="flex h-full flex-col bg-gray-50">
    <div className="px-4 pb-3 pt-4">
      <h2 className="text-lg font-bold text-gray-800">Available Jobs</h2>
    </div>

    <div className="flex-1 overflow-y-auto px-4 pb-10">
      <div className="space-y-4">
        <Card className="overflow-hidden rounded-3xl border-0 shadow-md">
          <CardContent className="p-0">
            <div className="relative h-40 w-full bg-gradient-to-br from-blue-50 via-white to-green-50">
              <div className="absolute left-10 top-8 h-3 w-3 rounded-full bg-indigo-600 shadow" title="Milan" />
              <div className="absolute left-40 top-16 h-3 w-3 rounded-full bg-emerald-600 shadow" title="Verona" />
              <div className="absolute left-24 top-28 h-3 w-3 rounded-full bg-pink-600 shadow" title="Bologna" />
              <div className="absolute right-10 top-12 h-3 w-3 rounded-full bg-yellow-600 shadow" title="Venice" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t bg-white/90 p-2 text-xs text-gray-700">
                <span className="font-medium">Nearby demand:</span>
                <span>• Electrician • Plumber • HVAC</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {jobs.map((job) => (
          <Card key={job.title} className="rounded-3xl border-0 bg-white/90 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
            <CardContent className="space-y-3 p-5">
              <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
              <p className="text-sm text-gray-500">
                {job.company} • {job.location}
              </p>
              <Button className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-2 text-white shadow hover:brightness-110">
                Apply now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    <div className="border-t border-white/60 bg-gray-50/95 px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-4 backdrop-blur supports-[backdrop-filter]:bg-gray-50/70">
      <Button
        className="flex w-full items-center justify-center gap-2 rounded-full border border-indigo-100 bg-white px-6 py-3 text-sm font-medium text-indigo-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50"
        onClick={onBack}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Button>
    </div>
  </div>
);

export default JobsScreen;
