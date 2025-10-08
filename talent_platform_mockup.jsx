import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mic,
  Briefcase,
  Search,
  Users,
  User,
  Zap,
  ShieldCheck,
  Clock,
  Star,
  StarHalf,
  TrendingUp,
  Play,
  Upload,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AppMockup() {
  const [screen, setScreen] = useState("home");
  const [highlightIndex, setHighlightIndex] = useState(0);
    const [showTrends, setShowTrends] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Fast & Easy",
      desc: "AI-powered CVs and deadlines keep hiring moving at speed.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      title: "Reliable Skills",
      desc: "Verified experts ready to support sustainability projects.",
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: "No Delays",
      desc: "Don’t let scarce talent slow down your innovation pipeline.",
    },
  ];

  // Header uses text only — no rotating images

  

  const RatingStars = () => (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3].map((i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <span className="ml-2 text-xs text-gray-600">4.8/5 • 2,341 reviews</span>
    </div>
  );

  const reviews = [
    { name: "Anna • Electrician", text: "Built my CV in 2 minutes and got 3 interviews." },
    { name: "Paolo • Plumber", text: "Deadlines pushed companies to reply fast. Hired in 4 days." },
    { name: "Sara • Barista", text: "Voice CV was perfect. No typing, just work." },
    { name: "Giulia • Chef", text: "Matched with a new kitchen opening in the same week." },
    { name: "Marco • HVAC", text: "Strong demand for green projects. Consistent gigs." },
  ];

  const ReviewsTicker = () => (
    <div className="overflow-hidden h-20">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -(reviews.length * 48) }}
        transition={{ duration: reviews.length * 4, ease: "linear", repeat: Infinity }}
      >
        {[...reviews, ...reviews].map((r, idx) => (
          <div key={idx} className="flex items-start gap-3 py-2">
            <img
              src={`https://i.pravatar.cc/36?img=${(idx % 70) + 1}`}
              alt="avatar"
              className="w-7 h-7 rounded-full"
            />
            <p className="text-xs text-gray-800">
              <span className="font-medium">{r.name}</span> — {r.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="flex justify-center bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-6">
      <div className="w-[390px] h-[844px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-gray-200">
        {/* Header (Text only) */}
        <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-md flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold tracking-tight drop-shadow-md">BestMbaProjectEver</h1>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm" aria-label="verified skills badge">
              <ShieldCheck className="w-4 h-4" />
            </span>
          </div>
          <p className="text-xs opacity-95 mt-1 max-w-xs">
            We connect the experts of today to build the companies of tomorrow
          </p>
        </div>

        {/* HOME */}
        {screen === "home" && (
          <>
            {/* Search Section */}
            <div className="p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="🔍 Search for jobs or professionals..."
                  className="flex-1 rounded-xl border-gray-300 shadow-sm"
                />
                <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* AI CV Builder */}
            <Card
              className="mx-4 my-3 hover:shadow-xl transition-transform transform hover:scale-[1.02] cursor-pointer"
              onClick={() => setScreen("aiCv")}
            >
              <CardContent className="flex items-center space-x-4 p-5">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <Mic className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">AI CV Builder</h2>
                  <p className="text-sm text-gray-500">Create your CV just by speaking</p>
                </div>
                <Button className="ml-auto rounded-full px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  Start
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions with Trends Hover */}
            <div className="grid grid-cols-2 gap-4 px-4 mt-3">
              <div
                className="relative"
                onMouseEnter={() => setShowTrends(true)}
                onMouseLeave={() => setShowTrends(false)}
              >
                <Card
                  className="cursor-pointer hover:shadow-xl transition-transform transform hover:scale-[1.02]"
                  onClick={() => setScreen("jobs")}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Briefcase className="w-10 h-10 text-blue-600" />
                    <span className="mt-2 font-semibold">Find Jobs</span>
                  </CardContent>
                </Card>
                {showTrends && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full w-56 bg-white border rounded-xl shadow-lg p-3 z-10"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <TrendingUp className="w-4 h-4" /> Trending searches
                    </div>
                    <ul className="mt-2 text-xs text-gray-600 space-y-1">
                      <li>• Electrician (solar)</li>
                      <li>• Plumber (smart housing)</li>
                      <li>• HVAC technician</li>
                      <li>• Heat pump installer</li>
                    </ul>
                  </motion.div>
                )}
              </div>

              <Card
                className="cursor-pointer hover:shadow-xl transition-transform transform hover:scale-[1.02]"
                onClick={() => setScreen("professionals")}
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Users className="w-10 h-10 text-green-600" />
                  <span className="mt-2 font-semibold">Hire Experts</span>
                </CardContent>
              </Card>
            </div>

            {/* Rotating Highlights */}
            <motion.div
              key={highlightIndex}
              className="mt-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 text-center border-t flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-2">{highlights[highlightIndex].icon}</div>
              <h3 className="font-bold text-indigo-700 text-lg">{highlights[highlightIndex].title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-xs">
                {highlights[highlightIndex].desc}
              </p>
            </motion.div>

            {/* Reviews ticker + Ratings */}
            <div className="px-4 mt-2">
              <ReviewsTicker />
            </div>
            <div className="px-4 pt-3 pb-5 border-t mt-3 bg-white/70 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/40?img=12" alt="avatar" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="text-sm text-gray-800 font-medium">“So easy I built my CV in 2 minutes.”</p>
                    <p className="text-[11px] text-gray-500">— Anna, Electrician</p>
                  </div>
                </div>
                <RatingStars />
              </div>
            </div>
          </>
        )}

        {/* JOBS (with Map) */}
        {screen === "jobs" && (
          <div className="p-4 flex-1 overflow-y-auto bg-gray-50">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Available Jobs</h2>
            {/* Simple Map mockup */}
            <Card className="mb-4 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-40 w-full bg-gradient-to-br from-blue-50 to-green-50">
                  {/* pseudo pins */}
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

            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg">Electrician for Solar Panel Installation</h3>
                <p className="text-sm text-gray-500">Green Energy Co. • Milan</p>
                <Button className="mt-3 w-full rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Apply</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg">Plumber for Smart Housing Project</h3>
                <p className="text-sm text-gray-500">EcoBuild • Rome</p>
                <Button className="mt-3 w-full rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Apply</Button>
              </CardContent>
            </Card>

            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg">HVAC Technician for Office Retrofit</h3>
                <p className="text-sm text-gray-500">ClimaTech • Turin</p>
                <Button className="mt-3 w-full rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Apply</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg">Heat Pump Installer (Residential)</h3>
                <p className="text-sm text-gray-500">EcoTherm • Verona</p>
                <Button className="mt-3 w-full rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Apply</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg">Rooftop PV Mounting Specialist</h3>
                <p className="text-sm text-gray-500">SunMount • Bologna</p>
                <Button className="mt-3 w-full rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Apply</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg">Smart Home Electrician (KNX)</h3>
                <p className="text-sm text-gray-500">Domotix • Milan</p>
                <Button className="mt-3 w-full rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Apply</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg">Junior Plumber (Apprenticeship)</h3>
                <p className="text-sm text-gray-500">AquaFlow • Rome</p>
                <Button className="mt-3 w-full rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Apply</Button>
              </CardContent>
            </Card>

            <Button variant="outline" className="mt-2 w-full rounded-xl" onClick={() => setScreen("home")}>
              ⬅ Back to Home
            </Button>
          </div>
        )}

        {/* PROFESSIONALS */}
        {screen === "professionals" && (
          <div className="p-4 flex-1 overflow-y-auto bg-gray-50">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Top Professionals</h2>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="flex items-center space-x-4 p-5">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <User className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Marco Rossi</h3>
                  <p className="text-sm text-gray-500">Certified Electrician • 10 yrs exp.</p>
                </div>
                <Button className="ml-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5">Hire</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="flex items-center space-x-4 p-5">
                <div className="bg-green-100 p-3 rounded-xl">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Luca Bianchi</h3>
                  <p className="text-sm text-gray-500">Plumber • Smart Housing Specialist</p>
                </div>
                <Button className="ml-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5">Hire</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="flex items-center space-x-4 p-5">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <User className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Chiara Verdi</h3>
                  <p className="text-sm text-gray-500">HVAC Technician • Retrofit & Commissioning</p>
                </div>
                <Button className="ml-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5">Hire</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="flex items-center space-x-4 p-5">
                <div className="bg-rose-100 p-3 rounded-xl">
                  <User className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Elena Neri</h3>
                  <p className="text-sm text-gray-500">Heat Pump Installer • Residential</p>
                </div>
                <Button className="ml-auto rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white px-5">Hire</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="flex items-center space-x-4 p-5">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Ahmed Karim</h3>
                  <p className="text-sm text-gray-500">PV Mounting Specialist • Rooftop & Facade</p>
                </div>
                <Button className="ml-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5">Hire</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="flex items-center space-x-4 p-5">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Sofia Conti</h3>
                  <p className="text-sm text-gray-500">Smart Home Electrician • KNX & Zigbee</p>
                </div>
                <Button className="ml-auto rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white px-5">Hire</Button>
              </CardContent>
            </Card>
            <Card className="mb-4 hover:shadow-lg">
              <CardContent className="flex items-center space-x-4 p-5">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <User className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Davide Romano</h3>
                  <p className="text-sm text-gray-500">Plumber • Smart Housing & Heat Pumps</p>
                </div>
                <Button className="ml-auto rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-5">Hire</Button>
              </CardContent>
            </Card>

            <Button variant="outline" className="mt-6 w-full rounded-xl" onClick={() => setScreen("home")}>
              ⬅ Back to Home
            </Button>
          </div>
        )}

        {/* AI CV EXPLAIN PAGE */}
        {screen === "aiCv" && (
          <div className="flex-1 bg-white flex flex-col">
            <div className="p-6">
              <h2 className="text-xl font-extrabold text-gray-800">AI CV Builder</h2>
              <p className="text-sm text-gray-600 mt-1">Why it’s super fancy:</p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                <li>Speak naturally → instant structured CV.</li>
                <li>Auto-summarizes skills & certifications.</li>
                <li>One-tap translation and formatting.</li>
                <li>ATS-friendly and company-ready in minutes.</li>
              </ul>
            </div>

            {/* Big REC button */}
            <div className="flex-1 flex items-center justify-center">
              <motion.button
                className="relative w-40 h-40 rounded-full bg-red-500 text-white shadow-2xl flex items-center justify-center"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setScreen("cvPreview")}
              >
                <span className="absolute inset-0 rounded-full animate-ping bg-red-400 opacity-30" />
                <div className="flex flex-col items-center">
                  <Play className="w-7 h-7" />
                  <span className="mt-1 font-semibold tracking-wide">REC</span>
                </div>
              </motion.button>
            </div>

            <div className="px-6 pb-6">
              <Button
                className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600"
                onClick={() => setScreen("home")}
              >
                Done
              </Button>
            </div>
          </div>
        )}
        {/* CV PREVIEW (fake, ready to upload) */}
        {screen === "cvPreview" && (
          <div className="flex-1 bg-gray-50 flex flex-col">
            <div className="p-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">Your CV is ready</h2>
              <span className="text-xs text-gray-500">ATS‑friendly</span>
            </div>
            <div className="px-5 pb-4 overflow-y-auto">
              <Card className="shadow-sm">
                <CardContent className="p-5">
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

                  <hr className="my-4" />

                  <section className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-800">Professional Summary</h4>
                    <p className="text-xs text-gray-700 mt-1">
                      Electrician with 10+ years in residential & commercial projects, specializing in solar PV, smart
                      home (KNX), and heat pump installations. Safety‑first, on‑time delivery, and excellent client
                      communication.
                    </p>
                  </section>

                  <section className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-800">Skills</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[
                        "Solar PV",
                        "Heat Pumps",
                        "KNX",
                        "Wiring",
                        "Troubleshooting",
                        "Blueprints",
                        "Italian/English",
                      ].map((s) => (
                        <span
                          key={s}
                          className="text-[11px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="mb-3">
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

                  <section className="mb-1">
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
              <Button variant="outline" className="rounded-xl flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Export PDF
              </Button>
              <Button variant="ghost" className="col-span-2" onClick={() => setScreen("aiCv")}>
                ↩ Edit recording
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
