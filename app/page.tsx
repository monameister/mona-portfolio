import Image from "next/image";

const projects = [
  {
    title: "SheillaBot Ops",
    description:
      "Cross-channel AI workflows across Discord, Telegram, WhatsApp, Notion, and GitHub.",
  },
  {
    title: "Cleaning Schedule Automation",
    description:
      "Reliable schedule sync with safer row-preserving updates and reminder logic.",
  },
  {
    title: "Health Insights Pipeline",
    description:
      "Data parsing and trend dashboards for sleep, heart-rate, and daily performance.",
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
            She crafts responsive websites where technologies meet creativity
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block border border-[#C778DD] px-5 py-2 font-medium transition hover:bg-[#C778DD]/10"
          >
            Contact me!!
          </a>
        </div>

        <div className="relative flex flex-col items-start">
          <div className="relative w-full max-w-[500px]">
            <div className="absolute left-4 top-20 h-[84px] w-[84px] border-[16px] border-white/90 border-r-transparent border-b-transparent" />

            <Image
              src="/hero.png"
              alt="Mona hero"
              width={500}
              height={386}
              className="relative z-10 h-auto w-full"
              priority
            />

            <Image
              src="/dots.png"
              alt="decorative dots"
              width={84}
              height={84}
              className="absolute bottom-10 right-2 z-20 opacity-90"
            />
          </div>

          <div className="mt-2 inline-flex items-center gap-2 border border-gray-500 px-3 py-1 text-sm text-gray-300">
            <span className="h-3 w-3 bg-[#C778DD]" />
            Currently working on Portfolio
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-semibold"><span className="text-[#C778DD]">#</span>about-me</h2>
        <p className="mt-4 max-w-3xl text-gray-300">
          I build user-centered digital products with strong UX thinking and robust engineering foundations. My focus is practical progress and reusable systems.
        </p>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-2xl font-semibold"><span className="text-[#C778DD]">#</span>projects</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded border border-[#3A404A] bg-[#23272E] p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-semibold"><span className="text-[#C778DD]">#</span>contacts</h2>
        <p className="mt-4 text-gray-300">Email: hello@mona.dev • GitHub: github.com/monameister</p>
      </section>
    </main>
  );
}
