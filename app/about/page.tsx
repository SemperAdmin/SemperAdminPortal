import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What We Offer</h1>
      <p className="text-zinc-700 dark:text-zinc-300">A centralized hub for administrative knowledge, training, and tools that reduce friction and improve consistency across units.</p>
      <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Primary Goals</h2>
      <section className="grid gap-8 md:grid-cols-3 rounded-2xl bg-[var(--sa-cream)] p-6 shadow-sm ring-1 ring-black/5 dark:bg-[var(--sa-navy)]">
        <div className="space-y-6">
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Knowledge Enhancement and Standardization</h3>
            <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
              <li>Establish a centralized hub for administrative knowledge and best practices</li>
              <li>Promote standardization of administrative procedures across units</li>
              <li>Facilitate real-time sharing of policy updates and interpretations</li>
              <li>Create and maintain a comprehensive repository of templates and guides</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Community Development and Support</h3>
            <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
              <li>Foster a collaborative environment where Marines can seek and provide administrative guidance</li>
              <li>Build a network of administrative professionals across the Marine Corps</li>
              <li>Enable peer-to-peer learning and mentorship opportunities</li>
              <li>Reduce administrative burdens through shared solutions and best practices</li>
            </ul>
          </section>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-[var(--sa-gold)]">
              <Image src={`${BP}/logo.png`} alt="Semper Admin logo" fill sizes="192px" priority className="object-cover" />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <section className="space-y-2 text-center">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Training and Professional Development</h3>
              <ul className="inline-block list-disc space-y-1 pl-6 text-left text-zinc-700 dark:text-zinc-300">
                <li>Provide accessible, on-demand training resources</li>
                <li>Develop and share video tutorials for common administrative tasks</li>
                <li>Maintain up-to-date documentation on systems and procedures</li>
                <li>Support career development through knowledge sharing and skill enhancement</li>
              </ul>
            </section>
          </div>
        </div>
        <div className="space-y-6">
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. System and Process Improvement</h3>
            <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
              <li>Streamline administrative processes through standardized templates and procedures</li>
              <li>Reduce administrative errors through improved guidance and support</li>
              <li>Enhance efficiency in day-to-day administrative operations</li>
              <li>Facilitate rapid problem-solving through community expertise</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5. Communication and Information Dissemination</h3>
            <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
              <li>Ensure timely distribution of policy updates and changes</li>
              <li>Maintain clear channels for administrative support and guidance</li>
              <li>Create effective feedback loops between units and administrative leadership</li>
              <li>Share success stories and lessons learned across the community</li>
            </ul>
          </section>
        </div>
      </section>
      <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Offerings</h2>
      <div className="grid gap-6 md:grid-cols-3 rounded-2xl bg-[var(--sa-cream)] p-6 shadow-sm ring-1 ring-black/5 dark:bg-[var(--sa-navy)]">
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Training & Education Tools</h3>
          <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Video modules</li>
            <li>Template Toolbox</li>
            <li>Interactive training resources</li>
            <li>Semper Soundtracks</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Community Support</h3>
          <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Discussion forums</li>
            <li>Feedback and feature requests</li>
            <li>Recognition and celebrations</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Support Services</h3>
          <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Help desk</li>
            <li>Service tickets</li>
            <li>Specialized support</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative Tools</h3>
          <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Unit User Reports</li>
            <li>DiaryMate</li>
            <li>TTC Search Dashboard</li>
            <li>Report Builder</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Policy & Procedures</h3>
          <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Contact policies</li>
            <li>Best practices</li>
            <li>SOPs and guides</li>
            <li>Directives library</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Professional Development</h3>
          <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Mentorship</li>
            <li>Leadership Scholar Program</li>
            <li>Marine Leader Development</li>
            <li>Training roadmaps</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Digital Resources</h3>
          <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Online tools</li>
            <li>SharePoint portals</li>
            <li>Knowledge base</li>
            <li>Quick start guides</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
            <ul className="space-y-1 pl-0 text-zinc-700 dark:text-zinc-300">
            <li><a href="https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/TemplateToolBox.aspx" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] hover:underline">
              <span>TemplateToolBox</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1 inline align-middle opacity-80">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <rect x="8" y="9" width="5" height="6" rx="1"/>
                <path d="M4 9h3"/>
                <path d="M4 12h3"/>
                <path d="M4 15h3"/>
              </svg>
            </a></li>
            <li><Link href="/videos" className="text-[var(--sa-red)] hover:underline">Videos</Link></li>
            <li><Link href="/soundtracks" className="text-[var(--sa-red)] hover:underline">Soundtracks</Link></li>
            <li><Link href="/reports" className="text-[var(--sa-red)] hover:underline">Reports</Link></li>
            <li><Link href="/links" className="text-[var(--sa-red)] hover:underline">Important Links</Link></li>
            <li><Link href="/roles" className="text-[var(--sa-red)] hover:underline">Roles</Link></li>
          </ul>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contact Information</h3>
          <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Semper Admin Teams channel</li>
            <li>Email support</li>
            <li>Help desk hours</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
