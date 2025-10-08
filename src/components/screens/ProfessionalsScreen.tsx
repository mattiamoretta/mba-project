import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, CalendarClock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../utils/cn";

interface ProfessionalsScreenProps {
  onBack: () => void;
}

interface Candidate {
  name: string;
  headline: string;
  roleTag: string;
  location: string;
  availability: string;
  rate: string;
  image: string;
  competences: string[];
  highlights: string[];
}

interface RoleGroup {
  id: string;
  label: string;
  gradient: string;
  chipClass: string;
  indicator: string;
  ctaGradient: string;
  summary: string;
  stats: string[];
  candidates: Candidate[];
}

const roleGroups: RoleGroup[] = [
  {
    id: "electricians",
    label: "Electricians",
    gradient: "from-indigo-500/90 via-indigo-400/90 to-sky-500/80",
    chipClass: "bg-indigo-100 text-indigo-700",
    indicator: "bg-indigo-500",
    ctaGradient: "from-indigo-600 to-purple-600",
    summary: "Certified experts for smart grids, EV charging and solar PV tie-ins.",
    stats: ["Avg. 9 yrs exp.", "CEI 11-27 certified", "<4h response"],
    candidates: [
      {
        name: "Marco Rossi",
        headline: "Senior field electrician for energy retrofits and industrial upgrades.",
        roleTag: "Senior Electrician",
        location: "Milan, IT",
        availability: "Available next week",
        rate: "€48/h",
        image: "https://i.pravatar.cc/150?img=12",
        competences: ["EV charging stations", "Solar PV integration", "Energy audits"],
        highlights: [
          "Led retrofit programs for 60+ industrial sites with zero incidents.",
          "Bilingual Italian/English with project coordination experience."
        ]
      },
      {
        name: "Sofia Conti",
        headline: "Smart home specialist connecting KNX, Zigbee and IoT sensors for efficiency.",
        roleTag: "Smart Home Electrician",
        location: "Turin, IT",
        availability: "Booking for 28 May",
        rate: "€42/h",
        image: "https://i.pravatar.cc/150?img=5",
        competences: ["KNX & Zigbee", "Smart metering", "Automation testing"],
        highlights: [
          "Delivered 40+ connected homes with 99.8% uptime KPIs.",
          "Author of a KNX best practices playbook for energy savings."
        ]
      },
      {
        name: "Ahmed Karim",
        headline: "PV mounting lead for complex rooftops and architectural facades.",
        roleTag: "PV Mounting Specialist",
        location: "Bologna, IT",
        availability: "Immediate start",
        rate: "€45/h",
        image: "https://i.pravatar.cc/150?img=66",
        competences: ["Rooftop installations", "Facade mounting", "Site safety lead"],
        highlights: [
          "Certified rope-access installer for high-altitude solar projects.",
          "Manages crews of up to 12 installers on tight urban schedules."
        ]
      }
    ]
  },
  {
    id: "plumbers",
    label: "Plumbers",
    gradient: "from-emerald-500/90 via-green-500/90 to-lime-500/80",
    chipClass: "bg-emerald-100 text-emerald-700",
    indicator: "bg-emerald-500",
    ctaGradient: "from-emerald-500 to-green-600",
    summary: "Hydronics pros ready for grey-water recovery and smart housing retrofits.",
    stats: ["Heat pump ready", "UNI 7129 certified", "IoT diagnostics"],
    candidates: [
      {
        name: "Luca Bianchi",
        headline: "Lead plumber designing BIM-first piping for smart living complexes.",
        roleTag: "Lead Plumber",
        location: "Rome, IT",
        availability: "Starts in 3 days",
        rate: "€44/h",
        image: "https://i.pravatar.cc/150?img=32",
        competences: ["Smart housing plumbing", "Grey water recovery", "BIM schematics"],
        highlights: [
          "Coordinated a five-building retrofit for EcoBuild's flagship village.",
          "Certified UNI 7129 gas installer with leak-free track record."
        ]
      },
      {
        name: "Davide Romano",
        headline: "Retrofit plumber combining hydronics and low-temp heat pump loops.",
        roleTag: "Retrofit Specialist",
        location: "Florence, IT",
        availability: "Free from 2 June",
        rate: "€41/h",
        image: "https://i.pravatar.cc/150?img=23",
        competences: ["Heat pump loops", "Thermal storage", "Smart valves"],
        highlights: [
          "Delivered 75+ apartments with remote diagnostics in 2024.",
          "Mentors apprentices on sustainable plumbing practices."
        ]
      }
    ]
  },
  {
    id: "hvac",
    label: "HVAC & Heat Pumps",
    gradient: "from-amber-500/90 via-orange-500/90 to-rose-500/80",
    chipClass: "bg-amber-100 text-amber-700",
    indicator: "bg-amber-500",
    ctaGradient: "from-amber-500 to-rose-500",
    summary: "Commissioning and maintenance leaders for next-gen climate systems.",
    stats: ["F-gas licensed", "Commissioning experts", "Digital twins"],
    candidates: [
      {
        name: "Chiara Verdi",
        headline: "HVAC engineer ensuring balanced airflows and healthy indoor climates.",
        roleTag: "HVAC Engineer",
        location: "Turin, IT",
        availability: "Slots open this Friday",
        rate: "€52/h",
        image: "https://i.pravatar.cc/150?img=47",
        competences: ["Retrofit commissioning", "BMS tuning", "Air quality analytics"],
        highlights: [
          "Optimised office retrofits saving 28% energy YOY.",
          "Certified to run digital twin simulations for HVAC load testing."
        ]
      },
      {
        name: "Elena Neri",
        headline: "Heat pump installer for multi-family buildings and boutique hotels.",
        roleTag: "Heat Pump Installer",
        location: "Verona, IT",
        availability: "On-site within 5 days",
        rate: "€46/h",
        image: "https://i.pravatar.cc/150?img=54",
        competences: ["Monobloc & split pumps", "Underfloor heating", "Commissioning"],
        highlights: [
          "Installed 110+ residential heat pumps with smart monitoring.",
          "Partnered with utilities to unlock incentive paperwork for clients."
        ]
      }
    ]
  }
];

const ProfessionalsScreen = ({ onBack }: ProfessionalsScreenProps) => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [activeCandidateIndex, setActiveCandidateIndex] = useState(0);

  useEffect(() => {
    setActiveCandidateIndex(0);
  }, [activeRoleIndex]);

  const activeRole = roleGroups[activeRoleIndex];
  const activeCandidate = activeRole.candidates[activeCandidateIndex];

  return (
    <div className="flex h-full flex-col bg-gray-50">
      <div className="px-4 pb-3 pt-4">
        <h2 className="text-lg font-bold text-gray-800">Hire Experts</h2>
        <p className="mt-1 text-xs text-gray-500">Pick a role to browse ready-to-start talent.</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-10">
        <div className="rounded-full bg-white/70 p-1 shadow-inner">
          <div className="grid grid-cols-3 gap-1">
            {roleGroups.map((role, index) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveRoleIndex(index)}
                className={cn(
                  "rounded-full px-3 py-2 text-xs font-medium transition",
                  index === activeRoleIndex
                    ? "bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/70 text-white shadow"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        <Card className={cn("mt-5 overflow-hidden rounded-3xl border-0 text-white shadow-lg", "bg-gradient-to-br", activeRole.gradient)}>
          <CardContent className="space-y-3 p-5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Role focus</span>
            <h3 className="text-lg font-semibold leading-tight">{activeRole.label}</h3>
            <p className="text-sm text-white/80">{activeRole.summary}</p>
            <div className="flex flex-wrap gap-2">
              {activeRole.stats.map((stat) => (
                <span key={stat} className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white">
                  {stat}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCandidate.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <Card className="rounded-3xl border-0 bg-white/95 shadow-xl">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                      <img src={activeCandidate.image} alt={activeCandidate.name} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={cn("rounded-full px-3 py-1 text-[11px] font-medium", activeRole.chipClass)}>
                          {activeCandidate.roleTag}
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">
                          {activeCandidate.rate}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900">{activeCandidate.name}</h3>
                      <p className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="h-3.5 w-3.5" /> {activeCandidate.location}
                      </p>
                    </div>
                    <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600 sm:inline-flex">
                      {activeCandidate.availability}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">{activeCandidate.headline}</p>

                  <div className="flex flex-wrap gap-2">
                    {activeCandidate.competences.map((competence) => (
                      <span key={competence} className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-medium text-indigo-600">
                        {competence}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-xs text-gray-600">
                    {activeCandidate.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-2xl bg-slate-50 px-3 py-2">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <CalendarClock className="h-3.5 w-3.5" />
                      {activeCandidate.availability}
                    </span>
                    <span className="font-medium text-gray-700">Response within 2 hours</span>
                  </div>

                  <Button className={cn("w-full rounded-full py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl", "bg-gradient-to-r", activeRole.ctaGradient)}>
                    Book this expert
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex justify-center gap-2">
            {activeRole.candidates.map((candidate, index) => (
              <button
                key={candidate.name}
                type="button"
                onClick={() => setActiveCandidateIndex(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  index === activeCandidateIndex ? "w-8" : "w-2 bg-slate-300",
                  index === activeCandidateIndex ? activeRole.indicator : ""
                )}
                aria-label={`Show profile for ${candidate.name}`}
              />
            ))}
          </div>
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
};

export default ProfessionalsScreen;
