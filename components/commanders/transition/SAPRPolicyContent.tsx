"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { SAPR_POLICY_DATA } from "../../../data/transitionCommandData";
import {
  Shield,
  CheckCircle,
  FileText,
  MapPin,
  Users,
  AlertTriangle,
  Phone,
  ExternalLink,
  ClipboardList,
} from "lucide-react";

function InfoCard({
  icon: Icon,
  title,
  children,
  variant = "default",
}: {
  icon?: React.ElementType;
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success" | "info";
}) {
  const variants = {
    default: "border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20",
    warning: "border-amber-500/40 bg-amber-500/10 dark:bg-amber-500/20",
    success: "border-green-500/40 bg-green-500/10 dark:bg-green-500/20",
    info: "border-blue-500/40 bg-blue-500/10 dark:bg-blue-500/20",
  };
  return (
    <div className={`rounded-lg border p-4 ${variants[variant]}`}>
      {(Icon || title) && (
        <div className="mb-2 flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          {Icon && <Icon className="h-5 w-5" />}
          {title}
        </div>
      )}
      <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
    </div>
  );
}

export function SAPRPolicyContent() {
  const data = SAPR_POLICY_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "SAPR Policy" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-[var(--sa-gold)]" />
          <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="mt-1 text-[var(--sa-cream)]/80">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <InfoCard icon={Shield} title="Overview" variant="info">
        <p>{data.overview}</p>
      </InfoCard>

      {/* Key Points */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <CheckCircle className="h-5 w-5 text-green-600" />
          Key Points
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <tbody>
              {data.keyPoints.map((point, idx) => (
                <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Required Elements */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <FileText className="h-5 w-5" />
          Required Policy Elements
        </h2>
        <div className="space-y-4">
          {data.requiredElements.map((element, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {idx + 1}. {element.element}
              </h3>
              <ul className="mt-2 space-y-1">
                {element.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-gold)]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Posting Locations */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <MapPin className="h-5 w-5" />
          Posting & Distribution
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Common Areas</h3>
            <ul className="space-y-1">
              {data.postingLocations.commonAreas.map((loc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-[var(--sa-gold)]" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">High Traffic Areas</h3>
            <ul className="space-y-1">
              {data.postingLocations.highTrafficAreas.map((loc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-[var(--sa-gold)]" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Digital Distribution</h3>
            <ul className="space-y-1">
              {data.postingLocations.digitalDistribution.map((loc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-[var(--sa-gold)]" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Distribution Steps */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          Distribution Steps
        </h2>
        <ol className="space-y-2">
          {data.distributionSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                {idx + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* SARC Coordination */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Users className="h-5 w-5" />
          SARC Coordination
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-900/20">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">Before Publishing</h3>
            <ul className="mt-2 space-y-1">
              {data.sarcCoordination.beforePublishing.map((item, idx) => (
                <li key={idx} className="text-sm text-blue-700 dark:text-blue-300">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-900/20">
            <h3 className="font-semibold text-green-800 dark:text-green-200">After Publishing</h3>
            <ul className="mt-2 space-y-1">
              {data.sarcCoordination.afterPublishing.map((item, idx) => (
                <li key={idx} className="text-sm text-green-700 dark:text-green-300">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Requirements */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          Additional SAPR Requirements
        </h2>
        <div className="space-y-3">
          {data.additionalRequirements.map((req, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{req.requirement}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{req.details}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Inspection Findings */}
      <InfoCard icon={AlertTriangle} title="Common IG Inspection Findings" variant="warning">
        <ul className="space-y-2">
          {data.commonInspectionFindings.map((finding, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
              {finding}
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* Key Contacts */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Phone className="h-5 w-5" />
          Key Contacts
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {data.keyContacts.map((contact, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{contact.name}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{contact.info}</div>
              {contact.url && (
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-xs text-blue-600 hover:underline dark:text-blue-400"
                >
                  Visit Website <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ExternalLink className="h-5 w-5" />
          References
        </h2>
        <ul className="space-y-2">
          {data.references.map((ref, idx) => (
            <li key={idx}>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                {ref.title}
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
