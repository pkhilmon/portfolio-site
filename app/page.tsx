import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SECTION_IDS } from "@/lib/constants";

export default function Home() {

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8">
      {Object.entries(SECTION_IDS).map(([key, id]) => (
        <div key={key}>
          <Separator className="my-4" />
          <section id={`${id}`} className={cn("capitalize min-h-screen scroll-mt-nav")}>
            {id}
          </section>
        </div>
      ))}
    </main>
  );
}
