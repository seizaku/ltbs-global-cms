import { sanityFetch } from "@/sanity/lib/client";
import { Navbar } from "@/components/layouts/Nav";
import { Footer } from "@/components/layouts/Footer";
import Article from "@/components/layouts/Article";
import Error from "@/components/Error";
import { redirect } from "next/navigation";
import Hero from "@/components/layouts/Hero";
import { urlFor } from "@/sanity/lib/image";

interface DynamicPage {
  params: { slug: string };
}

export default async function DynamicPage({ params: { slug } }: DynamicPage) {
  const PAGE_QUERY = `*[_type == "page" && slug.current == "${slug}"][0]  {
    _id,
    title,
    slug,
    imageOnly,
    hideWidgets,
    _createdAt,
    mainImage,
    body,
    categories[]-> {
      _id,
      title
    }
  }`;

  const page = await sanityFetch<any>({ query: PAGE_QUERY });
  console.log(page);
  if (!page) {
    return <Error />;
  }

  return (
    <>
      <Navbar />
      <main className="py-12 mt-24 container max-w-4xl mx-auto min-h-[150vh]">
        {!!page.mainImage?.asset?._ref && (
          <Hero
            title={page.title}
            src={urlFor(page.mainImage.asset._ref).url()}
            alt={page.title}
            date={page._createdAt}
            imageOnly={page.imageOnly}
          />
        )}

        <Article
          article={page.body}
          tableOfContents
          hideWidgets={page.hideWidgets}
        />
      </main>
      <Footer />
    </>
  );
}
