"use client";
import React, { useState } from "react";
import {
  Home,
  Zap,
  FileCheck,
  Search,
  BookOpen,
  Menu,
  X,
  CheckCircle,
  HelpCircle,
  FileText,
  Target,
  ShieldAlert,
  Clock,
  Award,
  TrendingUp,
  History,
  Calendar,
  Wind,
} from "lucide-react";

function ParachuteIcon({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 10a9 9 0 1 0-18 0" />
      <path d="M12 2v8" />
      <path d="m12 10-5 6" />
      <path d="m12 10 5 6" />
      <path d="M7 16a5 5 0 0 0 10 0" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  );
}

const PARACHUTE_DATA = {
  factors: [
    { icon: <Award size={20} />, title: "Designation", desc: "You must be a qualified parachutist (BAC) or MFF qualified with awarded wings." },
    { icon: <Target size={20} />, title: "Jump Orders", desc: "Assigned by competent orders to a coded 'Parachute Duty' billet as an essential duty." },
    { icon: <History size={20} />, title: "Performance", desc: "Must meet minimum jump requirements per period to maintain pay eligibility." },
  ],
  rates: [
    { type: "Static Line", amt: "$150", desc: "Standard deployment via static line aircraft operations.", intensity: "bg-blue-50 text-blue-800" },
    { type: "Military Free Fall", amt: "$225", desc: "HALO/MFF operations where the jumper deploys the chute.", intensity: "bg-red-50 text-red-800" },
  ],
  docs: {
    start: [
      { name: "BAC/MFF Orders", detail: "Documentation of Basic Airborne or MFF course completion and wings award." },
      { name: "Billet Orders", detail: "PCS/Special orders assigning you to a parachute-coded billet." },
      { name: "Unit Diary Entry", detail: "S-1 administrative action linking your qualifications to the pay system." },
    ],
    maintenance: [
      { name: "Jump Log", detail: "A detailed record of all jumps. Crucial for verifying performance requirements." },
      { name: "Medical Clearance", detail: "Valid flight or parachutist physical required to maintain status." },
    ],
  },
  troubleshooting: [
    { q: "I jumped while on leave, where is my pay?", a: "Jumps performed while on leave, PCS, or TDY not requiring jump duty do NOT qualify for HDIP." },
    { q: "I'm MFF qualified but getting the $150 rate.", a: "Check your orders. You must be assigned to duties specifically requiring MFF operations to receive the $225 rate." },
    { q: "I did Static and MFF jumps this month.", a: "You only get paid once. You will receive the higher MFF rate ($225) if you performed qualifying MFF jumps." },
    { q: "My medical physical expired.", a: "HDIP stops immediately when medical clearance expires. You must be re-qualified to resume jumping and pay." },
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
      aria-controls={`parachute-panel-${id}`}
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

export default function ParachuteHDIPPage() {
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
            <p className="text-[10px] text-[var(--sa-cream)]/80 uppercase tracking-widest mt-1">Parachute HDIP Guide</p>
          </div>

          <nav className="space-y-2 flex-1" role="tablist" aria-label="Parachute sections">
            <NavButton id="overview" label="Overview" icon={Home} active={activeTab === "overview"} onClick={() => { setActiveTab("overview"); setMobileMenu(false); }} />
            <NavButton id="auth" label="Am I Eligible?" icon={Target} active={activeTab === "auth"} onClick={() => { setActiveTab("auth"); setMobileMenu(false); }} />
            <NavButton id="documents" label="Documents" icon={FileCheck} active={activeTab === "documents"} onClick={() => { setActiveTab("documents"); setMobileMenu(false); }} />
            <NavButton id="process" label="How it Works" icon={Clock} active={activeTab === "process"} onClick={() => { setActiveTab("process"); setMobileMenu(false); }} />
            <NavButton id="troubleshooter" label="Troubleshooter" icon={Search} active={activeTab === "troubleshooter"} onClick={() => { setActiveTab("troubleshooter"); setMobileMenu(false); }} />
          </nav>

          <div className="mt-auto pt-6 border-t border-white/15 text-[var(--sa-cream)]/80">
            <p className="text-[10px] uppercase font-bold tracking-tighter">Powered by Semper ADmin</p>
            <p className="text-[8px] opacity-50 leading-tight">DoDI 1340.09<br/>FMR Vol 7A Ch 11</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {activeTab === "overview" && (
            <div id="parachute-panel-overview" role="tabpanel" aria-label="Overview" className="animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[var(--sa-red)] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest flex items-center gap-1">
                    <Zap size={10} /> Incentive Pay
                  </span>
                </div>
                <h1 className="text-4xl font-black text-[var(--sa-navy)] leading-tight underline decoration-[var(--sa-red)] decoration-4 underline-offset-8">Parachute Duty</h1>
                <p className="text-slate-600 mt-8 text-lg">Special incentive pay for qualified parachutists required by orders to jump as an essential part of their duties.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {PARACHUTE_DATA.factors.map((f, i) => (
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {PARACHUTE_DATA.rates.map((r, i) => (
                      <div key={i} className={`p-6 rounded-2xl border ${r.intensity} border-white/10 shadow-lg`}>
                        <h4 className="text-xs font-black uppercase tracking-tighter opacity-70">{r.type}</h4>
                        <p className="text-4xl font-black my-2">{r.amt}</p>
                        <p className="text-[10px] leading-tight opacity-80">{r.desc}</p>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-400" /> Bottom Line Up Front
                  </h3>
                  <p className="opacity-90 leading-relaxed max-w-2xl text-sm md:text-base">
                    Parachute HDIP is non-taxable in combat zones. You can only receive one type of parachute pay per month. If you qualify for both Static and MFF, you will automatically receive the higher MFF rate ($225).
                  </p>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-5 rotate-12 pointer-events-none">
                  <ParachuteIcon size={400} />
                </div>
              </div>
            </div>
          )}

          {activeTab === "auth" && (
            <div id="parachute-panel-auth" role="tabpanel" aria-label="Eligibility" className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold mb-8 underline decoration-[var(--sa-red)] underline-offset-8">Am I Eligible?</h2>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Target className="text-[var(--sa-red)]" /> Eligibility Checklist</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="h-6 w-6 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-1 text-[var(--sa-red)] font-bold text-xs">1</div>
                      <p className="text-sm text-slate-600 leading-relaxed"><strong>Designation:</strong> You must have graduated from BAC (Static Line) or MFF school and hold the official designation.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-6 w-6 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-1 text-[var(--sa-red)] font-bold text-xs">2</div>
                      <p className="text-sm text-slate-600 leading-relaxed"><strong>Competent Orders:</strong> You must be assigned to a parachute-coded billet where jumping is an essential part of your military duties.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-6 w-6 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-1 text-[var(--sa-red)] font-bold text-xs">3</div>
                      <p className="text-sm text-slate-600 leading-relaxed"><strong>Performance:</strong> You must meet the minimum jump requirements per period (quarterly/annually) established by your service.</p>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-[var(--sa-navy)] text-white rounded-2xl flex gap-4 border-l-8 border-[var(--sa-red)]">
                  <ShieldAlert className="text-[var(--sa-red)] shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Non-Entitlement</h4>
                    <p className="text-xs opacity-80 leading-relaxed">Jumps performed while on leave, recreational jumps, or jumps during PCS/TDY that do not require parachute duty do not count toward your pay requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "documents" && (
            <div id="parachute-panel-documents" role="tabpanel" aria-label="Documents" className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold mb-8 underline decoration-[var(--sa-red)] underline-offset-8">Document Checklist</h2>
              <div className="space-y-8">
                <section>
                  <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">To Start Parachute Pay</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PARACHUTE_DATA.docs.start.map((doc, i) => (
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
                  <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">Maintenance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PARACHUTE_DATA.docs.maintenance.map((doc, i) => (
                      <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 flex gap-4 items-start">
                        <FileCheck className="text-green-600 shrink-0" size={20} />
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
            <div id="parachute-panel-process" role="tabpanel" aria-label="Process" className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold mb-8 underline decoration-[var(--sa-red)] underline-offset-8">The Pipeline</h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Qualification", desc: "Successfully complete the Basic Airborne Course or MFF Course and receive your wings." },
                  { step: "02", title: "Assignment", desc: "Receive PCS orders to a billet requiring jump duty. ACIP for pilots and HDIP for jumpers do not stack." },
                  { step: "03", title: "Unit Diary", desc: "S-1 processes a Unit Diary entry in MCTFS to link your orders and designation to your pay account." },
                  { step: "04", title: "Jump Logs", desc: "Maintain an accurate Jump Log. The command verifies your currency and performance per DoDI 1340.09." },
                  { step: "05", title: "Payout", desc: "Parachute HDIP appears on your LES. Rates are either $150 or $225 based on your mission set." },
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
            <div id="parachute-panel-troubleshooter" role="tabpanel" aria-label="Troubleshooter" className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold mb-8 underline decoration-[var(--sa-red)] underline-offset-8">Troubleshooter</h2>
              <div className="space-y-4 mb-10">
                {PARACHUTE_DATA.troubleshooting.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[var(--sa-red)] transition-all shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <HelpCircle size={18} className="text-[var(--sa-navy)]" /> {item.q}
                    </h4>
                    <p className="text-sm text-slate-600 mt-3 pl-7 border-l-2 border-slate-200 leading-relaxed italic">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 p-8 rounded-3xl flex gap-6 items-start">
                <ShieldAlert className="text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Injury Extension</h3>
                  <p className="text-sm text-amber-800 opacity-90">
                    If you are injured during a jump (not own misconduct), your HDIP can continue for up to 6 months while you recover. This can be extended up to 12 months with medical authority approval.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
