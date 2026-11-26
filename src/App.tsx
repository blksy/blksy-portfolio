import { UserRound, Code2, FolderCode } from "lucide-react";

import Button from "./components/ui/Button";
import GamingPanel from "./components/ui/GamingPanel";
import SectionHeading from "./components/ui/SectionHeading";

function App() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-12 px-6 py-16">
      <section>
        <SectionHeading
          index="01"
          label="Player Profile"
          title="About Me"
          icon={UserRound}
          description="Developer. Gamer. Technology enthusiast."
        />

        <GamingPanel variant="purple" glow>
          <p className="text-muted">Welcome to my developer portfolio.</p>
        </GamingPanel>
      </section>

      <section>
        <SectionHeading
          index="02"
          label="Inventory"
          title="Tech Stack"
          icon={Code2}
          variant="cyan"
        />

        <GamingPanel variant="cyan" glow>
          <p className="text-muted">Python, Django, React and TypeScript.</p>
        </GamingPanel>
      </section>

      <section>
        <SectionHeading
          index="03"
          label="Quest Log"
          title="Featured Projects"
          icon={FolderCode}
          variant="gold"
        />

        <GamingPanel variant="gold" glow hoverable>
          <h3 className="mb-3 text-xl font-semibold">Artiva</h3>

          <p className="mb-5 text-muted">
            A booking platform for beauty and tattoo professionals.
          </p>

          <Button size="sm">View Project</Button>
        </GamingPanel>
      </section>
    </main>
  );
}

export default App;
