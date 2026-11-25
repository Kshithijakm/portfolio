import { ArrowDownRight, FileDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Subtle architectural grid & geometric accents */}
      <div
        className="hero-grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_75%_at_50%_40%,#000_55%,transparent_100%)]"
        aria-hidden="true"
      />
      <div
        className="hero-subgrid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_65%_65%_at_50%_40%,#000_40%,transparent_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Geometric corner brackets framing the typographic composition */}
        <div className="relative">
          <div
            className="pointer-events-none absolute -left-3 -top-3 hidden h-6 w-6 border-l-2 border-t-2 border-blue-600/40 dark:border-blue-400/40 sm:block"
            aria-hidden="true"
          />

          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-1.5 text-xs font-medium text-emerald-800 shadow-sm backdrop-blur-sm dark:border-emerald-500/30 dark:bg-emerald-950/50 dark:text-emerald-300 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>{personalInfo.availabilityBadge}</span>
          </div>

          {/* Engineering index label */}
          <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <Terminal className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>Software Engineering Portfolio</span>
          </div>

          {/* Bold Typography Name */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>

          {/* Headline */}
          <p className="mt-4 max-w-3xl text-lg font-semibold tracking-tight text-blue-600 dark:text-blue-400 sm:text-xl lg:text-2xl">
            {personalInfo.headline}
          </p>

          {/* Bio */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {personalInfo.bio}
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-offset-slate-950"
            >
              <span>View Projects</span>
              <ArrowDownRight className="h-4 w-4" />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              download="Kshithija_KM_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950"
            >
              <FileDown className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-slate-200/80 pt-7 dark:border-slate-800/80">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white/80 px-3.5 py-2 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white sm:text-sm"
            >
              <Mail className="h-4 w-4" />
              <span>{personalInfo.socials.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
