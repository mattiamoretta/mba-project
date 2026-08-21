import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Clock3,
  FileCheck2,
  Globe2,
  Home,
  Languages,
  MapPin,
  MessageCircle,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";

type Role = "worker" | "employer";
type View = "home" | "matches" | "profile" | "compliance" | "post";

const languages = ["Italiano", "English", "Español", "Română", "العربية", "বাংলা"];

const languageCopy: Record<string, { greeting: string; subtitle: string }> = {
  Italiano: { greeting: "Ciao Fatima", subtitle: "Il tuo profilo sta lavorando per te." },
  English: { greeting: "Hi Fatima", subtitle: "Your profile is working for you." },
  Español: { greeting: "Hola Fatima", subtitle: "Tu perfil está trabajando para ti." },
  Română: { greeting: "Bună, Fatima", subtitle: "Profilul tău lucrează pentru tine." },
  العربية: { greeting: "مرحباً فاطمة", subtitle: "ملفك المهني يعمل من أجلك." },
  বাংলা: { greeting: "হ্যালো ফাতিমা", subtitle: "আপনার প্রোফাইল আপনার জন্য কাজ করছে।" },
};

const workerJobs = [
  {
    id: "navigli",
    title: "Chef de rang",
    company: "Osteria dei Navigli",
    location: "Milano · 2,4 km",
    contract: "Tempo determinato · 6 mesi",
    ccnl: "CCNL Pubblici Esercizi · Livello 4",
    pay: "€1.650–1.850 netti/mese",
    availability: "Inizio 2 settembre",
    match: 96,
    reasons: ["Disponibilità compatibile", "HACCP verificato", "3+ anni nel ruolo"],
  },
  {
    id: "brera",
    title: "Cameriera di sala",
    company: "Casa Brera Hotel",
    location: "Milano · 4,1 km",
    contract: "Tempo indeterminato",
    ccnl: "CCNL Turismo · Livello 5",
    pay: "€1.550–1.700 netti/mese",
    availability: "Colloqui questa settimana",
    match: 91,
    reasons: ["Italiano + inglese", "Esperienza hotel", "Turni compatibili"],
  },
  {
    id: "porta-romana",
    title: "Responsabile colazioni",
    company: "Corte Porta Romana",
    location: "Milano · 5,8 km",
    contract: "Part-time · 30 ore",
    ccnl: "CCNL Turismo · Livello 4",
    pay: "€1.300–1.450 netti/mese",
    availability: "Inizio immediato",
    match: 87,
    reasons: ["Fascia mattutina", "Referenze verificate", "Entro 6 km"],
  },
];

const candidates = [
  {
    name: "Fatima Rahman",
    role: "Chef de rang",
    initials: "FR",
    location: "Milano · 2,4 km",
    experience: "4 anni di esperienza",
    availability: "Disponibile dal 2 settembre",
    rating: "4,9",
    matches: ["HACCP verificato", "Italiano B2", "Turni serali"],
    color: "coral",
  },
  {
    name: "Luca Bellini",
    role: "Cameriere di sala",
    initials: "LB",
    location: "Milano · 3,7 km",
    experience: "6 anni di esperienza",
    availability: "Disponibile subito",
    rating: "4,8",
    matches: ["Referenze verificate", "Sommelier AIS", "Weekend"],
    color: "mint",
  },
  {
    name: "Elena Popescu",
    role: "Responsabile colazioni",
    initials: "EP",
    location: "Milano · 5,1 km",
    experience: "5 anni di esperienza",
    availability: "Disponibile in 7 giorni",
    rating: "4,9",
    matches: ["HACCP verificato", "3 lingue", "Turni mattina"],
    color: "gold",
  },
];

function Logo() {
  return (
    <div className="brand-lockup" aria-label="Turn-Up">
      <span className="brand-mark"><ArrowUpRight size={18} strokeWidth={2.8} /></span>
      <span className="brand-name">Turn-Up</span>
    </div>
  );
}

function RoleSwitch({ role, onChange }: { role: Role; onChange: (role: Role) => void }) {
  return (
    <div className="role-switch" aria-label="Cambia esperienza">
      <button className={role === "worker" ? "active" : ""} onClick={() => onChange("worker")}>Lavoro</button>
      <button className={role === "employer" ? "active" : ""} onClick={() => onChange("employer")}>Assumo</button>
    </div>
  );
}

function Badge({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "lime" | "sand" }) {
  return <span className={`tag tag-${tone}`}>{children}</span>;
}

function MatchRing({ value }: { value: number }) {
  return (
    <div className="match-ring" style={{ "--match": `${value * 3.6}deg` } as React.CSSProperties}>
      <span>{value}%</span>
    </div>
  );
}

function WorkerHome({ language, onNavigate }: { language: string; onNavigate: (view: View) => void }) {
  const [expanded, setExpanded] = useState(false);
  const [interested, setInterested] = useState(false);
  const copy = languageCopy[language];
  const primaryJob = workerJobs[0];

  return (
    <div className="screen-stack">
      <section className="welcome-row">
        <div><span className="eyebrow">Profilo attivo · Milano</span><h1>{copy.greeting}</h1><p>{copy.subtitle}</p></div>
        <button className="avatar-button" aria-label="Apri profilo" onClick={() => onNavigate("profile")}>FR<span className="online-dot" /></button>
      </section>
      <section className="hero-panel worker-hero">
        <div className="hero-copy">
          <span className="hero-kicker"><Sparkles size={15} /> Nuovi match per te</span>
          <h2>8 opportunità compatibili nelle ultime 24 ore.</h2>
          <p>Il tuo profilo è visibile solo ai locali che rispettano le tue preferenze.</p>
          <button className="button button-light" onClick={() => onNavigate("matches")}>Esplora i match <ArrowRight size={17} /></button>
        </div>
        <div className="hero-stat" aria-label="Profilo completato all'88 percento"><strong>88%</strong><span>profilo completo</span></div>
      </section>
      <section className="section-block">
        <div className="section-heading">
          <div><span className="eyebrow">Miglior compatibilità</span><h2>Scelto dai tuoi criteri</h2></div>
          <button className="text-button" onClick={() => onNavigate("matches")}>Vedi tutti</button>
        </div>
        <article className="match-card featured-match">
          <div className="match-card-top">
            <div className="company-logo">ON</div>
            <div className="match-title"><h3>{primaryJob.title}</h3><p>{primaryJob.company}</p></div>
            <MatchRing value={primaryJob.match} />
          </div>
          <div className="meta-grid">
            <span><MapPin size={15} /> {primaryJob.location}</span>
            <span><CalendarDays size={15} /> {primaryJob.availability}</span>
            <span><WalletCards size={15} /> {primaryJob.pay}</span>
            <span><FileCheck2 size={15} /> {primaryJob.ccnl}</span>
          </div>
          <button className="reason-toggle" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
            <span><Sparkles size={15} /> Perché combacia con te</span><ChevronDown size={17} className={expanded ? "rotated" : ""} />
          </button>
          {expanded && <div className="reason-list">{primaryJob.reasons.map((reason) => <Badge key={reason}>{reason}</Badge>)}<p>Nessun ranking nascosto: vedi questo ruolo perché soddisfa i criteri dichiarati da te e dal datore.</p></div>}
          <div className="card-actions">
            <button className="button button-secondary" onClick={() => onNavigate("compliance")}>Dettagli e diritti</button>
            <button className={`button ${interested ? "button-success" : "button-primary"}`} onClick={() => setInterested(true)}>{interested ? <><Check size={17} /> Interesse inviato</> : "Mi interessa"}</button>
          </div>
        </article>
      </section>
      <section className="two-column-grid">
        <article className="info-card verification-card">
          <div className="card-icon"><BadgeCheck size={20} /></div>
          <div className="card-copy"><span className="eyebrow">Identità professionale</span><h3>3 verifiche completate</h3><div className="verification-list"><span><CheckCircle2 size={16} /> Identità</span><span><CheckCircle2 size={16} /> HACCP</span><span><CheckCircle2 size={16} /> Referenza</span></div><button className="text-button" onClick={() => onNavigate("profile")}>Completa il profilo <ChevronRight size={15} /></button></div>
        </article>
        <article className="info-card rights-card">
          <div className="card-icon"><ShieldCheck size={20} /></div>
          <div className="card-copy"><span className="eyebrow">I tuoi diritti</span><h3>Contratto chiaro, prima del sì.</h3><p>Livello CCNL, paga, ferie e registrazione spiegati nella tua lingua.</p><button className="text-button" onClick={() => onNavigate("compliance")}>Apri la guida <ChevronRight size={15} /></button></div>
        </article>
      </section>
    </div>
  );
}

function WorkerMatches({ onNavigate }: { onNavigate: (view: View) => void }) {
  const [saved, setSaved] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const visibleJobs = workerJobs.filter((job) => `${job.title} ${job.company}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="screen-stack">
      <section className="page-title-row"><div><span className="eyebrow">Matching trasparente</span><h1>Opportunità per te</h1><p>Ordinate per compatibilità con i criteri che hai scelto.</p></div><div className="result-pill">{visibleJobs.length} risultati</div></section>
      <div className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ruolo o locale" aria-label="Cerca opportunità" /><button>Milano · 8 km</button></div>
      <div className="filter-row"><Badge tone="lime">Disponibile ora</Badge><Badge>HACCP richiesto</Badge><Badge tone="sand">Contratto verificato</Badge></div>
      <section className="job-list">
        {visibleJobs.map((job) => (
          <article className="match-card compact-job" key={job.id}>
            <div className="match-card-top"><div className="company-logo">{job.company.split(" ").map((part) => part[0]).slice(0, 2).join("")}</div><div className="match-title"><h3>{job.title}</h3><p>{job.company} · {job.location}</p></div><MatchRing value={job.match} /></div>
            <div className="job-highlight-row"><strong>{job.pay}</strong><span>{job.contract}</span></div>
            <div className="reason-chips">{job.reasons.map((reason) => <span key={reason}><Check size={13} /> {reason}</span>)}</div>
            <div className="card-actions"><button className="button button-secondary" onClick={() => setSaved((items) => items.includes(job.id) ? items.filter((id) => id !== job.id) : [...items, job.id])}>{saved.includes(job.id) ? "Salvato" : "Salva"}</button><button className="button button-primary" onClick={() => onNavigate("compliance")}>Apri opportunità</button></div>
          </article>
        ))}
      </section>
    </div>
  );
}

function WorkerProfile() {
  const [step, setStep] = useState(3);
  const checks = [
    ["Identità", "Documento controllato", true],
    ["Certificazione HACCP", "Valida fino al 14/05/2028", true],
    ["Esperienza", "Una referenza verificata", true],
    ["Disponibilità", "Aggiungi i tuoi turni preferiti", step > 3],
    ["Lingue", "Italiano B2 · Bangla madrelingua", step > 4],
  ] as const;
  return (
    <div className="screen-stack">
      <section className="page-title-row"><div><span className="eyebrow">Identità professionale portabile</span><h1>Il profilo di Fatima</h1><p>Le tue competenze, nella tua lingua. Verificate e visibili.</p></div><div className="large-avatar">FR<span><BadgeCheck size={18} /></span></div></section>
      <section className="profile-summary"><div><span>Completamento profilo</span><strong>{Math.min(100, 56 + step * 8)}%</strong></div><div className="progress-track"><span style={{ width: `${Math.min(100, 56 + step * 8)}%` }} /></div><p>Un profilo completo riceve in media più contatti dai datori verificati.</p></section>
      <section className="profile-layout">
        <article className="info-card profile-intro"><span className="eyebrow">Chef de rang</span><h2>Fatima Rahman <BadgeCheck size={19} /></h2><p>Quattro anni tra sala e hotellerie. Servizio al tavolo, gestione comande e accoglienza ospiti in italiano e inglese.</p><div className="profile-facts"><span><MapPin size={15} /> Milano</span><span><Star size={15} /> 4,9 · 12 recensioni</span><span><Clock3 size={15} /> Serali e weekend</span></div></article>
        <article className="info-card checklist-card">
          <div className="section-heading small"><div><span className="eyebrow">Verifiche</span><h3>Costruisci fiducia</h3></div><span>{checks.filter((item) => item[2]).length}/{checks.length}</span></div>
          <div className="checklist">{checks.map(([title, detail, done], index) => <button key={title} onClick={() => !done && setStep(Math.max(step, index + 1))}><span className={done ? "check done" : "check"}>{done ? <Check size={15} /> : index + 1}</span><span><strong>{title}</strong><small>{detail}</small></span><ChevronRight size={17} /></button>)}</div>
        </article>
      </section>
    </div>
  );
}

function WorkerCompliance() {
  return (
    <div className="screen-stack">
      <section className="page-title-row"><div><span className="eyebrow">In parole semplici</span><h1>Prima di accettare</h1><p>Controlla cosa prevede il ruolo e cosa deve fare il datore.</p></div><div className="trust-seal"><ShieldCheck size={28} /><span>Informazioni verificate</span></div></section>
      <section className="contract-card">
        <div className="contract-header"><div><span>Proposta per</span><h2>Chef de rang</h2><p>Osteria dei Navigli</p></div><Badge tone="lime">Bozza conforme</Badge></div>
        <div className="contract-grid"><div><span>Contratto</span><strong>Tempo determinato</strong><small>6 mesi · Full time</small></div><div><span>Inquadramento</span><strong>Livello 4</strong><small>CCNL Pubblici Esercizi</small></div><div><span>Compenso indicativo</span><strong>€1.650–1.850</strong><small>netti al mese</small></div><div><span>Inizio</span><strong>2 settembre</strong><small>40 ore settimanali</small></div></div>
      </section>
      <section className="rights-list"><h2>Cosa deve succedere prima del primo turno</h2>{[["Comunicazione obbligatoria", "Il datore registra l’assunzione prima dell’inizio del lavoro."],["Contratto leggibile", "Ricevi la bozza con livello, durata, orari e periodo di prova."],["Retribuzione e ferie", "Vedi i minimi del tuo livello e le ferie previste dal CCNL."],["Nessuna decisione automatica", "Turn-Up mostra le corrispondenze; la scelta resta a te e al datore."]].map(([title, detail]) => <article key={title}><CheckCircle2 size={20} /><div><h3>{title}</h3><p>{detail}</p></div></article>)}</section>
      <div className="notice-card"><Globe2 size={21} /><p>Questa guida è disponibile in 6 lingue ed è informativa. Turn-Up non firma il contratto e non sostituisce un consulente del lavoro.</p></div>
    </div>
  );
}

function EmployerHome({ onNavigate }: { onNavigate: (view: View) => void }) {
  return (
    <div className="screen-stack">
      <section className="welcome-row"><div><span className="eyebrow">Osteria dei Navigli · Milano</span><h1>Ciao Marco</h1><p>La tua prossima assunzione è già più vicina.</p></div><button className="avatar-button employer-avatar">MN<span className="online-dot" /></button></section>
      <section className="hero-panel employer-hero"><div className="hero-copy"><span className="hero-kicker"><UserRoundCheck size={15} /> Candidati verificati</span><h2>12 persone compatibili con la tua ricerca urgente.</h2><p>Ruolo, distanza, disponibilità e badge: nessun ranking nascosto.</p><button className="button button-light" onClick={() => onNavigate("matches")}>Vedi candidati <ArrowRight size={17} /></button></div><div className="hero-stat"><strong>4h</strong><span>tempo medio di risposta</span></div></section>
      <section className="metric-grid"><article><span>Posizioni attive</span><strong>3</strong><small>1 urgente</small></article><article><span>Nuovi interessati</span><strong>8</strong><small>nelle ultime 24h</small></article><article><span>Tempo risparmiato</span><strong>6,5h</strong><small>questa settimana</small></article></section>
      <section className="section-block">
        <div className="section-heading"><div><span className="eyebrow">Ricerca urgente</span><h2>Chef de rang</h2></div><button className="button button-primary button-small" onClick={() => onNavigate("post")}><Plus size={16} /> Nuova posizione</button></div>
        <article className="vacancy-card"><div className="vacancy-progress"><span style={{ width: "68%" }} /></div><div className="vacancy-grid"><div><span>Candidati compatibili</span><strong>12</strong></div><div><span>Hanno visualizzato</span><strong>7</strong></div><div><span>Interessati</span><strong>3</strong></div><div><span>Da ricontattare</span><strong>2</strong></div></div><div className="card-actions"><button className="button button-secondary" onClick={() => onNavigate("post")}>Modifica ricerca</button><button className="button button-primary" onClick={() => onNavigate("matches")}>Apri shortlist</button></div></article>
      </section>
      <section className="two-column-grid"><article className="info-card compliance-alert"><div className="card-icon"><Bell size={20} /></div><div className="card-copy"><span className="eyebrow">Scadenza</span><h3>Comunicazione pre-assunzione</h3><p>Mancano 2 giorni all’inizio di Luca.</p><button className="text-button" onClick={() => onNavigate("compliance")}>Apri checklist <ChevronRight size={15} /></button></div></article><article className="info-card cost-card"><div className="card-icon"><WalletCards size={20} /></div><div className="card-copy"><span className="eyebrow">Costo trasparente</span><h3>Paghi quando assumi.</h3><p>Profilo €10 · Success fee €250 alla conferma.</p></div></article></section>
    </div>
  );
}

function EmployerMatches({ onNavigate }: { onNavigate: (view: View) => void }) {
  const [unlocked, setUnlocked] = useState<string[]>([]);
  return (
    <div className="screen-stack">
      <section className="page-title-row"><div><span className="eyebrow">Shortlist · Chef de rang</span><h1>12 profili compatibili</h1><p>Ogni risultato rispetta i filtri impostati da te.</p></div><button className="button button-secondary button-small" onClick={() => onNavigate("post")}>Modifica filtri</button></section>
      <div className="criteria-bar"><span><Check size={14} /> Entro 8 km</span><span><Check size={14} /> Disponibile dal 02/09</span><span><Check size={14} /> HACCP</span><span><Check size={14} /> 3+ anni</span></div>
      <section className="candidate-grid">{candidates.map((candidate, index) => { const isUnlocked = unlocked.includes(candidate.name); return <article className="candidate-card" key={candidate.name}><div className="candidate-top"><div className={`candidate-avatar ${candidate.color}`}>{candidate.initials}<span><BadgeCheck size={16} /></span></div><MatchRing value={[96, 92, 89][index]} /></div><h2>{candidate.name}</h2><p className="candidate-role">{candidate.role}</p><div className="candidate-meta"><span><MapPin size={14} /> {candidate.location}</span><span><BriefcaseBusiness size={14} /> {candidate.experience}</span><span><Clock3 size={14} /> {candidate.availability}</span><span><Star size={14} /> {candidate.rating} reputazione</span></div><div className="reason-chips">{candidate.matches.map((match) => <span key={match}><Check size={13} /> {match}</span>)}</div>{isUnlocked ? <div className="unlocked-panel"><CheckCircle2 size={18} /><div><strong>Profilo sbloccato</strong><span>Puoi ora scrivere a {candidate.name.split(" ")[0]}.</span></div></div> : <p className="privacy-note"><ShieldCheck size={14} /> Contatti protetti fino allo sblocco</p>}<div className="card-actions"><button className="button button-secondary">Vedi profilo</button><button className={`button ${isUnlocked ? "button-success" : "button-primary"}`} onClick={() => setUnlocked((items) => items.includes(candidate.name) ? items : [...items, candidate.name])}>{isUnlocked ? <><MessageCircle size={16} /> Scrivi</> : "Sblocca · €10"}</button></div></article>; })}</section>
    </div>
  );
}

function VacancyPost({ onNavigate }: { onNavigate: (view: View) => void }) {
  const [published, setPublished] = useState(false);
  const [haccp, setHaccp] = useState(true);
  const [language, setLanguage] = useState(false);
  if (published) return <div className="success-screen"><span className="success-icon"><Check size={32} /></span><span className="eyebrow">Posizione pubblicata</span><h1>La ricerca è attiva.</h1><p>Abbiamo già trovato 12 profili compatibili. I lavoratori verificati ricevono ora una notifica.</p><div className="success-summary"><span><UsersRound size={19} /> 12 profili compatibili</span><span><Bell size={19} /> Alert inviati in tempo reale</span><span><ShieldCheck size={19} /> Criteri salvati nell’audit trail</span></div><button className="button button-primary" onClick={() => onNavigate("matches")}>Apri la shortlist <ArrowRight size={17} /></button></div>;
  return (
    <div className="screen-stack">
      <section className="page-title-row"><div><span className="eyebrow">Pubblica in meno di 2 minuti</span><h1>Chi stai cercando?</h1><p>Il modello è allineato alle classificazioni CCNL.</p></div><div className="timer-pill"><Clock3 size={16} /> 01:24</div></section>
      <section className="form-card"><div className="form-grid"><label><span>Ruolo</span><select defaultValue="Chef de rang"><option>Chef de rang</option><option>Cameriere/a di sala</option><option>Cuoco/a</option><option>Barista</option></select></label><label><span>Località</span><input defaultValue="Milano" /></label><label><span>Data di inizio</span><input type="date" defaultValue="2026-09-02" /></label><label><span>Durata</span><select defaultValue="6 mesi"><option>6 mesi</option><option>3 mesi</option><option>Tempo indeterminato</option></select></label><label><span>CCNL e livello</span><select defaultValue="Pubblici Esercizi · Livello 4"><option>Pubblici Esercizi · Livello 4</option><option>Turismo · Livello 5</option></select></label><label><span>Raggio</span><select defaultValue="8 km"><option>5 km</option><option>8 km</option><option>15 km</option></select></label></div><div className="requirements-block"><div><span className="eyebrow">Badge richiesti</span><h3>Filtra solo per requisiti necessari</h3></div><button className={haccp ? "toggle active" : "toggle"} onClick={() => setHaccp((value) => !value)}><span /> HACCP verificato</button><button className={language ? "toggle active" : "toggle"} onClick={() => setLanguage((value) => !value)}><span /> Italiano B2</button></div><div className="form-footer"><div><ShieldCheck size={19} /><p>Turn-Up applica i tuoi criteri senza classificare autonomamente i candidati.</p></div><button className="button button-primary" onClick={() => setPublished(true)}>Pubblica posizione <ArrowRight size={17} /></button></div></section>
    </div>
  );
}

function EmployerCompliance() {
  const [confirmed, setConfirmed] = useState(false);
  const steps = [["Dati delle parti verificati", "Identità e contatti controllati", true],["Classificazione CCNL", "Pubblici Esercizi · Livello 4", true],["Bozza contratto generata", "Da verificare e firmare esternamente", true],["Comunicazione obbligatoria", "Da inviare prima del 2 settembre", false]] as const;
  return (
    <div className="screen-stack">
      <section className="page-title-row"><div><span className="eyebrow">Hiring trail</span><h1>Assunzione di Fatima</h1><p>Una checklist chiara, con responsabilità e scadenze visibili.</p></div><Badge tone="lime">3 di 4 completati</Badge></section>
      <section className="compliance-layout"><article className="info-card compliance-checklist">{steps.map(([title, detail, done]) => <div className="compliance-step" key={title}><span className={done ? "check done" : "check alert"}>{done ? <Check size={15} /> : "!"}</span><div><h3>{title}</h3><p>{detail}</p></div>{!done && <Badge tone="sand">Azione richiesta</Badge>}</div>)}</article><aside className="hire-summary"><span className="eyebrow">Riepilogo</span><h2>Chef de rang</h2><p>Fatima Rahman · dal 2 settembre</p><div><span>Profilo sbloccato</span><strong>€10</strong></div><div><span>Success fee alla conferma</span><strong>€250</strong></div><div className="total"><span>Totale</span><strong>€260</strong></div><button className={`button ${confirmed ? "button-success" : "button-primary"}`} onClick={() => setConfirmed(true)}>{confirmed ? <><Check size={17} /> Assunzione confermata</> : "Conferma assunzione · €250"}</button><small>Turn-Up genera la traccia e gli avvisi. Firma e comunicazioni restano responsabilità del datore.</small></aside></section>
      {confirmed && <div className="confirmation-banner"><CheckCircle2 size={22} /><div><strong>Assunzione registrata nel tuo spazio Turn-Up.</strong><span>Fatima ha ricevuto il riepilogo nella lingua scelta.</span></div></div>}
    </div>
  );
}

function Navigation({ role, view, onNavigate }: { role: Role; view: View; onNavigate: (view: View) => void }) {
  const items = role === "worker" ? [["home", "Home", <Home key="home" size={19} />],["matches", "Match", <Sparkles key="matches" size={19} />],["profile", "Profilo", <CircleUserRound key="profile" size={19} />],["compliance", "Diritti", <ShieldCheck key="rights" size={19} />]] : [["home", "Home", <Home key="home" size={19} />],["matches", "Candidati", <UsersRound key="matches" size={19} />],["post", "Pubblica", <Plus key="post" size={19} />],["compliance", "Assunzioni", <FileCheck2 key="hires" size={19} />]];
  return <nav className="app-navigation" aria-label="Navigazione principale">{items.map(([id, label, icon]) => <button key={id as string} onClick={() => onNavigate(id as View)} className={view === id ? "active" : ""}>{icon}<span>{label}</span></button>)}</nav>;
}

export default function App() {
  const [role, setRole] = useState<Role>("worker");
  const [view, setView] = useState<View>("home");
  const [language, setLanguage] = useState("Italiano");
  const [languageOpen, setLanguageOpen] = useState(false);
  const content = useMemo(() => {
    if (role === "worker") {
      if (view === "matches") return <WorkerMatches onNavigate={setView} />;
      if (view === "profile") return <WorkerProfile />;
      if (view === "compliance") return <WorkerCompliance />;
      return <WorkerHome language={language} onNavigate={setView} />;
    }
    if (view === "matches") return <EmployerMatches onNavigate={setView} />;
    if (view === "post") return <VacancyPost onNavigate={setView} />;
    if (view === "compliance") return <EmployerCompliance />;
    return <EmployerHome onNavigate={setView} />;
  }, [language, role, view]);
  const changeRole = (nextRole: Role) => { setRole(nextRole); setView("home"); };
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="app-frame">
        <header className="app-header"><Logo /><div className="header-center"><RoleSwitch role={role} onChange={changeRole} /></div><div className="header-actions"><div className="language-menu"><button className="icon-text-button" onClick={() => setLanguageOpen((value) => !value)} aria-expanded={languageOpen}><Languages size={18} /><span>{language}</span><ChevronDown size={15} /></button>{languageOpen && <div className="language-popover">{languages.map((item) => <button key={item} className={language === item ? "selected" : ""} onClick={() => { setLanguage(item); setLanguageOpen(false); }}>{item}{language === item && <Check size={14} />}</button>)}</div>}</div><button className="notification-button" aria-label="Notifiche"><Bell size={19} /><span>3</span></button></div></header>
        <div className="app-body"><aside className="desktop-rail"><Navigation role={role} view={view} onNavigate={setView} /><div className="rail-note"><ShieldCheck size={20} /><strong>Hiring that works.</strong><span>Identità verificata, matching trasparente, compliance integrata.</span></div></aside><section className="app-content">{content}</section></div>
        <div className="mobile-nav"><Navigation role={role} view={view} onNavigate={setView} /></div>
      </div>
    </main>
  );
}

