import { useEffect, useState } from 'react';
import { ArrowUp, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const { personalInfo } = portfolioData;

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopyEmail = async () => {
    const email = personalInfo.socials.email;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Fallback for older or restricted clipboard contexts
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="scroll-mt-20 border-t border-slate-200/80 py-20 dark:border-slate-800/80 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            05 / Get In Touch
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300">
            Actively seeking full-time Software Engineering opportunities for 2027. Feel free to
            copy my email or connect via GitHub and LinkedIn.
          </p>

          {/* One-click Copy Email & Social Links */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 rounded-lg bg-slate-900 px-5 py-3 font-mono text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-offset-slate-950"
            >
              <Mail className="h-4 w-4" />
              <span>{personalInfo.socials.email}</span>
              <span className="ml-1 inline-flex items-center gap-1 rounded bg-white/15 px-2 py-0.5 font-sans text-xs font-semibold">
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied!' : 'Copy Email'}
              </span>
            </button>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-slate-100/60 py-8 dark:border-slate-800/80 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React &amp; Tailwind
            CSS.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>

      {/* Floating 'Copied!' Toast Notification */}
      {copied && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg border border-emerald-200 bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-lg dark:border-emerald-500/40 dark:bg-slate-800"
        >
          <Check className="h-4 w-4 text-emerald-400" />
          <span>Copied!</span>
        </div>
      )}
    </>
  );
}
