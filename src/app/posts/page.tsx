import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Nav";
import { ArchiveSection } from "@/components/layouts/Archive";

export default function Posts() {
  return (
    <>
      <Navbar />
      <main className="py-12 mt-24 container max-w-5xl min-h-[150vh]">
        <ArchiveSection
          archiveURL="/posts"
          type="post"
          title="News & Events"
          description="Stay updated with the latest news and upcoming events. Explore how you can be involved and make a difference in our community."
        />
      </main>
      <Footer />
    </>
  );
}
