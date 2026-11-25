import { useState } from 'react';
import { ArrowUpRight, FolderGit2, Github } from 'lucide-react';
import { portfolioData, ProjectCategory } from '../data/portfolioData';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-slate-200/80 bg-slate-100/50 py-20 dark:border-slate-800/80 dark:bg-slate-900/30 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              02 / Engineering Work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          {/* Filter Tabs */}
          <div
            className="inline-flex flex-wrap gap-1.5 rounded-lg border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {portfolioData.projectCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm dark:bg-blue-600 dark:text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 font-mono text-xs font-medium text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/50 dark:text-blue-300">
                    <FolderGit2 className="h-3.5 w-3.5" />
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {project.title}
                  {project.subtitle && (
                    <span className="block text-sm font-medium text-slate-500 dark:text-slate-400">
                      {project.subtitle}
                    </span>
                  )}
                </h3>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-white sm:text-sm"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub Repository</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
