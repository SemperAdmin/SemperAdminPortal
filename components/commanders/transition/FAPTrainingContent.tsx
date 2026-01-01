"use client";

import React from "react";
import { Breadcrumb } from "../../ui/Breadcrumb";
import { FAP_TRAINING_DATA } from "../../../data/transitionCommandData";
import {
  Heart,
  CheckCircle,
  Users,
  BookOpen,
  ClipboardList,
  AlertTriangle,
  Phone,
  ExternalLink,
  Shield,
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

export function FAPTrainingContent() {
  const data = FAP_TRAINING_DATA;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Transition of Command", href: "/roles/commanders/commanders-transition-command" },
    { label: "FAP Training" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/90 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <Heart className="h-8 w-8 text-[var(--sa-gold)]" />
          <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="mt-1 text-[var(--sa-cream)]/80">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <InfoCard icon={Heart} title="Overview" variant="info">
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

      {/* Attendees */}
      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Users className="h-5 w-5" />
            Required Attendees
          </h2>
          <ul className="space-y-2">
            {data.requiredAttendees.map((attendee, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                {attendee}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Users className="h-5 w-5" />
            Strongly Recommended
          </h2>
          <ul className="space-y-2">
            {data.recommendedAttendees.map((attendee, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-gold)]" />
                {attendee}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Training Topics */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <BookOpen className="h-5 w-5" />
          Training Topics
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {data.trainingTopics.map((topic, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-gold)]" />
              {topic}
            </li>
          ))}
        </ul>
      </section>

      {/* How to Schedule */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          How to Schedule Training
        </h2>
        <ol className="space-y-3">
          {data.schedulingSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                {idx + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Child Abuse Info */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Shield className="h-5 w-5" />
          Child Abuse Information
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Types</h3>
            <ul className="space-y-1">
              {data.childAbuseInfo.types.map((type, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">{type}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Reporting</h3>
            <ul className="space-y-1">
              {data.childAbuseInfo.reportingRequirements.map((req, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">{req}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Investigation</h3>
            <ul className="space-y-1">
              {data.childAbuseInfo.investigationProcess.map((proc, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">{proc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Domestic Abuse Info */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Shield className="h-5 w-5" />
          Domestic Abuse Information
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Types</h3>
            <ul className="space-y-1">
              {data.domesticAbuseInfo.types.map((type, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">{type}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">Reporting Options</h3>
            <ul className="space-y-1">
              {data.domesticAbuseInfo.reportingOptions.map((opt, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">{opt}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <h3 className="mb-2 font-medium text-zinc-700 dark:text-zinc-300">MPO Information</h3>
            <ul className="space-y-1">
              {data.domesticAbuseInfo.mpoInfo.map((info, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Commander Responsibilities */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <ClipboardList className="h-5 w-5" />
          Commander Responsibilities
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-900/20">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">Prevention</h3>
            <ul className="mt-2 space-y-1">
              {data.commanderResponsibilities.prevention.map((item, idx) => (
                <li key={idx} className="text-sm text-blue-700 dark:text-blue-300">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-3 dark:bg-amber-900/20">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200">Response</h3>
            <ul className="mt-2 space-y-1">
              {data.commanderResponsibilities.response.map((item, idx) => (
                <li key={idx} className="text-sm text-amber-700 dark:text-amber-300">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-900/20">
            <h3 className="font-semibold text-green-800 dark:text-green-200">Ongoing</h3>
            <ul className="mt-2 space-y-1">
              {data.commanderResponsibilities.ongoing.map((item, idx) => (
                <li key={idx} className="text-sm text-green-700 dark:text-green-300">{item}</li>
              ))}
            </ul>
          </div>
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
