import { Gamepad2, Mail, ArrowRight } from "lucide-react";
import Button from "./components/ui/Button";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <span className="font-mono text-secondary">
        &gt; System initialized...
      </span>

      <h1 className="font-pixel text-3xl text-primary">BLKSY_</h1>

      <p className="text-muted">Developer Portfolio</p>

      <p className="font-mono text-secondary">Button Component Preview</p>

      <Button variant="primary" size="lg">
        <Gamepad2 size={20} />
        Explore Projects
        <ArrowRight size={20} />
      </Button>

      <Button variant="secondary">
        <Mail size={20} />
        Get in Touch
      </Button>

      <Button variant="ghost">View GitHub</Button>

      <Button disabled>Unavailable</Button>

      <Button onClick={() => console.log("Achievement unlocked!")}>
        Test Click
      </Button>
    </main>
  );
}

export default App;
