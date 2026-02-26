import Image from "next/image";

const projects = [
  {
    title: "SheillaBot Ops",
    problem: "Managing operations across multiple channels was manual and fragmented.",
    solution: "Built an AI co-pilot workflow with Discord/Telegram/WhatsApp + Notion/GitHub automations.",
    result: "Faster execution, fewer missed tasks, and cleaner daily operations.",
    stack: "OpenClaw, Python, Notion API, GitHub",
    live: "#",
    repo: "https://github.com/monameister/SheillaBot",
  },
  {
    title: "Cleaning Schedule Automation",
    problem: "Weekly planning updates were error-prone and repetitive.",
    solution: "Created structured sync flows with safe row-preserving updates and reminders.",
    result: "Reduced manual edits and improved schedule consistency.",
    stack: "Google Sheets API, Python, Automation scripts",
    live: "#",
    repo: "#",
  },
  {
    title: "Personal Health Insights Pipeline",
    problem: "Health exports were hard to read and compare over time.",
    solution: "Built scripts to parse and visualize trends for sleep and heart metrics.",
    result: "Clear weekly signals and easier decision-making.",
    stack: "Python, data processing, dashboards",
    live: "#",
    repo: "#",
  },
];

const services = [
  {
    title: "Web Design",
    text: "User-centered interface design focused on clarity, conversion, and clean visual systems.",
  },
  {
    title: "Frontend Development",
    text: "Responsive websites and product interfaces built with maintainable, scalable code.",
  },
  {
    title: "AI & Automation",
    text: "Practical automations that remove repetitive work and increase delivery speed.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#282C33] text-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="font-semibold">◻ Mona</div>
        <nav className="flex gap-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-[#C778DD]">#home</a>
          <a href="#projects" className="hover:text-[#C778DD]">#works</a>
          <a href="#services" className="hover:text-[#C778DD]">#services</a>
          <a href="#about" className="hover:text-[#C778DD]">#about-me</a>
          <a href="#contact" className="hover:text-[#C778DD]">#contacts</a>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-2">
        <div>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-[46px]">
            Mona is a web designer and front-end developer
          </h1>
          <p className="mt-8 max-w-xl text-base text-gray-300">
            I build practical digital products that combine UX clarity, frontend quality, and automation power.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="inline-block border border-[#C778DD] px-5 py-2 font-medium transition hover:bg-[#C778DD]/10"
            >
              Work with me
            </a>
            <a
              href="#projects"
              className="inline-block border border-[#3A404A] px-5 py-2 font-medium text-gray-200 transition hover:bg-white/5"
            >
              View projects
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-start">
          <div className="relative w-full max-w-[500px]">
            <div className="absolute left-4 top-20 h-[84px] w-[84px] border-[16px] border-white/90 border-r-transparent border-b-transparent" />
            <Image src="/hero.png" alt="Mona hero" width={500} height={386} className="relative z-10 h-auto w-full" priority />
            <Image src="/dots.png" alt="decorative dots" width={84} height={84} className="absolute bottom-10 right-2 z-20 opacity-90" />
          </div>
          <div className="mt-2 inline-flex items-center gap-2 border border-gray-500 px-3 py-1 text-sm text-gray-300">
            <span className="h-3 w-3 bg-[#C778DD]" />
            Currently working on Portfolio
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-semibold"><span className="text-[#C778DD]">#</span>projects</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded border border-[#3A404A] bg-[#23272E] p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm text-gray-300"><strong>Problem:</strong> {project.problem}</p>
              <p className="mt-2 text-sm text-gray-300"><strong>Solution:</strong> {project.solution}</p>
              <p className="mt-2 text-sm text-gray-300"><strong>Result:</strong> {project.result}</p>
              <p className="mt-3 text-xs text-gray-400">{project.stack}</p>
              <div className="mt-3 flex gap-3 text-sm">
                <a className="text-[#C778DD] hover:underline" href={project.live}>Live</a>
                <a className="text-[#C778DD] hover:underline" href={project.repo}>GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-semibold"><span className="text-[#C778DD]">#</span>services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded border border-[#3A404A] bg-[#23272E] p-4">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-semibold"><span className="text-[#C778DD]">#</span>about-me</h2>
        <p className="mt-4 max-w-3xl text-gray-300">
          I combine UX/UI thinking, frontend execution, and AI workflow automation to ship practical solutions fast.
          My process: Discover → Build → Iterate → Ship.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-semibold"><span className="text-[#C778DD]">#</span>proof</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded border border-[#3A404A] bg-[#23272E] p-4"><p className="text-3xl font-bold text-[#C778DD]">10+</p><p className="text-sm text-gray-300">Automation workflows shipped</p></div>
          <div className="rounded border border-[#3A404A] bg-[#23272E] p-4"><p className="text-3xl font-bold text-[#C778DD]">3</p><p className="text-sm text-gray-300">Production channels integrated</p></div>
          <div className="rounded border border-[#3A404A] bg-[#23272E] p-4"><p className="text-3xl font-bold text-[#C778DD]">∞</p><p className="text-sm text-gray-300">Builder mindset, always improving</p></div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold"><span className="text-[#C778DD]">#</span>contacts</h2>
        <p className="mt-4 text-gray-300">Let’s build something useful and ship it fast.</p>
        <p className="mt-2 text-gray-300">Email: hello@mona.dev • GitHub: github.com/monameister</p>
      </section>
    </main>
  );
}
