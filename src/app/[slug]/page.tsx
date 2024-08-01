"use server";
import { sanityFetch } from "@/sanity/lib/client";
import { Navbar } from "@/components/layouts/Nav";
import { Footer } from "@/components/layouts/Footer";
import Article from "@/components/layouts/Article";

interface DynamicPage {
  params: { slug: string };
}

export default async function DynamicPage({ params: { slug } }: DynamicPage) {
  const PAGE_QUERY = `*[_type == "page" && slug.current == "${slug}"][0]  {
    _id,
    title,
    slug,
    _createdAt,
    mainImage,
    body,
    categories[]-> {
      _id,
      title
    }
  }`;

  const page = await sanityFetch<any>({ query: PAGE_QUERY });

  return (
    <>
      <Navbar />
      <main className="py-12 mt-24 container max-w-4xl mx-auto min-h-[150vh]">
        <pre>{JSON.stringify(page.body, null, 4)}</pre>
        <Article article={page.body} tableOfContents />
      </main>
      <Footer />
    </>
  );
}
