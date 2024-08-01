import { ArchiveSection } from "@/components/layouts/Archive";
import CTASection from "@/components/layouts/CTA";
import { Footer } from "@/components/layouts/Footer";
import { Image } from "@/components/layouts/Image";
import { Navbar } from "@/components/layouts/Nav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="py-24 container max-w-5xl min-h-[150vh]">
        <Image alt="hero-1" className="mt-4" />
        <CTASection
          title="Join Our Bible Study Community"
          description="Explore our Bible study catalog and register for free with just your
            name and email. Discover answers and find peace as you start to
            comprehend God&lsquo;s plan for your life."
          ctaText="Start a Bible Study"
          href="/study-the-bible"
        />
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
