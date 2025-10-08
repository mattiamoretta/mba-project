import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "../../utils/cn";

interface JobsScreenProps {
  onBack: () => void;
}

interface Job {
  title: string;
  company: string;
  location: string;
}

interface JobSection {
  id: string;
  label: string;
  summary: string;
  insights: string[];
  jobs: Job[];
}

const allJobs: Job[] = [
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

const jobSections: JobSection[] = [
  {
    id: "all",
    label: "All opportunities",
    summary: "Browse every open role from our network of sustainable construction partners.",
    insights: [
      "Example: 7 active postings from Milan, Rome and beyond.",
      "Interviews typically scheduled within 3 business days.",
      "Profiles with updated AI CVs get 2x more callbacks."
    ],
    jobs: allJobs
  },
  {
    id: "solar",
    label: "Solar & Smart Electrical",
    summary: "Grid-ready teams needed for rooftop PV, storage and KNX integrations.",
    insights: [
      "Example: bundled projects combine inverter setup + smart home commissioning.",
      "Shift demand toward Milan and Bologna industrial parks.",
      "Shortlists close every Friday at 17:00 CET."
    ],
    jobs: allJobs.filter((job) =>
      [
        "Electrician for Solar Panel Installation",
        "Rooftop PV Mounting Specialist",
        "Smart Home Electrician (KNX)"
      ].includes(job.title)
    )
  },
  {
    id: "hvac",
    label: "HVAC & Heating",
    summary: "Support large retrofits with specialists across heating and cooling systems.",
    insights: [
      "Example: office retrofits in Turin require commissioning next month.",
      "Heat pump deployments funded by REPowerEU subsidies.",
      "Technicians with F-Gas certification preferred."
    ],
    jobs: allJobs.filter((job) =>
      [
        "HVAC Technician for Office Retrofit",
        "Heat Pump Installer (Residential)"
      ].includes(job.title)
    )
  },
  {
    id: "plumbing",
    label: "Plumbing & Water Systems",
    summary: "Smart housing pilots need experienced and emerging plumbing talent.",
    insights: [
      "Example: Rome smart districts upgrading greywater recycling lines.",
      "Mentorship track pairs senior plumbers with apprentices.",
      "Site visits happen on Tuesdays and Thursdays."
    ],
    jobs: allJobs.filter((job) =>
      [
        "Plumber for Smart Housing Project",
        "Junior Plumber (Apprenticeship)"
      ].includes(job.title)
    )
  }
];

const JobsScreen = ({ onBack }: JobsScreenProps) => {
  const [activeSectionId, setActiveSectionId] = useState(jobSections[0].id);

  const activeSection = jobSections.find((section) => section.id === activeSectionId) ?? jobSections[0];

  return (
    <div className="flex min-h-dvh flex-col bg-gray-50">
      <div className="px-4 pb-3 pt-4">
        <h2 className="text-lg font-bold text-gray-800">Available Jobs</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
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

          <div className="rounded-3xl border border-indigo-100 bg-white/80 p-3 shadow-sm">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {jobSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSectionId(section.id)}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition",
                    activeSectionId === section.id
                      ? "border-indigo-500 bg-indigo-50 text-indigo-600 shadow"
                      : "border-transparent bg-white text-gray-600 shadow-sm hover:bg-indigo-50/70"
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <Card className="rounded-3xl border-0 bg-white/90 shadow-md">
            <CardContent className="space-y-3 p-5">
              <div>
                <p className="text-sm font-semibold text-indigo-700">{activeSection.label}</p>
                <p className="mt-1 text-sm text-gray-600">{activeSection.summary}</p>
              </div>
              <ul className="space-y-2 text-xs text-gray-500">
                {activeSection.insights.map((insight) => (
                  <li key={insight} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {activeSection.jobs.map((job) => (
            <Card
              key={`${activeSection.id}-${job.title}`}
              className="rounded-3xl border-0 bg-white/90 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
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

        <div className="mt-8">
          <Button
            className="flex w-full items-center justify-center gap-2 rounded-full border border-indigo-100 bg-white px-6 py-3 text-sm font-medium text-indigo-600 shadow-sm"
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobsScreen;
