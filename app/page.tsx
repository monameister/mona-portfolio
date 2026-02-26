export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white p-4 md:p-8">
      <div className="mx-auto max-w-[1366px]">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-sm text-gray-300">Pixel-perfect Figma pass (Desktop 1366)</h1>
          <a
            href="/figma-home/index.html"
            target="_blank"
            className="text-sm text-[#C778DD] hover:underline"
            rel="noreferrer"
          >
            Open raw render
          </a>
        </div>

        <iframe
          src="/figma-home/index.html"
          title="Figma Home"
          className="h-[3192px] w-full rounded border border-[#2a355f] bg-[#282c33]"
        />
      </div>
    </main>
  );
}
