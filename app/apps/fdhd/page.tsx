"use client";
import React, { useState } from "react";
import {
  Home,
  Ship,
  FileCheck,
  Search,
  BookOpen,
  X,
  Menu,
  CheckCircle,
  HelpCircle,
  FileText,
  Target,
  Activity,
  ShieldAlert,
  Zap,
  Clock,
  Users,
  Calendar,
  Anchor,
} from "lucide-react";

const FLIGHT_DECK_DATA = {
  factors: [
    { icon: <Target size={20} />, title: "FDHD Billet", desc: "You must be assigned to a designated billet per OPNAVINST 7220.4. Not all deck jobs qualify." },
    { icon: <Anchor size={20} />, title: "Certified Vessel", desc: "Must be an aircraft carrier or air-capable ship with a CNO-certified flight facility." },
    { icon: <Calendar size={20} />, title: "4-Day Rule", desc: "Requires 4 days of flight ops participation (or class-specific equivalent) per month." },
  ],
  rules: [
    { title: "$150 Flat Rate", desc: "Monthly special pay. Prorated (1/30 per day) if starting or ending mid-month." },
    { title: "Tax Treatment", desc: "Non-taxable when received in a designated combat zone." },
    { title: "No Stacking", desc: "You cannot receive FDHDIP if receiving any other HDIP (Jump, Dive, Demo) for the same period." },
  ],
  docs: {
    start: [
      { name: "FDHD Assignment Orders", detail: "PCS/PCA or written CO orders specifying duty in an authorized FDHD billet." },
      { name: "Participation Record", detail: "Flight deck logs or participation rosters verifying your presence during launch/recovery." },
      { name: "Unit Diary Entry", detail: "S-1 administrative action to link your orders and billet to the pay system (MCTFS)." },
    ],
    stop: [
      { name: "Termination Orders", detail: "Relief from flight deck duties, reassignment to a non-FDHD billet, or PCS." },
      { name: "Medical Documentation", detail: "Medical restriction or permanent disqualification preventing flight deck duty." },
    ],
  },
  troubleshooting: [
    { q: "I work on the deck but don't see pay.", a: "Check your billet code. You must be in a designated FDHD billet. Personnel in non-FDHD billets are not entitled to pay even if present on the deck." },
    { q: "Ship has been in port/maintenance.", a: "If flight operations are not conducted, you cannot meet participation requirements. Pay is suspended/prorated during these periods." },
    { q: "What counts as 'Participation'?", a: "Presence at your assigned station during actual aircraft launch and recovery, including turn-up/positioning and shutdown." },
    { q: "I'm a Reserve (RC) Marine.", a: "RC members on active duty are eligible for FDHDIP if they meet the same performance and billet requirements as Active Component." },
    { q: "I got injured during flight ops.", a: "If injured during duty (not misconduct), FDHDIP can continue for up to 6 months (potentially 12) while recovering." },
  ],
};

type NavButtonProps = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  active: boolean;
  onClick: () => void;
};

function NavButton({ id, label, icon: Icon, active, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={active}
      aria-controls={`fdhd-panel-${id}`}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sa-red)] ${
        active
          ? "bg-[var(--sa-red)] text-white shadow-lg ring-2 ring-[var(--sa-gold)]"
          : "text-[var(--sa-cream)]/80 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon size={20} />
      <span className="font-semibold text-left">{label}</span>
    </button>
  );
}

export default function FDHDPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col md:flex-row font-sans">
      <div className="md:hidden bg-[var(--sa-navy)] text-white p-4 flex justify-between items-center ring-4 ring-[var(--sa-red)]/40 shadow-md">
        <h1 className="font-black italic tracking-tighter text-xl">SEMPER <span className="text-[var(--sa-red)]">ADmin</span></h1>
        <button onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu" className="rounded-md p-2 hover:bg-white/10">
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[var(--sa-navy)] transition-transform duration-300 md:relative md:translate-x-0 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="hidden md:block text-white mb-10 border-b border-white/15 pb-6">
            <h2 className="text-2xl font-black italic tracking-tighter">SEMPER <span className="text-[var(--sa-red)]">ADmin</span></h2>
            <p className="text-[10px] text-[var(--sa-cream)]/80 uppercase tracking-widest mt-1">Flight Deck HDIP Guide</p>
          </div>

          <nav className="space-y-2 flex-1" role="tablist" aria-label="FDHD sections">
            <NavButton id="overview" label="Overview" icon={Home} active={activeTab === "overview"} onClick={() => { setActiveTab("overview"); setMobileMenu(false); }} />
            <NavButton id="auth" label="Am I Eligible?" icon={Ship} active={activeTab === "auth"} onClick={() => { setActiveTab("auth"); setMobileMenu(false); }} />
            <NavButton id="documents" label="Documents" icon={FileCheck} active={activeTab === "documents"} onClick={() => { setActiveTab("documents"); setMobileMenu(false); }} />
            <NavButton id="process" label="How it Works" icon={Clock} active={activeTab === "process"} onClick={() => { setActiveTab("process"); setMobileMenu(false); }} />
            <NavButton id="troubleshooter" label="Troubleshooter" icon={Search} active={activeTab === "troubleshooter"} onClick={() => { setActiveTab("troubleshooter"); setMobileMenu(false); }} />
          </nav>

          <div className="mt-auto pt-6 border-t border-white/15 text-[var(--sa-cream)]/80">
            <p className="text-[10px] uppercase font-bold tracking-tighter">Powered by Semper ADmin</p>
            <p className="text-[8px] opacity-50 leading-tight">OPNAVINST 7220.4<br/>DoD FMR Vol 7A Ch 11</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {activeTab === "overview" && (
            <div id="fdhd-panel-overview" role="tabpanel" aria-label="Overview" className="animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[var(--sa-red)] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest flex items-center gap-1">
                    <Zap size={10} /> Hazard Pay
                  </span>
                </div>
                <h1 className="text-4xl font-black text-[var(--sa-navy)] leading-tight underline decoration-[var(--sa-red)] decoration-4 underline-offset-8">Flight Deck Duty</h1>
                <p className="text-slate-600 mt-8 text-lg">Special incentive pay for Marines and Sailors performing hazardous duties on flight decks during launch and recovery operations.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {FLIGHT_DECK_DATA.factors.map((f, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[var(--sa-red)] mb-4">
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1 leading-tight">{f.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--sa-navy)] text-white p-8 rounded-3xl relative overflow-hidden shadow-xl mb-10">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-black text-[var(--sa-red)] tracking-tighter">$150.00</h2>
                      <p className="text-xs uppercase font-bold opacity-70">Monthly Rate</p>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs">
                      <span className="block font-bold">Performance:</span>
                      4 Days / Month
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-400" /> Bottom Line Up Front
                  </h3>
                  <p className="opacity-90 leading-relaxed max-w-2xl text-sm md:text-base mb-6">
                    Flight Deck Hazardous Duty Incentive Pay (FDHDIP) compensates for the extreme danger of launch and recovery operations. It is not automatic; you must be in a designated billet and physically participate on the deck for at least 4 flight-op days per month.
                  </p>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-5 rotate-12 pointer-events-none">
                  <Ship size={300} />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-[var(--sa-navy)] mb-4 flex items-center gap-2">
                  <Activity size={18} className="text-[var(--sa-red)]" /> Operational Scope
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  Includes turn-up and movement of aircraft before launch and shutdown immediately after recovery. Service members must be at assigned stations on the flight deck during these specific windows.
                </p>
              </div>
            </div>
          )}

          {activeTab === "auth" && (
            <div id="fdhd-panel-auth" role="tabpanel" aria-label="Eligibility" className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold mb-8 underline decoration-[var(--sa-red)] underline-offset-8">Am I Eligible?</h2>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Target className="text-[var(--sa-red)]" /> Eligibility Checklist</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="h-6 w-6 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-1 text-[var(--sa-red)] font-bold text-xs">1</div>
                      <p className="text-sm text-slate-600 leading-relaxed"><strong>Billet Designation:</strong> You must be assigned to an FDHD billet requiring frequent and regular participation (per OPNAVINST 7220.4 series).</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-6 w-6 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-1 text-[var(--sa-red)] font-bold text-xs">2</div>
                      <p className="text-sm text-slate-600 leading-relaxed"><strong>Flight Operations:</strong> You must be present during actual launch/recovery on aircraft carriers or air-capable ships certified by the CNO.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-6 w-6 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-1 text-[var(--sa-red)] font-bold text-xs">3</div>
                      <p className="text-sm text-slate-600 leading-relaxed"><strong>Participation:</strong> Minimum of 4 calendar days per month (or equivalent aircraft ops per ship class).</p>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-[var(--sa-navy)] text-white rounded-2xl flex gap-4 border-l-8 border-[var(--sa-red)]">
                    <ShieldAlert className="text-[var(--sa-red)] shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Ineligibility</h4>
                      <p className="text-xs opacity-80 leading-relaxed">Occasional flight deck presence, watch below decks, or working in a non-FDHD designated billet does not qualify.</p>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-900 text-white rounded-2xl flex gap-4 border-l-8 border-[var(--sa-gold)]">
                    <Users className="text-[var(--sa-gold)] shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Reserve Component</h4>
                      <p className="text-xs opacity-80 leading-relaxed">RC members on active duty are eligible. Pay is prorated based on days of participation during the month.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "documents" && (
            <div id="fdhd-panel-documents" role="tabpanel" aria-label="Documents" className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold mb-8 underline decoration-[var(--sa-red)] underline-offset-8">Document Checklist</h2>
              <div className="space-y-8">
                <section>
                  <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">To Start FDHDIP</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {FLIGHT_DECK_DATA.docs.start.map((doc, i) => (
                      <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 flex gap-4 items-start">
                        <FileText className="text-[var(--sa-navy)] shrink-0" size={20} />
                        <div>
                          <p className="font-bold text-sm text-slate-800 leading-tight">{doc.name}</p>
                          <p className="text-[10px] text-slate-500 mt-1 leading-tight">{doc.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">To Stop FDHDIP</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {FLIGHT_DECK_DATA.docs.stop.map((doc, i) => (
                      <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 flex gap-4 items-start">
                        <X className="text-[var(--sa-red)] shrink-0" size={20} />
                        <div>
                          <p className="font-bold text-sm text-slate-800 leading-tight">{doc.name}</p>
                          <p className="text-[10px] text-slate-500 mt-1 leading-tight">{doc.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div id="fdhd-panel-process" role="tabpanel" aria-label="Process" className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold mb-8 underline decoration-[var(--sa-red)] underline-offset-8">The FDHDIP Pipeline</h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Orders", desc: "CO issues written orders assigning you to a designated FDHD billet requiring regular flight deck participation." },
                  { step: "02", title: "Participation", desc: "Must be physically present during flight ops (launch/recovery) for 4 days or ship-class equivalent." },
                  { step: "03", title: "Tracking", desc: "Command tracks presence in the flight deck log or participation roster to verify monthly requirements." },
                  { step: "04", title: "Unit Diary", desc: "S-1 processes a Unit Diary entry in MCTFS linking your billet and orders to the pay system." },
                  { step: "05", title: "LES", desc: "FDHDIP appears on your LES. Processing typically takes 1-2 pay periods after orders/certification." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="text-4xl font-black text-slate-200 w-12">{s.step}</div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1">
                      <h4 className="font-bold text-slate-900">{s.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "troubleshooter" && (
            <div id="fdhd-panel-troubleshooter" role="tabpanel" aria-label="Troubleshooter" className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold mb-8 underline decoration-[var(--sa-red)] underline-offset-8">Troubleshooter</h2>
              <div className="space-y-4 mb-10">
                {FLIGHT_DECK_DATA.troubleshooting.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[var(--sa-red)] transition-all shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <HelpCircle size={18} className="text-[var(--sa-navy)]" /> {item.q}
                    </h4>
                    <p className="text-sm text-slate-600 mt-3 pl-7 border-l-2 border-slate-200 leading-relaxed italic">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--sa-red)] text-white p-8 rounded-3xl text-center shadow-lg relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4">Stacking Restriction</h3>
                <p className="text-sm opacity-90 mb-6 max-w-lg mx-auto italic">
                  Members receiving HDIP for any other type of hazardous duty are not entitled to FDHDIP for the same period. You must choose one HDIP type per month.
                </p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="bg-white text-[var(--sa-red)] px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors">
                    <BookOpen size={16} /> OPNAVINST 7220.4
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
