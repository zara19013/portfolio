
import ProjectCard from './components/ProjectCard';

interface Project {
  title: string;
  description: string;
  tools: string;
}

export default function App() {
  const projects: Project[] = [
    { title: 'Sales Performance Dashboard', description: 'Interactive dashboard analyzing revenue trends, KPIs, and regional performance.', tools: 'Power BI, SQL, Excel' },
    { title: 'Admin Data Monitoring System', description: 'Optimized reporting and data tracking system for structured monitoring and insights.', tools: 'Ruby on Rails, SQL' },
    { title: 'SnapSheet (Claim Insurance)', description: 'Enhanced reporting, dashboards, backend performance, and test coverage for insurance claims workflows.', tools: 'Ruby on Rails, JavaScript, ActiveAdmin' },
    { title: 'World Coin Recognition Model', description: 'Classified coins from 32 countries using Python, OpenCV, and YOLOv5.', tools: 'Python, OpenCV, YOLOv5' },
    { title: 'AI Book Summarizer App', description: 'Built an AI-powered app for summarizing books efficiently and accurately.', tools: 'React, Flask, OpenAI API' },
    { title: 'Country Data Platform', description: 'API-driven system with filtering and interactive views for country-level analytics.', tools: 'React, APIs' }
  ];

  const skills = [
    'Power BI',
    'Python',
    'SQL',
    'Ruby on Rails',
    'JavaScript',
    'TypeScript',
    'React',
    'AWS',
    'Tailwind CSS',
    'ActiveAdmin',
    'Flask',
    'OpenCV'
  ];
  const highlights = [
    {
      title: 'Product Thinking',
      description: 'I design practical workflows that make products easier to use and maintain.',
      accent: 'from-[#ffd983] to-[#ffc26a]'
    },
    {
      title: 'Data + AI',
      description: 'I build useful AI features and clean data pipelines that support real decisions.',
      accent: 'from-[#e8b8ff] to-[#d4a3ff]'
    },
    {
      title: 'BI Reporting',
      description: 'I turn raw datasets into executive dashboards with KPIs, trends, and actionable insights.',
      accent: 'from-[#c2f6a0] to-[#9fe170]'
    },
    {
      title: 'Full Stack Delivery',
      description: 'From backend APIs to polished frontend screens, I ship complete solutions.',
      accent: 'from-[#b3e9ff] to-[#95dfff]'
    }
  ];

  const biFocus = [
    'Create KPI dashboards for revenue, operations, and growth tracking.',
    'Build SQL-based data models and automated weekly/monthly reporting workflows.',
    'Design drill-down visuals so teams can move from summary to detailed insights quickly.',
    'Translate business questions into clear metrics that support faster decisions.'
  ];

  const biStats = [
    { label: 'Dashboards Built', value: '20+' },
    { label: 'KPI Metrics Tracked', value: '60+' },
    { label: 'Automated Reports', value: '35+' },
    { label: 'Avg Reporting Time Saved', value: '45%' }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4eef6] text-slate-700">
      <div className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-[#deb5ff]/45 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-20 h-56 w-56 rounded-full bg-[#ffd87e]/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-[40%] h-64 w-64 rounded-full bg-[#b9e8ff]/35 blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/90 bg-gradient-to-r from-white to-[#f5edff] px-4 py-2.5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#7a4cb2] to-[#2f7cb7] text-sm font-extrabold text-white">
              ZN
            </div>
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-slate-900">Zara Noor</p>
              <p className="-mt-0.5 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Portfolio</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/90 bg-white/90 p-2 text-lg font-semibold text-slate-600 shadow-sm">
            <a href="#about" className="rounded-xl px-3.5 py-2 transition hover:-translate-y-0.5 hover:bg-[#f3e9ff] hover:text-slate-900">About</a>
            <a href="#skills" className="rounded-xl px-3.5 py-2 transition hover:-translate-y-0.5 hover:bg-[#f3e9ff] hover:text-slate-900">Skills</a>
            <a href="#projects" className="rounded-xl px-3.5 py-2 transition hover:-translate-y-0.5 hover:bg-[#f3e9ff] hover:text-slate-900">Projects</a>
            <a href="#contact" className="rounded-xl px-3.5 py-2 transition hover:-translate-y-0.5 hover:bg-[#f3e9ff] hover:text-slate-900">Contact</a>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-14">
        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-10 shadow-[0_24px_80px_-45px_rgba(15,23,42,0.55)]">
          <p className="mb-4 inline-block rounded-full border border-white/80 bg-gradient-to-r from-[#efe2ff] to-[#e6f4ff] px-5 py-1.5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#6f47a0] shadow-sm">
            Full Stack + BI Developer
          </p>
          <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Building <span className="bg-gradient-to-r from-[#7a4cb2] to-[#2f7cb7] bg-clip-text text-transparent">data-driven products</span> that solve real business problems.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            I design and deliver modern web apps, BI dashboards, and scalable backend systems with a focus on performance and usability.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">Web Applications</span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">BI Dashboards</span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">Scalable Backends</span>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[2rem] border border-white/70 bg-white/55 p-10 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.5)]">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.24em] text-[#6f47a0]">Profile</p>
          <h2 className="mb-6 text-center text-5xl font-bold text-slate-800">About Me</h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#d4a7ff] to-[#9dd3ff]" />
          <p className="mx-auto max-w-4xl text-center text-xl leading-relaxed text-slate-600">
            Computer Engineer with expertise in full-stack development and AI-driven applications, passionate about building
            innovative solutions that solve real-world problems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="group rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <div className={`mb-4 h-2 w-20 rounded-full bg-gradient-to-r ${item.accent}`} />
              <h3 className="mb-3 text-2xl font-bold text-slate-800">{item.title}</h3>
              <p className="text-lg leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="bi" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[2rem] border border-white/70 bg-white/65 p-10 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.55)]">
          <h2 className="mb-3 text-center text-5xl font-bold text-slate-800">BI Developer Focus</h2>
          <p className="mx-auto mb-8 max-w-4xl text-center text-xl leading-relaxed text-slate-600">
            I specialize in business intelligence solutions that combine clean data, smart metrics, and visual storytelling.
          </p>
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {biStats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-white/80 bg-gradient-to-br from-white to-[#f8f4ff] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
                <p className="mt-3 text-3xl font-extrabold text-slate-800">{stat.value}</p>
              </article>
            ))}
          </div>
          <div className="mb-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/80 bg-[#f8f4ff] p-6 shadow-sm lg:col-span-2">
              <h3 className="mb-4 text-xl font-bold text-slate-800">Executive Scorecard Snapshot</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/90 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Revenue Growth</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-800">+18.4%</p>
                  <p className="mt-1 text-xs text-emerald-600">vs last quarter</p>
                </div>
                <div className="rounded-2xl bg-white/90 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Claim Cycle Time</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-800">-26%</p>
                  <p className="mt-1 text-xs text-emerald-600">process optimization</p>
                </div>
                <div className="rounded-2xl bg-white/90 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Data Accuracy</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-800">98.1%</p>
                  <p className="mt-1 text-xs text-emerald-600">validated pipeline</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-white/80 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-600">Operational Signals</p>
                <div className="grid grid-cols-6 gap-2">
                  <span className="h-8 rounded bg-[#d4a7ff]" />
                  <span className="h-8 rounded bg-[#c9b0ff]" />
                  <span className="h-8 rounded bg-[#bdb9ff]" />
                  <span className="h-8 rounded bg-[#aec6ff]" />
                  <span className="h-8 rounded bg-[#9dd3ff]" />
                  <span className="h-8 rounded bg-[#7be8d8]" />
                </div>
              </div>
            </article>
            <article className="rounded-3xl border border-white/80 bg-[#fff8ea] p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-slate-800">BI Workflow</h3>
              <div className="space-y-3">
                <div className="rounded-xl bg-white/90 p-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:shadow-md">1. Extract + Validate Data</div>
                <div className="rounded-xl bg-white/90 p-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:shadow-md">2. Model KPIs in SQL</div>
                <div className="rounded-xl bg-white/90 p-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:shadow-md">3. Build Dashboard Views</div>
                <div className="rounded-xl bg-white/90 p-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:shadow-md">4. Automate Reports + Alerts</div>
              </div>
            </article>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {biFocus.map((point) => (
              <div key={point} className="rounded-2xl bg-[#f8f4ff] px-5 py-4 text-lg text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/70 bg-white/55 px-8 py-10 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.55)]">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.24em] text-[#6f47a0]">Toolkit</p>
        <h2 className="mb-4 text-center text-5xl font-bold text-slate-800">Skills</h2>
        <div className="mx-auto mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-[#d4a7ff] to-[#9dd3ff]" />
        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="rounded-full bg-gradient-to-r from-[#d4a7ff] via-[#dbb4ff] to-[#f0c850] px-6 py-2 text-base font-semibold text-white shadow-[0_8px_16px_-10px_rgba(0,0,0,0.4)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 pb-28 pt-14">
        <div className="rounded-[2rem] border border-white/70 bg-white/55 px-8 py-10 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.55)]">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.24em] text-[#6f47a0]">Portfolio</p>
        <h2 className="mb-4 text-center text-5xl font-bold text-slate-800">Projects</h2>
        <div className="mx-auto mb-14 h-1 w-24 rounded-full bg-gradient-to-r from-[#d4a7ff] to-[#9dd3ff]" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white/80 via-[#f7f0ff]/80 to-[#eef8ff]/85 p-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.6)]">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d9b0ff]/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-20 h-52 w-52 rounded-full bg-[#9ee8db]/25 blur-3xl" />

          <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.24em] text-[#6f47a0]">Connect</p>
          <h2 className="mb-3 text-center text-5xl font-bold text-slate-800">Contact</h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#d4a7ff] to-[#9dd3ff]" />
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-slate-600">
            Open to full-stack and BI opportunities. Reach out for collaborations, freelance work, or full-time roles.
          </p>

          <div className="mb-6 grid gap-5 md:grid-cols-3">
            <a href="mailto:zaran9907@gmail.com" className="group rounded-2xl border border-white/90 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <p className="inline-block rounded-full bg-[#f1e4ff] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#7e4db3]">Email</p>
              <p className="mt-3 text-lg font-bold text-slate-800 break-all group-hover:text-[#6c3fa5]">zaran9907@gmail.com</p>
              <p className="mt-2 text-sm text-slate-500">Best for detailed discussion</p>
              <p className="mt-3 inline-block rounded-full bg-[#f1e4ff] px-3 py-1 text-xs font-semibold text-[#7e4db3] opacity-0 transition group-hover:opacity-100">Click to open mail</p>
            </a>
            <a href="tel:+923215119333" className="group rounded-2xl border border-white/90 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <p className="inline-block rounded-full bg-[#fff0d0] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#b07a0d]">Phone</p>
              <p className="mt-3 text-lg font-bold text-slate-800 group-hover:text-[#8f6510]">+92 321 511 9333</p>
              <p className="mt-2 text-sm text-slate-500">Quick call for urgent queries</p>
              <p className="mt-3 inline-block rounded-full bg-[#fff0d0] px-3 py-1 text-xs font-semibold text-[#b07a0d] opacity-0 transition group-hover:opacity-100">Click to call now</p>
            </a>
            <a href="https://www.linkedin.com/in/zara-n-b0360a1b4/" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/90 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <p className="inline-block rounded-full bg-[#dff1ff] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1f6fa6]">LinkedIn</p>
              <p className="mt-3 text-lg font-bold text-slate-800 group-hover:text-[#195c8a]">Zara Noor Profile</p>
              <p className="mt-2 text-sm text-slate-500">Professional updates and work history</p>
              <p className="mt-3 inline-block rounded-full bg-[#dff1ff] px-3 py-1 text-xs font-semibold text-[#1f6fa6] opacity-0 transition group-hover:opacity-100">Click to view profile</p>
            </a>
          </div>

          <div className="rounded-2xl border border-white/90 bg-white/70 px-6 py-4 text-center text-sm font-semibold tracking-wide text-slate-600">
            Available for remote and on-site roles in Full Stack and BI Development
          </div>
        </div>
      </section>
    </div>
  );
}
