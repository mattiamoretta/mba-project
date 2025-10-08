import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "../../utils/cn";

interface JobsScreenProps {
  onBack: () => void;
}

interface Job {
  title: string;
  company: string;
  location: string;
  description: string;
}

interface JobSection {
  id: string;
  label: string;
  summary: string;
  insights: string[];
  gradient: string;
  ctaGradient: string;
  jobs: Job[];
}

const allJobs: Job[] = [
  {
    title: "Electrician for Solar Panel Installation",
    company: "Green Energy Co.",
    location: "Milan",
    description: "Install, cable and commission new-build rooftop solar arrays for SME clients."
  },
  {
    title: "Plumber for Smart Housing Project",
    company: "EcoBuild",
    location: "Rome",
    description: "Lead greywater and smart-meter plumbing upgrades within a connected housing pilot."
  },
  {
    title: "HVAC Technician for Office Retrofit",
    company: "ClimaTech",
    location: "Turin",
    description: "Balance airflow, tune BMS schedules and handover retrofit documentation for offices."
  },
  {
    title: "Heat Pump Installer (Residential)",
    company: "EcoTherm",
    location: "Verona",
    description: "Install and commission monobloc and split heat pumps for multi-family buildings."
  },
  {
    title: "Rooftop PV Mounting Specialist",
    company: "SunMount",
    location: "Bologna",
    description: "Plan safe access and assemble substructures for complex PV rooftops and facades."
  },
  {
    title: "Smart Home Electrician (KNX)",
    company: "Domotix",
    location: "Milan",
    description: "Integrate KNX devices and sync energy dashboards with existing solar storage systems."
  },
  {
    title: "Junior Plumber (Apprenticeship)",
    company: "AquaFlow",
    location: "Rome",
    description: "Support senior crews on piping layouts, leak checks and connected fixtures installation."
  }
];

const jobSections: JobSection[] = [
  {
    id: "all",
    label: "All opportunities",
    summary: "Browse every open role from our network of sustainable construction partners.",
    insights: [
      "7 live projects across Milan, Rome & Verona",
      "Interviews within three business days",
      "AI CVs receive 2× more callbacks"
    ],
    gradient: "from-indigo-600/95 via-purple-600/90 to-blue-500/85",
    ctaGradient: "from-indigo-600 to-purple-600",
    jobs: allJobs
  },
  {
    id: "solar",
    label: "Solar & Smart Electrical",
    summary: "Grid-ready teams needed for rooftop PV, storage and KNX integrations.",
    insights: [
      "Bundled PV + storage commissioning",
      "Demand spike in Milan & Bologna",
      "Shortlists close Fridays 17:00 CET"
    ],
    gradient: "from-amber-500/95 via-orange-500/90 to-pink-500/85",
    ctaGradient: "from-amber-500 to-pink-500",
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
      "Office retrofits onboarding in Turin",
      "REPowerEU funded heat pump installs",
      "F-Gas licences prioritised"
    ],
    gradient: "from-sky-500/95 via-blue-500/90 to-indigo-500/85",
    ctaGradient: "from-sky-500 to-indigo-500",
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
      "Rome smart districts upgrading greywater",
      "Mentorship pairings for apprentices",
      "Site visits on Tuesdays & Thursdays"
    ],
    gradient: "from-emerald-500/95 via-green-500/90 to-lime-500/80",
    ctaGradient: "from-emerald-500 to-green-500",
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

  return (
    <div className="flex min-h-dvh flex-col bg-gray-50">
      <div className="px-4 pb-3 pt-4">
        <h2 className="text-lg font-bold text-gray-800">Available Jobs</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
        <div className="space-y-4">
          <Tabs value={activeSectionId} onValueChange={setActiveSectionId} className="space-y-4">
            <TabsList className="grid grid-cols-1 gap-2 rounded-full bg-white/70 p-1 shadow-inner sm:grid-cols-2">
              {jobSections.map((section) => {
                const isActive = activeSectionId === section.id;

                return (
                  <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                      isActive
                        ? cn("text-white shadow-lg", "bg-gradient-to-br", section.gradient)
                        : "border border-transparent bg-white/90 text-gray-600 shadow-sm hover:border-gray-200 hover:bg-gray-50"
                    )}
                  >
                    <p
                      className={cn(
                        "text-sm font-semibold leading-tight",
                        isActive ? "text-white" : "text-gray-700"
                      )}
                    >
                      {section.label}
                    </p>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {jobSections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="space-y-4">
                <Card className={cn("overflow-hidden rounded-3xl border-0 text-white shadow-lg", "bg-gradient-to-br", section.gradient)}>
                  <CardContent className="space-y-3 p-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Opportunity focus</span>
                    <h3 className="text-lg font-semibold leading-tight">{section.label}</h3>
                    <p className="text-sm text-white/80">{section.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {section.insights.map((insight) => (
                        <span key={insight} className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white">
                          {insight}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {section.jobs.map((job) => (
                  <Card
                    key={`${section.id}-${job.title}`}
                    className="rounded-3xl border-0 bg-white/90 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <CardContent className="space-y-3 p-5">
                      <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                      <p className="text-sm text-gray-500">
                        {job.company} • {job.location}
                      </p>
                      <p className="text-sm text-gray-600">{job.description}</p>
                      <Button className={cn("w-full rounded-2xl bg-gradient-to-r py-2 text-white shadow hover:brightness-110", section.ctaGradient)}>
                        Apply now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
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
