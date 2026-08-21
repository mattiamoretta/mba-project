"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Compass,
  FileCheck2,
  Fingerprint,
  Heart,
  Home,
  Languages,
  LogOut,
  MapPin,
  PartyPopper,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Users,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { ChatGPTUser } from "../chatgpt-auth";

type Role = "worker" | "employer";
type Tab = "home" | "discover" | "activity" | "profile";

type AppProps = {
  user: ChatGPTUser;
  signOutPath: string;
};

const navItems: Array<{ id: Tab; label: string; icon: typeof Home }> = [
  { id: "home", label: "Home", icon: Home },
  { id: "discover", label: "Scopri", icon: Compass },
  { id: "activity", label: "Attività", icon: CalendarDays },
  { id: "profile", label: "Profilo", icon: UserRound },
];

const tourSteps = [
  {
    icon: Sparkles,
    kicker: "Benvenuto in Turn-Up",
    title: "Partiamo dal tuo lato.",
    text: "Cerchi un’opportunità o stai costruendo un team? Puoi cambiare vista quando vuoi: il prodotto si adatta a te.",
  },
  {
    icon: Zap,
    kicker: "Zero rumore",
    title: "La next move è sempre qui.",
    text: "La Home mostra una sola priorità: il match migliore o la vacancy che richiede attenzione. Il resto resta a un tap.",
  },
  {
    icon: Fingerprint,
    kicker: "Niente magia nera",
    title: "Ogni match si spiega.",
    text: "Apri il punteggio per capire ruolo, turni, distanza e requisiti. Decidi con informazioni vere, non con un numero vuoto.",
  },
  {
    icon: CheckCircle2,
    kicker: "Tutto sotto controllo",
    title: "Sai sempre cosa succede.",
    text: "Attività, colloqui e documenti sono in una timeline chiara. Pronto? Facciamo il primo passo.",
  },
];

const workerJobs = [
  { company: "Nodo Milano", role: "Chef de rang", area: "Porta Venezia", distance: "1,2 km", pay: "€1.620–1.780", score: 96, color: "mint", tags: ["Turni compatibili", "CCNL Turismo"] },
  { company: "Cortile 21", role: "Barista", area: "Navigli", distance: "2,4 km", pay: "€1.480–1.620", score: 91, color: "coral", tags: ["Disponibile subito", "Team internazionale"] },
  { company: "Casa Lina", role: "Commis di sala", area: "Isola", distance: "3,1 km", pay: "€1.400–1.520", score: 88, color: "sand", tags: ["Lingua compatibile", "Formazione inclusa"] },
];

const candidates = [
  { name: "Fatima A.", initials: "FA", role: "Chef de rang", score: 96, note: "Esperienza verificata", color: "coral", unlocked: true },
  { name: "Luca M.", initials: "LM", role: "Cameriere", score: 92, note: "Disponibile subito", color: "mint", unlocked: false },
  { name: "Samir K.", initials: "SK", role: "Barista", score: 89, note: "Italiano + inglese", color: "sand", unlocked: false },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`tu-brand ${compact ? "compact" : ""}`}>
      <span className="tu-brand-mark"><Zap size={18} fill="currentColor" /></span>
      {!compact && <span>Turn-Up</span>}
    </span>
  );
}

function PageTransition({ children, tab }: { children: ReactNode; tab: Tab }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      key={tab}
      className="tu-screen"
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Score({ value }: { value: number }) {
  return <span className="tu-score" style={{ "--score": `${value * 3.6}deg` } as React.CSSProperties}><b>{value}%</b></span>;
}

function RoleSwitch({ role, onChange }: { role: Role; onChange: (role: Role) => void }) {
  return (
    <div className="tu-role-switch" aria-label="Cambia prospettiva">
      {(["worker", "employer"] as const).map((item) => (
        <button type="button" className={role === item ? "active" : ""} onClick={() => onChange(item)} key={item}>
          {role === item && <motion.span className="tu-role-active" layoutId="role-active" />}
          <span>{item === "worker" ? "Cerco lavoro" : "Cerco persone"}</span>
        </button>
      ))}
    </div>
  );
}

function WorkerHome({ name, onExplore, onInterested, interested }: { name: string; onExplore: () => void; onInterested: () => void; interested: boolean }) {
  const [whyOpen, setWhyOpen] = useState(false);
  return (
    <>
      <header className="tu-page-heading">
        <div><span>Venerdì, 21 agosto</span><h1>Ciao {name} <span aria-hidden="true">👋</span></h1><p>Una buona occasione è appena entrata nel radar.</p></div>
        <div className="tu-heading-badge"><Sparkles size={18} /><span><strong>Profilo all’84%</strong>Completa due passaggi</span></div>
      </header>

      <section className="tu-next-card worker-next">
        <div className="tu-next-copy">
          <span className="tu-kicker"><Zap size={14} fill="currentColor" /> La tua next move</span>
          <div className="tu-job-title"><span className="tu-company-logo">NO</span><div><h2>Chef de rang</h2><p>Nodo Milano · Porta Venezia</p></div></div>
          <div className="tu-job-meta"><span><MapPin size={15} /> 1,2 km</span><span><Clock3 size={15} /> Full time</span><span><WalletCards size={15} /> €1.620–1.780</span></div>
          <button className="tu-why-button" type="button" onClick={() => setWhyOpen((value) => !value)} aria-expanded={whyOpen}>
            <span><Sparkles size={15} /> Perché è un match forte</span><ChevronDown size={16} className={whyOpen ? "open" : ""} />
          </button>
          <AnimatePresence initial={false}>
            {whyOpen && (
              <motion.div className="tu-reasons" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                <span><Check size={12} /> Turni compatibili</span><span><Check size={12} /> Esperienza richiesta</span><span><Check size={12} /> Distanza sostenibile</span>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="tu-next-actions">
            <button type="button" className="tu-button tu-button-soft" onClick={onExplore}>Vedi dettagli</button>
            <motion.button whileTap={{ scale: .97 }} type="button" className={`tu-button ${interested ? "tu-button-done" : "tu-button-lime"}`} onClick={onInterested}>
              {interested ? <><CheckCircle2 size={17} /> Interesse inviato</> : <>Mi interessa <ArrowRight size={17} /></>}
            </motion.button>
          </div>
        </div>
        <div className="tu-score-stage"><Score value={96} /><small>compatibilità</small></div>
      </section>

      <div className="tu-home-grid">
        <article className="tu-soft-card profile-progress-card">
          <div className="tu-card-top"><span className="tu-icon mint"><Fingerprint size={19} /></span><span className="tu-mini-pill">+16% visibilità</span></div>
          <h3>Fatti trovare meglio.</h3><p>Aggiungi la disponibilità del weekend e verifica il documento.</p>
          <div className="tu-progress"><span style={{ width: "84%" }} /></div>
          <button type="button">Completa il profilo <ArrowRight size={15} /></button>
        </article>
        <article className="tu-soft-card activity-glance-card">
          <div className="tu-card-top"><span className="tu-icon coral"><Bell size={19} /></span><span className="tu-mini-pill coral">2 nuove</span></div>
          <h3>Sta succedendo.</h3>
          <div className="tu-glance-row"><span className="tu-dot active" /><div><strong>Cortile 21</strong><small>Ha aperto il tuo profilo · 8 min</small></div></div>
          <div className="tu-glance-row"><span className="tu-dot" /><div><strong>Colloquio confermato</strong><small>Domani alle 10:30</small></div></div>
        </article>
      </div>
    </>
  );
}

function EmployerHome({ name, onExplore }: { name: string; onExplore: () => void }) {
  return (
    <>
      <header className="tu-page-heading">
        <div><span>Venerdì, 21 agosto</span><h1>Ciao {name} <span aria-hidden="true">👋</span></h1><p>La shortlist si sta muovendo. Ecco cosa conta ora.</p></div>
        <button type="button" className="tu-button tu-button-dark"><Plus size={17} /> Nuova vacancy</button>
      </header>
      <section className="tu-next-card employer-next">
        <div className="tu-next-copy">
          <span className="tu-kicker"><Users size={14} /> Vacancy da seguire</span>
          <div className="tu-job-title"><span className="tu-company-logo dark"><BriefcaseBusiness size={20} /></span><div><h2>Chef de rang</h2><p>Milano · Full time · Pubblicata 2 giorni fa</p></div></div>
          <div className="tu-job-meta"><span><Users size={15} /> 12 match</span><span><Star size={15} /> 4 shortlist</span><span><CalendarDays size={15} /> 2 colloqui</span></div>
          <div className="tu-next-actions"><button type="button" className="tu-button tu-button-lime" onClick={onExplore}>Apri la shortlist <ArrowRight size={17} /></button></div>
        </div>
        <div className="tu-people-stack" aria-hidden="true"><span className="coral">FA</span><span className="mint">LM</span><span className="sand">SK</span><b>+9</b></div>
      </section>
      <div className="tu-metric-row">
        <article><small>Tempo medio shortlist</small><strong>18h</strong><span className="positive">↓ 32% questo mese</span></article>
        <article><small>Profili verificati</small><strong>92%</strong><span>su tutte le vacancy</span></article>
        <article><small>Assunzioni in corso</small><strong>3</strong><span>documenti in ordine</span></article>
      </div>
      <article className="tu-soft-card compliance-card">
        <span className="tu-icon mint"><ShieldCheck size={20} /></span><div><h3>Contratto sul binario giusto.</h3><p>Turn-Up ha verificato completezza dei termini per le tre assunzioni in corso.</p></div><button type="button">Controlla <ArrowRight size={15} /></button>
      </article>
    </>
  );
}

function WorkerDiscover({ onInterested }: { onInterested: (role: string) => void }) {
  return (
    <>
      <header className="tu-page-heading"><div><span>Scopri</span><h1>Match che meritano tempo.</h1><p>Ordinati per compatibilità, non per chi paga di più.</p></div><span className="tu-result-pill">12 match pronti</span></header>
      <div className="tu-search"><Search size={18} /><input aria-label="Cerca ruolo o locale" placeholder="Cerca ruolo o locale" /><button type="button">Filtri</button></div>
      <div className="tu-scroll-cards">
        {workerJobs.map((job, index) => (
          <motion.article whileHover={{ y: -4 }} className="tu-job-card" key={job.company}>
            <div className="tu-card-top"><span className={`tu-company-logo ${job.color}`}>{job.company.slice(0, 2).toUpperCase()}</span><Score value={job.score} /></div>
            <h2>{job.role}</h2><p>{job.company}</p>
            <div className="tu-job-location"><MapPin size={14} /> {job.area} · {job.distance}</div>
            <div className="tu-tag-row">{job.tags.map((tag) => <span key={tag}><Check size={11} /> {tag}</span>)}</div>
            <div className="tu-job-footer"><strong>{job.pay}<small> / mese</small></strong><button type="button" onClick={() => onInterested(job.role)}><Heart size={17} /> {index === 0 ? "Mi interessa" : "Salva"}</button></div>
          </motion.article>
        ))}
      </div>
    </>
  );
}

function EmployerDiscover({ onUnlock }: { onUnlock: (name: string) => void }) {
  return (
    <>
      <header className="tu-page-heading"><div><span>Shortlist live</span><h1>Persone, non pile di CV.</h1><p>Profili verificati e ordinati per fit con la tua vacancy.</p></div><span className="tu-result-pill">12 match pronti</span></header>
      <div className="tu-filter-bar"><span><BriefcaseBusiness size={15} /> Chef de rang</span><span><MapPin size={15} /> Milano · 8 km</span><span><Clock3 size={15} /> Full time</span><button type="button">Modifica criteri</button></div>
      <div className="tu-scroll-cards candidates">
        {candidates.map((candidate) => (
          <motion.article whileHover={{ y: -4 }} className="tu-candidate-card" key={candidate.name}>
            <div className="tu-card-top"><span className={`tu-candidate-avatar ${candidate.color}`}>{candidate.initials}<i><BadgeCheck size={14} /></i></span><Score value={candidate.score} /></div>
            <h2>{candidate.name}</h2><p>{candidate.role}</p>
            <div className="tu-candidate-note"><Fingerprint size={15} /> {candidate.note}</div>
            <div className="tu-candidate-facts"><span><MapPin size={13} /> Milano</span><span><Languages size={13} /> IT · EN</span><span><Clock3 size={13} /> Subito</span></div>
            <button type="button" className={`tu-button ${candidate.unlocked ? "tu-button-soft" : "tu-button-lime"}`} onClick={() => onUnlock(candidate.name)}>{candidate.unlocked ? "Apri profilo" : "Sblocca · €10"} <ArrowRight size={16} /></button>
          </motion.article>
        ))}
      </div>
    </>
  );
}

function ActivityScreen({ role }: { role: Role }) {
  const items = role === "worker"
    ? [
        { title: "Colloquio confermato", meta: "Nodo Milano · domani alle 10:30", icon: CalendarDays, state: "next" },
        { title: "Profilo aperto", meta: "Cortile 21 · 8 minuti fa", icon: Fingerprint, state: "done" },
        { title: "Interesse inviato", meta: "Casa Lina · ieri alle 18:42", icon: Heart, state: "done" },
        { title: "Documento verificato", meta: "Identità · 18 agosto", icon: BadgeCheck, state: "done" },
      ]
    : [
        { title: "Colloquio con Fatima A.", meta: "Domani alle 10:30 · Video call", icon: CalendarDays, state: "next" },
        { title: "Nuovo match al 92%", meta: "Luca M. · 34 minuti fa", icon: Sparkles, state: "done" },
        { title: "Termini contrattuali completi", meta: "Chef de rang · oggi alle 09:10", icon: FileCheck2, state: "done" },
        { title: "Vacancy pubblicata", meta: "Chef de rang · 19 agosto", icon: BriefcaseBusiness, state: "done" },
      ];
  return (
    <>
      <header className="tu-page-heading"><div><span>Attività</span><h1>Tutto in ordine.</h1><p>La timeline semplice di quello che è successo e della prossima mossa.</p></div></header>
      <div className="tu-activity-layout">
        <section className="tu-timeline">
          {items.map((item, index) => { const Icon = item.icon; return <article className={item.state} key={item.title}><span className="tu-time-icon"><Icon size={18} /></span><div><small>{index === 0 ? "Prossimo" : index < 3 ? "Oggi" : "Questa settimana"}</small><h3>{item.title}</h3><p>{item.meta}</p></div>{index === 0 && <button type="button">Apri <ArrowRight size={14} /></button>}</article>; })}
        </section>
        <aside className="tu-side-note"><span className="tu-icon lime"><ShieldCheck size={21} /></span><h3>Un solo posto.</h3><p>Niente messaggi sparsi tra mail, WhatsApp e note. Qui trovi stato, orari e documenti.</p></aside>
      </div>
    </>
  );
}

function ProfileScreen({ user, role, signOutPath, onTour }: { user: ChatGPTUser; role: Role; signOutPath: string; onTour: () => void }) {
  const initials = (user.fullName ?? user.email).split(/\s|@/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
  return (
    <>
      <header className="tu-page-heading"><div><span>Profilo</span><h1>Sei tu, ma verificato.</h1><p>Gestisci account, identità e preferenze da un unico posto.</p></div></header>
      <div className="tu-profile-layout">
        <article className="tu-profile-card">
          <span className="tu-profile-avatar">{initials}<i><BadgeCheck size={17} /></i></span>
          <h2>{user.fullName ?? user.displayName}</h2><p>{user.email}</p>
          <span className="tu-account-badge"><ShieldCheck size={14} /> Accesso protetto con ChatGPT</span>
          <div className="tu-profile-role"><small>Vista attiva</small><strong>{role === "worker" ? "Cerco lavoro" : "Cerco persone"}</strong></div>
        </article>
        <section className="tu-settings-card">
          <div className="tu-settings-row"><span className="tu-icon mint"><Fingerprint size={19} /></span><div><strong>Identità e profilo</strong><small>{role === "worker" ? "84% completo · documento verificato" : "Azienda verificata · P.IVA confermata"}</small></div><button type="button"><ArrowRight size={17} /></button></div>
          <div className="tu-settings-row"><span className="tu-icon sand"><Bell size={19} /></span><div><strong>Preferenze e notifiche</strong><small>Match importanti, colloqui e documenti</small></div><button type="button"><ArrowRight size={17} /></button></div>
          <div className="tu-settings-row"><span className="tu-icon coral"><Languages size={19} /></span><div><strong>Lingua</strong><small>Italiano · altre 5 lingue disponibili</small></div><button type="button"><ArrowRight size={17} /></button></div>
          <button className="tu-tour-again" type="button" onClick={onTour}><CircleHelp size={17} /> Rivedi il tour guidato</button>
          <a className="tu-signout" href={signOutPath}><LogOut size={17} /> Esci dall’account</a>
        </section>
      </div>
      <div className="tu-trust-note"><ShieldCheck size={20} /><div><strong>I tuoi dati non diventano un prodotto.</strong><p>Turn-Up usa le informazioni per verifica, matching e compliance. Niente profilazione pubblicitaria.</p></div></div>
    </>
  );
}

function GuidedTour({ step, role, onRoleChange, onNext, onBack, onClose }: { step: number; role: Role; onRoleChange: (role: Role) => void; onNext: () => void; onBack: () => void; onClose: () => void }) {
  const current = tourSteps[step];
  const Icon = current.icon;
  return (
    <motion.div className="tu-tour-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="presentation">
      <motion.section className="tu-tour" role="dialog" aria-modal="true" aria-labelledby="tour-title" initial={{ opacity: 0, scale: .96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ ease: [0.22, 1, 0.36, 1], duration: .35 }}>
        <div className="tu-tour-visual">
          <div className="tu-tour-orbit" /><span className="tu-tour-icon"><Icon size={38} /></span>
          {step === 0 && <div className="tu-tour-role"><RoleSwitch role={role} onChange={onRoleChange} /></div>}
          {step === 1 && <div className="tu-tour-mini-card"><span>La tua next move</span><strong>Chef de rang</strong><b>96%</b></div>}
          {step === 2 && <div className="tu-tour-tags"><span><Check size={12} /> Turni</span><span><Check size={12} /> Distanza</span><span><Check size={12} /> CCNL</span></div>}
          {step === 3 && <div className="tu-tour-check"><PartyPopper size={24} /><strong>Sei pronto.</strong></div>}
        </div>
        <div className="tu-tour-copy">
          <button className="tu-tour-close" type="button" onClick={onClose} aria-label="Chiudi tour"><X size={20} /></button>
          <span className="tu-kicker">{current.kicker}</span><h2 id="tour-title">{current.title}</h2><p>{current.text}</p>
          <div className="tu-tour-progress" aria-label={`Passaggio ${step + 1} di ${tourSteps.length}`}>{tourSteps.map((_, index) => <span className={index === step ? "active" : ""} key={index} />)}</div>
          <div className="tu-tour-actions">
            {step > 0 ? <button type="button" className="tu-button tu-button-soft" onClick={onBack}><ArrowLeft size={16} /> Indietro</button> : <button type="button" className="tu-skip" onClick={onClose}>Salta</button>}
            <button type="button" className="tu-button tu-button-lime" onClick={onNext}>{step === tourSteps.length - 1 ? "Inizia" : "Avanti"} <ArrowRight size={16} /></button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default function TurnUpApp({ user, signOutPath }: AppProps) {
  const [role, setRole] = useState<Role>("worker");
  const [tab, setTab] = useState<Tab>("home");
  const [tourOpen, setTourOpen] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [interested, setInterested] = useState(false);

  const firstName = useMemo(() => {
    const source = user.fullName ?? user.displayName;
    return source.includes("@") ? "Mattia" : source.trim().split(/\s+/)[0] || "Mattia";
  }, [user]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedRole = window.localStorage.getItem("turnup-role-v2");
      if (savedRole === "worker" || savedRole === "employer") setRole(savedRole);
      if (!window.localStorage.getItem("turnup-tour-seen-v2")) setTourOpen(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function changeRole(nextRole: Role) {
    setRole(nextRole);
    setTab("home");
    window.localStorage.setItem("turnup-role-v2", nextRole);
  }

  function finishTour() {
    setTourOpen(false);
    setTourStep(0);
    window.localStorage.setItem("turnup-tour-seen-v2", "true");
  }

  function nextTourStep() {
    if (tourStep === tourSteps.length - 1) finishTour();
    else setTourStep((value) => value + 1);
  }

  function showToast(message: string) { setToast(message); }

  return (
    <main className="tu-app-shell">
      <aside className="tu-sidebar">
        <Link href="/" aria-label="Torna al sito Turn-Up"><Brand /></Link>
        <nav className="tu-nav" aria-label="Navigazione dell'app">
          {navItems.map((item) => { const Icon = item.icon; return <button type="button" className={tab === item.id ? "active" : ""} onClick={() => setTab(item.id)} key={item.id}>{tab === item.id && <motion.span className="tu-nav-active" layoutId="nav-active" />}<Icon size={19} /><span>{item.label}</span></button>; })}
        </nav>
        <div className="tu-sidebar-note"><ShieldCheck size={20} /><strong>Verified by design</strong><span>Identità, match e termini sempre leggibili.</span></div>
      </aside>

      <section className="tu-app-main">
        <header className="tu-topbar">
          <Link href="/" className="tu-mobile-brand"><Brand compact /></Link>
          <RoleSwitch role={role} onChange={changeRole} />
          <div className="tu-top-actions"><button type="button" className="tu-icon-button" onClick={() => { setTourStep(0); setTourOpen(true); }} aria-label="Apri il tour guidato"><CircleHelp size={19} /></button><button type="button" className="tu-icon-button has-alert" aria-label="Notifiche"><Bell size={19} /><i /></button><button type="button" className="tu-account-button" onClick={() => setTab("profile")}><span>{firstName.slice(0,2).toUpperCase()}</span><div><strong>{firstName}</strong><small>{role === "worker" ? "Cerco lavoro" : "Cerco persone"}</small></div></button></div>
        </header>

        <div className="tu-content">
          <AnimatePresence mode="wait">
            <PageTransition tab={tab}>
              {tab === "home" && (role === "worker" ? <WorkerHome name={firstName} interested={interested} onExplore={() => setTab("discover")} onInterested={() => { setInterested(true); showToast("Grande. Interesse inviato a Nodo Milano."); }} /> : <EmployerHome name={firstName} onExplore={() => setTab("discover")} />)}
              {tab === "discover" && (role === "worker" ? <WorkerDiscover onInterested={(job) => showToast(`${job}: salvato. Lo ritrovi in Attività.`)} /> : <EmployerDiscover onUnlock={(name) => showToast(`${name}: profilo pronto da aprire.`)} />)}
              {tab === "activity" && <ActivityScreen role={role} />}
              {tab === "profile" && <ProfileScreen user={user} role={role} signOutPath={signOutPath} onTour={() => { setTourStep(0); setTourOpen(true); }} />}
            </PageTransition>
          </AnimatePresence>
        </div>

        <nav className="tu-mobile-nav" aria-label="Navigazione mobile">
          {navItems.map((item) => { const Icon = item.icon; return <button type="button" className={tab === item.id ? "active" : ""} onClick={() => setTab(item.id)} key={item.id}><Icon size={20} /><span>{item.label}</span></button>; })}
        </nav>
      </section>

      <AnimatePresence>{tourOpen && <GuidedTour step={tourStep} role={role} onRoleChange={changeRole} onNext={nextTourStep} onBack={() => setTourStep((value) => Math.max(0, value - 1))} onClose={finishTour} />}</AnimatePresence>
      <AnimatePresence>{toast && <motion.div className="tu-toast" role="status" initial={{ opacity: 0, y: 18, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }}><CheckCircle2 size={18} /><span>{toast}</span><button type="button" onClick={() => setToast(null)} aria-label="Chiudi"><X size={15} /></button></motion.div>}</AnimatePresence>
    </main>
  );
}
