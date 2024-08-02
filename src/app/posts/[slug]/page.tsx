"use server";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Image } from "@/components/layouts/Image";
import { Post } from "@/types/post";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import moment from "moment";
import { Navbar } from "@/components/layouts/Nav";
import { blocksToHTML } from "@/sanity/lib/blocks";
import { Footer } from "@/components/layouts/Footer";
import TableOfContents from "@/components/TableOfContents";
import { getTableOfContents } from "@/lib/toc";
import Article from "@/components/layouts/Article";
import Error from "@/components/Error";

interface SinglePost {
  params: { slug: string };
}

export default async function SinglePost({ params: { slug } }: SinglePost) {
  const POST_QUERY = `*[_type == "post" && slug.current == "${slug}"][0]  {
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

  const post = await sanityFetch<Post>({ query: POST_QUERY });

  if (!post) {
    return <Error />;
  }

  return (
    <>
      <Navbar />
      <main className="py-12 mt-24 container max-w-5xl min-h-[150vh]">
        <Link href={"../"} className={buttonVariants({ variant: "ghost" })}>
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Back
        </Link>
        <section className="mx-auto py-12 mb-8 text-center flex flex-col items-center justify-center gap-4">
          {post.categories?.map((category) => (
            <Badge
              key={category._id}
              className="p-1 px-4 rounded-full text-sm text-muted-foreground"
              variant={"secondary"}
            >
              {category.title}
            </Badge>
          ))}
          <h1 className="text-xl sm:text-4xl max-w-4xl font-medium">
            {post.title}
          </h1>
          <p className="text-muted-foreground font-medium">
            {moment(post._createdAt).format("LL - LT")}
          </p>
        </section>
        <Image
          ratio={16 / 8}
          src={urlFor(post.mainImage.asset._ref).url()}
          alt={post.mainImage.asset._ref}
        />
        <Article article={post.body} tableOfContents />
      </main>
      <Footer />
    </>
  );
}
