import Image from "next/image";

const apps = [
  {
    name: "FDHD Guide",
    href: "/apps/fdhd",
    icon: "⚓",
    description:
      "Flight Deck Hazardous Duty Incentive Pay guide and eligibility checklist.",
  },
  {
    name: "Parachute HDIP Guide",
    href: "/apps/parachute",
    icon: "🪂",
    description:
      "Parachute Hazardous Duty Incentive Pay guide for Static Line and MFF.",
  },
  {
    name: "AMHS Message Formatter",
    href: "https://semperadmin.github.io/AMHS-Message-Formatter/",
    icon: "📡",
    description:
      "Format Automated Message Handling System messages to military standards for secure communications.",
  },
  {
    name: "EventCall",
    href: "https://semperadmin.github.io/EventCall",
    icon: "📅",
    description:
      "Create, manage, and coordinate events with precision — scheduling, notifications, and tracking.",
  },
  {
    name: "Fitness Report Evaluator",
    href: "https://semperadmin.github.io/Fitness-Report-Evaluator/",
    icon: "⭐",
    description:
      "Analyze fitness reports with unbiased, data-driven insights to support career progression.",
  },
  {
    name: "Marine Corps Directives Formatter",
    href: "https://semperadmin.github.io/marine-corps-directives-formatter/",
    icon: "📋",
    description:
      "Effortlessly format Marine Corps orders and directives while maintaining compliance.",
  },
  {
    name: "Naval Letter Formatter",
    href: "https://semperadmin.github.io/naval-letter-formatter/",
    icon: "📝",
    description:
      "Streamline official correspondence with automated formatting to Marine Corps standards.",
  },
  {
    name: "PEBD Calculator",
    href: "https://semperadmin.github.io/PEBD-CALCULATOR/",
    icon: "💻",
    description:
      "Calculate Pay Entry Base Date accurately, eliminating manual errors in career timelines.",
  },
  {
    name: "USMC Directives Hub",
    href: "https://semperadmin.github.io/usmc-directives-hub/",
    icon: "📚",
    description:
      "Access and search orders, bulletins, and messages in one centralized location.",
  },
  {
    name: "V.I.C.I.O.U.S.",
    href: "https://semperadmin.github.io/V.I.C.I.O.U.S./",
    icon: "🔄",
    description:
      "Virtual Initiation Check-In Interface Offboarding Utility System for personnel transfers.",
  },
];

export default function AppsPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="bg-animations">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="text-center">
          <div className="mx-auto mb-6 inline-block">
            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-white p-2 shadow-2xl ring-4 ring-red-600/20 transition">
              <Image src="/logo.png" alt="Semper Admin" fill sizes="96px" className="rounded-full object-cover" />
            </div>
          </div>
          <h1 className="bg-gradient-to-r from-white via-rose-200 to-amber-100 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Semper Admin
          </h1>
          <p className="mt-2 text-lg font-medium text-slate-300 sm:text-xl">Empowering Marines to Excel</p>
          <p className="text-slate-400">Mentor | Manage | Master</p>
        </div>

        <div className="mt-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl transition hover:bg-white/10">
            <h2 className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-center text-xl font-bold text-transparent sm:text-2xl">
              Mission-Critical Tools for Marines
            </h2>
            <p className="mt-3 text-center text-slate-300">
              Administrative excellence is the backbone of every successful mission. These purpose-built applications eliminate tedious manual work so Marines can focus on leading and excelling.
            </p>
          </div>
        </div>

        <div className="mt-10 apps-grid">
          {apps.map((app) => (
            <a key={app.href} href={app.href} target="_blank" rel="noopener noreferrer" className="app-card">
              <div className="app-card-inner">
                <div className="app-header">
                  <div className="app-icon">{app.icon}</div>
                  <div>
                    <h3 className="app-name">{app.name}</h3>
                  </div>
                </div>
                <p className="app-description">{app.description}</p>
                <div className="app-launch">
                  <span>Launch Tool</span>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="ml-2 h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="footer">
          <div className="footer-badge">
            <p className="footer-text">Built with dedication for the Marine Corps community</p>
          </div>
          <p className="footer-motto">Semper Fidelis</p>
        </div>
      </div>
    </div>
  );
}
