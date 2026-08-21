"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Fingerprint,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

function Brand() {
  return (
    <span className="brand-lockup" aria-label="Turn-Up">
      <span className="brand-mark" aria-hidden="true">
        <Zap size={18} fill="currentColor" />
      </span>
      <span className="brand-name">Turn-Up</span>
    </span>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}

function AppPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="product-preview" aria-label="Anteprima dell'app Turn-Up">
      <div className="preview-sidebar">
        <Brand />
        <div className="preview-nav-lines">
          <span className="active" />
          <span />
          <span />
        </div>
      </div>
      <div className="preview-main">
        <div className="preview-topbar">
          <div>
            <small>Buongiorno, Fatima</small>
            <strong>La tua next move è qui.</strong>
          </div>
          <span className="preview-avatar">FA</span>
        </div>
        <div className="preview-match-card">
          <div className="preview-match-head">
            <span className="preview-logo">NO</span>
            <div>
              <strong>Chef de rang</strong>
              <small>Nodo Milano · 1,2 km</small>
            </div>
            <span className="score">96%</span>
          </div>
          <div className="preview-chips">
            <span><Check size={12} /> Turni compatibili</span>
            <span><Check size={12} /> CCNL chiaro</span>
          </div>
          <div className="preview-pay">
            <span>Tempo pieno</span>
            <strong>€1.620–1.780 / mese</strong>
          </div>
          <motion.div
            className="preview-action"
            animate={reduceMotion ? undefined : { boxShadow: ["0 0 0 0 rgba(223,255,124,0)", "0 0 0 9px rgba(223,255,124,.18)", "0 0 0 0 rgba(223,255,124,0)"] }}
            transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Mi interessa <ArrowRight size={15} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const proofPoints = [
  { icon: Fingerprint, title: "Zero CV nel vuoto", text: "Un profilo verificato che parla davvero di te: esperienza, disponibilità e documenti." },
  { icon: Sparkles, title: "Match che hanno senso", text: "Vedi opportunità compatibili e capisci subito perché sono adatte a te." },
  { icon: FileCheck2, title: "Contratto chiaro", text: "Ruolo, orari, paga e CCNL leggibili prima di dire sì. Niente sorprese." },
];

export default function MarketingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <main className="marketing-site">
      <nav className="mkt-nav" aria-label="Navigazione principale">
        <Link href="/" className="mkt-brand"><Brand /></Link>
        <div className={`mkt-links ${menuOpen ? "open" : ""}`}>
          <a href="#come-funziona" onClick={() => setMenuOpen(false)}>Come funziona</a>
          <a href="#per-chi" onClick={() => setMenuOpen(false)}>Per chi</a>
          <a href="#prezzi" onClick={() => setMenuOpen(false)}>Prezzi</a>
          <Link className="mkt-mobile-cta" href="/app">Entra in Turn-Up <ArrowRight size={15} /></Link>
        </div>
        <div className="mkt-nav-actions">
          <Link className="mkt-login" href="/app">Accedi <ArrowUpRight size={15} /></Link>
          <button className="mkt-menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <section className="mkt-hero">
        <motion.div
          className="hero-copy-block"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easing }}
        >
          <span className="mkt-eyebrow"><Sparkles size={14} /> HoReCa, ma fatto bene.</span>
          <h1>Il lavoro giusto.<br /><em>Senza giri.</em></h1>
          <p>Turn-Up verifica chi sei, ti mostra solo match che hanno senso e tiene il contratto sul binario giusto.</p>
          <div className="hero-actions">
            <Link className="mkt-button mkt-button-primary" href="/app">Entra in Turn-Up <ArrowRight size={17} /></Link>
            <a className="mkt-button mkt-button-ghost" href="#come-funziona">Guarda come gira</a>
          </div>
          <div className="hero-proof">
            <span><BadgeCheck size={17} /> Profilo verificato</span>
            <span><ShieldCheck size={17} /> Dati protetti</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, rotate: 1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: easing }}
        >
          <Image src="/turnup-hero-modern.png" alt="Un giovane team di ristorazione riunito in un locale contemporaneo" width={1600} height={1100} priority sizes="(max-width: 1050px) 90vw, 52vw" />
          <motion.div className="floating-card match-float" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
            <span className="float-icon"><Star size={15} fill="currentColor" /></span>
            <span><small>Nuovo match</small><strong>96% compatibile</strong></span>
          </motion.div>
          <motion.div className="floating-card verify-float" animate={reduceMotion ? undefined : { y: [0, 7, 0] }} transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}>
            <CheckCircle2 size={19} /> <strong>Profilo verificato</strong>
          </motion.div>
        </motion.div>
      </section>

      <section className="trust-strip" aria-label="I vantaggi di Turn-Up">
        <span>Profilo verificato</span><i />
        <span>Match spiegati</span><i />
        <span>CCNL chiaro</span><i />
        <span>Sei lingue</span>
      </section>

      <section className="mkt-section value-section" id="come-funziona">
        <Reveal className="section-intro">
          <span className="mkt-eyebrow">Facile, sul serio</span>
          <h2>Non serve essere bravi<br />a cercare lavoro.</h2>
          <p>Tu ci dici chi sei. Turn-Up fa ordine, trova il fit e ti mostra la prossima mossa.</p>
        </Reveal>
        <div className="value-grid">
          {proofPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="value-card" delay={index * 0.08} key={item.title}>
                <span className="value-number">0{index + 1}</span>
                <span className="value-icon"><Icon size={22} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mkt-section product-section">
        <Reveal className="product-copy">
          <span className="mkt-eyebrow">Il match, spiegato</span>
          <h2>Non un feed infinito.<br />La tua <em>next move.</em></h2>
          <p>Compatibilità reale su ruolo, distanza, turni, lingua e contratto. Il punteggio non è magia: ogni motivo si può aprire e capire.</p>
          <ul>
            <li><CheckCircle2 size={17} /> Opportunità aggiornate in tempo reale</li>
            <li><CheckCircle2 size={17} /> Un tap per mostrare interesse</li>
            <li><CheckCircle2 size={17} /> Stato della candidatura sempre visibile</li>
          </ul>
          <Link href="/app" className="inline-link">Prova l’esperienza <ArrowRight size={16} /></Link>
        </Reveal>
        <Reveal className="preview-wrap" delay={0.1}><AppPreview /></Reveal>
      </section>

      <section className="story-section" id="per-chi">
        <div className="story-image-wrap">
          <Image src="/turnup-story-modern.png" alt="Un giovane professionista della ristorazione consulta il telefono durante il lavoro" width={1300} height={1000} sizes="(max-width: 1050px) 90vw, 52vw" />
          <div className="story-badge"><MessageCircle size={18} /><span>Disponibilità aggiornata<strong>Pronto da lunedì</strong></span></div>
        </div>
        <Reveal className="story-copy">
          <span className="mkt-eyebrow">Per chi lavora</span>
          <h2>Non mandare 40 CV.<br /><em>Fatti trovare bene.</em></h2>
          <p>Costruisci una volta il tuo profilo, verifica ciò che conta e ricevi solo opportunità compatibili con la tua vita.</p>
          <div className="story-points">
            <span><MapPin size={17} /> Distanza sostenibile</span>
            <span><Clock3 size={17} /> Turni compatibili</span>
            <span><Banknote size={17} /> Retribuzione visibile</span>
          </div>
          <Link className="mkt-button mkt-button-dark" href="/app">Inizia gratis <ArrowRight size={17} /></Link>
        </Reveal>
      </section>

      <section className="employer-section">
        <Reveal className="employer-copy">
          <span className="mkt-eyebrow light">Per chi assume</span>
          <h2>Assumere,<br /><em>senza impazzire.</em></h2>
          <p>Una vacancy chiara, una shortlist verificata, un percorso semplice fino al contratto. Meno telefonate a vuoto, più persone giuste al momento giusto.</p>
          <Link className="mkt-button mkt-button-lime" href="/app">Trova il tuo team <ArrowRight size={17} /></Link>
        </Reveal>
        <Reveal className="employer-dashboard" delay={0.1}>
          <div className="dash-top"><span>Vacancy attiva</span><strong>Chef de rang</strong><small>Milano · Tempo pieno</small></div>
          <div className="dash-stats"><span><strong>12</strong>match pronti</span><span><strong>4</strong>shortlist</span><span><strong>2</strong>colloqui</span></div>
          <div className="candidate-row"><span className="mini-avatar coral">FA</span><div><strong>Fatima A.</strong><small>Esperienza verificata</small></div><b>96%</b></div>
          <div className="candidate-row"><span className="mini-avatar mint">LU</span><div><strong>Luca M.</strong><small>Disponibile subito</small></div><b>92%</b></div>
        </Reveal>
      </section>

      <section className="mkt-section process-section">
        <Reveal className="section-intro centered">
          <span className="mkt-eyebrow">Tre mosse, poi si parte</span>
          <h2>Da “cerco” a “quando iniziamo?”</h2>
        </Reveal>
        <div className="process-line">
          <Reveal className="process-step"><span>1</span><h3>Crea il profilo</h3><p>Pochi minuti, sei lingue, niente burocrazia inutile.</p></Reveal>
          <Reveal className="process-step" delay={0.08}><span>2</span><h3>Scopri il fit</h3><p>Match trasparenti su ciò che conta davvero.</p></Reveal>
          <Reveal className="process-step" delay={0.16}><span>3</span><h3>Conferma bene</h3><p>Termini chiari e percorso ordinato fino all’assunzione.</p></Reveal>
        </div>
      </section>

      <section className="numbers-section">
        <Reveal className="numbers-heading"><span className="mkt-eyebrow light">Perché serve adesso</span><h2>Il settore corre.<br />L’hiring è rimasto indietro.</h2></Reveal>
        <div className="numbers-grid">
          <Reveal className="number-card"><strong>55–65%</strong><p>delle assunzioni HoReCa passa ancora da canali informali.</p></Reveal>
          <Reveal className="number-card" delay={0.08}><strong>1 su 2</strong><p>imprese fatica a trovare persone con il profilo giusto.</p></Reveal>
          <Reveal className="number-card accent" delay={0.16}><strong>€4–8k</strong><p>di ricavi a rischio per tre settimane di posizione scoperta.</p></Reveal>
        </div>
      </section>

      <section className="mkt-section pricing-section" id="prezzi">
        <Reveal className="section-intro">
          <span className="mkt-eyebrow">Prezzi leggibili</span>
          <h2>Paghi il valore.<br />Non la confusione.</h2>
        </Reveal>
        <div className="pricing-grid">
          <Reveal className="price-card worker-price">
            <span className="price-label">Per chi lavora</span>
            <strong>Gratis<span>. Sempre.</span></strong>
            <p>Profilo, verifica, match e candidature. Nessun costo nascosto.</p>
            <Link href="/app">Crea il tuo profilo <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal className="price-card business-price" delay={0.1}>
            <span className="price-label">Per chi assume</span>
            <div className="business-prices"><span><b>€10</b> sblocco profilo</span><span><b>€250</b> assunzione confermata</span><span><b>€199/mese</b> team enterprise</span></div>
            <p>Account gratuito. Inizi a pagare solo quando vuoi andare avanti.</p>
            <Link href="/app">Apri Turn-Up <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="final-cta">
        <motion.div className="cta-orbit" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />
        <Reveal className="final-cta-inner">
          <span className="mkt-eyebrow light">Ready?</span>
          <h2>Il prossimo turno<br />può partire da qui.</h2>
          <p>Un’esperienza più semplice per chi lavora. Un’infrastruttura più solida per chi assume.</p>
          <Link className="mkt-button mkt-button-lime" href="/app">Entra in Turn-Up <ArrowRight size={18} /></Link>
        </Reveal>
      </section>

      <footer className="mkt-footer">
        <Brand />
        <p>Hiring infrastructure per l’ospitalità italiana.</p>
        <div><a href="#come-funziona">Come funziona</a><a href="#prezzi">Prezzi</a><Link href="/app">Accedi</Link></div>
        <small>Turn-Up facilita l’incontro e la chiarezza contrattuale. Il datore di lavoro resta responsabile dell’assunzione, della firma e delle comunicazioni obbligatorie.</small>
      </footer>
    </main>
  );
}
