import { Cpu, Database, Globe, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = [Terminal, Globe, Cpu, Database];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-slate-200/80 py-20 dark:border-slate-800/80 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            03 / Technical Stack
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.skillCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50/70 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/40 dark:hover:text-blue-300 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
