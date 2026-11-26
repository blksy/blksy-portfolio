import Button from "./components/ui/Button";
import GamingPanel from "./components/ui/GamingPanel";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <span className="font-mono text-secondary">
        &gt; System initialized...
      </span>

      <h1 className="font-pixel text-3xl text-primary">BLKSY_</h1>

      <p className="mb-12 text-center font-mono text-secondary">
        Gaming Panel Component Preview
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <GamingPanel variant="purple" glow hoverable>
          <h2 className="mb-4 text-xl">About Me</h2>

          <p className="text-muted">
            Developer, gamer and technology enthusiast.
          </p>
        </GamingPanel>

        <GamingPanel variant="cyan" glow hoverable>
          <h2 className="mb-4 text-xl">Tech Stack</h2>

          <p className="text-muted">Python, Django, React and TypeScript.</p>
        </GamingPanel>

        <GamingPanel variant="gold" glow hoverable>
          <h2 className="mb-4 text-xl">Projects</h2>

          <p className="mb-6 text-muted">Explore my latest projects.</p>

          <Button size="sm">View Projects</Button>
        </GamingPanel>
      </div>
    </main>
  );
}

export default App;
