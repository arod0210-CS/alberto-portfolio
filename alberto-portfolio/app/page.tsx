import { ContactForm } from "@/components/ContactForm";
import { Icon, IconName } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "HTML", "CSS", "Java", "C++", "Python", "SQL/MySQL", "TypeScript"],
  },
  {
    title: "Frameworks / Tools",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "GitHub Pages",
      "VS Code",
      "Visual Studio",
      "Android Studio",
      "Eclipse",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "SQLite", "MySQL Workbench", "Database Queries", "Data Tracking"],
  },
  {
    title: "Core Skills",
    items: [
      "Responsive UI",
      "Mobile-First Design",
      "Debugging",
      "Documentation",
      "Testing",
      "Process Improvement",
      "AI-Assisted Development",
      "Troubleshooting",
      "Bilingual English/Spanish",
    ],
  },
];

const projects: {
  title: string;
  description: string;
  tags: string[];
  icon: IconName;
  accent: string;
}[] = [
  {
    title: "TaskFlow App",
    description:
      "A mobile-first productivity web app focused on daily planning, task organization, tags, user flow, and clean responsive layouts.",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: "spark",
    accent: "from-blue/80 to-sky-400/20",
  },
  {
    title: "Reseller Inventory App",
    description:
      "A small-business inventory tracking app concept for managing item details, photos, pricing, product status, and reseller workflows.",
    tags: ["Inventory", "Web App", "GitHub"],
    icon: "database",
    accent: "from-emerald/70 to-teal-400/20",
  },
  {
    title: "Android Inventory App",
    description:
      "A mobile application built with Java, Android Studio, and SQLite featuring login, inventory tracking, data storage, and SMS notification features.",
    tags: ["Java", "Android", "SQLite"],
    icon: "phone",
    accent: "from-violet-600/70 to-blue/20",
  },
  {
    title: "OpenGL 3D Scene",
    description:
      "A C++ and OpenGL project demonstrating 3D rendering, lighting, camera movement, object transformations, and graphics programming fundamentals.",
    tags: ["C++", "OpenGL", "3D"],
    icon: "box",
    accent: "from-orange-500/70 to-rose-500/20",
  },
  {
    title: "Operations Analytics Dashboard",
    description:
      "A dashboard concept for visualizing productivity, staffing, attendance, performance trends, and business KPIs to support better decision-making.",
    tags: ["React", "TypeScript", "Analytics"],
    icon: "chart",
    accent: "from-cyan-500/70 to-blue/30",
  },
  {
    title: "AI Decision Support Assistant",
    description:
      "A concept tool designed to help leaders review workload, staffing changes, risks, and workflow options before making operational decisions.",
    tags: ["AI", "Decision Support", "Workflow"],
    icon: "spark",
    accent: "from-fuchsia-600/60 to-emerald/20",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-ink">
      <Navbar />

      <section id="home" className="relative flex min-h-screen items-center pt-16">
        <div className="absolute inset-0 grid-fade" />
        <div className="absolute left-1/2 top-24 h-72 w-72 rounded-full bg-blue/20 blur-[110px]" />
        <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-emerald/10 blur-[120px]" />

        <div className="section-shell relative grid items-center gap-14 py-24 lg:grid-cols-[1.15fr_.85fr]">
          <div className="animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1.5 text-xs font-semibold text-emerald">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              Open to Full-Time, Remote & Hybrid Tech Opportunities
            </div>

            <p className="mb-3 font-medium text-blue">Hello, I&apos;m</p>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Alberto
              <br />
              <span className="text-slate-400">Rodriguez.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
              Software Developer focused on building practical, user-centered applications.
            </p>

            <p className="mt-5 max-w-xl text-xl leading-8 text-slate-400">
              Combining leadership experience, technical training, and project work to build tools that improve{" "}
              <span className="text-white">workflows, data visibility, and decision-making.</span>
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-blue px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                View Projects
                <Icon name="arrow" className="h-4 w-4" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/10"
              >
                <Icon name="download" className="h-4 w-4" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="focus-ring inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="animate-rise-delay relative mx-auto w-full max-w-md">
            <div className="card relative p-7 shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Career Transition
                </span>
                <span className="rounded-full bg-emerald/10 px-2.5 py-1 text-xs text-emerald">
                  Dec 2026
                </span>
              </div>

              <div className="relative space-y-6 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-gradient-to-b before:from-emerald before:via-blue before:to-transparent">
                {[
                  ["briefcase", "3+ Years Leadership", "Led teams of 25–28 employees"],
                  ["code", "99 / 120 Credits", "B.S. Computer Science in progress"],
                  ["chart", "3.51 GPA", "Technical growth with strong ownership"],
                ].map(([icon, title, copy]) => (
                  <div key={title} className="relative flex gap-4">
                    <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-panel">
                      <Icon name={icon as IconName} className="h-5 w-5 text-emerald" />
                    </div>
                    <div>
                      <p className="font-display font-semibold">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-2xl border border-blue/20" />
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/[.06] bg-white/[.018] py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <SectionHeading eyebrow="About me" title="Leadership experience with a software development mindset." />

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              I&apos;m a Computer Science student at{" "}
              <span className="font-medium text-white">Southern New Hampshire University</span> with 99 credits
              completed toward my Bachelor&apos;s degree and a 3.51 GPA. My studies have focused on software
              development, databases, operating systems, software testing, mobile development, and systems analysis.
            </p>

            <p>
              Alongside school, I&apos;ve spent more than three years as a{" "}
              <span className="font-medium text-white">Warehouse Team Supervisor at Frito-Lay</span>, leading
              approximately 25–28 employees on third shift. In that role, I track performance trends, support daily
              execution, document operational issues, prepare management recaps, and help drive accountability, safety,
              and process consistency.
            </p>

            <p>
              I&apos;m now focused on transitioning into a technology role where I can combine software development,
              troubleshooting, documentation, data analysis, and leadership experience to build practical solutions for
              real users and real business problems.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-3">
              {[
                ["99", "Credits completed"],
                ["3.51", "Current GPA"],
                ["25–28", "Employees led"],
              ].map(([value, label]) => (
                <div key={label} className="card p-4">
                  <p className="font-display text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 sm:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow="Technical toolkit" title="Skills built for practical problem-solving">
            A developing software toolkit paired with hands-on experience in leadership, process improvement, systems,
            data, documentation, testing, and business operations.
          </SectionHeading>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, i) => (
              <div key={group.title} className="card p-6 transition hover:border-white/20">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      i % 2 ? "bg-emerald/10 text-emerald" : "bg-blue/10 text-blue"
                    }`}
                  >
                    <Icon name={i === 2 ? "database" : i === 3 ? "spark" : "code"} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-semibold">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md bg-white/[.055] px-3 py-2 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-white/[.06] bg-white/[.018] py-24 sm:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow="Selected work" title="Projects that connect software with real problem-solving.">
            Projects and concepts focused on applications, systems, data visibility, automation, mobile-first design,
            and better decision-making.
          </SectionHeading>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 sm:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow="Experience & education" title="Leadership now. Technology next." />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card p-7 sm:p-9">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
                  <Icon name="briefcase" className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue">Professional experience</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">Warehouse Team Supervisor</h3>
                  <p className="mt-1 text-sm text-slate-400">Frito-Lay · Easton, PA · May 2023 – Present</p>
                </div>
              </div>

              <ul className="mt-7 space-y-4 text-sm leading-6 text-slate-400">
                {[
                  "Supervise overnight warehouse operations for approximately 25–28 employees.",
                  "Balance productivity, attendance, safety, quality, and daily execution needs.",
                  "Track performance trends, document operational issues, and prepare professional management recaps.",
                  "Support inventory flow, inbound/outbound execution, labor planning, audit readiness, and process consistency.",
                  "Coach team members, reset expectations when needed, and strengthen communication to improve accountability.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-7 sm:p-9">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                  <Icon name="graduation" className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald">Education</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">B.S. Computer Science</h3>
                  <p className="mt-1 text-sm text-slate-400">Southern New Hampshire University</p>
                </div>
              </div>

              <div className="mt-9 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="text-sm text-slate-400">Expected graduation</span>
                  <span className="font-semibold">December 2026</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="text-sm text-slate-400">Credits completed</span>
                  <span className="font-semibold">99 / 120</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="text-sm text-slate-400">Current GPA</span>
                  <span className="font-semibold text-emerald">3.51</span>
                </div>

                <div className="rounded-xl border border-white/10 bg-ink/40 p-4 text-sm leading-6 text-slate-400">
                  Focused on software development, systems analysis, databases, software testing, mobile development,
                  cybersecurity foundations, client/server development, and building reliable tools for real users.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-8">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-3xl border border-blue/30 bg-gradient-to-r from-blue/20 to-emerald/10 p-8 sm:p-12">
            <div className="absolute -right-14 -top-20 h-64 w-64 rounded-full bg-blue/20 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="eyebrow">Resume</p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  See the full story in one page.
                </h2>
                <p className="mt-3 text-slate-400">
                  Education, leadership experience, technical skills, project work, and career transition focus.
                </p>
              </div>

              <a
                href="/resume.pdf"
                download
                className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              >
                <Icon name="download" className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionHeading eyebrow="Let's connect" title="Ready for my next step in technology.">
              I&apos;m interested in software development, full-stack development, QA/testing, systems analysis, data
              analysis, IT, and remote or hybrid technology opportunities.
            </SectionHeading>

            <div className="mt-8 space-y-4">
              {[
                ["mail", "Email", "alberto.r97@outlook.com", "mailto:alberto.r97@outlook.com"],
                ["github", "GitHub", "github.com/arod0210-CS", "https://github.com/arod0210-CS"],
                [
                  "linkedin",
                  "LinkedIn",
                  "linkedin.com/in/alberto-rodriguez-283974344",
                  "https://www.linkedin.com/in/alberto-rodriguez-283974344",
                ],
              ].map(([icon, label, text, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="focus-ring group flex items-center gap-4 rounded-xl p-2 transition hover:bg-white/[.03]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition group-hover:border-emerald/30 group-hover:text-emerald">
                    <Icon name={icon as IconName} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">{label}</span>
                    <span className="text-sm text-slate-300">{text}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm text-slate-500">
            Built by <span className="text-slate-300">Alberto Rodriguez</span> · © 2026
          </p>

          <div className="flex gap-4">
            {[
              ["github", "https://github.com/arod0210-CS"],
              ["linkedin", "https://www.linkedin.com/in/alberto-rodriguez-283974344"],
              ["mail", "mailto:alberto.r97@outlook.com"],
            ].map(([icon, href]) => (
              <a
                key={icon}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={icon}
                className="focus-ring p-2 text-slate-500 transition hover:text-emerald"
              >
                <Icon name={icon as IconName} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}