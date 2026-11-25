import { Award, BadgeCheck, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-slate-200/80 bg-slate-100/50 py-20 dark:border-slate-800/80 dark:bg-slate-900/30 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            04 / Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Education, Achievements &amp; Certifications
          </h2>
        </div>

        {/* Education Grid */}
        <div>
          <div className="mb-5 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
            <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3>Education</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {portfolioData.education.map((edu) => (
              <article
                key={edu.degree}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                    {edu.period}
                  </span>
                  <h4 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 font-mono text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/50 dark:text-blue-300">
                    {edu.score}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Achievements */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
              <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3>Achievements</h3>
            </div>

            <ul className="space-y-4">
              {portfolioData.achievements.map((achievement) => (
                <li
                  key={achievement.title}
                  className="rounded-lg border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-800/40"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {achievement.title}
                  </p>
                  {achievement.description && (
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {achievement.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
              <BadgeCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3>Certifications</h3>
            </div>

            <ul className="divide-y divide-slate-100 dark:divide-slate-800">
              {portfolioData.certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex flex-col justify-between gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
                >
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {cert.title}
                  </span>
                  <span className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
