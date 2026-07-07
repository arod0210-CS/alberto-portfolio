import { Icon, IconName } from "./Icons";

type Project = { title: string; description: string; tags: string[]; icon: IconName; accent: string };

export function ProjectCard({ project }: { project: Project }) {
  return <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-blue/50 hover:shadow-glow">
    <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}>
      <div className="absolute inset-0 grid-fade opacity-50" />
      <div className="relative rounded-2xl border border-white/15 bg-ink/50 p-4 shadow-2xl backdrop-blur"><Icon name={project.icon} className="h-9 w-9 text-white" /></div>
    </div>
    <div className="flex flex-1 flex-col p-6"><h3 className="font-display text-xl font-semibold">{project.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300">{tag}</span>)}</div><div className="mt-6 flex gap-5"><a href="#" aria-label={`${project.title} GitHub repository`} className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-emerald"><Icon name="github" className="h-4 w-4"/>GitHub</a><a href="#" aria-label={`${project.title} live demo`} className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-blue">Live Demo<Icon name="arrow" className="h-4 w-4"/></a></div></div>
  </article>;
}
