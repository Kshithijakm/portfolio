import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            01 / Career Timeline
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Work Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative space-y-10 pl-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-slate-200 dark:before:bg-slate-800 sm:pl-10 sm:before:left-[11px]">
          {portfolioData.experiences.map((exp) => (
            <article
              key={`${exp.role}-${exp.organization}`}
              className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 sm:p-7"
            >
              {/* Timeline Node */}
              <span
                className="absolute -left-[25px] top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue-600 bg-slate-50 dark:border-blue-400 dark:bg-slate-950 sm:-left-[37px] sm:h-5 sm:w-5"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              </span>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      {exp.organization}
                    </span>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-md border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  {exp.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
