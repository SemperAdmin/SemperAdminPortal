import {
  Home,
  BookOpen,
  PlaySquare,
  Wrench,
  Search,
  Info,
  Sparkles,
  Building2,
  Shield,
  Award,
  Star,
  type LucideIcon,
} from "lucide-react";
import type { Role } from "@/lib/roles";
import { ROLES } from "@/lib/roles";

export interface NavItem {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  roles: Role[];
  ready: boolean;
  phase: number;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Latest policy updates and featured cards.",
    icon: Home,
    roles: [...ROLES],
    ready: true,
    phase: 3,
  },
  {
    label: "Videos",
    href: "/videos",
    description: "Walkthroughs with chapters and transcripts.",
    icon: PlaySquare,
    roles: [...ROLES],
    ready: false,
    phase: 7,
  },
  {
    label: "Tools",
    href: "/tools",
    description: "Interactive admin tools, PDF and DOCX generators.",
    icon: Wrench,
    roles: ["admin", "leader", "commander"],
    ready: true,
    phase: 9,
  },
  {
    label: "Marines",
    href: "/marines",
    description: "What every Marine needs to know about pay, records, and admin work.",
    icon: Shield,
    roles: [...ROLES],
    ready: true,
    phase: 4,
  },
  {
    label: "Leader",
    href: "/leader",
    description: "NCO, SNCO, and Officer content for coaching Marines, verifying records, and section readiness.",
    icon: Star,
    roles: ["leader", "commander", "admin"],
    ready: true,
    phase: 4,
  },
  {
    label: "Commander",
    href: "/commander",
    description: "Command authority on personnel decisions, discipline, and IPAC relationships.",
    icon: Award,
    roles: ["commander", "admin"],
    ready: true,
    phase: 4,
  },
  {
    label: "Admin",
    href: "/admin",
    description: "T&R-aligned content for S-1/G-1, I&I, and PAC admin work.",
    icon: Building2,
    roles: ["admin", "leader", "commander"],
    ready: true,
    phase: 4,
  },
  {
    label: "Search",
    href: "/search",
    description: "Search content by title, topic, T&R event code, source policy, and references.",
    icon: Search,
    roles: [...ROLES],
    ready: true,
    phase: 6,
  },
  {
    label: "Citations",
    href: "/citations",
    description: "Every Marine Corps policy referenced across the wiki, with linked pages.",
    icon: BookOpen,
    roles: [...ROLES],
    ready: true,
    phase: 6,
  },
  {
    label: "Style guide",
    href: "/styleguide",
    description: "Design system reference.",
    icon: Sparkles,
    roles: [...ROLES],
    ready: true,
    phase: 2,
  },
  {
    label: "About",
    href: "/about",
    description: "Mission, sources, update cadence, contributors.",
    icon: Info,
    roles: [...ROLES],
    ready: false,
    phase: 4,
  },
];

export function navItemsForRole(role: Role | null): NavItem[] {
  if (!role) return NAV_ITEMS.filter((i) => i.roles.length === 4);
  return NAV_ITEMS.filter((i) => i.roles.includes(role));
}
