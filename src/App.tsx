function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <span className="font-mono text-secondary">
        &gt; System initialized...
      </span>

      <h1 className="font-pixel text-3xl text-primary">BLKSY_</h1>

      <p className="text-muted">Developer Portfolio</p>

      <button className="rounded-md border border-primary bg-surface px-6 py-3 shadow-neon transition-colors hover:bg-primary">
        Start Game
      </button>
    </main>
  );
}

export default App;
